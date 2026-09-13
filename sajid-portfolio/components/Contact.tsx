import { contact, site } from "@/lib/data";
import { FaEnvelope, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-14 border-t border-line relative overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 420px at 15% 0%, rgba(249,115,22,0.10), transparent 60%)",
      }}
    >
      <div className="wrap relative">
        <div className="max-w-[640px]">
          <h2 className="text-[2rem] md:text-[2.6rem] mb-5">
            Let&rsquo;s work <span className="gradient-text">together</span>
          </h2>

          <p className="text-bone-soft text-[1.05rem] mb-9">
            {contact.paragraph}
          </p>

          <div className="flex gap-4 flex-wrap mb-16">
            {/* Email */}
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              title="Email"
              className="w-14 h-14 rounded-full flex items-center justify-center border border-orange-500/40 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope size={23} />
            </a>

            {/* WhatsApp */}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="w-14 h-14 rounded-full flex items-center justify-center border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaWhatsapp size={27} />
            </a>

            {/* LinkedIn */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-14 h-14 rounded-full flex items-center justify-center border border-[#0A66C2]/40 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn size={23} />
            </a>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-3 text-[0.82rem] text-bone-soft border-t border-line pt-6">
          {contact.footMeta.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}