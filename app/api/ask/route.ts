import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { z } from "zod";
import { env } from "@/lib/env";
import { ASSISTANT_SYSTEM_PROMPT } from "@/lib/ai/context";

const askSchema = z.object({
  question: z
    .string()
    .trim()
    .min(5, "La pregunta es muy corta")
    .max(300, "La pregunta no puede superar los 300 caracteres"),
});

let _ratelimit: Ratelimit | null = null;

function getRatelimit() {
  if (!_ratelimit) {
    _ratelimit = new Ratelimit({
      redis: new Redis({
        url: env.UPSTASH_REDIS_REST_URL,
        token: env.UPSTASH_REDIS_REST_TOKEN,
      }),
      limiter: Ratelimit.slidingWindow(10, "1 h"),
      prefix: "portfolio:ask",
    });
  }
  return _ratelimit;
}

export async function POST(request: NextRequest) {
  if (!env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { success: false, message: "El asistente no está disponible por ahora." },
      { status: 503 }
    );
  }

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "anonymous";

    const { success } = await getRatelimit().limit(ip);
    if (!success) {
      return NextResponse.json(
        { success: false, message: "Demasiadas preguntas. Intenta más tarde." },
        { status: 429 }
      );
    }

    const parsed = askSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Datos inválidos",
        },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-5-5",
        max_tokens: 400,
        system: ASSISTANT_SYSTEM_PROMPT,
        messages: [{ role: "user", content: parsed.data.question }],
      }),
    });

    if (!res.ok) {
      console.error("Anthropic error:", res.status, await res.text());
      return NextResponse.json(
        { success: false, message: "No pude generar una respuesta." },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      content: { type: string; text?: string }[];
    };
    const answer = data.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");

    return NextResponse.json({ success: true, answer });
  } catch (error) {
    console.error("Ask API error:", error);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
