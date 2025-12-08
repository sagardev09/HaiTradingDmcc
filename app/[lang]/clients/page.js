export const runtime = "edge";

import ClientsSection from "@/components/ClientsSection";

export const metadata = {
  title: "Our Clients - HAI Trading DMCC",
  description: "Serving markets across East and West Africa with quality commodities",
};

export default function ClientsPage() {
  return (
    <main>
      <ClientsSection />
    </main>
  );
}
