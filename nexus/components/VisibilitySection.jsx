"use client";

import {
  Eye,
  FileText,
  Sparkles,
  Layers,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sprout,
  Atom,
  Activity,
  Zap,
  Boxes,
  Bot,
  CheckCircle2,
} from "lucide-react";

export default function VisibilitySection({ onOpenListing }) {
  const features = [
    {
      icon: FileText,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      title: "Free Company Listing",
      desc: "Create a public profile with your story, team, products and traction.",
    },
    {
      icon: Sparkles,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      title: "Innovation Showcase",
      desc: "Present your technology, patents, demos and case studies in one place.",
    },
    {
      icon: Layers,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      title: "Industry Categories",
      desc: "Get found by sector: AI, Robotics, Quantum, Clean Energy, MedTech, Advanced Materials.",
    },
    {
      icon: Trophy,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      title: "News and Success Stories",
      desc: "Share milestones, funding news and customer wins to build credibility.",
    },
  ];

  const sampleCompanies = [
    {
      name: "AgriNext",
      sector: "AgriTech, AI",
      desc: "Crop disease detection using drone imagery",
      icon: Sprout,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      trl: "TRL 8",
      hq: "Bengaluru",
    },
    {
      name: "QuantumLab",
      sector: "Quantum Computing",
      desc: "Quantum-safe encryption for banks",
      icon: Atom,
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      trl: "TRL 6",
      hq: "Hyderabad",
    },
    {
      name: "NeuroSense",
      sector: "MedTech, AI",
      desc: "AI-based early diagnosis from EEG data",
      icon: Activity,
      iconColor: "text-sky-600 bg-sky-50 border-sky-200",
      trl: "TRL 7",
      hq: "Chennai",
    },
    {
      name: "TerraLoop",
      sector: "Clean Energy",
      desc: "Low-cost waste-to-energy systems",
      icon: Zap,
      iconColor: "text-teal-600 bg-teal-50 border-teal-200",
      trl: "TRL 8",
      hq: "Pune",
    },
    {
      name: "MatCraft",
      sector: "Advanced Materials",
      desc: "Lightweight composites for EV parts",
      icon: Boxes,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      trl: "TRL 7",
      hq: "Chennai",
    },
    {
      name: "RoboWorks",
      sector: "Robotics",
      desc: "Warehouse automation robots",
      icon: Bot,
      iconColor: "text-rose-600 bg-rose-50 border-rose-200",
      trl: "TRL 8",
      hq: "Bengaluru",
    },
  ];

  return (
    <section
      id="companies"
      className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 w-full scroll-mt-16"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="w-full mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-100/90 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>VISIBILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Get Discovered by the Right People
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-4xl">
            List your deep-tech company for free and showcase your innovations to investors, enterprise buyers and partners across India.
          </p>
        </div>

        {/* 4 Feature Points (Icon + Title + 1 Line) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
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

        {/* Sample Featured Companies Grid */}
        <div className="w-full mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Featured Deep-Tech Ventures
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Innovations Shaping a Better Future
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenListing}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              <span>View All Companies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {sampleCompanies.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${c.iconColor}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {c.name}
                          </h4>
                          <span className="text-xs font-semibold text-slate-500">
                            {c.sector}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {c.trl}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {c.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {c.hq}
                    </span>
                    <button
                      type="button"
                      onClick={onOpenListing}
                      className="font-bold text-blue-600 hover:underline cursor-pointer"
                    >
                      View Profile →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Line & CTA Row */}
        <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-sm sm:text-base font-semibold">
              Free listing. No credit card. Live in 10 minutes.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenListing}
              className="px-6 py-3 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] hover:from-[#1d4ed8] hover:to-[#047857] text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>List Your Company (Free)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenListing}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer px-4 py-3"
            >
              <span>View All Companies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

