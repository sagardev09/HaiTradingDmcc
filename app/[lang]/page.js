import HeroSection from "@/components/HeroSection";
// import { ShuffleHero } from "@/components/MainBrands";
// import MainFaq from "@/components/MainFaq";
import SupplyChainCarousel from "@/components/SupplyChainCarousel";
import WhyTradingLLC from "@/components/WhyTradingLLC";
import TestimonialWrapper from "@/components/TestimonialWrapper";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SupplyChainCarousel />
      <WhyTradingLLC />
      {/* <ShuffleHero /> */}
      <TestimonialWrapper />
      {/* <MainFaq /> */}
    </main>
  );
}
