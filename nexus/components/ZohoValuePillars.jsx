"use client";

import { Database, ShieldCheck, Globe2, ArrowRight } from "lucide-react";

export default function ZohoValuePillars({ onOpenListing }) {
  const pillars = [
    {
      title: "Unified Intelligence",
      tagline: "Break down the silos between IP, capital, and market demand.",
      icon: Database,
      color: "bg-blue-50 text-[#1374D6] border-blue-200",
      desc: "No more tracking cap tables in one tool, patents in another, and investor pitch decks over email. Pi Bi Nexus One gives founders, board members, and investors a single source of truth.",
      features: [
        "Continuous TRL progression tracking",
        "Direct synchronization with Indian Patent Office (IPO)",
        "Automated cap-table dilution modeling",
      ],
    },
    {
      title: "Unified Sovereign Security",
      tagline: "Bank-grade protection for proprietary technology.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-[#00A859] border-emerald-200",
      desc: "Deep-tech innovation is sensitive sovereign intellectual property. Pi Bi Nexus One enforces strict mutual NDAs and 256-bit encryption before any investor or buyer views your data room.",
      features: [
        "ISO 27001 & SOC 2 Type II audited vaults",
        "Dynamic recipient-specific watermarking",
        "Granular view-only IP permissions",
      ],
    },
    {
      title: "Unified Global Network",
      tagline: "From Indian research parks to global cross-border exits.",
      icon: Globe2,
      color: "bg-red-50 text-[#E42528] border-red-200",
      desc: "Bridge the gap between domestic academic spinouts and global commercialization corridors. Direct MoUs with venture syndicates and Fortune 500 buyers across the US, EU, and GCC.",
      features: [
        "Direct corridors to US & European tech buyers",
        "Bilateral sovereign technology transfer pacts",
        "78.4% institutional matching success rate",
      ],
    },
  ];

  return (
    <section id="growth" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 w-full scroll-mt-16">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header - Full Width */}
        <div className="text-center w-full mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E42528] mb-2">
            The Pi Bi Nexus Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why choose Pi Bi Nexus One?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal max-w-4xl mx-auto">
            A truly unified architecture built specifically for the complexities of deep-tech engineering, capital syndication, and sovereign IP.
          </p>
        </div>

        {/* 3 Pillars Grid - 100% Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between w-full"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 ${p.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    {p.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {p.desc}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#1374D6] shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onOpenListing}
                    className="text-xs sm:text-sm font-bold text-[#1374D6] hover:text-[#0F5EAD] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
