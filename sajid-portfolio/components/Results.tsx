import { results } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Results() {
  return (
    <section id="results" className="py-20 border-t border-line">
      <div className="wrap">
        <SectionHead title={results.heading} sub={results.sub} />

        <div className="mb-11">
          {results.growthRows.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-1 md:grid-cols-[190px_1fr_150px] items-center gap-2.5 md:gap-4 py-3 border-b border-line first:border-t first:border-line"
            >
              <div className="text-[0.88rem] font-medium">{row.name}</div>
              <div className="growth-track" style={{ width: `${row.widthPct}%` }}>
                <div className="seg-start" style={{ width: `${row.startPct}%` }} />
                <div className="seg-grow" style={{ width: `${row.growPct}%` }} />
              </div>
              <div className="font-display text-[0.92rem] md:text-right whitespace-nowrap">{row.nums}</div>
            </div>
          ))}
          <div className="flex gap-6 text-[0.82rem] text-bone-soft mt-4">
            <span className="inline-flex items-center gap-2">
              <i className="w-3 h-3 inline-block bg-line-strong" />
              Starting traffic
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="w-3 h-3 inline-block bg-ember" />
              Growth achieved
            </span>
          </div>
          <p className="text-[0.85rem] text-bone-soft mt-4">{results.growthNote}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {results.cards.map((card, i) => (
            <div key={i} className="bg-surface p-6 border-t-2 border-ember">
              <div className="text-[0.78rem] text-ember-2 font-semibold mb-4">{card.proj}</div>
              <div className="font-display text-[1.4rem] mb-1">{card.stat}</div>
              <div className="text-[0.82rem] text-bone-soft">{card.label}</div>
            </div>
          ))}
        </div>
        <p className="text-[0.85rem] text-bone-soft mt-5">{results.footNote}</p>
      </div>
    </section>
  );
}
