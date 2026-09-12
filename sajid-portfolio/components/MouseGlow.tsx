"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // start centered so there's no jarring jump-to-corner on load
    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.35;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    const handleMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* static ambient wash so the page isn't flat before the mouse moves */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1100px 620px at 18% -10%, rgba(249,115,22,0.14), transparent 60%), radial-gradient(900px 500px at 100% 110%, rgba(194,65,12,0.12), transparent 60%)",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden
        className="fixed -z-10 rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(249,115,22,0.24) 0%, rgba(234,88,12,0.14) 35%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(-50%,-50%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
      <div className="grain" aria-hidden />
    </>
  );
}
