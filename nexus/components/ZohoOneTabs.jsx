"use client";

import { useState } from "react";
import {
  TrendingUp,
  Lock,
  Atom,
  Building2,
  Cpu,
  Check,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  ExternalLink,
} from "lucide-react";

export default function ZohoOneTabs({ onOpenListing }) {
  const [activeTab, setActiveTab] = useState("capital");

  const tabContents = {
    capital: {
      title: "Nexus Capital & M&A Syndicate",
      tagline: "Streamline your fundraising and strategic acquisition deal rooms.",
      desc: "Pi Bi Nexus One connects your technology directly with 300+ institutional venture capital firms, family offices, and sovereign wealth syndicates across India, the US, and Europe.",
      points: [
        {
          bold: "Standardized Deep-Tech Term Sheets:",
          text: "Pre-cleared SAFE and priced round templates aligned with Indian FDI regulations.",
        },
        {
          bold: "Automated Investor Matchmaking:",
          text: "Algorithmically match with funds actively looking for your specific TRL stage and domain.",
        },
        {
          bold: "Cap Table & Round Simulation:",
          text: "Model dilution across Seed, Series A, and strategic corporate investment rounds.",
        },
      ],
      previewBadge: "Institutional Syndicate Flow",
      metric1: "$4.2B+",
      metric1Label: "Capital Pipeline",
      metric2: "78.4%",
      metric2Label: "Match Success Rate",
      accent: "text-[#1374D6] bg-blue-50 border-blue-200",
      cta: "Explore Capital Network",
    },
    ip: {
      title: "Nexus Patent & IP Intelligence",
      tagline: "Benchmark your Technology Readiness Level and patent defensibility.",
      desc: "Our automated IP engine connects with the Indian Patent Office (IPO), USPTO, and WIPO to audit freedom-to-operate, track citation velocity, and compute scientific readiness.",
      points: [
        {
          bold: "Automated TRL 1-9 Scoring:",
          text: "Scientifically grade your prototype readiness to prove commercial viability to investors.",
        },
        {
          bold: "Global Patent Citation Index:",
          text: "Map forward and backward citations to measure your technology's defensible moat.",
        },
        {
          bold: "Academic Spinout Clearance:",
          text: "Standardized IP assignment protocols for founders spinning out from IITs, IISc, or CSIR.",
        },
      ],
      previewBadge: "Sovereign Patent Index",
      metric1: "3,400+",
      metric1Label: "Patents Tracked",
      metric2: "TRL 4-9",
      metric2Label: "Verified Ready",
      accent: "text-amber-800 bg-amber-50 border-amber-200",
      cta: "Run Patent Audit",
    },
    vdr: {
      title: "Nexus Virtual Data Room (VDR)",
      tagline: "Bank-grade confidentiality for institutional due diligence.",
      desc: "Protect proprietary schematics, clinical trial datasets, and financial audits with 256-bit AES encryption and dynamic recipient-specific watermarking.",
      points: [
        {
          bold: "Dynamic Watermarking & View-Only IP:",
          text: "Prevent unauthorized downloads of sensitive engineering CAD and source code.",
        },
        {
          bold: "Mutual NDA Enforcement:",
          text: "Digital signature tracking ensures no investor accesses your room without an executed NDA.",
        },
        {
          bold: "Granular Diligence Audit Trail:",
          text: "Track exactly which VC or acquirer reviewed your patents and for how many minutes.",
        },
      ],
      previewBadge: "ISO 27001 Diligence Vault",
      metric1: "256-Bit",
      metric1Label: "AES Military Encryption",
      metric2: "0%",
      metric2Label: "Data Leak History",
      accent: "text-[#00A859] bg-emerald-50 border-emerald-200",
      cta: "Provision Data Room",
    },
    procurement: {
      title: "Nexus Match: Enterprise Procurement",
      tagline: "Win high-value commercial contracts and industrial pilot deployments.",
      desc: "Enterprise buyers from automotive, defence, aerospace, and energy sectors publish active pilot mandates seeking breakthrough deep-tech solutions.",
      points: [
        {
          bold: "Fortune 500 Pilot Corridors:",
          text: "Fast-track vendor onboarding with pre-cleared legal and compliance agreements.",
        },
        {
          bold: "Government & Sovereign Mandates:",
          text: "Direct access to iDEX (Defence Innovation) and National Quantum Mission RFPs.",
        },
        {
          bold: "Commercial Deployment Advisory:",
          text: "Expert contract structuring to protect your IP during industrial testing pilots.",
        },
      ],
      previewBadge: "Enterprise Contract Hub",
      metric1: "500+",
      metric1Label: "Commercial Mandates",
      metric2: "210+",
      metric2Label: "Corporate Acquirers",
      accent: "text-[#E42528] bg-red-50 border-red-200",
      cta: "Source Commercial Pilots",
    },
    foundries: {
      title: "Nexus Labs: National Tech Transfer",
      tagline: "Direct fabrication, cleanroom, and testing facility access.",
      desc: "Tap into India's premier academic and national research infrastructure without building expensive capital-intensive in-house cleanrooms.",
      points: [
        {
          bold: "CSIR & IIT Madras Partner Access:",
          text: "Reserve cleanroom time, electron microscopy, and semiconductor fabrication equipment.",
        },
        {
          bold: "Certified Environmental Testing:",
          text: "Validate payloads for aerospace thermal extremes and industrial electromagnetic standards.",
        },
        {
          bold: "Faculty Scientific Board Access:",
          text: "Consult with leading domain researchers to optimize your technical blueprints.",
        },
      ],
      previewBadge: "National Research Grid",
      metric1: "25+",
      metric1Label: "Foundry Partners",
      metric2: "8",
      metric2Label: "Innovation Clusters",
      accent: "text-purple-700 bg-purple-50 border-purple-200",
      cta: "Access Partner Labs",
    },
  };

  const current = tabContents[activeTab];

  return (
    <section id="deal-network" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 w-full scroll-mt-16">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header - Full Width */}
        <div className="text-center w-full mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1374D6] mb-2">
            The Comprehensive Deep-Tech Platform
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            All your operations on one unified platform.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal max-w-4xl mx-auto">
            Every application you need to manage your deep-tech venture from academic spinout to multi-million dollar institutional exit.
          </p>
        </div>

        {/* Tab Buttons (Full Width Segmented Bar) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-200 w-full">
          {[
            { id: "capital", label: "Capital & Deals", icon: TrendingUp },
            { id: "ip", label: "Patent Intelligence", icon: Atom },
            { id: "vdr", label: "Virtual Data Room", icon: Lock },
            { id: "procurement", label: "Enterprise Pilots", icon: Building2 },
            { id: "foundries", label: "Tech Transfer & Labs", icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 100% Full Width Tab Content Body */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-xs w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            
            {/* Left Column: Feature Narrative & Checklist */}
            <div className="lg:col-span-7 space-y-6 w-full">
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded border uppercase tracking-wider inline-block mb-3 ${current.accent}`}>
                  {current.title}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {current.tagline}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
                  {current.desc}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3.5 pt-2">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00A859]/15 text-[#00A859] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed text-slate-700">
                      <strong className="text-slate-900 font-bold">{pt.bold} </strong>
                      <span>{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onOpenListing}
                  className="px-6 py-3 rounded-xl bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Clean Dashboard Preview Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6 w-full">
                
                {/* Mock Card Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A859] animate-pulse"></span>
                    <span className="text-sm font-bold text-slate-900">{current.previewBadge}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Live Sync</span>
                </div>

                {/* Key Metrics Blocks */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      {current.metric1Label}
                    </span>
                    <span className="text-3xl font-black text-slate-900 font-mono tracking-tight mt-1 block">
                      {current.metric1}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      {current.metric2Label}
                    </span>
                    <span className="text-3xl font-black text-slate-900 font-mono tracking-tight mt-1 block">
                      {current.metric2}
                    </span>
                  </div>
                </div>

                {/* Activity Simulator */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Recent Ecosystem Telemetry</div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Mutual NDA Signed:</span>
                      <span className="font-semibold text-slate-900">Tier-1 Sovereign Fund</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>TRL Benchmark:</span>
                      <span className="font-bold text-[#00A859]">TRL 7 Qualified</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Virtual Room Status:</span>
                      <span className="text-blue-700 font-semibold">256-Bit Encrypted</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
