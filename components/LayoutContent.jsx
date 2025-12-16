"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  // Hide Navbar and Footer on under-construction page
  const isUnderConstruction = pathname === "/under-construction";

  if (isUnderConstruction) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="relative z-10 flex flex-col items-center pt-8">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
}
