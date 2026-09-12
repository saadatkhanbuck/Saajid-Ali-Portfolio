import styles from "./IntegrationsNetwork.module.css";

export default function IntegrationsNetwork() {
  return (
    <div className={styles["sm-integrations-network"]}>
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
        <img
          src="/assets/integration.png"
          alt="ShiftMatrix AI"
        />
      </div>
    </div>
  );
}
