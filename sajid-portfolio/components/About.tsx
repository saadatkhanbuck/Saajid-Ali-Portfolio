import { about } from "@/lib/data";
import SectionHead from "./SectionHead";
import Ecosystem from "./Ecosystem";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-line">
      <div className="wrap">
        <SectionHead title={about.heading} sub={about.intro} />
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-14">
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-bone-soft text-[1.02rem]">
                {p}
              </p>
            ))}
          </div>
          <div className="card-hair p-6">
            <h4 className="text-[0.95rem] mb-4 font-display">Industries I&rsquo;ve worked in</h4>
            <ul className="columns-2 gap-3 list-none m-0 p-0">
              {about.industries.map((ind) => (
                <li
                  key={ind}
                  className="text-[0.9rem] text-bone-soft py-1.5 border-b border-dashed border-line break-inside-avoid"
                >
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Ecosystem />
      </div>
    </section>
  );
}
