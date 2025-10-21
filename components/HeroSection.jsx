"use client";

import { Sparkles } from "lucide-react";
import Brands from "./MarqueeBrands";

export default function HeroSection() {
  return (
    <>
      <section className="relative flex flex-col items-center px-4 sm:px-6 md:px-8 text-black text-sm pb-20 mt-20">
        <div className="flex flex-col items-center justify-center h-full w-full max-w-7xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-6">
            <Sparkles className="size-5 text-primary " />
            <span className="text-xs sm:text-sm font-medium text-primary">
              Global Trading Solutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-bold max-w-5xl mt-6 text-primary px-2 break-words">
            HAI TRADING DMCC
          </h1>
          <p className="text-gray-700 dark:text-foreground text-sm sm:text-base md:text-lg text-center max-w-4xl mt-6 leading-relaxed px-2">
            Based in{" "}
            <span className="font-semibold text-primary">Dubai, UAE</span>, we
            trade premium staples like rice, sugar, spices, palm oil, and paper
            — connecting global supply with demand across{" "}
            <span className="font-semibold">East and West Africa</span> with
            integrity and expertise.
          </p>

          <p className="text-gray-800 dark:text-secondary-foreground text-sm sm:text-base md:text-lg text-center max-w-4xl mt-4 leading-relaxed font-medium px-2">
            We bridge markets through quality, trust, and sustainable global
            trade.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-10 w-full sm:w-auto px-2">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold transition rounded-full shadow-lg hover:shadow-xl text-sm sm:text-base">
              Request a Quote
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold rounded-full px-6 sm:px-8 py-3 transition shadow-md hover:shadow-lg text-sm sm:text-base">
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

          <div className="mt-12 sm:mt-16 md:mt-20 w-full">
            <Brands />
          </div>
        </div>
      </section>
    </>
  );
}
