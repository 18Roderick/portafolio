const LINKS: { d: string; layer: "l1" | "l2" | "l3" }[] = [
  { d: "M40 160 C100 160 110 60 170 60", layer: "l1" },
  { d: "M40 160 L170 160", layer: "l1" },
  { d: "M40 160 C100 160 110 260 170 260", layer: "l1" },
  { d: "M170 60 C230 60 230 110 290 110", layer: "l2" },
  { d: "M170 160 C230 160 230 110 290 110", layer: "l2" },
  { d: "M170 160 C230 160 230 210 290 210", layer: "l2" },
  { d: "M170 260 C230 260 230 210 290 210", layer: "l2" },
  { d: "M290 110 C340 110 340 160 385 160", layer: "l3" },
  { d: "M290 210 C340 210 340 160 385 160", layer: "l3" },
];

const LAYER1 = [60, 160, 260];
const LAYER2 = [110, 210];

export function HeroNetwork() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#11131a]/85 p-6 flex flex-col gap-2">
      <p className="font-mono text-xs text-slate-500">{"// problema → sistema"}</p>
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Diagrama animado: un problema se descompone en partes y se convierte en una solución"
        className="w-full h-auto block"
      >
        <g fill="none" stroke="#2f3140" strokeWidth="1.5">
          {LINKS.map((l) => (
            <path key={l.d} d={l.d} />
          ))}
        </g>
        {LINKS.map((l) => (
          <path key={`p-${l.d}`} d={l.d} className={`net-pulse ${l.layer}`} />
        ))}
        <rect
          className="net-node n0"
          x="28"
          y="148"
          width="24"
          height="24"
          rx="3"
        />
        {LAYER1.map((y) => (
          <circle key={y} className="net-node n1" cx="170" cy={y} r="9" />
        ))}
        {LAYER2.map((y) => (
          <circle key={y} className="net-node n2" cx="290" cy={y} r="9" />
        ))}
        <circle className="net-ring" cx="385" cy="160" r="10" />
        <circle className="net-node net-out" cx="385" cy="160" r="10" />
        <text
          x="40"
          y="196"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          fill="#7b7d8e"
        >
          problema
        </text>
        <text
          x="385"
          y="196"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          fill="#7b7d8e"
        >
          solución
        </text>
      </svg>
      <dl className="text-sm">
        <div className="flex flex-wrap justify-between gap-4 border-t border-dashed border-white/10 pt-3 mt-1">
          <dt className="font-mono text-xs text-primary">stack</dt>
          <dd className="text-slate-100">
            JavaScript · Node.js · React · .NET · PostgreSQL
          </dd>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-dashed border-white/10 pt-3 mt-3">
          <dt className="font-mono text-xs text-primary">ubicación</dt>
          <dd className="text-slate-100">Panamá</dd>
        </div>
      </dl>
    </div>
  );
}
