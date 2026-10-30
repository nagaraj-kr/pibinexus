"use client";

import { Handshake, Megaphone, TrendingUp, Check, ArrowRight } from "lucide-react";

export default function ThreePillars({ onOpenListing, onOpenDealModal, onOpenGrowthModal }) {
  const pillars = [
    {
      id: "deal-network",
      title: "Deal Network",
      tagline: "Capital, Partnerships and Transactions",
      description:
        "Connect with investors, buyers, strategic partners and explore M&A opportunities.",
      icon: Handshake,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      accentColor: "blue",
      features: [
        "Investment Opportunities",
        "M&A and Strategic Deals",
        "Secure Deal Management (VDR, DMS)",
        "Due Diligence Support",
      ],
      actionText: "Explore Deal Network",
      actionHandler: onOpenDealModal,
    },
    {
      id: "visibility",
      title: "Visibility",
      tagline: "Showcase, Get Discovered, Build Credibility",
      description:
        "List your company, showcase innovations and get visibility among global investors, customers and partners.",
      icon: Megaphone,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accentColor: "emerald",
      features: [
        "Company Listings (Free)",
        "Innovation Showcase",
        "Industry Categories",
        "News, Insights and Success Stories",
      ],
      actionText: "Get Your Company Listed",
      actionHandler: onOpenListing,
    },
    {
      id: "growth",
      title: "Growth",
      tagline: "Business Opportunities and Expert Support",
      description:
        "Find customers, business partners and technology solutions to grow your business.",
      icon: TrendingUp,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
      accentColor: "amber",
      features: [
        "Customer and Partner Opportunities",
        "Technology Consulting and Solutions",
        "AI, Automation and R&D Support",
        "Market Expansion Support",
      ],
      actionText: "Explore Growth Opportunities",
      actionHandler: onOpenGrowthModal,
    },
  ];

  return (
    <section id="advisory" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2.5">
            A Complete Ecosystem for Deep-Tech Success
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Platform. Three Ways to Create Business Value.
          </h2>
          <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-normal">
            Pi Bi Nexus brings together companies, investors, customers and solution providers
            to accelerate the journey from innovation to impact.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${pillar.iconBg}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1 mb-3">
                    {pillar.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-3 pt-5 border-t border-slate-100">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <div
                          className={`rounded-full p-0.5 mt-0.5 shrink-0 ${
                            pillar.accentColor === "blue"
                              ? "text-blue-600 bg-blue-50"
                              : pillar.accentColor === "emerald"
                              ? "text-emerald-600 bg-emerald-50"
                              : "text-amber-600 bg-amber-50"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                        <span className="font-medium text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={pillar.actionHandler}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold tracking-tight cursor-pointer ${
                      pillar.accentColor === "blue"
                        ? "text-blue-600 hover:text-blue-700"
                        : pillar.accentColor === "emerald"
                        ? "text-emerald-600 hover:text-emerald-700"
                        : "text-amber-600 hover:text-amber-700"
                    }`}
                  >
                    <span>{pillar.actionText}</span>
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
