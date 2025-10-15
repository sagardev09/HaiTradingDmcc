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
        className={`${poppins.variable} font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
        style={{ fontFamily: "var(--font-poppins)" }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="min-h-screen w-full bg-white dark:bg-gray-900 relative transition-colors duration-300">
            <div
              className="absolute inset-0 z-0 opacity-50 dark:hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />

            <div
              className="absolute inset-0 z-0 opacity-50 hidden dark:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.45) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
