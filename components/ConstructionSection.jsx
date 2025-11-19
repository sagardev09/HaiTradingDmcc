"use client";

import { useState, useEffect } from "react";
import {
  Package,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Globe,
  TrendingUp,
  Hammer,
  Star,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ConstructionSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Construction product categories
  const categories = ["All", "Door Skins", "Paper Products", "Building Materials"];

  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev };
        products.forEach((product) => {
          if (product.images && product.images.length > 1) {
            const currentIdx = prev[product.id] || 0;
            newIndex[product.id] = (currentIdx + 1) % product.images.length;
          }
        });
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Construction products data
  const products = [
    {
      id: 1,
      name: "Premium Door Skins",
      category: "Door Skins",
      icon: "🚪",
      image: "https://images.unsplash.com/photo-1534009590571-7f5b8f197127?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1534009590571-7f5b8f197127?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop",
      ],
      description:
        "High-quality veneer door skins for residential and commercial applications. Available in multiple wood finishes and sizes.",
      features: [
        "Natural wood veneers",
        "Multiple finish options",
        "Standard and custom sizes",
        "Moisture resistant",
        "Smooth surface finish",
      ],
      brands: ["Premium Door Skins"],
      origin: "Multiple Sources",
      featured: true,
      color: "from-amber-600 to-amber-700",
    },
    {
      id: 2,
      name: "Industrial Paper Sheets",
      category: "Paper Products",
      icon: "📄",
      image: "/brands/agtpaper.jpeg",
      images: [
        "/brands/agtpaper.jpeg",
        "/brands/agtpaper2.png",
        "/brands/agtpaper1.png",
      ],
      description:
        "Heavy-duty industrial paper for construction, packaging, and manufacturing applications.",
      features: [
        "High tensile strength",
        "Multiple thickness options",
        "Water-resistant grades",
        "Eco-friendly production",
        "Bulk quantities available",
      ],
      brands: ["AGT Papers"],
      origin: "International Suppliers",
      featured: true,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 3,
      name: "Decorative Door Panels",
      category: "Door Skins",
      icon: "🚪",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop",
      ],
      description:
        "Elegant decorative door panels with various patterns and finishes for modern interiors.",
      features: [
        "Contemporary designs",
        "Scratch resistant",
        "Easy installation",
        "UV protected",
        "Low maintenance",
      ],
      brands: ["Decorative Panels"],
      origin: "Asia, Europe",
      featured: true,
      color: "from-purple-600 to-purple-700",
    },
    {
      id: 4,
      name: "Kraft Paper Rolls",
      category: "Paper Products",
      icon: "📦",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=600&fit=crop",
      description:
        "Heavy-duty kraft paper rolls ideal for construction wrapping, packaging, and protective covering.",
      features: [
        "High burst strength",
        "Tear resistant",
        "Available in multiple widths",
        "Recyclable material",
        "Cost-effective solution",
      ],
      brands: ["Industrial Kraft"],
      origin: "Global Suppliers",
      featured: true,
      color: "from-stone-600 to-stone-700",
    },
  ];

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Featured products
  const featuredProducts = products.filter((product) => product.featured);

  // Stats
  const stats = [
    {
      icon: Package,
      label: "Product Lines",
      value: "4+",
      color: "text-teal-600",
    },
    {
      icon: Globe,
      label: "Source Countries",
      value: "10+",
      color: "text-blue-600",
    },
    {
      icon: Award,
      label: "Quality Certified",
      value: "100%",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      label: "Industry Experience",
      value: "8+ Years",
      color: "text-orange-600",
    },
  ];

  // Why choose our construction materials
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Construction materials meeting international standards for durability and performance",
    },
    {
      icon: Shield,
      title: "Certified Products",
      description:
        "All materials come with quality certifications and compliance documentation",
    },
    {
      icon: Hammer,
      title: "Industry Expertise",
      description:
        "Years of experience supplying contractors, retailers, and construction projects",
    },
    {
      icon: Package,
      title: "Flexible Orders",
      description:
        "From small orders to bulk shipments, we accommodate all project sizes",
    },
  ];

  return (
    <section className="relative min-h-screen">
      {/* Background gradient */}
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
              <Hammer className="size-5 text-teal-600 dark:text-teal-400" />
              <span className="text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-300">
                Construction Materials
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-black dark:from-white to-teal-600 dark:to-teal-400 text-transparent bg-clip-text px-2 break-words">
              Building Materials & Solutions
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8">
              Quality construction materials including{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                door skins, industrial paper,
              </span>{" "}
              and building essentials for your projects across Africa.
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

          {/* Featured Products */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="size-6 text-teal-600 dark:text-teal-400 fill-current" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white px-2">
                Featured Materials
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 shadow-xl hover:shadow-2xl transition-all duration-500"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/20 transition-all duration-500" />
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 bg-teal-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      <Star className="size-3 fill-current" />
                      Featured
                    </div>
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 pb-8 z-10 transition-all duration-500 ${
                      hoveredProduct === product.id
                        ? "translate-y-0"
                        : "translate-y-[calc(100%-100px)]"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {product.name}
                    </h3>

                    <div
                      className={`transition-all duration-500 ${
                        hoveredProduct === product.id
                          ? "opacity-100 max-h-96"
                          : "opacity-0 max-h-0"
                      } overflow-hidden`}
                    >
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium mb-3">
                        {product.category}
                      </div>

                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                        <span>View Details</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-black dark:text-white mb-6">
              Browse by Category
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-teal-600 dark:bg-teal-700 text-white shadow-lg scale-105"
                      : "bg-white/80 dark:bg-slate-800/80 text-black dark:text-white border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Products Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-black dark:text-white mb-8">
              {selectedCategory === "All" ? "All Materials" : selectedCategory}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const productImages = product.images || [product.image];
                const currentIndex = currentImageIndex[product.id] || 0;

                return (
                  <div
                    key={product.id}
                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    <div className="relative w-full h-64 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                      <Image
                        src={productImages[currentIndex]}
                        alt={product.name}
                        width={800}
                        height={256}
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                      />

                      {productImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                          {productImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [product.id]: idx,
                                }));
                              }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentIndex
                                  ? "bg-teal-600 w-6"
                                  : "bg-slate-300 dark:bg-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {product.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs rounded-full font-medium mb-4">
                        {product.category}
                      </div>
                      <p className="text-zinc-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-zinc-500 dark:text-slate-500 mb-2 uppercase tracking-wide">
                          Key Features
                        </p>
                        <div className="space-y-1.5">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-zinc-700 dark:text-slate-300"
                            >
                              <CheckCircle2 className="size-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-teal-600 dark:text-teal-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                        <span>View Full Details</span>
                        <ArrowRight className="size-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
                Why Choose Our Materials?
              </h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Quality construction materials backed by expertise and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-6 bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 hover:border-teal-400 dark:hover:border-teal-500 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="size-8 text-white" />
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for product specifications, pricing, and delivery options for your construction needs
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Request Quote
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-black dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-600 transition-all duration-200 hover:scale-105"
              >
                View Food Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
