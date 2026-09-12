"use client";

import { useState } from "react";
import { caseStudies } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    caseStudies.findIndex((c) => c.openByDefault)
  );

  return (
    <section id="cases" className="py-20 border-t border-line bg-char/40">
      <div className="wrap">
        <SectionHead
          title="Case studies"
          sub="Seven projects, expanded. Each one covers the starting point, my responsibilities, how the work was run, and the outcome."
        />

        <div className="flex flex-col gap-4">
          {caseStudies.map((cs, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={cs.index} className="card-hair overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full grid grid-cols-[auto_1fr_auto_auto] gap-4 md:gap-5 items-center p-5 md:p-7 text-left"
                >
                  <span className="font-mono text-[0.78rem] text-void bg-gradient-to-br from-ember to-amber w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    {cs.index}
                  </span>
                  <span>
                    <h3 className="text-[1.1rem] md:text-[1.25rem] font-display">{cs.title}</h3>
                    <span className="block text-[0.85rem] text-bone-soft mt-1">{cs.meta}</span>
                  </span>
                  <span className="hidden sm:inline-block text-[0.78rem] text-ember-2 border border-ember/40 bg-ember/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {cs.badge}
                  </span>
                  <span
                    className={`relative w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-1/2 w-5 h-px bg-bone -translate-y-1/2" />
                    <span
                      className={`absolute left-1/2 top-0 h-5 w-px bg-bone -translate-x-1/2 transition-opacity duration-150 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-7 pb-8 pt-6 border-t border-line">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[0.82rem] font-semibold text-ember-2 mb-2.5">
                          {cs.overviewHeading ?? "Overview"}
                        </h4>
                        <p className="text-bone-soft text-[0.94rem]">{cs.overview}</p>
                        {cs.responsibilities && (
                          <>
                            <h4 className="text-[0.82rem] font-semibold text-ember-2 mb-2.5 mt-5">
                              {cs.responsibilitiesHeading ?? "My responsibilities"}
                            </h4>
                            <ul className="list-disc pl-[18px] flex flex-col gap-1.5">
                              {cs.responsibilities.map((r) => (
                                <li key={r} className="text-bone-soft text-[0.94rem]">
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                      <div>
                        <h4 className="text-[0.82rem] font-semibold text-ember-2 mb-2.5">
                          {cs.secondHeading}
                        </h4>
                        {cs.secondParagraph && (
                          <p className="text-bone-soft text-[0.94rem] mb-4">{cs.secondParagraph}</p>
                        )}
                        {cs.stats.length > 0 && (
                          <div className="flex gap-7 flex-wrap my-4">
                            {cs.stats.map((s) => (
                              <div key={s.lab} className="font-display">
                                <div className="text-[1.5rem] text-ember-2">{s.num}</div>
                                <div className="text-[0.78rem] text-bone-soft font-body">{s.lab}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        {cs.resultParagraph && (
                          <p className="text-bone-soft text-[0.94rem]">{cs.resultParagraph}</p>
                        )}
                      </div>
                    </div>

                    {/* <div className="mt-6 pt-5 border-t border-dashed border-line">
                      <figure className="flex gap-4 items-start bg-surface-2 p-4">
                        <div
                          className="w-[110px] h-[80px] shrink-0 bg-void border border-line flex items-center justify-center text-[0.65rem] text-bone-soft/60 text-center px-2"
                          role="img"
                          aria-label={cs.evidenceAlt}
                        >
                          growth chart
                        </div>
                        <figcaption className="text-[0.85rem] text-bone-soft">
                          <b className="block mb-1 text-bone font-semibold">{cs.evidenceCaptionTitle}</b>
                          {cs.evidenceCaption}
                        </figcaption>
                      </figure>
                    </div> */}

                    {cs.takeaway && (
                      <p className="mt-5 text-[0.94rem] italic border-l-2 border-ember pl-4 py-2.5 bg-ember/[0.06]">
                        {cs.takeaway}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
