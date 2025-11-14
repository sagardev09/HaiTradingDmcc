"use client";

import { Sparkles } from "lucide-react";
import Brands from "./MarqueeBrands";

export default function HeroSection() {
  const brands = [
    {
      id: 1,

      image: "/logos/abusita_logo.png",
      imagedark: "/logos/abusita_dark.png",
    },
    {
      id: 2,
      image: "/logos/LIBAAX.png",
      imagedark: "/logos/libaax_dark.png",
    },
    {
      id: 3,
      image: "/logos/RAWDA_SUGAR.png",
      imagedark: "/logos/rawda_dark.png",
    },
    {
      id: 4,
      image: "/logos/karina.png",
      imagedark: "/logos/Karina_dark.png",
    },
    {
      id: 5,
      image: "/logos/king1.png",
      imagedark: "/logos/king_dark.png",
    },
    {
      id: 6,
      image: "/logos/saba.png",
      imagedark: "/logos/saba_dark.png",
    },
    {
      id: 7,
      image: "/logos/fallingstar.png",
      imagedark: "/logos/fallingstar_dark.png",
    },
    {
      id: 8,
      image: "/logos/kifaya.png",
      imagedark: "/logos/Kifaya_dark.png",
    },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center px-4 sm:px-6 md:px-8 text-black text-sm pb-20 pt-32 min-h-screen overflow-hidden -mt-24">
        {/* Background Video */}
        <div className="absolute -top-4 left-0 w-full h-[calc(100%+1rem)] -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>

          {/* Reduced opacity for better video visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-300/60 via-slate-300/70 to-slate-300/80 dark:from-slate-900/75 dark:via-slate-900/60 dark:to-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-300/20 via-transparent to-transparent dark:from-slate-900/60 dark:via-transparent dark:to-transparent" />
        </div>

        <div className="flex flex-col items-center justify-center h-full w-full max-w-7xl relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-sm rounded-full mb-6 shadow-lg">
            <Sparkles className="size-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              Global Trading Solutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-bold max-w-5xl mt-6 text-primary px-2 break-words drop-shadow-lg">
            HAI TRADING DMCC
          </h1>
          <p className="text-gray-800 dark:text-foreground text-sm sm:text-base md:text-lg text-center max-w-4xl mt-6 leading-relaxed px-2 backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 py-4 rounded-2xl shadow-lg">
            Based in{" "}
            <span className="font-semibold text-primary">Dubai, UAE</span>, we
            trade premium staples like rice, sugar, spices, palm oil, and paper
            — connecting global supply with demand across{" "}
            <span className="font-semibold text-primary">
              East and West Africa
            </span>{" "}
            with integrity and expertise.
          </p>

          <p className="text-gray-900 dark:text-secondary-foreground text-sm sm:text-base md:text-lg text-center max-w-4xl mt-4 leading-relaxed font-semibold px-2 drop-shadow-md">
            We bridge markets through quality, trust, and sustainable global
            trade.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-10 w-full sm:w-auto px-2">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all duration-200 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base backdrop-blur-sm">
              Request a Quote
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-2 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 font-semibold rounded-full px-6 sm:px-8 py-3 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base">
              <span>Our Products</span>
              <svg
                className="mt-0.5"
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25.5 4.75 4l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Brand Carousel Section - Below Hero */}
      <section className="relative py-12 sm:py-16 bg-white dark:bg-slate-900">
        <Brands brands={brands} />
      </section>
    </>
  );
}
