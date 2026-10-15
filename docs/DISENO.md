# Dirección de diseño

## Concepto
Estética de panel técnico: sistemática, medida y precisa. El diseño comunica
rigor con la forma (rejillas, numeración, tipografía mono, un solo acento) y no
con textos sobre la personalidad del autor. El contenido es solo profesional.

## Sistema visual
- **Paleta:** fondo grafito `#0c0d11`, superficies `#11131a`, bordes finos
  blancos al 10 %, un único acento lima `#c8f25a` (token `--color-primary`).
  Sobre el acento se usa texto oscuro (`text-background-dark`).
- **Tipografía:** Bricolage Grotesque (títulos), Instrument Sans (texto) e IBM
  Plex Mono (etiquetas, numeración, terminal). Cargadas con `next/font`.
- **Layout:** secciones en columna centrada (`max-w-7xl`), tarjetas con borde
  fino y numeración `01 / 02 / 03`.

## Movimiento
- **Hero:** red animada "problema → sistema" (`HeroNetwork`, CSS puro), rejilla
  técnica y un brillo que sigue al cursor (`HeroBackground`).
- **Secciones:** entradas con `whileInView` (framer-motion) y escalonado entre
  tarjetas.
- **Asistente IA:** estados "pensando…" → "escribiendo…" y respuesta con efecto
  de escritura.
- **Accesibilidad:** `MotionProvider` aplica `reducedMotion="user"` a
  framer-motion y las animaciones CSS se declaran bajo
  `prefers-reduced-motion: no-preference`.

## Secciones
Hero · Sobre mí · Qué hago · Experiencia · Stack · Proyectos · Laboratorio IA ·
Contacto.

## IA
- `POST /api/ask`: recibe una pregunta y responde solo con base en
  `lib/ai/context.ts` (generado desde `data/`). Si no sabe, lo dice.
- Rate limit de 10 preguntas por hora por IP (Upstash). Se desactiva solo si
  falta `ANTHROPIC_API_KEY`.

## Pendiente
- Casos de estudio por proyecto con formato problema → solución → resultado.
- Configurar `ANTHROPIC_API_KEY` en el hosting.
- Enlaces reales de LinkedIn y GitHub en el footer.
- Versión en inglés.
