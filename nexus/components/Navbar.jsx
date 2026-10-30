"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ onOpenListing, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3"
          : "bg-white border-b border-slate-200/70 py-4"
      }`}
    >
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo with Real Pi Bi Brand Mark */}
          <div className="flex items-center gap-10">
            <a href="#hero" className="flex items-center gap-3.5 group">
              <img
                src="/pibi-logo.webp"
                alt="Pi Bi Logo"
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />

              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Pi Bi Nexus
              </span>
            </a>

            {/* Navigation List with Increased Font Size (text-base / 16px) */}
            <nav className="hidden lg:flex items-center gap-2.5 text-base font-semibold text-slate-700">
              <a
                href="#hero"
                className="px-4 py-2 text-blue-600 font-bold hover:bg-slate-50 rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="#companies"
                className="px-4 py-2 hover:text-[#2563eb] hover:bg-slate-50 rounded-lg transition-colors"
              >
                Companies
              </a>
              <a
                href="#deal-network"
                className="px-4 py-2 hover:text-[#2563eb] hover:bg-slate-50 rounded-lg transition-colors"
              >
                Deal Network
              </a>
              <a
                href="#growth"
                className="px-4 py-2 hover:text-[#2563eb] hover:bg-slate-50 rounded-lg transition-colors"
              >
                Growth
              </a>
              <a
                href="#insights"
                className="px-4 py-2 hover:text-[#2563eb] hover:bg-slate-50 rounded-lg transition-colors"
              >
                Insights
              </a>
              <a
                href="#about"
                className="px-4 py-2 hover:text-[#2563eb] hover:bg-slate-50 rounded-lg transition-colors"
              >
                About
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenSearch}
              className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer p-2 rounded-lg hover:bg-slate-100"
              title="Search Ecosystem (Ctrl+K)"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            <a
              href="#signin"
              className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#2563eb] transition-colors"
            >
              Sign In
            </a>

            {/* Start Free Listing Button with Increased Font Size */}
            <button
              type="button"
              onClick={onOpenListing}
              className="px-5 py-2.5 rounded-lg bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] hover:from-[#1d4ed8] hover:to-[#047857] text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Start Free Listing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-3 pb-6 bg-white border-b border-slate-200 shadow-lg">
          <div className="flex flex-col gap-2 text-base font-semibold text-slate-800">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-blue-600 font-bold bg-blue-50/70 rounded-lg"
            >
              Home
            </a>
            <a
              href="#companies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 hover:bg-slate-50 rounded-lg"
            >
              Companies
            </a>
            <a
              href="#deal-network"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 hover:bg-slate-50 rounded-lg"
            >
              Deal Network
            </a>
            <a
              href="#growth"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 hover:bg-slate-50 rounded-lg"
            >
              Growth
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 hover:bg-slate-50 rounded-lg"
            >
              Insights
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 hover:bg-slate-50 rounded-lg"
            >
              About
            </a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenListing();
                }}
                className="w-full py-3 rounded-lg bg-linear-to-r bg-gradient-to-r from-[#2563eb] to-[#059669] text-white font-bold text-sm uppercase tracking-wider text-center"
              >
                Start Free Listing
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
