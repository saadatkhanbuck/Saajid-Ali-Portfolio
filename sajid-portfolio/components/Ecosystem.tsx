import { ecosystem } from "@/lib/data";

const colors = ["#F97316", "#FACC15", "#C2410C"]; // ember, amber, rust — cycled by column
const positions = [
  { x: 140, y: 80 },
  { x: 450, y: 80 },
  { x: 760, y: 80 },
  { x: 760, y: 220 },
  { x: 450, y: 220 },
  { x: 140, y: 220 },
  { x: 140, y: 360 },
  { x: 450, y: 360 },
  { x: 760, y: 360 },
];
const colorForIndex = (i: number) => colors[[0, 1, 2, 2, 1, 0, 0, 1, 2][i]];

export default function Ecosystem() {
  return (
    <div className="mt-16">
      <h3 className="text-[1.15rem] mb-1.5">{ecosystem.heading}</h3>
      <p className="text-bone-soft text-[0.94rem] max-w-[60ch] mb-8">{ecosystem.sub}</p>

      <svg
        viewBox="0 0 900 430"
        className="w-full h-auto block"
        role="img"
        aria-label="Content ecosystem flow from research through performance tracking"
      >
        <defs>
          <marker id="eco-arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(245,241,234,0.28)" />
          </marker>
        </defs>

        <g stroke="rgba(245,241,234,0.28)" strokeWidth={1.5} fill="none">
          <line x1="178" y1="80" x2="412" y2="80" markerEnd="url(#eco-arrow)" />
          <line x1="488" y1="80" x2="722" y2="80" markerEnd="url(#eco-arrow)" />
          <path d="M760,118 V180" markerEnd="url(#eco-arrow)" />
          <line x1="722" y1="220" x2="488" y2="220" markerEnd="url(#eco-arrow)" />
          <line x1="412" y1="220" x2="178" y2="220" markerEnd="url(#eco-arrow)" />
          <path d="M140,258 V320" markerEnd="url(#eco-arrow)" />
          <line x1="178" y1="360" x2="412" y2="360" markerEnd="url(#eco-arrow)" />
          <line x1="488" y1="360" x2="722" y2="360" markerEnd="url(#eco-arrow)" />
        </g>

        {ecosystem.steps.map((step, i) => {
          const pos = positions[i];
          const color = colorForIndex(i);
          return (
            <g key={step.n}>
              <circle cx={pos.x} cy={pos.y} r={38} fill={color} />
              <text
                x={pos.x}
                y={pos.y + 6}
                textAnchor="middle"
                fill="#0c0a08"
                fontFamily="var(--font-plex-mono), monospace"
                fontSize={15}
                fontWeight={600}
              >
                {step.n}
              </text>
              <text
                x={pos.x}
                y={pos.y + (i >= 6 ? 54 : 60)}
                textAnchor="middle"
                fill="#F3EFE7"
                fontFamily="var(--font-plex), sans-serif"
                fontSize={14}
                fontWeight={500}
              >
                {step.label}
              </text>
              {step.sub && (
                <text
                  x={pos.x}
                  y={pos.y + 70}
                  textAnchor="middle"
                  fill="#A6A19A"
                  fontFamily="var(--font-plex), sans-serif"
                  fontSize={11}
                >
                  {step.sub}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
