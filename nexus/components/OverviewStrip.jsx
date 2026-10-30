"use client";

import { ArrowRight, Eye, Handshake, TrendingUp, Check } from "lucide-react";

export default function OverviewStrip() {
  const overviews = [
    {
      id: "companies",
      label: "Visibility",
      sublabel: "Showcase, Get Discovered, Build Credibility",
      icon: Eye,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "text-emerald-600 hover:text-emerald-700",
      checkColor: "text-emerald-600",
      shortText:
        "List your company, showcase innovations and get discovered by investors, customers and partners.",
      bullets: [
        "Company Listings (Free)",
        "Innovation Showcase",
        "Industry Categories",
        "News, Insights and Success Stories",
      ],
      linkText: "Get Your Company Listed",
      href: "#companies",
    },
    {
      id: "deal-network",
      label: "Deal Network",
      sublabel: "Capital, Partnerships and Transactions",
      icon: Handshake,
      color: "bg-blue-50 text-[#2563eb] border-blue-200",
      accent: "text-[#2563eb] hover:text-blue-700",
      checkColor: "text-[#2563eb]",
      shortText:
        "Connect with investors, buyers and strategic partners. Close deals in secure deal rooms.",
      bullets: [
        "Investment Opportunities",
        "M&A and Strategic Deals",
        "Secure Deal Management (VDR, DMS)",
        "Due Diligence Support",
      ],
      linkText: "Explore Deal Network",
      href: "#deal-network",
    },
    {
      id: "growth",
      label: "Growth",
      sublabel: "Business Opportunities and Expert Support",
      icon: TrendingUp,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "text-amber-600 hover:text-amber-700",
      checkColor: "text-amber-600",
      shortText:
        "Find customers, business partners and technology solutions to grow your business.",
      bullets: [
        "Customer and Partner Opportunities",
        "Technology Consulting and Solutions",
        "AI, Automation and R&D Support",
        "Market Expansion Support",
      ],
      linkText: "Explore Growth Opportunities",
      href: "#growth",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center w-full mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">
            A Complete Ecosystem for Deep-Tech Success
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            One Platform. Three Ways to Create Business Value.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Pi Bi Nexus brings together companies, investors, customers and solution providers to accelerate the journey from innovation to impact.
          </p>
        </div>

        {/* 3 Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 w-full">
          {overviews.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-13 h-13 rounded-2xl flex items-center justify-center border mb-6 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    {item.sublabel}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {item.shortText}
                  </p>

                  {/* 4 Feature Bullets with Checkmarks */}
                  <ul className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    {item.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                        <Check className={`w-4 h-4 shrink-0 stroke-[3] ${item.checkColor}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${item.accent} transition-colors group`}
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
