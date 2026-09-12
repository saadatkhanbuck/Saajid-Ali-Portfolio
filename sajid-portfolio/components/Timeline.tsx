import { timeline } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 border-t border-line bg-char/40">
      <div className="wrap">
        <SectionHead title={timeline.heading} sub={timeline.sub} />
        <div className="timeline">
          {timeline.items.map((item, i) => (
            <div key={item.org} className={`tl-item ${item.current ? "current" : ""}`}>
              <div className="tl-marker">{i + 1}</div>
              <div className="text-[0.85rem] text-ember-2 font-semibold mb-1">{item.org}</div>
              <div className="text-[1.2rem] mb-1.5 font-display">{item.role}</div>
              <div className="text-[0.85rem] text-bone-soft mb-2.5">{item.meta}</div>
              <p className="text-bone-soft text-[0.97rem] max-w-[64ch]">{item.desc}</p>
              {item.note && (
                <div className="mt-4 px-4 py-3.5 bg-surface border-l-2 border-amber text-[0.92rem] text-bone-soft">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
