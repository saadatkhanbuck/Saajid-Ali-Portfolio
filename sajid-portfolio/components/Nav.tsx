"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={[
          "pointer-events-auto flex items-center justify-between",
          "max-w-[2400px] transition-[width,max-width,height,border-radius,padding,margin,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "border",
          scrolled
            ? "mt-3 w-[92%] max-w-[880px] h-14 px-5 rounded-full bg-char/85 border-ember/25 shadow-[0_12px_34px_-10px_rgba(249,115,22,0.4)] backdrop-blur-md"
            : "mt-0 w-full h-16 px-8 rounded-none bg-transparent border-transparent shadow-[0_12px_34px_-10px_rgba(249,115,22,0)]",
        ].join(" ")}
      >

        {/* LOGO */}
        <div className="shrink-0 mb-2 flex items-center">
          <Image
            src="/assets/Sajid Ali2.png"
            alt="Sajid Ali"
            width={70}
            height={70}
            className="w-[48px] h-[48px] object-contain"
            priority
          />
           <div className="font-display text-[1.05rem] shrink-0 mt-2">
          Sajid <span className="gradient-text">Ali</span>
        </div>

        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-7 mt-1 text-[0.92rem] text-bone-soft">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-0.5 transition-colors hover:text-bone hover:border-ember"
            >
              {item.label}
            </a>
          ))}
        </div>

       <a
             href="https://wa.me/923201757153"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Chat with Sajid on WhatsApp"
             className={`shrink-0 inline-flex items-center gap-2 rounded-full font-medium text-bone border border-ember/40 bg-char/80 hover:bg-ember/15 hover:border-ember transition-all duration-500 ${
               scrolled ? "px-4 py-1.5 text-[0.9rem]" : "px-4 py-2 text-[0.9rem]"
             }`}
           >
            <FaWhatsapp className="text-lg text-[#25D366]" />
            WhatsApp
          </a>

      </nav>
    </div>
  );
}