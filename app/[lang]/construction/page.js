export const runtime = "edge";

import ConstructionSection from "@/components/ConstructionSection";

export const metadata = {
  title: "Construction Materials - HAI Trading DMCC",
  description: "Quality construction materials including door skins, industrial paper, and building essentials for projects across Africa",
};

export default function ConstructionPage() {
  return (
    <main>
      <ConstructionSection />
    </main>
  );
}
