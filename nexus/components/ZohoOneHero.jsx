"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ZohoOneHero({ onOpenListing }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenListing();
  };

  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-white text-slate-900 border-b border-slate-200 w-full scroll-mt-20">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* 100% Full Width Signature Headline */}
        <div className="text-center w-full space-y-4 mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12] w-full">
            Run your entire deep-tech venture on one{" "}
            <span className="text-[#1374D6]">unified operating system</span>.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-normal w-full max-w-6xl mx-auto">
            Replace disconnected spreadsheets, patent portals, and cold emails.
            Pi Bi Nexus One unifies capital access, Virtual Data Rooms, patent intelligence, and enterprise contracts into one seamless platform.
          </p>
        </div>

        {/* 100% Wide Work Email Conversion Form */}
        <div className="w-full max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2 rounded-2xl border-2 border-slate-300 bg-white shadow-sm focus-within:border-[#2563eb] transition-all w-full"
          >
            <input
              type="email"
              placeholder="Enter your work email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] hover:from-[#1d4ed8] hover:to-[#047857] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-sm"
            >
              <span>Start Free Listing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Micro trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-7 mt-4 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00A859] stroke-[3]" />
              Zero Commission
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00A859] stroke-[3]" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00A859] stroke-[3]" />
              ISO 27001 Data Security
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
