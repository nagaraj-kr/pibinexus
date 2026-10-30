"use client";

import { useState } from "react";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Building2,
  TrendingUp,
  Handshake,
  Lock,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

export default function Hero({ onOpenListing, onExploreOpportunities, onOpenSearch }) {
  const [dealQuery, setDealQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");

  const quickFilters = [
    "Quantum Computing",
    "CleanTech Energy",
    "Robotics & Drones",
    "MedTech & Neural AI",
    "Advanced Materials",
    "SpaceTech Defence",
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onOpenSearch();
  };

  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50/80 via-white to-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-800 text-xs font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>Independent M&A Advisory & Deep-Tech Capital Syndicate</span>
          </div>
        </div>

        {/* Editorial Headline (Inspired by Martin Wolf & Benchmark International) */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Connecting <span className="font-serif italic font-normal text-blue-700">Breakthrough Innovation</span> with
            Capital, Acquirers and Growth.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Pi Bi Nexus is India&apos;s specialized technology investment banking & M&A platform. We advise founders, institutional funds, and enterprise buyers on acquisitions, growth syndicates, and sovereign commercialization.
          </p>
        </div>

        {/* Giant Search & Transaction Finder (Inspired by MergersCorp & Corum Group) */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3 sm:p-4 mb-10">
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition-all">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search active mandates, patents, or acquirer criteria (e.g. Series A, $10M+, Photonic Qubits)..."
                value={dealQuery}
                onChange={(e) => setDealQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            {/* Quick Sector Selector */}
            <div className="sm:w-48 shrink-0">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-600 cursor-pointer"
              >
                <option value="all">All Sectors & Verticals</option>
                <option value="quantum">Quantum & Semiconductors</option>
                <option value="cleantech">Clean Energy & Storage</option>
                <option value="medtech">MedTech & Neural AI</option>
                <option value="robotics">Robotics & Autonomous Systems</option>
                <option value="materials">Advanced Materials & Aerogels</option>
              </select>
            </div>

            {/* Search CTA */}
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Explore Deals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick filter pills */}
          <div className="pt-3 px-1 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">
              Popular Mandates:
            </span>
            {quickFilters.map((tag, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDealQuery(tag);
                  onOpenSearch();
                }}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Institutional Track Record Strip (Inspired by Nash Advisory & Martin Wolf) */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
              $4.2B+
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Active Deal Pipeline
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">M&A, growth equity & syndicates</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
              1,200+
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Deep-Tech Companies
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">TRL 4-9 scored & verified IP</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
              300+
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Institutional Acquirers
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">PE funds, strategics & sovereign buyers</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
              100%
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              VDR Security Integrity
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">ISO 27001 & SOC 2 diligence rooms</p>
          </div>

        </div>

        {/* Dual Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 text-center">
          <button
            type="button"
            onClick={onOpenListing}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>List Your Tech Company (Confidential)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={onExploreOpportunities}
            className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 rounded-xl font-semibold text-sm border border-slate-300 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>View M&A Deal Tombstones</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
