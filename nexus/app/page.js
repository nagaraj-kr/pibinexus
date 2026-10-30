"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ZohoOneHero from "@/components/ZohoOneHero";
import LogoCloud from "@/components/LogoCloud";
import OverviewStrip from "@/components/OverviewStrip";
import VisibilitySection from "@/components/VisibilitySection";
import DealNetworkSection from "@/components/DealNetworkSection";
import GrowthSection from "@/components/GrowthSection";
import WhoCanJoin from "@/components/WhoCanJoin";
import ValuationCalculator from "@/components/ValuationCalculator";
import ProcessSection from "@/components/ProcessSection";
import ZohoPricing from "@/components/ZohoPricing";
import ZohoTestimonials from "@/components/ZohoTestimonials";
import ZohoCtaBanner from "@/components/ZohoCtaBanner";
import Footer from "@/components/Footer";
import ListingModal from "@/components/ListingModal";
import CommandPalette from "@/components/CommandPalette";
import DealDrawerModal from "@/components/DealDrawerModal";

export default function Home() {
  const [isListingOpen, setIsListingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dealModalType, setDealModalType] = useState(null); // 'deal' | 'growth' | null

  const handleScrollToFeatures = () => {
    const el = document.getElementById("companies");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Header with Pi Bi Logo & 6 Nav Links */}
      <Navbar
        onOpenListing={() => setIsListingOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Hero Section */}
      <ZohoOneHero
        onOpenListing={() => setIsListingOpen(true)}
        onExploreModules={handleScrollToFeatures}
      />

      {/* 3. Enterprise Social Proof Logo Cloud */}
      <LogoCloud />

      {/* 4. Overview Section: 3-Pillar Summary Strip */}
      <OverviewStrip />

      {/* 5. Section 1: Companies (Visibility) */}
      <VisibilitySection onOpenListing={() => setIsListingOpen(true)} />

      {/* 6. Section 2: Deal Network */}
      <DealNetworkSection
        onOpenDealModal={() => setDealModalType("deal")}
        onOpenListing={() => setIsListingOpen(true)}
      />

      {/* 7. Section 3: Growth */}
      <GrowthSection
        onOpenGrowthModal={() => setDealModalType("growth")}
      />

      {/* 8. Who Can Join Pi Bi Nexus (Built for Deep-Tech) */}
      <WhoCanJoin onOpenListing={() => setIsListingOpen(true)} />

      {/* 9. Interactive M&A Readiness & Valuation Estimator (Insights) */}
      <ValuationCalculator onOpenListing={() => setIsListingOpen(true)} />

      {/* 11. Transaction Lifecycle Process */}
      <ProcessSection onOpenListing={() => setIsListingOpen(true)} />

      {/* 12. Transparent Pricing */}
      <ZohoPricing onOpenListing={() => setIsListingOpen(true)} />

      {/* 13. Verified Customer Stories & Founder Reviews */}
      <ZohoTestimonials onOpenListing={() => setIsListingOpen(true)} />

      {/* 14. Closing CTA Conversion Banner */}
      <ZohoCtaBanner
        onOpenListing={() => setIsListingOpen(true)}
        onOpenContact={() => setDealModalType("deal")}
      />

      {/* 15. Multi-Column Footer with Region Selector */}
      <Footer />

      {/* Interactive Global Modals */}
      <ListingModal
        isOpen={isListingOpen}
        onClose={() => setIsListingOpen(false)}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <DealDrawerModal
        isOpen={!!dealModalType}
        onClose={() => setDealModalType(null)}
        type={dealModalType || "deal"}
      />
    </main>
  );
}
