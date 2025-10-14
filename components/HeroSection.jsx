"use client";

import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <section className="relative flex flex-col items-center max-md:px-2  text-black text-sm pb-28 pt-8  ">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full ">
          <div className="flex flex-wrap items-center justify-center px-4 py-2 mt-24 rounded-full border border-green-600 bg-green-600/10 text-xs">
            <span className="text-green-700 font-semibold uppercase tracking-wide">
              🌍 Global Trading Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl text-center font-bold max-w-5xl mt-6 bg-gradient-to-r from-black via-green-800 to-green-600 text-transparent bg-clip-text">
            HAI TRADING DMCC
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-md:px-4 text-center max-w-4xl mt-6 leading-relaxed">
            Based in{" "}
            <span className="font-semibold text-green-700">Dubai, UAE</span>, we
            trade premium staples like rice, sugar, spices, palm oil, and paper
            — connecting global supply with demand across{" "}
            <span className="font-semibold">East and West Africa</span> with
            integrity and expertise.
          </p>

          <p className="text-gray-800 text-base md:text-lg max-md:px-4 text-center max-w-4xl mt-4 leading-relaxed font-medium">
            We bridge markets through quality, trust, and sustainable global
            trade.
          </p>

          <div className="flex items-center gap-4 mt-10 text-sm">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold transition rounded-full shadow-lg hover:shadow-xl">
              Request a Quote
            </button>
            <button className="flex items-center gap-2 bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold rounded-full px-8 py-3 transition shadow-md hover:shadow-lg">
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
    </>
  );
}
