"use client";

import { useState } from "react";
import {
  ArrowRight,
  Sprout,
  Atom,
  Activity,
  Zap,
  Boxes,
  Bot,
  ExternalLink,
  ShieldCheck,
  FileText,
  Lock,
} from "lucide-react";

export default function FeaturedCompanies({ onOpenListing }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const categories = [
    { id: "all", label: "All Sectors" },
    { id: "agritech", label: "Agritech | AI" },
    { id: "quantum", label: "Quantum Computing" },
    { id: "medtech", label: "MedTech | AI" },
    { id: "cleanenergy", label: "Clean Energy" },
    { id: "materials", label: "Advanced Materials" },
    { id: "robotics", label: "Robotics | Automation" },
  ];

  const companies = [
    {
      id: "agrinext",
      name: "AgriNext",
      sector: "Agritech | AI",
      categoryKey: "agritech",
      icon: Sprout,
      iconColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      tagline: "Autonomous crop diagnostics and soil microbiome analytics.",
      description:
        "Sub-meter hyperspectral imaging paired with autonomous micro-rovers to eliminate crop disease before visible onset.",
      trl: "TRL 8 (Commercial Deployment)",
      patents: "12 Patents Filed (5 Granted)",
      hq: "Bengaluru, Karnataka",
      funding: "Series A ($6.4M Raised)",
      leadPartner: "ICAR & IIT Mandi Tech Transfer",
    },
    {
      id: "quantumlab",
      name: "QuantumLab",
      sector: "Quantum Computing",
      categoryKey: "quantum",
      icon: Atom,
      iconColor: "text-blue-700 bg-blue-50 border-blue-200",
      tagline: "Room-temperature quantum photonics processors.",
      description:
        "Silicon nitride photonic integrated circuits providing quantum key distribution (QKD) and cryptographic sovereign infrastructure.",
      trl: "TRL 6 (System Prototype Validated)",
      patents: "19 Patents Filed (8 Granted)",
      hq: "Hyderabad, Telangana",
      funding: "Seed ($3.2M) + DST National Quantum Mission Grant",
      leadPartner: "Centre for Quantum Tech & IISc",
    },
    {
      id: "neurosense",
      name: "NeuroSense",
      sector: "MedTech | AI",
      categoryKey: "medtech",
      icon: Activity,
      iconColor: "text-sky-700 bg-sky-50 border-sky-200",
      tagline: "Non-invasive neural telemetry for early neurodegenerative detection.",
      description:
        "Ultra-low latency wearable sensor array decoding ocular micro-saccades for clinical Parkinson's & Alzheimer's screening.",
      trl: "TRL 7 (Clinical Validation Complete)",
      patents: "14 Patents Filed (6 Granted)",
      hq: "Chennai, Tamil Nadu",
      funding: "Series A ($5.0M Raised)",
      leadPartner: "NIMHANS & IIT Madras Bio-Incubator",
    },
    {
      id: "terraloop",
      name: "TerraLoop",
      sector: "Clean Energy",
      categoryKey: "cleanenergy",
      icon: Zap,
      iconColor: "text-green-700 bg-green-50 border-green-200",
      tagline: "Long-duration molten salt thermal energy storage.",
      description:
        "Round-trip 92% thermal efficiency storage enabling 24/7 continuous base-load renewable power for industrial metallurgy.",
      trl: "TRL 8 (Industrial Pilot Active)",
      patents: "9 Patents Filed (4 Granted)",
      hq: "Pune, Maharashtra",
      funding: "Series A ($8.1M Raised)",
      leadPartner: "CSIR-NCL & Tata Power Pilot",
    },
    {
      id: "matcraft",
      name: "MatCraft",
      sector: "Advanced Materials",
      categoryKey: "materials",
      icon: Boxes,
      iconColor: "text-purple-700 bg-purple-50 border-purple-200",
      tagline: "Graphene aerogels for space and aerospace thermal insulation.",
      description:
        "Synthesizing ultralight ceramic aerogel matrices capable of withstanding 1,400°C reentry thermal gradients at 1/5th the mass.",
      trl: "TRL 7 (Spacecraft Subsystem Tested)",
      patents: "16 Patents Filed (9 Granted)",
      hq: "Ahmedabad, Gujarat",
      funding: "Pre-Series A ($3.8M Raised)",
      leadPartner: "ISRO IN-SPACe & IIT Gandhinagar",
    },
    {
      id: "roboworks",
      name: "RoboWorks",
      sector: "Robotics | Automation",
      categoryKey: "robotics",
      icon: Bot,
      iconColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
      tagline: "Heavy-payload cooperative warehouse humanoid platforms.",
      description:
        "Autonomous mobile manipulators with tactile haptic sensors built for hostile factory sorting and hazardous material handling.",
      trl: "TRL 8 (Commercial Field Operations)",
      patents: "21 Patents Filed (11 Granted)",
      hq: "Gurugram, Delhi NCR",
      funding: "Series B ($14.5M Raised)",
      leadPartner: "ARCI & Automotive OEM Consortium",
    },
  ];

  const filteredCompanies =
    activeCategory === "all"
      ? companies
      : companies.filter((c) => c.categoryKey === activeCategory);

  return (
    <section id="companies" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">
              Featured Deep-Tech Companies
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Innovations Shaping a Better Future
            </h2>
          </div>

          <a
            href="#directory"
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory("all");
            }}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            <span>View All Companies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((comp) => {
            const Icon = comp.icon;
            return (
              <div
                key={comp.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${comp.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">
                          {comp.name}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500">
                          {comp.sector}
                        </span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-bold border border-slate-200">
                      {comp.trl.split(" ")[0]}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-800 mb-1.5">
                    {comp.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4 line-clamp-2">
                    {comp.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-600">
                    <span className="inline-flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      <FileText className="w-3 h-3 text-blue-600" />
                      {comp.patents.split("(")[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      {comp.hq.split(",")[0]}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {comp.funding.split(" ")[0]} {comp.funding.split(" ")[1]}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCompany(comp)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    <span>View Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep-Tech Dossier Modal */}
        {selectedCompany && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 text-slate-900 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${selectedCompany.iconColor}`}>
                    {(() => {
                      const Icon = selectedCompany.icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{selectedCompany.name}</h3>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded border border-emerald-200">
                        Verified
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{selectedCompany.sector} • {selectedCompany.hq}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCompany(null)}
                  className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3.5 text-xs">
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-slate-500 text-[10px] mb-1">
                    Core Breakthrough
                  </h4>
                  <p className="text-slate-700 leading-relaxed font-normal">
                    {selectedCompany.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-semibold text-slate-500 block">Technology Readiness</span>
                    <span className="font-bold text-slate-900">{selectedCompany.trl}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-semibold text-slate-500 block">Intellectual Property</span>
                    <span className="font-bold text-slate-900">{selectedCompany.patents}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-semibold text-slate-500 block">Capital Stage</span>
                    <span className="font-bold text-slate-900">{selectedCompany.funding}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-semibold text-slate-500 block">R&D Partner</span>
                    <span className="font-bold text-slate-900">{selectedCompany.leadPartner}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    Patents and diligence cap tables are secured inside the Virtual Data Room (VDR).
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedCompany(null)}
                  className="px-4 py-2 rounded-lg border border-slate-200 font-semibold text-xs text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCompany(null);
                    onOpenListing();
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request VDR Access</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
