"use client";

import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import DealsSection from "@/components/DealsSection";
import TrustSection from "@/components/TrustSection";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <DealsSection />
      <TrustSection />
      <CtaBanner />
    </>
  );
}
