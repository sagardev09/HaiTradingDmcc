import HeroSection from "@/components/HeroSection";
// import { ShuffleHero } from "@/components/MainBrands";
// import MainFaq from "@/components/MainFaq";
import SupplyChainCarousel from "@/components/SupplyChainCarousel";
import WhyTradingLLC from "@/components/WhyTradingLLC";
import FAQSection from "@/components/FAQSection";
import MainFaq from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <SupplyChainCarousel /> */}
      <WhyTradingLLC />
      {/* <ShuffleHero /> */}
      <MainFaq />
      {/* <MainFaq /> */}
    </main>
  );
}
