import { hero } from "@/lib/data";
import {  FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <header className="pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 md:gap-14 items-end">
        <div>
          <div className="inline-block text-[0.85rem] font-medium mb-5 px-3.5 py-1.5 rounded-full border border-ember/40 bg-ember/10 text-ember-2">
            {hero.tag}
          </div>
          <h1 className="text-[2.3rem] leading-[1.08] md:text-[3.4rem] max-w-[15ch]">
            Turning search intent and content strategy into{" "}
            <span className="gradient-text">organic growth</span> you can measure.
          </h1>
          <p className="mt-6 text-[1.06rem] text-bone-soft max-w-[52ch]">{hero.sub}</p>
          <div className="mt-8 flex gap-4 flex-wrap items-center">
            <a href="#cases" className="btn btn-primary">
              View case studies
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&rsquo;s work together
            </a>
            <a
              href="https://www.linkedin.com/in/sajid-ali-4b4235208"
              target="_blank"
              rel="noopener"
              className="w-14 h-14 rounded-full flex items-center justify-center border border-orange-500/40 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn size={23} />
            </a>
          </div>
        </div>

        <div className="border-l border-ember/30 pl-7 md:mt-0">
          <div className="flex items-end gap-2 h-16 mb-3" aria-hidden>
            {hero.chartBars.map((h, i) => (
              <div
                key={i}
                className="w-4 rounded-t-sm bg-gradient-to-t from-ember-deep to-amber"
                style={{ height: `${h}%`, opacity: 0.55 + i * 0.11 }}
              />
            ))}
          </div>
          <p className="text-[0.78rem] text-bone-soft mb-6">{hero.chartCaption}</p>
          <ul className="flex flex-col gap-3.5">
            {hero.sideList.map((item) => (
              <li key={item.label} className="text-[0.94rem] text-bone-soft flex gap-2.5">
                <b className="text-ember-2 font-semibold min-w-[64px] shrink-0">{item.label}</b>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
