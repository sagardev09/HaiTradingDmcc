import HeroSection from "@/components/HeroSection";
import { ShuffleHero } from "@/components/Mainbrands";
import MainFaq from "@/components/MainFaq";
import SupplyChainCarousel from "@/components/SupplyChainCarousel";
import TestimonialWrapper from "@/components/TestimonialWrapper";
import WhyTradingLLC from "@/components/WhyTradingLLC";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SupplyChainCarousel />
      <WhyTradingLLC />
      <ShuffleHero />
      <TestimonialWrapper />
      <MainFaq />
    </main>
  );
}
