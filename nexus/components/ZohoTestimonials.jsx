"use client";

import { Star, Quote, ArrowRight } from "lucide-react";

export default function ZohoTestimonials({ onOpenListing }) {
  const testimonials = [
    {
      quote:
        "Pi Bi Nexus One replaced four different advisory consultants. We closed our $6.4M Series A round with a Tier-1 agricultural syndicate in under 60 days, completely protected by their Virtual Data Room.",
      author: "Dr. Vikram Sethi",
      title: "Co-Founder & CEO, AgriNext Systems",
      sector: "Agritech | AI Robotics",
      location: "Bengaluru, Karnataka",
      stat: "$6.4M Raised",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "As an academic spinout from IIT Madras, assigning patents and proving commercial TRL readiness was our biggest hurdle. Nexus One's IP audit gave our lead US investors 100% confidence to issue a term sheet.",
      author: "Dr. Ananya Natarajan",
      title: "Chief Scientific Officer, QuantumLab Silicon",
      sector: "Quantum Photonics Hardware",
      location: "Hyderabad, Telangana",
      stat: "19 Patents Verified",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "The enterprise procurement module connected us directly with automotive OEMs for our solid-state battery testing. We signed our first multi-year industrial pilot without cold calling.",
      author: "Rajeshwar Rao",
      title: "Managing Director, TerraLoop Energy",
      sector: "CleanTech & Grid Storage",
      location: "Pune, Maharashtra",
      stat: "$35M Expansion Mandate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section id="customers" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 w-full">
      {/* 100% Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header - Full Width */}
        <div className="text-center w-full mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#00A859] mb-2">
            Proven Founder Success
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by India&apos;s leading deep-tech innovators.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal max-w-4xl mx-auto">
            Hear how deep-tech ventures and institutional investors scale their operations on Pi Bi Nexus One.
          </p>
        </div>

        {/* 3 Review Cards - 100% Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between w-full"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1.5 text-[#FFB800] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs sm:text-sm font-bold text-slate-900 ml-2 font-mono">{t.stat}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.title}</div>
                  <div className="text-xs text-[#1374D6] font-semibold mt-0.5">{t.sector}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center w-full">
          <a
            href="#customers"
            onClick={(e) => {
              e.preventDefault();
              onOpenListing();
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1374D6] hover:text-[#0F5EAD] hover:underline cursor-pointer"
          >
            <span>Read all 40+ deep-tech case studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
