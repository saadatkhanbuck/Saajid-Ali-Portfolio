import { contact, site } from "@/lib/data";

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
          <p className="text-bone-soft text-[1.05rem] mb-9">{contact.paragraph}</p>
          <div className="flex gap-4 flex-wrap mb-16">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              Email me
            </a>
            <a className="btn btn-outline" href={site.whatsapp} target="_blank" rel="noopener">
              WhatsApp ↗
            </a>
            <a className="btn btn-outline" href={site.linkedin} target="_blank" rel="noopener">
              Connect on LinkedIn ↗
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
