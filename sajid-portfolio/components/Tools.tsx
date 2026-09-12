import { tools } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Tools() {
  return (
    <section id="tools" className="py-20 border-t border-line">
      <div className="wrap">
        <SectionHead title={tools.heading} sub={tools.sub} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line mb-12">
          {tools.cards.map((card) => (
            <div key={card.title} className="bg-surface p-7 border-b-2 border-ember">
              <h4 className="text-[0.95rem] mb-3.5 text-ember-2 font-display">{card.title}</h4>
              <ul className="list-none m-0 p-0">
                {card.items.map((item) => (
                  <li
                    key={item.name}
                    className="text-[0.9rem] text-bone-soft py-2 border-b border-line last:border-none"
                  >
                    <b className="text-bone font-medium">{item.name}</b> — {item.desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.skillGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[0.95rem] mb-3.5 text-ember-2 font-display">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.84rem] border border-ember/30 px-3.5 py-1.5 text-bone-soft rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
