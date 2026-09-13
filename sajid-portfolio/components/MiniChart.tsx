import type { ChartMetric } from "@/lib/data";

interface MiniChartProps {
  metrics: ChartMetric[];
}

function fmt(n: number): string {
  return n.toLocaleString("en-US");
}

// Cycles through the three accent colors already used elsewhere in the
// theme (ember / amber / rust), so a case study with 2 metrics never
// repeats a color and a chart never needs a color prop of its own.
const SERIES_COLORS = ["#F97316", "#FACC15", "#9A3412"]; // ember, amber, rust
const SERIES_DELTA_TEXT = ["#FB923C", "#C2410C", "#9A3412"]; // ember-2, ember-deep, rust
const SERIES_DELTA_BG = [
  "rgba(249,115,22,0.14)",
  "rgba(250,204,21,0.16)",
  "rgba(154,52,18,0.18)",
];

/**
 * Deterministic SVG bar-chart — pure calculation, no client hooks, so it
 * renders on the server and can never drift from the numbers passed in
 * via props. Colors are pulled from the portfolio's own ember/amber/rust
 * palette (tailwind.config.ts) rather than hardcoded elsewhere.
 */
export default function MiniChart({ metrics }: MiniChartProps) {
  if (!metrics || metrics.length === 0) return null;

  const colGap = 176;
  const titleY = 14;
  const deltaY = 31;
  const barsTop = 56;
  const chartH = 68;
  const baseY = barsTop + chartH;
  const padBot = 30;
  const H = baseY + padBot;
  const W = metrics.length * colGap;
  const barW = 32;
  const barGap = 16;

  const maxVal = Math.max(
    1,
    ...metrics.map((m) => Math.max(m.start || 0, m.now || 0))
  );

  return (
    <div className="my-6 mb-2 bg-surface border border-line rounded-[3px] px-4 pt-4 pb-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
      <div className="flex gap-5 text-[0.76rem] text-bone-soft pb-3 border-b border-line mb-1.5">
        <span className="inline-flex items-center gap-1.5">
          <i className="w-2.5 h-2.5 inline-block rounded-[2px] bg-line-strong" />
          Starting point
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="w-2.5 h-2.5 inline-block rounded-[2px] bg-ember" />
          Current
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Chart of starting versus current figures"
        className="w-full h-auto block overflow-visible"
      >
        {metrics.map((m, i) => {
          const gx = i * colGap + 30;
          const groupCenter = gx + barW + barGap / 2;
          const startVal = m.start || 0;
          const nowVal = m.now || 0;

          const startH = Math.max(3, (startVal / maxVal) * chartH);
          const nowH = Math.max(3, (nowVal / maxVal) * chartH);
          const startY = baseY - startH;
          const nowY = baseY - nowH;
          const c = i % 3;

          const showBadge = !m.startLabel && startVal > 0;
          const pct = showBadge
            ? Math.round(((nowVal - startVal) / startVal) * 100)
            : 0;
          const deltaText = `${pct >= 0 ? "+" : ""}${pct}%`;
          const pillW = deltaText.length * 6.6 + 14;

          return (
            <g key={m.label + i}>
              {/* Faint reference gridlines — reads as a real chart rather
                  than two floating rectangles. */}
              {[0.25, 0.5, 0.75].map((f) => {
                const gy = baseY - chartH * f;
                return (
                  <line
                    key={f}
                    x1={gx - 12}
                    y1={gy}
                    x2={gx + 2 * barW + barGap + 12}
                    y2={gy}
                    stroke="var(--line)"
                    strokeWidth={1}
                    strokeDasharray="2,3"
                  />
                );
              })}

              <text
                x={groupCenter}
                y={titleY}
                textAnchor="middle"
                fontFamily="var(--font-plex), sans-serif"
                fontSize={12}
                fontWeight={600}
                fill="var(--bone)"
              >
                {m.label}
              </text>
              <line
                x1={gx - 12}
                y1={baseY}
                x2={gx + 2 * barW + barGap + 12}
                y2={baseY}
                stroke="var(--bone-soft)"
                strokeWidth={1}
              />

              <rect
                rx={2}
                x={gx}
                y={startY}
                width={barW}
                height={startH}
                fill="var(--line-strong)"
              />
              <text
                x={gx + barW / 2}
                y={startY - 7}
                textAnchor="middle"
                fontFamily="var(--font-plex-mono), monospace"
                fontSize={11}
                fill="var(--bone-soft)"
              >
                {fmt(startVal)}
              </text>
              <text
                x={gx + barW / 2}
                y={baseY + 18}
                textAnchor="middle"
                fontFamily="var(--font-plex), sans-serif"
                fontSize={10.5}
                fill="var(--bone-soft)"
                style={{ textTransform: "uppercase", letterSpacing: "0.04em" }}
              >
                {m.startLabel || "Start"}
              </text>

              <rect
                rx={2}
                x={gx + barW + barGap}
                y={nowY}
                width={barW}
                height={nowH}
                fill={SERIES_COLORS[c]}
              />
              <text
                x={gx + barW + barGap + barW / 2}
                y={nowY - 7}
                textAnchor="middle"
                fontFamily="var(--font-plex-mono), monospace"
                fontSize={11.5}
                fontWeight={500}
                fill="var(--bone)"
              >
                {fmt(nowVal)}
              </text>
              <text
                x={gx + barW + barGap + barW / 2}
                y={baseY + 18}
                textAnchor="middle"
                fontFamily="var(--font-plex), sans-serif"
                fontSize={10.5}
                fill="var(--bone-soft)"
                style={{ textTransform: "uppercase", letterSpacing: "0.04em" }}
              >
                Now
              </text>

              {/* Growth badge — only shown when there's a genuine starting
                  figure (not a placeholder like "New site"), so it's never
                  a fabricated stat. */}
              {showBadge && (
                <>
                  <rect
                    rx={7}
                    x={groupCenter - pillW / 2}
                    y={deltaY - 11}
                    width={pillW}
                    height={15}
                    fill={SERIES_DELTA_BG[c]}
                  />
                  <text
                    x={groupCenter}
                    y={deltaY}
                    textAnchor="middle"
                    fontFamily="var(--font-plex-mono), monospace"
                    fontSize={10.5}
                    fontWeight={600}
                    fill={SERIES_DELTA_TEXT[c]}
                  >
                    {deltaText}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}