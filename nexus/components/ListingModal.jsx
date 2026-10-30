"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  CheckCircle2,
  Building2,
  Atom,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export default function ListingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    city: "Bengaluru",
    domain: "Quantum Computing",
    trl: "TRL 6 - Prototype in Relevant Environment",
    patents: "3-5 Patents Filed",
    fundingStage: "Series A ($5M - $10M)",
    founderName: "",
    workEmail: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.companyName) {
        alert("Please enter your company name.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title & Steps indicator */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-200 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Commission Deep-Tech Listing</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                List Your Deep-Tech Venture
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Step {step} of 3 • Gain instant visibility across 300+ institutional investors and enterprise buyers.
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleNext} className="space-y-4">
              {step === 1 && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AeroDynamics Lab"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Deep-Tech Domain
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) =>
                        setFormData({ ...formData, domain: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Quantum Computing & Cryptography</option>
                      <option>Agritech & Synthetic BioSystems</option>
                      <option>MedTech & Neural Interfaces</option>
                      <option>Clean Energy & Grid Storage</option>
                      <option>Advanced Materials & Composites</option>
                      <option>Robotics & Industrial Automation</option>
                      <option>SpaceTech & Sovereign Defense</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Headquarters Hub
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Bengaluru</option>
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Pune / Mumbai</option>
                        <option>Delhi NCR</option>
                        <option>Ahmedabad</option>
                        <option>Other Indian City</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Website / DOI
                      </label>
                      <input
                        type="text"
                        placeholder="https://"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Technology Readiness Level (TRL)
                    </label>
                    <select
                      value={formData.trl}
                      onChange={(e) =>
                        setFormData({ ...formData, trl: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>TRL 4 - Component Validated in Lab</option>
                      <option>TRL 5 - Component Validated in Relevant Environment</option>
                      <option>TRL 6 - Prototype System Tested</option>
                      <option>TRL 7 - System Prototype in Operational Environment</option>
                      <option>TRL 8 - Actual System Completed and Qualified</option>
                      <option>TRL 9 - Full Commercial Operation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Patent Portfolio Status
                    </label>
                    <select
                      value={formData.patents}
                      onChange={(e) =>
                        setFormData({ ...formData, patents: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>1-2 Provisional Patents</option>
                      <option>3-5 Patents Filed</option>
                      <option>6-10 Patents (Multiple Granted)</option>
                      <option>10+ Patents with Global PCT Filings</option>
                      <option>Trade Secret / Academic Spinout IP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Target Round
                    </label>
                    <select
                      value={formData.fundingStage}
                      onChange={(e) =>
                        setFormData({ ...formData, fundingStage: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Pre-Seed / Institutional Grant ($500K - $1M)</option>
                      <option>Seed Round ($1M - $3M)</option>
                      <option>Series A ($3M - $8M)</option>
                      <option>Series B+ Growth ($10M+)</option>
                      <option>Enterprise Pilot / Commercial Contract Only</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Founder / Technical Lead Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Arjun Nair"
                      value={formData.founderName}
                      onChange={(e) =>
                        setFormData({ ...formData, founderName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Institutional / Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@company.in"
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex items-start gap-2.5 text-xs text-blue-900">
                    <ShieldCheck className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>
                      Your company information is screened under strict mutual NDA. Cap-table and proprietary schematics remain encrypted in your private Virtual Data Room.
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer ml-auto"
                >
                  <span>{step === 3 ? "Submit Verification" : "Continue"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Application Received!
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
              Welcome to the Pi Bi Nexus Deep-Tech Ecosystem. Our verification committee will review your patents and issue your verified listing badge within 24 hours.
            </p>

            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Application ID:</span>
                <span className="font-mono font-bold text-slate-800">PBN-2026-8941</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Venture:</span>
                <span className="font-bold text-slate-800">{formData.companyName || "DeepTech Venture"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Data Room Status:</span>
                <span className="text-emerald-600 font-semibold">Provisioned & Encrypted</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

