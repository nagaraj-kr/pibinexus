"use client";

import { useState } from "react";
import { Atom, Zap, Activity, Rocket, Boxes, Cpu, ArrowRight } from "lucide-react";

export default function IndustryVerticals({ onOpenDealModal }) {
  const [activeVertical, setActiveVertical] = useState(0);

  const verticals = [
    {
      title: "Quantum Computing & Photonics",
      icon: Atom,
      stats: "$420M Pipeline Value",
      dealsCount: "14 Active Mandates",
      desc: "Advising pioneering teams developing room-temperature optical quantum processors, silicon nitride waveguides, and quantum-safe cryptography.",
      keySubsectors: [
        "Photonic Integrated Circuits (PIC)",
        "Quantum Key Distribution (QKD)",
        "Cryogenic Sensor Arrays",
        "Quantum Algorithm Frameworks",
      ],
      recentAcquirers: "Sovereign Defence Labs, Global Cloud Hyperscalers, Security Funds",
    },
    {
      title: "CleanTech & Grid Energy Storage",
      icon: Zap,
      stats: "$850M Pipeline Value",
      dealsCount: "22 Active Mandates",
      desc: "Guiding next-generation thermal molten salt, flow battery, and hydrogen storage ventures into joint ventures with industrial power conglomerates.",
      keySubsectors: [
        "Long-Duration Energy Storage (LDES)",
        "Molten Salt Thermal Systems",
        "Green Hydrogen Electrolyzers",
        "Industrial Decarbonization Tech",
      ],
      recentAcquirers: "Utility Conglomerates, Global Infrastructure Funds, Automotive OEMs",
    },
    {
      title: "MedTech, Biosystems & Neural AI",
      icon: Activity,
      stats: "$380M Pipeline Value",
      dealsCount: "18 Active Mandates",
      desc: "Representing clinical-stage medical device, neuro-telemetry, and diagnostic platform creators through FDA/DCGI milestones and strategic M&A exits.",
      keySubsectors: [
        "Ocular & Neural Micro-Telemetry",
        "Point-of-Care Biosensors",
        "AI Diagnostic Pathology",
        "Surgical Robotics End-Effectors",
      ],
      recentAcquirers: "Global Healthcare Devices Conglomerates, Private Equity Groups",
    },
    {
      title: "Aerospace, Defence & Autonomous Systems",
      icon: Rocket,
      stats: "$610M Pipeline Value",
      dealsCount: "19 Active Mandates",
      desc: "Assisting defence innovators in commercializing satellite subsystems, autonomous drone swarms, and sovereign surveillance tech via cross-border JVs.",
      keySubsectors: [
        "Small-Sat Propulsion & Telemetry",
        "Autonomous Swarm Software",
        "Electronic Warfare Hardware",
        "High-Altitude Pseudo-Satellites",
      ],
      recentAcquirers: "Prime Defence Contractors, Sovereign Wealth Funds, National Foundries",
    },
    {
      title: "Advanced Materials & Aerogels",
      icon: Boxes,
      stats: "$290M Pipeline Value",
      dealsCount: "11 Active Mandates",
      desc: "Capital syndication and commercialization for ultralight graphene aerogels, silicon carbide substrates, and extreme-temperature composite ceramics.",
      keySubsectors: [
        "Graphene & Carbon Aerogels",
        "Extreme Heat Thermal Barriers",
        "Wide-Bandgap Semiconductors",
        "Aerospace Structural Ceramics",
      ],
      recentAcquirers: "Advanced Materials Multinationals, Aerospace OEMs, Specialized PE",
    },
    {
      title: "Industrial Robotics & Automation",
      icon: Cpu,
      stats: "$530M Pipeline Value",
      dealsCount: "16 Active Mandates",
      desc: "Structuring acquisitions and strategic enterprise investments for heavy-payload cooperative robots, tactile haptics, and warehouse automation.",
      keySubsectors: [
        "Mobile Manipulator Humanoids",
        "Tactile Gripper Sensors",
        "Factory Computer Vision",
        "Warehouse Logistics Autonomous Fleet",
      ],
      recentAcquirers: "Global E-Commerce Logistics Giants, Tier-1 Auto Suppliers",
    },
  ];

  return (
    <section id="verticals" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2.5">
            Specialized Sector Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Deep-Tech Industry Verticals
          </h2>
          <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-normal">
            Our sector-focused M&A partners hold advanced degrees in engineering and physics, ensuring technical depth when presenting proprietary assets to institutional acquirers.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((vert, idx) => {
            const Icon = vert.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Stat */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                      {vert.dealsCount}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {vert.title}
                  </h3>
                  <div className="text-xs font-bold text-slate-500 font-mono mb-3">
                    {vert.stats}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {vert.desc}
                  </p>

                  {/* Subsectors */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Coverage Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {vert.keySubsectors.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-50 text-slate-700 border border-slate-200 font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Buyer network active</span>
                  <button
                    type="button"
                    onClick={onOpenDealModal}
                    className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Teasers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

