"use client";

import { useState } from "react";
import {
  Database,
  ShieldCheck,
  Users,
  FileSignature,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  Sparkles,
  Check,
} from "lucide-react";

export default function ProcessSection({ onOpenListing }) {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: "01",
      stepNum: "Step 01",
      timeline: "Days 1 – 14",
      highlightTitle: "Pre-Market Preparation",
      actionTitle: "Scientific IP & TRL Audit",
      badgeStyle: "bg-blue-600 text-white border-blue-600",
      accentBorder: "hover:border-blue-500",
      icon: Database,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      flowTag: "Audit & Valuation",
      desc: "We audit patent defensibility, benchmark Technology Readiness Levels (TRL 4–9), and translate raw academic breakthroughs into clean institutional valuation models.",
      outputs: [
        "Patent Citations Audit",
        "TRL Readiness Scorecard",
        "Institutional Blind Teaser",
      ],
      nextStepLabel: "Unlocks Step 02: Secure Vault",
    },
    {
      id: "02",
      stepNum: "Step 02",
      timeline: "Days 15 – 30",
      highlightTitle: "Secure Diligence Vault",
      actionTitle: "Confidential VDR Provisioning",
      badgeStyle: "bg-emerald-600 text-white border-emerald-600",
      accentBorder: "hover:border-emerald-500",
      icon: ShieldCheck,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      flowTag: "Protection & Data Room",
      desc: "Setting up 256-bit AES encrypted Virtual Data Rooms (VDR) with granular watermarking, dynamic NDAs, and view-only IP controls to prevent unauthorized leakage.",
      outputs: [
        "Encrypted Data Room Setup",
        "Normalized Financial Models",
        "Audit-Ready Cap Table",
      ],
      nextStepLabel: "Unlocks Step 03: Executive Outreach",
    },
    {
      id: "03",
      stepNum: "Step 03",
      timeline: "Days 31 – 60",
      highlightTitle: "Direct Syndicate Matchmaking",
      actionTitle: "Targeted Strategic Outreach",
      badgeStyle: "bg-indigo-600 text-white border-indigo-600",
      accentBorder: "hover:border-indigo-500",
      icon: Users,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      flowTag: "Global Network Matching",
      desc: "Direct presentation to our pre-qualified global network of 300+ institutional buyers, corporate venture arms, and sovereign wealth syndicates across India, US, EU, and GCC.",
      outputs: [
        "Curated Acquirer Shortlist",
        "Confidential Executive Meetings",
        "Competitive Bid Tension",
      ],
      nextStepLabel: "Unlocks Step 04: Deal Execution",
    },
    {
      id: "04",
      stepNum: "Step 04",
      timeline: "Days 61 – 90",
      highlightTitle: "Closing with Maximum Value",
      actionTitle: "Structuring & Deal Execution",
      badgeStyle: "bg-emerald-700 text-white border-emerald-700",
      accentBorder: "hover:border-emerald-600",
      icon: FileSignature,
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      flowTag: "Valuation & Capital Transfer",
      desc: "Guiding founders and boards through Letter of Intent (LOI), definitive purchase agreements, cross-border tax considerations, and escrow settlement to maximize valuation.",
      outputs: [
        "Term Sheet Negotiation",
        "Definitive Agreement Support",
        "Escrow & Closing Advisory",
      ],
      nextStepLabel: "Goal: Executed & Funded Deal",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 lg:py-24 bg-slate-50/60 text-slate-900 border-b border-slate-200 scroll-mt-16 w-full overflow-hidden"
    >
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-100/90 text-blue-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>END-TO-END TRANSACTION PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How Pi Bi Nexus Navigates High-Tech Deals
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Deep-tech M&A differs fundamentally from traditional software. A structured 4-phase horizontal pipeline translating breakthrough science into signed institutional transactions.
          </p>
        </div>

        {/* ─── CONTINUOUS HORIZONTAL FLOW PIPELINE ─── */}
        <div className="relative w-full">
          
          {/* Continuous Flow Rail (Desktop Pipeline Track) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-slate-200 z-0">
            <div className="h-full bg-linear-to-r bg-gradient-to-r from-[#2563eb] via-[#059669] to-[#2563eb] w-full opacity-80" />
          </div>

          {/* 4 Pipeline Step Cards in Flow Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 ${
                    isSelected
                      ? "border-[#2563eb] ring-2 ring-[#2563eb]/20 shadow-lg"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {/* Top Flow Header Node */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      {/* Step Number with Flow Node Indicator */}
                      <div className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                          {step.id}
                        </span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          {step.timeline}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 ${step.iconBg}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* 1. HIGHLIGHTED SECTION TITLE (Vibrant Badge) */}
                    <div className="mb-2.5">
                      <span
                        className={`inline-block px-3 py-1 rounded-md text-xs font-black tracking-wider uppercase shadow-xs ${step.badgeStyle}`}
                      >
                        {step.highlightTitle}
                      </span>
                    </div>

                    {/* 2. Action / Focus Title */}
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {step.actionTitle}
                    </h3>

                    {/* 3. Storytelling Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Outputs & Flow Transition */}
                  <div>
                    {/* Key Outputs List */}
                    <div className="pt-4 border-t border-slate-100 mb-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        Key Outputs:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {step.outputs.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Flow Hand-off Ribbon */}
                    <div
                      className={`pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold transition-colors ${
                        idx === 3
                          ? "text-emerald-700"
                          : "text-blue-600 group-hover:text-blue-700"
                      }`}
                    >
                      <span className="text-[11px] font-semibold truncate">
                        {step.nextStepLabel}
                      </span>
                      {idx === 3 ? (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                      )}
                    </div>
                  </div>

                  {/* Floating Forward Flow Arrow between cards on desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-blue-600 pointer-events-none group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
