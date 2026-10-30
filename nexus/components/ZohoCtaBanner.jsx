"use client";

import { useState } from "react";
import { ArrowRight, PhoneCall, Check } from "lucide-react";

export default function ZohoCtaBanner({ onOpenListing, onOpenContact }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenListing();
  };

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200 w-full">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 lg:p-20 text-center space-y-6 shadow-xl relative overflow-hidden w-full">
          
          {/* Subtle Pi Bi brand tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
            <span>India&apos;s Deep-Tech Operating System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight w-full max-w-5xl mx-auto">
            Ready to bring your deep-tech breakthrough to the world?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal">
            Join 1,200+ deep-tech companies and 300+ institutional investors already operating on Pi Bi Nexus One.
          </p>

          {/* Email input + CTA */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 pt-3"
          >
            <input
              type="email"
              placeholder="Enter your institutional work email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-slate-800 text-base text-white placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-[#2563eb]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] hover:from-[#1d4ed8] hover:to-[#047857] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shrink-0 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Secondary contact link */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-7 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00A859]" />
              Zero Commission
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00A859]" />
              Instant Free Verification
            </span>
            <button
              type="button"
              onClick={onOpenContact}
              className="text-[#38bdf8] hover:text-white font-bold underline cursor-pointer"
            >
              Talk to Our Team →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
