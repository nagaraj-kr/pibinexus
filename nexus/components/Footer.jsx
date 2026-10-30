"use client";

import { Shield, Lock, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="about" className="bg-white text-slate-600 border-t border-slate-200 text-xs w-full scroll-mt-16">
      
      {/* Top National Hubs Bar - 100% Width */}
      <div className="border-b border-slate-100 bg-slate-50/70 py-3 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-800 font-semibold text-xs">
            <span className="w-2 h-2 rounded-full bg-[#00A859]"></span>
            <span>National Deep-Tech Corridors:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-slate-500">
            <span className="hover:text-[#1374D6] transition-colors">Bengaluru</span>
            <span>•</span>
            <span className="hover:text-[#1374D6] transition-colors">Hyderabad</span>
            <span>•</span>
            <span className="hover:text-[#1374D6] transition-colors">Chennai</span>
            <span>•</span>
            <span className="hover:text-[#1374D6] transition-colors">Mumbai & Pune</span>
            <span>•</span>
            <span className="hover:text-[#1374D6] transition-colors">Delhi NCR</span>
            <span>•</span>
            <span className="hover:text-[#1374D6] transition-colors">Ahmedabad</span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links (Zoho One Structure) - 100% Width */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col with Real Pi Bi Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/pibi-logo.webp"
                alt="Pi Bi Nexus Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Pi Bi Nexus
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              The operating system for deep-tech. A unified platform connecting proprietary engineering and academic research with institutional capital, Virtual Data Rooms, and global commercialization corridors.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700">
                <Lock className="w-3.5 h-3.5 text-[#1374D6]" />
                <span>ISO 27001 & SOC 2 VDR</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700">
                <Shield className="w-3.5 h-3.5 text-[#00A859]" />
                <span>IPO & CSIR Aligned</span>
              </div>
            </div>
          </div>

          {/* Col 1: Integrated Modules */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-900 mb-3 text-[11px]">
              Modules & Apps
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#features" className="hover:text-[#1374D6] transition-colors">Nexus Capital & Deals</a></li>
              <li><a href="#features" className="hover:text-[#1374D6] transition-colors">Nexus Virtual Data Room</a></li>
              <li><a href="#features" className="hover:text-[#1374D6] transition-colors">Nexus Patent Intelligence</a></li>
              <li><a href="#features" className="hover:text-[#1374D6] transition-colors">Nexus Enterprise Procurement</a></li>
              <li><a href="#features" className="hover:text-[#1374D6] transition-colors">Nexus National Labs</a></li>
              <li><a href="#pricing" className="hover:text-[#1374D6] transition-colors">Transparent Pricing</a></li>
            </ul>
          </div>

          {/* Col 2: Sectors */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-900 mb-3 text-[11px]">
              Industry Verticals
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#deals" className="hover:text-[#1374D6] transition-colors">Quantum Computing</a></li>
              <li><a href="#deals" className="hover:text-[#1374D6] transition-colors">CleanTech & Grid Storage</a></li>
              <li><a href="#deals" className="hover:text-[#1374D6] transition-colors">MedTech & Neural AI</a></li>
              <li><a href="#deals" className="hover:text-[#1374D6] transition-colors">Aerospace & Defence</a></li>
              <li><a href="#deals" className="hover:text-[#1374D6] transition-colors">Advanced Materials</a></li>
              <li><a href="#deals" className="hover:text-[#1374D6] transition-colors">Robotics & Autonomous Drones</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & Trust */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-slate-900 mb-3 text-[11px]">
              Trust & Compliance
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#why-nexus" className="hover:text-[#1374D6] transition-colors">TRL Assessment Framework</a></li>
              <li><a href="#why-nexus" className="hover:text-[#1374D6] transition-colors">Institutional NDAs & Terms</a></li>
              <li><a href="#why-nexus" className="hover:text-[#1374D6] transition-colors">Security Architecture</a></li>
              <li><a href="#customers" className="hover:text-[#1374D6] transition-colors">Founder Case Studies</a></li>
              <li><a href="#terms" className="hover:text-[#1374D6] transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-[#1374D6] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar (Zoho Region & Copyright) */}
        <div className="mt-14 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>India (English)</span>
          </div>

          <p>© 2026 Pi Bi Nexus One. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
