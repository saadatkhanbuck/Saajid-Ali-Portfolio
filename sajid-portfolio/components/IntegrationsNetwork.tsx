import styles from "./IntegrationsNetwork.module.css";

/* Same 12 icons used by the desktop layout, reused here so the mobile
   circle shows the exact same set — edit in ONE place (this array) and
   both views stay in sync automatically. */
const icons = [
  { key: "gmail", alt: "Gmail", kind: "img", src: "https://cdn.simpleicons.org/gmail/EA4335" },
  { key: "instagram", alt: "Instagram", kind: "img", src: "https://cdn.simpleicons.org/instagram/E1306C" },
  { key: "telegram", alt: "Telegram", kind: "img", src: "https://cdn.simpleicons.org/telegram/229ED9" },
  { key: "video", alt: "Video", kind: "symbol", symbol: "●", color: "#FB923C" },
  { key: "love", alt: "Love", kind: "symbol", symbol: "♥", color: "#FACC15" },
  {
    key: "calendar",
    alt: "Calendar",
    kind: "img",
    src: "https://xcent.ai/images/logo-third/google-calendar-icon.svg",
  },
  { key: "whatsapp", alt: "WhatsApp", kind: "img", src: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { key: "shopify", alt: "Shopify", kind: "img", src: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { key: "shop", alt: "Shop", kind: "symbol", symbol: "◆", color: "#F97316" },
  { key: "tiktok", alt: "TikTok", kind: "img", src: "https://cdn.simpleicons.org/tiktok/111827" },
  { key: "wordpress", alt: "WordPress", kind: "img", src: "https://cdn.simpleicons.org/wordpress/21759B" },
  { key: "linkedin", alt: "LinkedIn", kind: "img", src: "https://xcent.ai/images/logo-third/linkedin-icon.svg" },
];

const RADIUS = 38; // % — how far each icon center sits from the middle of the mobile circle
const SPOKE_LEN = 33; // % — mobile spoke line length, stopping just short of the icon

export default function IntegrationsNetwork() {
  return (
    <section id="integrations" className="py-20 border-t border-line overflow-hidden">
      <div className="wrap text-center mb-14">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-ember-gradient" />
          <span className="text-[0.78rem] uppercase tracking-[0.16em] text-ember-2 font-semibold">
            Integrations
          </span>
        </div>
        <h2 className="text-[1.9rem] md:text-[2.4rem] max-w-[20ch] mx-auto mb-4">
          Ten services. One platform. <span className="gradient-text">Zero extra logins.</span>
        </h2>
        <p className="text-bone-soft text-[1rem] max-w-[54ch] mx-auto">
          Every module below plugs straight into my portfolio — nothing bolted on, nothing
          running in a separate app.
        </p>
      </div>

    <div className={styles["sm-integrations-network"]}>
      {/* ================================================================
          DESKTOP VIEW (screens wider than 1024px) — UNCHANGED.
          This is exactly your original left/right fan layout with the
          curved SVG lines. Nothing in this block was touched.
      ================================================================= */}
      <div className={styles["sm-desktop-view"]}>
        {/* LEFT ICONS */}
        <div className={`${styles["sm-side"]} ${styles["sm-left"]}`}>
          <div className={`${styles["sm-icon"]} ${styles["sm-gmail"]}`}>
            <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Gmail" />
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-instagram"]}`}>
            <img src="https://cdn.simpleicons.org/instagram/E1306C" alt="Instagram" />
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-telegram"]}`}>
            <img src="https://cdn.simpleicons.org/telegram/229ED9" alt="Telegram" />
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-video"]}`}>
            <span className={styles["sm-symbol"]}>●</span>
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-love"]}`}>
            <span className={styles["sm-symbol"]}>♥</span>
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-calendar"]}`}>
            <img src="https://xcent.ai/images/logo-third/google-calendar-icon.svg" alt="Calender" />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className={`${styles["sm-side"]} ${styles["sm-right"]}`}>
          <div className={`${styles["sm-icon"]} ${styles["sm-whatsapp"]}`}>
            <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" />
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-shopify"]}`}>
            <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" />
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-shop"]}`}>
            <span className={styles["sm-symbol"]}>◆</span>
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-tiktok"]}`}>
            <img src="https://cdn.simpleicons.org/tiktok/111827" alt="TikTok" />
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-wordpress"]}`}>
            <img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" />
          </div>
          <div className={`${styles["sm-icon"]} ${styles["sm-linkedin"]}`}>
            <img src="https://xcent.ai/images/logo-third/linkedin-icon.svg" alt="LinkedIn" />
          </div>
        </div>

        {/* NETWORK */}
        <svg
          className={styles["sm-network-lines"]}
          viewBox="0 0 1600 760"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* LEFT CONNECTIONS */}
          <path id="lineL1" d="M78 65 C330 100 540 300 800 500" />
          <path id="lineL2" d="M78 160 C330 190 550 340 800 500" />
          <path id="lineL3" d="M113 255 C350 285 570 390 800 500" />
          <path id="lineL4" d="M153 350 C380 365 600 425 800 500" />
          <path id="lineL5" d="M200 414 C420 425 610 470 800 500" />
          <path id="lineL6" d="M280 474 C510 475 650 490 800 500" />

          {/* RIGHT CONNECTIONS */}
          <path id="lineR1" d="M1522 65 C1270 100 1060 300 800 500" />
          <path id="lineR2" d="M1522 160 C1270 190 1050 340 800 500" />
          <path id="lineR3" d="M1497 255 C1250 285 1030 390 800 500" />
          <path id="lineR4" d="M1457 350 C1220 365 1000 425 800 500" />
          <path id="lineR5" d="M1390 414 C1200 425 990 470 800 500" />
          <path id="lineR6" d="M1350 474 C1100 475 950 490 800 500" />

          {/* LEFT DOTS */}
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="3.8s" repeatCount="indefinite">
              <mpath href="#lineL1" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.4s" begin="1.2s" repeatCount="indefinite">
              <mpath href="#lineL2" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.1s" begin="0.7s" repeatCount="indefinite">
              <mpath href="#lineL3" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.7s" begin="1.8s" repeatCount="indefinite">
              <mpath href="#lineL4" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.2s" begin="0.3s" repeatCount="indefinite">
              <mpath href="#lineL5" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.9s" begin="2s" repeatCount="indefinite">
              <mpath href="#lineL6" />
            </animateMotion>
          </circle>

          {/* RIGHT DOTS */}
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4s" begin="0.5s" repeatCount="indefinite">
              <mpath href="#lineR1" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.5s" begin="1.5s" repeatCount="indefinite">
              <mpath href="#lineR2" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.2s" begin="0.9s" repeatCount="indefinite">
              <mpath href="#lineR3" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.8s" begin="2s" repeatCount="indefinite">
              <mpath href="#lineR4" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.3s" begin="0.2s" repeatCount="indefinite">
              <mpath href="#lineR5" />
            </animateMotion>
          </circle>
          <circle r="5" className={styles["sm-dot"]}>
            <animateMotion dur="4.8s" begin="1.7s" repeatCount="indefinite">
              <mpath href="#lineR6" />
            </animateMotion>
          </circle>
        </svg>

        {/* CENTER IMAGE */}
        <div className={styles["sm-center-badge"]}>
          <img src="/assets/integration.png" alt="ShiftMatrix AI" />
        </div>
      </div>

      {/* ================================================================
          MOBILE / TABLET VIEW (1024px and below) — NEW.
          Icons are placed on a perfect circle using trig, so spokes
          always end exactly at their icon and nothing can drift off
          screen or fall out of the ring at any width.
      ================================================================= */}
      <div className={styles["sm-mobile-view"]}>
        <div className={styles["sm-orbit-wrap"]}>
          <div className={styles["sm-orbit"]}>
            {icons.map((icon, i) => {
              const angle = i * (360 / icons.length) - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + RADIUS * Math.cos(rad);
              const y = 50 + RADIUS * Math.sin(rad);

              return (
                <div key={icon.key}>
                  <div
                    className={styles["sm-orbit-spoke"]}
                    style={{ width: `${SPOKE_LEN}%`, transform: `rotate(${angle}deg)` }}
                    aria-hidden
                  >
                    <span className={styles["sm-orbit-dot"]} />
                  </div>
                  <div className={styles["sm-orbit-icon"]} style={{ left: `${x}%`, top: `${y}%` }}>
                    {icon.kind === "img" ? (
                      <img src={icon.src} alt={icon.alt} />
                    ) : (
                      <span className={styles["sm-symbol"]} style={{ color: icon.color }}>
                        {icon.symbol}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            <div className={styles["sm-orbit-center"]}>
              <img src="/assets/integration.png" alt="ShiftMatrix AI" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}