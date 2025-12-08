export const runtime = "edge";

import HeroSection from "@/components/HeroSection";
import { ShuffleHero } from "@/components/MainBrands";
import MainFaq from "@/components/MainFaq";
import WhyTradingLLC from "@/components/WhyTradingLLC";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyTradingLLC />
      <ShuffleHero />
      <FAQSection />
      <MainFaq />
    </main>
  );
}
