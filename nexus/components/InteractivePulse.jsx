"use client";

import { useState } from "react";
import {
  TrendingUp,
  Globe2,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function InteractivePulse() {
  const [activeTab, setActiveTab] = useState("deals");

  const deals = [
    {
      sector: "Quantum Computing & Sovereign Cryptography",
      ticket: "$15M - $25M",
      stage: "Series B",
      region: "Bengaluru ↔ Silicon Valley",
      leads: "Tier-1 Sovereign Fund & Tech VC",
      status: "Due Diligence Active",
    },
    {
      sector: "Solid-State Battery & Grid Energy Storage",
      ticket: "$35M - $50M",
      stage: "Growth / Pre-IPO",
      region: "Pune ↔ European CleanTech Alliance",
      leads: "Global Automotive OEM Strategic",
      status: "Term Sheet Issued",
    },
    {
      sector: "Autonomous Surgical Precision Robotics",
      ticket: "$8M - $12M",
      stage: "Series A",
      region: "Chennai ↔ Japan Healthcare Consortium",
      leads: "Medical Robotics Specialized Fund",
      status: "VDR Data Room Open",
    },
  ];

  const patentMetrics = [
    { domain: "AI, Neural Processing & Vision", count: "1,140+ Patents", growth: "+34% YoY" },
    { domain: "Semiconductors & Photonics Hardware", count: "890+ Patents", growth: "+42% YoY" },
    { domain: "Advanced Materials & Nanotech", count: "680+ Patents", growth: "+28% YoY" },
    { domain: "Biotech & Synthetic Biology", count: "720+ Patents", growth: "+31% YoY" },
  ];

  return (
    <section id="governance" className="py-20 bg-white text-slate-900 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Live National Deep-Tech Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Institutional Deal Flow & Sovereign IP Index
            </h2>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex items-center p-1 rounded-lg bg-slate-100 border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveTab("deals")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "deals"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Active Deal Pipeline
            </button>
            <button
              onClick={() => setActiveTab("patents")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "patents"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Patents & Research Index
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {activeTab === "deals" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                      {deal.stage}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {deal.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-3">
                    {deal.sector}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Target Capital:</span>
                      <span className="font-bold text-slate-900 font-mono">{deal.ticket}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Corridor:</span>
                      <span className="text-slate-800 font-medium">{deal.region}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Lead Syndicate:</span>
                      <span className="text-slate-800 font-medium">{deal.leads}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">ISO 27001 Protected</span>
                  <a
                    href="#deal-network"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>VDR Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patentMetrics.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100 mb-3.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-semibold text-slate-600 mb-2">
                    {p.domain}
                  </h3>
                  <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono">
                    {p.count}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Growth Rate</span>
                  <span className="font-bold text-emerald-700">{p.growth}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Minimal Bottom Bar */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-blue-600 shrink-0" />
            <div className="text-xs font-medium text-slate-700">
              <span className="font-bold text-slate-900">Sovereign Technology Transfer Corridors:</span> Direct MoUs with US, European Union, Japan, and GCC innovation hubs.
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-800">
              <strong className="text-blue-600">$4.2B+</strong> Pipeline
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-800">
              <strong className="text-emerald-600">78.4%</strong> Match Success
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
