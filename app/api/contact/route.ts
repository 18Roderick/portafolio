import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { env } from "@/lib/env";
import { contactSchema } from "@/lib/validations/contact";

let _resend: Resend | null = null;
let _ratelimit: Ratelimit | null = null;

function getResend() {
  if (!_resend) _resend = new Resend(env.RESEND_API_KEY);
  return _resend;
}

function getRatelimit() {
  if (!_ratelimit) {
    _ratelimit = new Ratelimit({
      redis: new Redis({
        url: env.UPSTASH_REDIS_REST_URL,
        token: env.UPSTASH_REDIS_REST_TOKEN,
      }),
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      analytics: true,
      prefix: "portfolio:contact",
    });
  }
  return _ratelimit;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "anonymous";

    const { success, remaining, reset } = await getRatelimit().limit(ip);

    if (!success) {
      const retryAfter = Math.ceil((reset - Date.now()) / 1000);
      return NextResponse.json(
        {
          success: false,
          message: "Demasiados intentos. Intenta de nuevo más tarde.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Remaining": String(remaining),
          },
        }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Datos inválidos";
      return NextResponse.json(
        { success: false, message: firstError },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const { error } = await getResend().emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — Portfolio`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0812; color: #f1f5f9; padding: 40px; border-radius: 16px;">
          <div style="border-bottom: 2px solid #833cf6; padding-bottom: 20px; margin-bottom: 24px;">
            <h1 style="color: #833cf6; margin: 0; font-size: 24px;">Nuevo mensaje de contacto</h1>
          </div>
          <div style="margin-bottom: 24px;">
            <p style="color: #94a3b8; font-size: 14px; margin: 0 0 4px;">Nombre</p>
            <p style="color: #f1f5f9; font-size: 16px; margin: 0; font-weight: 600;">${escapeHtml(name)}</p>
          </div>
          <div style="margin-bottom: 24px;">
            <p style="color: #94a3b8; font-size: 14px; margin: 0 0 4px;">Email</p>
            <p style="color: #f1f5f9; font-size: 16px; margin: 0;">
              <a href="mailto:${escapeHtml(email)}" style="color: #833cf6; text-decoration: none;">${escapeHtml(email)}</a>
            </p>
          </div>
          <div style="background: #111118; padding: 20px; border-radius: 12px; border: 1px solid #1e1e2e;">
            <p style="color: #94a3b8; font-size: 14px; margin: 0 0 8px;">Mensaje</p>
            <p style="color: #f1f5f9; font-size: 15px; margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #1e1e2e;">
            <p style="color: #62748e; font-size: 12px; margin: 0;">Enviado desde el formulario de contacto del Portfolio</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Error al enviar el mensaje. Intenta de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      {
        status: 200,
        headers: { "X-RateLimit-Remaining": String(remaining) },
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
