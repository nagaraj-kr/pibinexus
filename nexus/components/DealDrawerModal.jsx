"use client";

import { useState } from "react";
import {
  X,
  Handshake,
  TrendingUp,
  Shield,
  FileText,
  Lock,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function DealDrawerModal({ isOpen, onClose, type = "deal" }) {
  const [scheduled, setScheduled] = useState(false);
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const isDeal = type === "deal";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative bg-white text-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                isDeal
                  ? "bg-blue-50 text-blue-600 border-blue-200"
                  : "bg-amber-50 text-amber-600 border-amber-200"
              }`}
            >
              {isDeal ? <Handshake className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {isDeal ? "Pi Bi Nexus Deal Network" : "Commercial Growth & Advisory"}
              </h3>
              <p className="text-xs text-slate-500">
                {isDeal
                  ? "Institutional capital matchmaking & confidential M&A corridors"
                  : "Enterprise pilot deployments & sovereign technology commercialization"}
              </p>
            </div>
          </div>

          <div className="space-y-4 py-2 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                {isDeal ? "Key Deal Network Capabilities" : "Growth Acceleration Matrix"}
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Curated syndicated rounds ($1M - $50M+) with verified sovereign participation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>256-bit AES encrypted Virtual Data Rooms (VDR) with granular watermarking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Standardized Indian Deep-Tech Term Sheet & SAFE agreements</span>
                </li>
              </ul>
            </div>

            {!scheduled ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setScheduled(true);
                }}
                className="space-y-3 pt-2"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Institutional or Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@fund.com or director@enterprise.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Private Briefing</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-1">
                <p className="font-bold text-sm">Briefing Requested Successfully!</p>
                <p className="text-xs text-emerald-700">
                  Our ecosystem director will send a confidential calendar invitation to {email} within 2 hours.
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-400" />
              Institutional NDA Protected
            </span>
            <button
              onClick={onClose}
              className="font-bold text-slate-600 hover:text-slate-900"
            >
              Dismiss
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

