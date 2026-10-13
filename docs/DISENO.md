# Propuesta de diseño: "El optimizador autodidacta"

## Idea central
El portafolio no solo enumera tecnologías: **muestra cómo piensa su autor**. Cada sección responde a un rasgo del perfil.

| Rasgo | Cómo se refleja en la web |
|---|---|
| Analítico y escéptico | Copy con evidencia y tono directo, sin adjetivos vacíos. Etiquetas mono tipo "hipótesis → resultado". |
| Mentalidad de ingeniero | Sección **Cómo pienso**: el proceso detectar → descomponer → cuestionar → criterio propio, como un pipeline. |
| Pragmático / coste-beneficio | Principios visibles ("suficientemente bueno", "medir antes de optimizar"). |
| Independiente y autodidacta | Énfasis en entender los fundamentos, no solo usar herramientas. |
| Optimizador | Estética de "panel técnico": tipografía mono, bordes finos, números de paso. |
| IA integrada | Sección **Laboratorio IA** con soluciones y un asistente real (`/api/ask`) anclado al CV. |

## Dirección visual
- Se conserva la base (fondo oscuro, violeta `#833cf6`) para no romper la identidad.
- Se añade una capa "técnica": `font-mono` para etiquetas, numeración de pasos, un terminal en el hero que muestra el modelo mental.
- Movimiento sobrio: entradas con `whileInView`, sin efectos que distraigan.

## IA
- `POST /api/ask`: recibe una pregunta, responde solo con base en `lib/ai/context.ts` (generado desde `data/`).
- Honestidad ante todo: si no sabe, lo dice (coherente con el perfil: "prefiero un 'no se puede saber' a una seguridad artificial").
- Rate limit (Upstash, ya existente) y la función se desactiva sola si falta `ANTHROPIC_API_KEY`.

## Lo que NO se publica
El perfil incluye puntos ciegos, finanzas y salud/deporte. Se usan solo como inspiración de tono; en la web aparece únicamente lo profesional.

## Pendiente / siguientes pasos
- Casos de estudio por proyecto con formato problema → decisión → resultado medido.
- Configurar `ANTHROPIC_API_KEY` en el hosting.
- Versión en inglés.
