"use client";

import { useState } from "react";
import { ArrowRight, Lock, ShieldCheck, CheckCircle2, FileText, ChevronRight } from "lucide-react";

export default function DealTombstones({ onOpenListing, onOpenDealModal }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const tombstones = [
    {
      id: 1,
      target: "AgriNext Systems",
      type: "Series A Growth Equity",
      category: "agritech",
      sector: "Agritech | AI & Hyperspectral Robotics",
      value: "$6,400,000",
      role: "Exclusive Lead Advisor to Founders",
      acquirer: "Tier-1 Agri-Commodity Conglomerate Syndicate",
      hq: "Bengaluru, India",
      status: "Closed & Executed",
      badge: "Completed Deal",
    },
    {
      id: 2,
      target: "QuantumLab Silicon",
      type: "Cross-Border Sovereign JV & Equity",
      category: "quantum",
      sector: "Quantum Computing & Photonics Qubits",
      value: "$25,000,000",
      role: "Strategic M&A & Tech Transfer Advisor",
      acquirer: "India ↔ US Defence Tech Consortium",
      hq: "Hyderabad, India",
      status: "Term Sheet Executed",
      badge: "In Due Diligence",
    },
    {
      id: 3,
      target: "TerraLoop Energy",
      type: "Industrial Asset & Growth Financing",
      category: "cleantech",
      sector: "CleanTech | Molten Salt Grid Storage",
      value: "$35,000,000",
      role: "Sole Financial Advisor",
      acquirer: "European Clean Infrastructure Fund",
      hq: "Pune, India",
      status: "Active Mandate",
      badge: "VDR Data Room Open",
    },
    {
      id: 4,
      target: "NeuroSense Diagnostics",
      type: "Strategic Corporate Acquisition",
      category: "medtech",
      sector: "MedTech | Non-Invasive Neural Telemetry",
      value: "$18,500,000",
      role: "Sell-Side M&A Advisor",
      acquirer: "Global Medical Devices Enterprise",
      hq: "Chennai, India",
      status: "Exclusivity Granted",
      badge: "Under Mutual NDA",
    },
    {
      id: 5,
      target: "MatCraft Aerospace",
      type: "Defence Carve-Out & Tech Transfer",
      category: "materials",
      sector: "Advanced Materials | Graphene Aerogels",
      value: "$12,000,000",
      role: "Lead Commercialization Advisor",
      acquirer: "National Aerospace Foundry & ISRO Vendor",
      hq: "Ahmedabad, India",
      status: "Final Stage Diligence",
      badge: "Closing Q4",
    },
    {
      id: 6,
      target: "RoboWorks Autonomous",
      type: "Series B Institutional Syndicate",
      category: "robotics",
      sector: "Industrial Robotics & Humanoid Warehouse Platforms",
      value: "$45,000,000",
      role: "Joint Bookrunner & Deal Facilitator",
      acquirer: "Global Automotive OEM & Sovereign VC",
      hq: "Delhi NCR, India",
      status: "Closed & Executed",
      badge: "Completed Deal",
    },
  ];

  const filtered = activeFilter === "all"
    ? tombstones
    : tombstones.filter((t) => t.category === activeFilter);

  return (
    <section id="companies" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 scroll-mt-16 w-full">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span>Verified M&A Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Selected Transactions & Active Mandates
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl font-normal">
              Representing breakthrough deep-tech companies on high-stakes capital raises, strategic acquisitions, and corporate joint ventures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 shrink-0">
            {[
              { id: "all", label: "All Deals" },
              { id: "quantum", label: "Quantum" },
              { id: "cleantech", label: "CleanTech" },
              { id: "medtech", label: "MedTech" },
              { id: "robotics", label: "Robotics" },
              { id: "materials", label: "Materials" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tombstone Grid (Full Width 3 Columns across 100% display) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filtered.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group w-full"
            >
              <div>
                {/* Top Badge & Value */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded ${
                      deal.badge === "Completed Deal"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {deal.badge}
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono">
                    {deal.value}
                  </span>
                </div>

                {/* Target Company Name */}
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {deal.target}
                </h3>
                
                {/* Transaction Type */}
                <p className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wide mt-1">
                  {deal.type}
                </p>

                {/* Sector */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                  {deal.sector}
                </p>

                {/* Advisory Role Details */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span className="text-slate-400">Advisory Role:</span>
                    <span className="font-semibold text-slate-800 text-right">{deal.role}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="text-slate-400">Acquirer / Syndicate:</span>
                    <span className="font-medium text-slate-700 text-right">{deal.acquirer}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="text-slate-400">Jurisdiction:</span>
                    <span className="font-medium text-slate-700">{deal.hq}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Prompt */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5" />
                  Mutual NDA
                </span>
                <button
                  type="button"
                  onClick={onOpenDealModal}
                  className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Teaser</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer / Compliance Notice - 100% Full Width */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 w-full">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              All transaction details are protected under institutional confidentiality agreements and ISO 27001 data governance.
            </span>
          </div>
          <button
            onClick={onOpenListing}
            className="font-bold text-slate-900 hover:text-blue-600 underline whitespace-nowrap cursor-pointer text-xs sm:text-sm"
          >
            Submit an M&A Mandate →
          </button>
        </div>

      </div>
    </section>
  );
}
