import { FiExternalLink } from "react-icons/fi";
import { publishedWork, type Publication } from "@/lib/data";
import SectionHead from "./SectionHead";

const categoryStyles: Record<Publication["category"], string> = {
  "Blog post": "bg-ember/10 text-ember-2 border border-ember/25",
  "Website copy": "bg-amber/10 text-amber border border-amber/25",
  "Press release": "bg-rust/15 text-ember-deep border border-rust/30",
};

export default function PublishedWork() {
  return (
    <section id="published" className="py-20 border-t border-line">
      <div className="wrap">
        <SectionHead title={publishedWork.heading} sub={publishedWork.sub} />

        <div className="flex flex-col gap-10">
          {publishedWork.groups.map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-[0.8rem] font-medium uppercase tracking-wide text-bone-soft">
                {group.heading}
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((pub) => (
                  <a
                    key={pub.url}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-5 transition-all duration-200 hover:border-ember/40 hover:bg-surface-2 hover:-translate-y-0.5"
                  >
                    <div>
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${categoryStyles[pub.category]}`}
                      >
                        {pub.category}
                      </span>
                      <h3 className="mt-3 text-sm font-medium text-bone">{pub.title}</h3>
                      <p className="mt-1 text-xs text-bone-soft">{pub.site}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-bone-soft group-hover:text-ember-2">
                      Read piece
                      <FiExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
