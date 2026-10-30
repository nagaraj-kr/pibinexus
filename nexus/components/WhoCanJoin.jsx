"use client";

import { useState } from "react";
import {
  Rocket,
  Building2,
  Briefcase,
  Users2,
  Cog,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";

export default function WhoCanJoin({ onOpenListing }) {
  const [activeTab, setActiveTab] = useState("startups");

  const personas = [
    {
      id: "startups",
      title: "Startups",
      icon: Rocket,
      stats: "1,200+ Active",
      subtitle: "Get discovered, raise institutional capital, and close enterprise pilots.",
      description:
        "Pi Bi Nexus provides deep-tech founders with direct access to institutional venture capital, patent valuation benchmarking, and enterprise commercial contracts without cold outreach or broker fees.",
      benefits: [
        "Direct access to 300+ institutional VCs and family offices",
        "Free verified listing in the national deep-tech directory",
        "Encrypted Virtual Data Room (VDR) with granular access control",
        "Corporate pilot opportunities with Fortune 500 enterprises",
      ],
      ctaText: "List Your Startup (Free)",
    },
    {
      id: "established",
      title: "Established Companies",
      icon: Building2,
      stats: "450+ Listed",
      subtitle: "Explore strategic deals, M&A and national tech transfer.",
      description:
        "Identify high-value acquisition targets, license critical technology patents, and form strategic R&D consortiums with premier academic institutes and national labs.",
      benefits: [
        "Confidential M&A, joint ventures and carve-out matchmaking",
        "Technology licensing and patent acquisition pipeline",
        "Cross-border market expansion into US, EU, and GCC",
        "R&D consortiums with national labs and academic institutes",
      ],
      ctaText: "Explore Strategic Deals",
    },
    {
      id: "investors",
      title: "Investors",
      icon: Briefcase,
      stats: "$4.2B+ AUM",
      subtitle: "Discover high-potential, pre-vetted deep-tech opportunities.",
      description:
        "Deploy capital with confidence into high-growth deep-tech ventures scored by Technology Readiness Levels (TRL), pre-vetted IP citations, and institutional co-investment syndicates.",
      benefits: [
        "Curated deal flow scored by Technology Readiness Level (TRL)",
        "Pre-vetted IP, patent citations, and CSIR/IIT faculty founders",
        "One-click data room access and standardized deal terms",
        "Co-investment syndicate opportunities with sovereign funds",
      ],
      ctaText: "Join as Investor",
    },
    {
      id: "enterprise-buyers",
      title: "Enterprise Buyers",
      icon: Users2,
      stats: "210+ Enterprises",
      subtitle: "Find advanced technologies and trusted commercial partners.",
      description:
        "Cut through commercial hype to discover industrial-grade AI, robotics, clean energy, and advanced materials technologies tested and validated for commercial deployment.",
      benefits: [
        "Source commercially viable AI, robotics, and clean energy tech",
        "Accelerate internal R&D with pre-commercial pilot programs",
        "Enterprise-grade vendor security and compliance audits",
        "Direct introductions to technical founders and chief scientists",
      ],
      ctaText: "Source Solutions",
    },
    {
      id: "solution-providers",
      title: "Solution Providers",
      icon: Cog,
      stats: "180+ Partners",
      subtitle: "Showcase expertise and connect with growing deep-tech teams.",
      description:
        "Deliver mission-critical foundry access, prototyping, cleanroom fabrication, legal patent prosecution, and regulatory compliance advisory to funded deep-tech innovators.",
      benefits: [
        "Deliver specialized testing, fabrication, and cleanroom services",
        "Offer IP, patent prosecution, and patent landscape advisory",
        "Provide precision engineering, prototyping, and foundry access",
        "Gain recurring client mandates from growing deep-tech teams",
      ],
      ctaText: "Partner with Us",
    },
  ];

  const currentPersona = personas.find((p) => p.id === activeTab) || personas[0];
  const CurrentIcon = currentPersona.icon;

  return (
    <section
      id="about"
      className="py-16 lg:py-20 bg-slate-50/60 text-slate-900 border-b border-slate-200 w-full scroll-mt-16"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="w-full mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-100/90 text-blue-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>BUILT FOR THE DEEP-TECH ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Who Can Join Pi Bi Nexus?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
            A bespoke stakeholder network engineered to match proprietary technology with market demand and institutional capital.
          </p>
        </div>

        {/* Master-Detail Layout: Left Tabs + Right Details */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 w-full">
          
          {/* Left Side: 5 Vertical Persona Tabs Evenly Distributed */}
          <div className="w-full lg:w-[340px] xl:w-[380px] shrink-0 flex flex-col justify-between gap-3">
            {personas.map((persona) => {
              const Icon = persona.icon;
              const isActive = activeTab === persona.id;
              return (
                <button
                  key={persona.id}
                  type="button"
                  onClick={() => setActiveTab(persona.id)}
                  className={`w-full flex-1 min-h-[76px] lg:min-h-[80px] px-5 py-4 rounded-2xl text-left transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] text-white shadow-md scale-[1.01]"
                      : "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-bold text-sm sm:text-base ${isActive ? "text-white" : "text-slate-900 group-hover:text-blue-600"}`}>
                        {persona.title}
                      </div>
                      <div className={`text-xs mt-0.5 ${isActive ? "text-white/80" : "text-slate-500"}`}>
                        {persona.stats}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive
                        ? "text-white translate-x-1"
                        : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side: Detail Showcase for Selected Persona */}
          <div className="flex-1 w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between">
            <div>
              {/* Header inside detail card */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-r from-[#2563eb]/10 to-[#059669]/10 text-blue-600 border border-blue-200 flex items-center justify-center">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Stakeholder Focus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {currentPersona.title}
                  </h3>
                </div>
              </div>

              {/* Subtitle / Headline */}
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                {currentPersona.subtitle}
              </h4>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                {currentPersona.description}
              </p>

              {/* 4 Benefits with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {currentPersona.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                  >
                    <Check className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0 stroke-[3]" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row with CTA styled in Pi Bi Button Gradient */}
            <div className="pt-6 border-t border-slate-100 flex items-center">
              <button
                type="button"
                onClick={onOpenListing}
                className="px-7 py-3.5 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] hover:from-[#1d4ed8] hover:to-[#047857] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>{currentPersona.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
