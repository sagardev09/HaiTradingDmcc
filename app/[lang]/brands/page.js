export const runtime = "edge";

import BrandsSection from "@/components/BrandsSection";

export const metadata = {
  title: "Our Brands - HAI Trading DMCC",
  description: "Discover our premium portfolio of trusted food commodity brands including AGT and Libaax",
};

export default function BrandsPage() {
  return (
    <main>
      <BrandsSection />
    </main>
  );
}
