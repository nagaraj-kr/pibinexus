"use client";

import { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles } from "lucide-react";

export default function ValuationCalculator({ onOpenListing }) {
  const [trlLevel, setTrlLevel] = useState("7");
  const [patentCount, setPatentCount] = useState("5");
  const [annualRevenue, setAnnualRevenue] = useState("2");
  const [dealType, setDealType] = useState("mna");

  const calculateEstimate = () => {
    const trl = parseInt(trlLevel, 10);
    const patents = parseInt(patentCount, 10);
    const rev = parseFloat(annualRevenue);

    let baseMultiple = 6;
    if (trl >= 7) baseMultiple += 4;
    if (trl >= 8) baseMultiple += 5;
    if (patents >= 5) baseMultiple += 3;
    if (patents >= 10) baseMultiple += 4;

    const lowEstimate = Math.max(8, Math.round((rev * baseMultiple + patents * 1.2 + trl * 1.5) * 0.85));
    const highEstimate = Math.max(14, Math.round(lowEstimate * 1.45));

    let readinessScore = 55;
    readinessScore += trl * 3;
    readinessScore += Math.min(patents * 2, 16);
    if (rev > 0) readinessScore += 10;
    readinessScore = Math.min(readinessScore, 98);

    return {
      range: `$${lowEstimate}M - $${highEstimate}M`,
      score: readinessScore,
      rating: readinessScore > 85 ? "Tier-1 Institutional Grade" : "Growth Stage Ready",
    };
  };

  const result = calculateEstimate();

  return (
    <section id="insights" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 scroll-mt-16 w-full">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header - Full Width */}
        <div className="text-center w-full mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2.5">
            Interactive M&A Benchmark Tool
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Deep-Tech M&A Readiness & Valuation Estimator
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-4xl mx-auto">
            Estimate your enterprise transaction multiple based on scientific validation (TRL), defensible patent assets, and commercial traction.
          </p>
        </div>

        {/* 100% Full Width Calculator Box */}
        <div className="w-full bg-white rounded-3xl border border-slate-300 shadow-sm p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 space-y-7 w-full">
              
              {/* TRL Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    Technology Readiness Level (TRL):
                  </label>
                  <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    TRL {trlLevel} ({trlLevel >= "8" ? "Qualified System" : trlLevel >= "6" ? "Prototype in Relevant Env" : "Lab Proven"})
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="9"
                  value={trlLevel}
                  onChange={(e) => setTrlLevel(e.target.value)}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono mt-1.5">
                  <span>TRL 4 (Lab Demo)</span>
                  <span>TRL 7 (Operational)</span>
                  <span>TRL 9 (Commercial)</span>
                </div>
              </div>

              {/* Patents Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    Defensible Patents (Filed / Granted):
                  </label>
                  <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                    {patentCount}+ Patents
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={patentCount}
                  onChange={(e) => setPatentCount(e.target.value)}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]"
                />
              </div>

              {/* Annual Contract Revenue */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    Annual Commercial / Pilot Contracts:
                  </label>
                  <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                    ${annualRevenue}M ARR
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(e.target.value)}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]"
                />
              </div>

              {/* Transaction Target Type */}
              <div>
                <label className="text-sm font-bold uppercase tracking-wider text-slate-800 block mb-3">
                  Preferred Transaction Objective:
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  {[
                    { id: "mna", label: "Strategic M&A Exit" },
                    { id: "series", label: "Series A/B Equity" },
                    { id: "carveout", label: "Technology Carve-Out" },
                    { id: "jv", label: "Cross-Border Joint Venture" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDealType(item.id)}
                      className={`p-3 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                        dealType === item.id
                          ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Output Card (Right Column) */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 space-y-7 shadow-lg w-full">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-1.5">
                  Estimated Transaction Range
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                  {result.range}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Based on institutional multiples in India & transatlantic corridors.
                </p>
              </div>

              <div className="pt-5 border-t border-slate-800 space-y-3.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">M&A Readiness Score:</span>
                  <span className="font-bold font-mono text-emerald-400 text-base">{result.score} / 100</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-300"
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-400">Institutional Rating:</span>
                  <span className="font-semibold text-slate-200">{result.rating}</span>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800 space-y-3.5">
                <button
                  type="button"
                  onClick={onOpenListing}
                  className="w-full py-4 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Request Confidential Opinion</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  No public disclosure. Protected under mutual NDA.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
