export const runtime = "edge";

import NewsSection from "@/components/NewsSection";

export const metadata = {
  title: "News & Updates - HAI Trading DMCC",
  description: "Stay updated with the latest news, insights, and developments from HAI Trading DMCC and the commodity trading industry",
};

export default function NewsPage() {
  return (
    <main>
      <NewsSection />
    </main>
  );
}
