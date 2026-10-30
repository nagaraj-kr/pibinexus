"use client";

import {
  TrendingUp,
  Users,
  Compass,
  Cpu,
  Globe2,
  ArrowRight,
  Building,
  CheckCircle2,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";

export default function GrowthSection({ onOpenGrowthModal }) {
  const features = [
    {
      icon: Users,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      title: "Customer and Partner Opportunities",
      desc: "Find enterprises looking for pilots, vendors and distributors.",
    },
    {
      icon: Compass,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      title: "Technology Consulting",
      desc: "Get advice on architecture, product strategy and scaling.",
    },
    {
      icon: Cpu,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      title: "AI, Automation and R&D Support",
      desc: "Work with solution providers to build and improve your tech.",
    },
    {
      icon: Globe2,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      title: "Market Expansion Support",
      desc: "Enter new cities, industries and export markets with the right connections.",
    },
  ];

  const sampleOpportunities = [
    {
      requirement: "Looking for AI vendor for quality inspection",
      type: "Vendor needed",
      typeColor: "bg-blue-50 text-blue-700 border-blue-200",
      postedBy: "Manufacturing company",
      location: "Pune, Maharashtra",
      deadline: "Active • 2 weeks left",
      desc: "Requires automated computer vision model for surface crack and micro-defect detection on high-precision CNC components.",
    },
    {
      requirement: "Pilot partner for smart energy meters",
      type: "Pilot",
      typeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      postedBy: "Utility provider",
      location: "Bengaluru, Karnataka",
      deadline: "Active • 10 days left",
      desc: "Seeking IoT smart metering hardware provider for 10,000-household mesh-network field trial in tier-1 municipal grid.",
    },
    {
      requirement: "Distributor for medical devices in South India",
      type: "Distribution",
      typeColor: "bg-purple-50 text-purple-700 border-purple-200",
      postedBy: "MedTech startup",
      location: "Chennai / Hyderabad",
      deadline: "Active • Open",
      desc: "Seeking hospital distribution network with cold-chain logistics across multi-specialty hospitals in Tamil Nadu & Telangana.",
    },
  ];

  return (
    <section
      id="growth"
      className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 w-full scroll-mt-16"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="w-full mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-100/90 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            <span>GROWTH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Find Customers, Partners and Expert Support
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-4xl">
            Turn your innovation into revenue with business opportunities, technology partners and expert guidance.
          </p>
        </div>

        {/* 4 Feature Points (Icon + Title + 1 Line) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
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

        {/* Sample Opportunity Cards */}
        <div className="w-full mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Live Commercial Mandates
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Enterprise Pilots, RFP Requests & Distribution
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenGrowthModal}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              <span>View All Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {sampleOpportunities.map((opp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${opp.typeColor}`}
                    >
                      {opp.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {opp.deadline}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {opp.requirement}
                  </h4>

                  <div className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Posted by: <strong className="text-slate-700">{opp.postedBy}</strong></span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {opp.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {opp.location}
                  </span>
                  <button
                    type="button"
                    onClick={onOpenGrowthModal}
                    className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    Submit Proposal →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Stat Line & CTAs */}
        <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          
          {/* Stat Line: "25+ technology partners ready to help" */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                CSIR
              </span>
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                IIT
              </span>
              <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                IISc
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm sm:text-base font-bold text-slate-900">
                25+ technology partners ready to help
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenGrowthModal}
              className="px-6 py-3 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] hover:from-[#1d4ed8] hover:to-[#047857] text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Explore Growth Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenGrowthModal}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer px-4 py-3"
            >
              <span>Post a Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

