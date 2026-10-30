"use client";

import { Search, Compass, TrendingUp, ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function CtaSection({ onOpenListing, onOpenContact }) {
  const benefits = [
    {
      title: "More Visibility",
      desc: "Reach global institutional investors and enterprise customers.",
      icon: Search,
    },
    {
      title: "More Opportunities",
      desc: "Access growth capital, strategic M&A, and commercial pilot markets.",
      icon: Compass,
    },
    {
      title: "More Growth",
      desc: "Get expert R&D translation and sovereign market expansion support.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Turning Innovation into Impact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Be Part of India&apos;s <br className="hidden sm:inline" />
              <span className="text-blue-600">Deep-Tech Growth Story</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl leading-relaxed">
              List your company, explore opportunities and connect with the right
              investors, customers and partners across the globe.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenListing}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Pi Bi Nexus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-slate-500" />
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Clean Value Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
