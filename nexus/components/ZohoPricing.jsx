"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function ZohoPricing({ onOpenListing }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 w-full">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header - Full Width */}
        <div className="text-center w-full mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1374D6] mb-2">
            Transparent, Founder-First Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple, honest pricing. No hidden commissions.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal max-w-4xl mx-auto">
            Every deep-tech venture gets a free verified listing. Upgrade only when you need active M&A syndicates and encrypted diligence vaults.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="flex items-center justify-center gap-3.5 mt-8">
            <span className={`text-sm font-bold ${!annualBilling ? "text-slate-900" : "text-slate-500"}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative w-14 h-7 bg-slate-900 rounded-full transition-colors cursor-pointer p-0.5"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  annualBilling ? "translate-x-7" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span className={`text-sm font-bold flex items-center gap-2 ${annualBilling ? "text-slate-900" : "text-slate-500"}`}>
              <span>Annual Billing</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-[#00A859] border border-emerald-200">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards - 100% Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          
          {/* Tier 1: Founder Free */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col justify-between w-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Founder Tier
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                  Free Forever
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Verified Listing</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 mb-6">
                Essential discovery for academic spinouts and early-stage research teams.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono">₹0</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">/ forever</span>
              </div>

              <ul className="space-y-3.5 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Verified listing in India Deep-Tech Directory</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Automated TRL Readiness Scorecard (TRL 1-9)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Institutional Blind Teaser Generation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Zero commission on introduced capital</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={onOpenListing}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                List Company Free
              </button>
            </div>
          </div>

          {/* Tier 2: Growth Syndicate (Most Popular) */}
          <div className="bg-white rounded-3xl border-2 border-[#1374D6] p-8 sm:p-10 shadow-md relative flex flex-col justify-between w-full">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#1374D6] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1374D6]">
                  Growth & Syndicate
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-50 text-[#1374D6] border border-blue-200">
                  Active Deal Room
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Capital & VDR</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 mb-6">
                For commercial deep-tech ventures actively raising capital or exploring strategic M&A.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono">
                  {annualBilling ? "₹3,999" : "₹4,999"}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">/ month</span>
              </div>

              <ul className="space-y-3.5 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span className="font-bold text-slate-900">Everything in Free, plus:</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>256-Bit Encrypted Virtual Data Room (VDR)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Dynamic recipient-specific watermarking</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Direct introductions to 300+ institutional VCs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Dedicated transaction coordinator</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={onOpenListing}
                className="w-full py-3.5 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Start 30-Day Free Trial
              </button>
            </div>
          </div>

          {/* Tier 3: Enterprise Acquirer */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col justify-between w-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Institutional
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                  Corporates & Funds
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Acquirer License</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 mb-6">
                For PE funds, sovereign wealth managers, and Fortune 500 corporate development teams.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono">Custom</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">/ mandate</span>
              </div>

              <ul className="space-y-3.5 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Unlimited VDR access across all national clusters</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Direct introductions to technical founders</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>Bespoke scientific due diligence & patent FTO</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00A859] shrink-0" />
                  <span>M&A deal structuring & cross-border advisory</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={onOpenListing}
                className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                Contact Enterprise Sales
              </button>
            </div>
          </div>

        </div>

        {/* Security Assurance */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 flex items-center justify-center gap-2.5 w-full">
          <ShieldCheck className="w-4 h-4 text-[#00A859]" />
          <span>All plans include mutual non-disclosure agreements (NDAs) and ISO 27001 data compliance.</span>
        </div>

      </div>
    </section>
  );
}
