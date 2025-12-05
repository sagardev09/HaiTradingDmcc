"use client";

import { useState } from "react";
import {
  Package,
  Award,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Star,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BrandsSection() {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  // Brand portfolio
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

  // Stats
  const stats = [
    {
      icon: Package,
      label: "Premium Brands",
      value: "7+",
      color: "text-teal-600",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: "9+",
      color: "text-blue-600",
    },
    {
      icon: Award,
      label: "Years of Trust",
      value: "10+",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      label: "Products Delivered",
      value: "10K+",
      color: "text-orange-600",
    },
  ];

  // Why choose our brands
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Rigorous quality control and international standards certification",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Sourced from the finest producers across the world",
    },
    {
      icon: CheckCircle2,
      title: "Trusted Partners",
      description: "Partnering with AGT and Libaax - industry leaders",
    },
    {
      icon: ShoppingBag,
      title: "Wide Distribution",
      description: "Available across East and West Africa markets",
    },
  ];

  return (
    <section className="relative min-h-screen">
      {/* Background gradient with reduced opacity */}
      <div className="absolute inset-0 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-teal-950 bg-top bg-no-repeat opacity-20" />

      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-slate-900/80 pointer-events-none" />

      <div className="relative z-0 flex flex-col items-center px-4 sm:px-6 md:px-8 text-black dark:text-white text-sm pb-28 pt-8">
        <div className="w-full max-w-7xl mx-auto px-4 mt-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/40 rounded-full mb-6">
              <Sparkles className="size-5 text-teal-600 dark:text-teal-400" />
              <span className="text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-300">
                Premium Brand Portfolio
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-black dark:from-white to-teal-600 dark:to-teal-400 text-transparent bg-clip-text px-2 break-words">
              Our Trusted Brands
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8">
              Discover our premium portfolio of{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                AGT and Libaax brands
              </span>
              , delivering quality food commodities across Africa with
              excellence and reliability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon
                    className={`size-8 ${stat.color} dark:brightness-125 mx-auto mb-3`}
                  />
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
                Brand Portfolio
              </h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Explore our range of premium brands serving diverse commodity
                needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredBrand(brand.name)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Brand Image - Full Width */}
                    <div className="w-full h-64 p-4">
                      <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-600 shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                        {/* Light mode image */}
                        <Image
                          src={brand.image}
                          alt={brand.id}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 dark:hidden"
                          priority
                        />
                        {/* Dark mode image */}
                        <Image
                          src={brand.imagedark}
                          alt={brand.id}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 hidden dark:block"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 border-2 border-teal-500 dark:border-teal-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Brands Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
                Why Choose Our Brands?
              </h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Quality, reliability, and trust - the hallmarks of our brand
                partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/40 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="size-7 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Brands Highlight */}
          <div className="mb-16 bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Our Brand Partners
              </h2>

              <p className="text-teal-50 text-lg max-w-3xl mx-auto mb-8">
                We proudly partner with{" "}
                <span className="font-bold text-white">Abusita</span> and{" "}
                <span className="font-bold text-white">Libaax</span>, two
                industry-leading brands known for their commitment to quality,
                sustainability, and customer satisfaction across global markets.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                {/* AGT Brand */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <img src="/logos/abusita_logo.png" alt="" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Abusita Groups
                  </h3>
                  <p className="text-teal-50 text-sm">
                    Global leader in pulses, grains, and food ingredients with a
                    presence in over 120 countries
                  </p>
                </div>

                {/* Libaax Brand */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <img src="/logos/LIBAAX.png" alt="" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Libaax
                  </h3>
                  <p className="text-teal-50 text-sm">
                    Premium quality food products trusted across African markets
                    for excellence and reliability
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Become a Distributor
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
              Interested in Our Brands?
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us to learn more about our premium brand
              portfolio and distribution opportunities
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Contact Us
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-black dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-600 transition-all duration-200 hover:scale-105"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
