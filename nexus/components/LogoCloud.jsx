"use client";

import { ArrowRight } from "lucide-react";

export default function LogoCloud() {
  const logos = [
    {
      name: "Google",
      content: (
        <span className="font-bold text-xl sm:text-2xl tracking-tight text-slate-800">
          Google
        </span>
      ),
    },
    {
      name: "Microsoft",
      content: (
        <div className="flex items-center gap-2.5 font-semibold text-lg sm:text-xl text-slate-800">
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
            <span className="bg-[#f25022] w-1.5 h-1.5"></span>
            <span className="bg-[#7fba00] w-1.5 h-1.5"></span>
            <span className="bg-[#00a4ef] w-1.5 h-1.5"></span>
            <span className="bg-[#ffb900] w-1.5 h-1.5"></span>
          </div>
          <span>Microsoft</span>
        </div>
      ),
    },
    {
      name: "Amazon",
      content: (
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg sm:text-xl lowercase text-slate-800 leading-none">
            amazon
          </span>
          <svg
            className="w-12 h-2 text-amber-500 mt-0.5"
            viewBox="0 0 50 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          >
            <path d="M 2 3 Q 25 12 48 2" />
          </svg>
        </div>
      ),
    },
    {
      name: "Intel",
      content: (
        <span className="font-extrabold text-xl sm:text-2xl tracking-tighter lowercase font-mono text-slate-800">
          intel<span className="text-[#1374D6]">.</span>
        </span>
      ),
    },
    {
      name: "Sequoia",
      content: (
        <div className="flex items-center gap-1.5 font-bold tracking-widest text-sm sm:text-base uppercase text-slate-800">
          <span>SEQUOIA</span>
          <span className="w-2 h-2 bg-[#009b77] rounded-full shrink-0"></span>
        </div>
      ),
    },
    {
      name: "Accel",
      content: (
        <span className="font-extrabold text-base sm:text-lg tracking-widest uppercase text-slate-800">
          ACCEL
        </span>
      ),
    },
    {
      name: "Tiger Global",
      content: (
        <span className="font-bold text-sm sm:text-base tracking-wider uppercase font-serif text-slate-800">
          TIGER GLOBAL
        </span>
      ),
    },
    {
      name: "Qualcomm",
      content: (
        <span className="font-black text-base sm:text-lg tracking-wider uppercase text-slate-800">
          QUALCOMM
        </span>
      ),
    },
    {
      name: "Tata",
      content: (
        <span className="font-extrabold text-sm sm:text-base tracking-widest uppercase text-slate-800">
          TATA
        </span>
      ),
    },
    {
      name: "FundsLink",
      content: (
        <a
          href="#deal-network"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline tracking-wide whitespace-nowrap bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 transition-colors shadow-2xs"
        >
          <span>and 300+ funds</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      ),
    },
  ];

  // Repeat twice for seamless infinite translate3d(-50%, 0, 0)
  const marqueeItems = [...logos, ...logos];

  return (
    <section className="py-7 bg-white border-b border-slate-200 w-full overflow-hidden select-none">
      {/* Scoped CSS guaranteeing smooth 60fps hardware-accelerated marquee */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logoMarqueeAnimation {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .nexus-logo-marquee {
              display: flex !important;
              width: max-content !important;
              will-change: transform;
              animation: logoMarqueeAnimation 28s linear infinite !important;
            }
            .nexus-logo-marquee:hover {
              animation-play-state: paused !important;
            }
          `,
        }}
      />

      {/* 100% Full Width Seamless Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Gradient Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right Edge Gradient Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="nexus-logo-marquee flex items-center gap-12 sm:gap-16 py-1">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
