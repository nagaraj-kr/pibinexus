"use client";

import { useState, useEffect } from "react";
import { Search, X, ArrowRight, Building2, Atom, Sparkles, TrendingUp } from "lucide-react";

export default function CommandPalette({ isOpen, onClose, onSelectCompany }) {
  const [query, setQuery] = useState("");

  const searchItems = [
    { title: "AgriNext", category: "Agritech | AI", type: "Company", desc: "Autonomous crop diagnostics & robotics" },
    { title: "QuantumLab", category: "Quantum Computing", type: "Company", desc: "Room-temperature quantum processors" },
    { title: "NeuroSense", category: "MedTech | AI", type: "Company", desc: "Neural telemetry for brain health" },
    { title: "TerraLoop", category: "Clean Energy", type: "Company", desc: "Molten salt energy storage" },
    { title: "MatCraft", category: "Advanced Materials", type: "Company", desc: "Graphene aerogels for space heat shields" },
    { title: "RoboWorks", category: "Robotics | Automation", type: "Company", desc: "Warehouse collaborative humanoid robots" },
    { title: "National Quantum Mission (DST)", category: "Government Mandate", type: "Opportunity", desc: "$750M sovereign allocation" },
    { title: "Virtual Data Room (VDR) Portal", category: "Deal Security", type: "Tool", desc: "SOC 2 Type II diligence vaults" },
    { title: "Series A CleanTech Syndicate", category: "Deal Network", type: "Opportunity", desc: "$25M Cross-border round closing" },
  ];

  const filtered = query.trim() === ""
    ? searchItems
    : searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search deep-tech startups, sectors, deals, or patents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={onClose}
                className="p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>

                <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-slate-400">
              No results found for &quot;{query}&quot;. Try searching for &quot;Quantum&quot;, &quot;AgriNext&quot;, or &quot;Clean Energy&quot;.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Pi Bi Nexus Unified Ecosystem Index</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
}

