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
      name: "AGT Papers",
      category: "Paper Products",
      description:
        "Premium quality paper products for industrial and commercial use",
      products: ["Industrial Paper", "Packaging Paper", "Specialty Paper"],
      color: "from-blue-600 to-blue-700",
      icon: "📄",
      image:
        "https://images.unsplash.com/photo-1648622981113-1e0f7e2c1b4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      featured: false,
    },
    {
      name: "Libaax Palm Oil",
      category: "Edible Oils",
      description: "Pure and refined palm oil for cooking and food processing",
      products: ["Refined Palm Oil", "Cooking Oil", "Food Grade"],
      color: "from-orange-600 to-orange-700",
      icon: "🌴",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=256&fit=crop",
      featured: true,
    },
    {
      name: "Libaax Rice",
      category: "Rice & Grains",
      description:
        "Premium quality rice varieties sourced from the finest farms",
      products: ["Basmati Rice", "Long Grain Rice", "Premium Rice"],
      color: "from-amber-600 to-amber-700",
      icon: "🌾",
      image: "/brands/libaax-rice.jpg",
      featured: true,
    },
    {
      name: "Libaax Vegetable Cooking Oil",
      category: "Edible Oils",
      description:
        "Premium vegetable cooking oil perfect for all your culinary needs",
      products: ["Vegetable Cooking Oil", "Refined Oil", "Multi-purpose Oil"],
      color: "from-green-600 to-green-700",
      icon: "🫒",
      image: "/brands/libaax-vegetable-oil.jpg",
      featured: true,
    },
    {
      name: "AGT Sugar",
      category: "Sugar Products",
      description:
        "High-quality refined sugar for various culinary applications",
      products: ["Refined Sugar", "Granulated Sugar", "Food Grade Sugar"],
      color: "from-pink-600 to-pink-700",
      icon: "🍬",
      image:
        "https://images.unsplash.com/photo-1673791031093-eb8eefa60083?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173",
      featured: false,
    },
    {
      name: "Libaax Pure Sunflower Oil",
      category: "Edible Oils",
      description:
        "Pure sunflower oil rich in vitamins and perfect for healthy cooking",
      products: ["Pure Sunflower Oil", "Refined Oil", "Cooking Oil"],
      color: "from-yellow-600 to-yellow-700",
      icon: "🌻",
      image: "/brands/libaax-sunflower-oil.jpg",
      featured: true,
    },
    {
      name: "AGT Wheat Flour",
      category: "Flour & Grains",
      description: "Premium wheat flour for baking and culinary excellence",
      products: ["All Purpose Flour", "Bread Flour", "Premium Wheat Flour"],
      color: "from-stone-600 to-stone-700",
      icon: "🌾",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=256&fit=crop",
      featured: false,
    },
    {
      name: "Abusita Vegetable Oil",
      category: "Edible Oils",
      description:
        "Pure sunflower oil rich in vitamins and perfect for healthy cooking",
      products: ["Pure Sunflower Oil", "Refined Oil", "Cooking Oil"],
      color: "from-yellow-600 to-yellow-700",
      icon: "🌻",
      image: "/brands/abusita-oil.png",
      featured: false,
    },
    {
      name: "Karina Vegetable Oil",
      category: "Edible Oils",
      description:
        "Pure sunflower oil rich in vitamins and perfect for healthy cooking",
      products: ["Pure Sunflower Oil", "Refined Oil", "Cooking Oil"],
      color: "from-yellow-600 to-yellow-700",
      icon: "🌻",
      image: "/brands/karina-oil.png",
      featured: false,
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredBrand(brand.name)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  {/* Featured badge */}
                  {brand.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1 bg-teal-600 dark:bg-teal-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        <Star className="size-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Brand Image - Full Width */}
                    {brand.image ? (
                      <div className="w-full h-64 p-4">
                        <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <Image
                            src={brand.image}
                            alt={brand.name}
                            width={400}
                            height={256}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 pb-4">
                        {/* Brand Icon */}
                        <div className="w-20 h-20 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                          <span className="text-4xl">{brand.icon}</span>
                        </div>
                      </div>
                    )}

                    {/* Brand Info */}
                    <div className="px-8 pb-4">
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {brand.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs rounded-full font-medium mb-4">
                        {brand.category}
                      </div>
                      <p className="text-zinc-600 dark:text-slate-400 leading-relaxed mb-6">
                        {brand.description}
                      </p>
                    </div>

                    {/* Products List */}
                    <div className="px-8 pb-6">
                      <p className="text-xs font-semibold text-zinc-500 dark:text-slate-500 mb-3 uppercase tracking-wide">
                        Key Products
                      </p>
                      <div className="space-y-2">
                        {brand.products.map((product, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-zinc-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="size-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                            <span>{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <div className="px-8 pb-8 pt-6 border-t border-slate-200 dark:border-slate-700 mx-8">
                      <div className="flex items-center justify-between text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-2 transition-transform">
                        <span>Learn More</span>
                        <ArrowRight className="size-5" />
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
                <span className="font-bold text-white">AGT</span> and{" "}
                <span className="font-bold text-white">Libaax</span>, two
                industry-leading brands known for their commitment to quality,
                sustainability, and customer satisfaction across global markets.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                {/* AGT Brand */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-teal-700">
                      AGT
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    AGT Foods
                  </h3>
                  <p className="text-teal-50 text-sm">
                    Global leader in pulses, grains, and food ingredients with a
                    presence in over 120 countries
                  </p>
                </div>

                {/* Libaax Brand */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🦁</span>
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
