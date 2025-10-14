import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "HAI Trading Website",
  description: "Unlock Growth with Proven Business Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="min-h-screen w-full bg-white relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(150% 150% at 50% 90%, #ffffff 40%, #10b981 100%)
      `,
              backgroundSize: "100% 100%",
            }}
          />
          {/* <ThemeProvider> */}
          <Navbar />
          {children}
          <Footer />
          {/* </ThemeProvider> */}
        </div>
      </body>
    </html>
  );
}
