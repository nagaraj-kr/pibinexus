"use client";

import {
  TrendingUp,
  Handshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Lock,
  FileCheck2,
  FileText,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

export default function DealNetworkSection({ onOpenDealModal, onOpenListing }) {
  const features = [
    {
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      title: "Investment Opportunities",
      desc: "Raise funding or discover high-potential deep-tech startups to invest in.",
    },
    {
      icon: Handshake,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      title: "M&A and Strategic Deals",
      desc: "Explore acquisitions, mergers, joint ventures and technology licensing.",
    },
    {
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      title: "Secure Deal Management (VDR and DMS)",
      desc: "Share documents in a protected data room with role-based access, watermarking and audit logs.",
    },
    {
      icon: FileCheck2,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      title: "Due Diligence Support",
      desc: "Q&A module, document checklists and expert advisors to speed up diligence.",
    },
  ];

  const dealFlowSteps = [
    { step: "01", name: "Express Interest" },
    { step: "02", name: "Sign NDA" },
    { step: "03", name: "Data Room Access" },
    { step: "04", name: "Due Diligence" },
    { step: "05", name: "Close Deal" },
  ];

  const sampleDeals = [
    {
      deal: "Series A Round",
      sector: "AI / SaaS",
      ticket: "₹5 to 10 Cr",
      stage: "Open",
      stageColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      highlights: "Institutional VC co-lead syndicate with proven ARR growth.",
    },
    {
      deal: "Strategic Acquisition",
      sector: "Robotics",
      ticket: "₹20 to 30 Cr",
      stage: "In Discussion",
      stageColor: "bg-amber-50 text-amber-700 border-amber-200",
      highlights: "Enterprise buyer in industrial warehouse automation.",
    },
    {
      deal: "Technology Licensing",
      sector: "Clean Energy",
      ticket: "₹2 to 5 Cr",
      stage: "Open",
      stageColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      highlights: "Global patent license for grid-scale thermal storage.",
    },
  ];

  const trustBadges = [
    { label: "NDA e-sign", icon: FileText },
    { label: "Encrypted storage", icon: Lock },
    { label: "Full audit trail", icon: ShieldCheck },
    { label: "Verified investors", icon: BadgeCheck },
  ];

  return (
    <section
      id="deal-network"
      className="py-20 lg:py-24 bg-slate-50/60 text-slate-900 border-b border-slate-200 w-full scroll-mt-16"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="w-full mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-100/90 text-blue-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>DEAL NETWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Capital, Partnerships and Transactions, All in One Place
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-4xl">
            Connect with verified investors, buyers and strategic partners, and manage the entire deal securely.
          </p>
        </div>

        {/* 4 Feature Points (Icon + Title + 1 Line) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-14">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini Deal Flow Strip (5 Steps) */}
        <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-14 shadow-xs">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                End-to-End Deal Flow
              </p>
              <h3 className="text-xl font-bold text-slate-900">
                Standardized 5-Stage Institutional Deal Lifecycle
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 self-start sm:self-auto">
              Automated Compliance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
            {dealFlowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between group hover:bg-blue-50/50 hover:border-blue-200 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {step.name}
                  </span>
                </div>
                {idx < dealFlowSteps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-400 hidden lg:block shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sample Deal Cards (Anonymized) */}
        <div className="w-full mb-12">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Live Mandates & Opportunities
            </p>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Active Transactions on Deal Network
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {sampleDeals.map((deal, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {deal.sector}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${deal.stageColor}`}
                    >
                      {deal.stage}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    {deal.deal}
                  </h4>

                  <div className="my-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">
                      Ticket Size
                    </div>
                    <div className="text-xl font-extrabold text-blue-600">
                      {deal.ticket}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {deal.highlights}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Verified Deal Room
                  </span>
                  <button
                    type="button"
                    onClick={onOpenDealModal}
                    className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    Request Access →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges & CTAs */}
        <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-600" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenDealModal}
              className="px-6 py-3 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] hover:from-[#1d4ed8] hover:to-[#047857] text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Explore Deal Network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenDealModal}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer px-4 py-3"
            >
              <span>Join as Investor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

