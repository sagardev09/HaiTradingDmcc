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
  ShoppingBag,
  Leaf,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { id } from "date-fns/locale";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // All Product categories
  const categories = [
    "All",
    "Sugar",
    "Rice",
    "Palm Oil",
    "Sunflower Oil",
    "Paper",
    "Others",
  ];

  // Auto-rotate carousel images every 5 seconds for very smooth scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev };

        // Loop through all products and update their image index if they have multiple images
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

  // Products data
  const products = [
    {
      id: 1,
      name: "AGT Papers",
      category: "Paper",
      icon: "📄",
      image: "/brands/agtpaper.jpeg",
      images: [
        "/brands/agtpaper.jpeg",
        "/brands/agtpaper2.png",
        "/brands/agtpaper1.png",
      ],
      description:
        "Premium quality paper products for industrial and commercial use",
      features: [
        "Multiple paper grades",
        "Eco-friendly options",
        "Industrial strength",
        "Various sizes available",
        "Bulk orders accepted",
      ],
      brands: ["AGT Papers"],
      origin: "Multiple Sources",
      featured: true,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 2,
      name: "Libaax Palm Oil",
      category: "Palm Oil",
      icon: "🌴",
      image: "/brands/libaaxoil.png",
      images: ["/brands/libaaxoil.png", "/brands/libaaxbox.png"],
      description: "Pure and refined palm oil for cooking and food processing",
      features: [
        "100% pure palm oil",
        "Refined and filtered",
        "Rich in vitamin E",
        "Long shelf life",
        "Versatile cooking oil",
      ],

      brands: ["Libaax Palm Oil"],
      origin: "Malaysia, Indonesia",
      featured: true,
      color: "from-orange-600 to-orange-700",
    },
    {
      id: 3,
      name: "Libaax Rice",
      category: "Rice",
      icon: "🌾",
      image: "/brands/libaax/rice/featured/libaax-rice.jpeg",
      images: [
        "/brands/libaax/rice/product/libaax-rice-1.png",
        "/brands/libaax/rice/product/libaax-rice-2.png",
      ],
      description:
        "Premium quality rice varieties including Basmati and long grain rice",
      features: [
        "Multiple rice varieties",
        "Basmati and long grain options",
        "High nutritional value",
        "Aromatic and flavorful",
        "Ideal for all cuisines",
      ],
      brands: ["Libaax Rice"],
      origin: "India, Pakistan, Thailand",
      featured: true,
      color: "from-amber-600 to-amber-700",
    },
    {
      id: 4,
      name: "AGT Sugar",
      category: "Sugar",
      icon: "🍬",
      image: "/brands/agtsugar.jpg",
      description:
        "Premium quality refined sugar for various culinary and industrial applications",
      features: [
        "High purity refined sugar",
        "Available in granulated and powder forms",
        "Food grade certified",
        "Consistent quality",
        "Bulk packaging available",
      ],
      brands: ["AGT Sugar"],
      origin: "Multiple Sources",
      featured: true,
      color: "from-pink-600 to-pink-700",
    },
    {
      id: 5,
      name: "Libaax Pure Sunflower Oil",
      category: "Sunflower Oil",
      icon: "🌻",
      image: "/brands/libaaxoil1.png",
      images: ["/brands/libaaxoil.png", "/brands/libaaxbox1.png"],

      description:
        "Pure sunflower oil rich in vitamins and perfect for healthy cooking",
      features: [
        "Cold-pressed extraction",
        "Rich in vitamins A, D, and E",
        "Low in saturated fats",
        "Light and healthy",
        "No artificial additives",
      ],
      brands: ["Libaax Pure Sunflower Oil"],
      origin: "Ukraine, Russia",
      featured: true,
      color: "from-yellow-600 to-yellow-700",
    },
    {
      id: 6,
      name: "Saba Soap",
      category: "Others",
      icon: "🌾",
      image: "/brands/sabasoap.png",
      description: " Natural and organic soap bars for all skin types",
      features: [
        "Natural ingredients",
        "Vegan and cruelty-free",
        "Hypoallergenic",
        "Non-toxic",
      ],
      images: ["/brands/sabasoap.png", "/brands/sabasoap1.png"],
      brands: ["Saba Soap"],
      origin: "Canada, USA",
      featured: true,
      color: "from-stone-600 to-stone-700",
    },
    {
      id: 11,
      name: "Kifaya Tissue Paper",
      category: "Others",
      icon: "🌾",
      image: "/brands/kifayatissue.png",
      description: " Soft and absorbent tissue paper for everyday use",
      features: [
        "Soft and gentle",
        "Non-toxic",
        "Hypoallergenic",
        "Biodegradable",
        "Environmentally friendly",
      ],
      images: ["/brands/kifayatissue.png", "/brands/kifayatissue1.png"],
      brands: ["Kifaya Tissue Paper"],
      origin: "Canada, USA",
      featured: false,
      color: "from-stone-600 to-stone-700",
    },
    {
      id: 13,
      name: "Falling Star Tissue Paper",
      category: "Others",
      icon: "🌾",
      image: "/brands/fstissue.png",
      description: " Soft and absorbent tissue paper for everyday use",
      features: [
        "Soft and gentle",
        "Non-toxic",
        "Hypoallergenic",
        "Biodegradable",
        "Environmentally friendly",
      ],
      images: ["/brands/fstissue.jpg", "/brands/fstissue2.jpg"],
      brands: ["Falling Star Tissue Paper"],
      origin: "Canada, USA",
      featured: false,
      color: "from-stone-600 to-stone-700",
    },

    {
      id: 7,
      name: "Abusita Vegetable Oil",
      category: "Edible Oils",
      description:
        "Pure sunflower oil rich in vitamins and perfect for healthy cooking",
      features: [
        "Cold-pressed extraction",
        "Rich in vitamins A, D, and E",
        "Low in saturated fats",
        "Light and healthy",
      ],
      brands: ["Abusita Vegetable Oil"],
      color: "from-yellow-600 to-yellow-700",
      origin: "Egypt",
      icon: "🌻",
      image: "/brands/abusita-oil.png",
      images: [
        "/brands/abusita-oil.png",
        "/brands/ab1.jpeg",
        "/brands/ab2.jpeg",
      ],
      featured: true,
    },

    {
      id: 8,
      name: "Karina Vegetable Oil",
      category: "Edible Oils",
      description:
        "Pure sunflower oil rich in vitamins and perfect for healthy cooking",
      features: [
        "Cold-pressed extraction",
        "Rich in vitamins A, D, and E",
        "Low in saturated fats",
        "Light and healthy",
      ],
      brands: ["Karina Oil"],
      origin: "Egypt",
      color: "from-yellow-600 to-yellow-700",
      icon: "🌻",
      images: [
        "/brands/karani-veg-oil1.png",
        "/brands/karani-veg-oil2.png",
        "/brands/karinaoil2.png",
        "/brands/karinaoil3.png",
      ],
      image: "/brands/karinaoil2.png",
      featured: true,
    },
    {
      id: 9,
      name: "Rawda Sugar",
      category: "Sugar",
      description:
        "Premium quality refined sugar for various culinary and industrial applications",
      features: [
        "High purity refined sugar",
        "Available in granulated and powder forms",
        "Food grade certified",
        "Consistent quality",
        "Bulk packaging available",
      ],
      brands: ["Rawda Sugar"],
      origin: "India",
      color: "from-yellow-600 to-yellow-700",
      icon: "🌻",
      images: [
        "/brands/rawda-sugar.png",
        "/brands/rawda-sugar1.png",
        "/brands/rawda-sugar2.png",
      ],
      featured: false,
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
      label: "Product Categories",
      value: "9+",
      color: "text-teal-600",
    },
    {
      icon: Globe,
      label: "Source Countries",
      value: "15+",
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
      label: "Client Satisfaction",
      value: "98%",
      color: "text-orange-600",
    },
  ];

  // Why choose our products
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "All products meet international quality standards and certifications",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description:
        "Sourced from the finest producers across multiple continents",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage",
    },
    {
      icon: ShoppingBag,
      title: "Flexible Packaging",
      description: "Customized packaging solutions for bulk and retail needs",
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
                Premium Commodities
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-black dark:from-white to-teal-600 dark:to-teal-400 text-transparent bg-clip-text px-2 break-words">
              Our Products
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                premium food commodities
              </span>{" "}
              and industrial products, sourced globally and delivered with
              excellence.
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
                Featured Products
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
                  {/* Product Image Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Subtle gradient at bottom for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/20 transition-all duration-500" />
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 bg-teal-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      <Star className="size-3 fill-current" />
                      Featured
                    </div>
                  </div>

                  {/* Content - Slides up from bottom on hover */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 pb-8 z-10 transition-all duration-500 ${
                      hoveredProduct === product.id
                        ? "translate-y-0"
                        : "translate-y-[calc(100%-100px)]"
                    }`}
                  >
                    {/* Product Name - Always partially visible */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {product.name}
                    </h3>

                    {/* Additional Content - Shows on hover */}
                    <div
                      className={`transition-all duration-500 ${
                        hoveredProduct === product.id
                          ? "opacity-100 max-h-96"
                          : "opacity-0 max-h-0"
                      } overflow-hidden`}
                    >
                      {/* Category */}
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium mb-3">
                        {product.category}
                      </div>

                      {/* Brand */}
                      <div className="text-sm text-white/90 mb-3">
                        Brand:{" "}
                        <span className="font-semibold text-white">
                          {product.brands[0]}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* View Details Button */}
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
              {selectedCategory === "All" ? "All Products" : selectedCategory}
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
                    {/* Full Width Product Image with Carousel */}
                    <div className="relative w-full h-64 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                      <Image
                        src={productImages[currentIndex]}
                        alt={product.name}
                        width={800}
                        height={256}
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                        style={{
                          transition:
                            "opacity 1s ease-in-out, transform 1s ease-in-out",
                        }}
                      />

                      {/* Carousel Navigation - Only show if multiple images */}
                      {productImages.length > 1 && (
                        <>
                          {/* Dots Indicator */}
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
                                aria-label={`View image ${idx + 1}`}
                              />
                            ))}
                          </div>

                          {/* Previous/Next Buttons */}
                          {currentIndex > 0 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [product.id]: currentIndex - 1,
                                }));
                              }}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition z-10"
                              aria-label="Previous image"
                            >
                              <ArrowRight className="size-4 rotate-180 text-black dark:text-white" />
                            </button>
                          )}

                          {currentIndex < productImages.length - 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [product.id]: currentIndex + 1,
                                }));
                              }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition z-10"
                              aria-label="Next image"
                            >
                              <ArrowRight className="size-4 text-black dark:text-white" />
                            </button>
                          )}
                        </>
                      )}
                    </div>

                    {/* Product Info */}
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

                      {/* Features List */}
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

                      {/* Brand & Origin */}
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-700 mb-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-zinc-500 dark:text-slate-500 text-xs mb-1">
                              Brand
                            </p>
                            <p className="font-semibold text-black dark:text-white text-sm">
                              {product.brands[0]}
                            </p>
                          </div>
                          <div>
                            <p className="text-zinc-500 dark:text-slate-500 text-xs mb-1">
                              Origin
                            </p>
                            <p className="font-semibold text-black dark:text-white text-sm">
                              {product.origin}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <div className="flex items-center justify-between text-teal-600 dark:text-teal-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                        <span>View Full Details</span>
                        <ArrowRight className="size-4" />
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 border-2 border-teal-500 dark:border-teal-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Our Products Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Quality, reliability, and excellence in every product we deliver
              </p>
            </div>

            {/* Grid Layout - 2x2 */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-6 bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 hover:border-teal-400 dark:hover:border-teal-500 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="size-8 text-white" />
                  </div>

                  {/* Content */}
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

          {/* Quality Assurance Banner */}
          <div className="mb-16 bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

            <div className="relative z-10 text-center">
              <Leaf className="size-16 text-white mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Quality You Can Trust
              </h2>

              <p className="text-teal-50 text-lg max-w-3xl mx-auto mb-8">
                Every product undergoes rigorous quality control and meets
                international food safety standards. We partner with certified
                suppliers and conduct regular audits to ensure consistent
                excellence.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3">
                  <p className="text-white font-semibold">ISO Certified</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3">
                  <p className="text-white font-semibold">HACCP Compliant</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3">
                  <p className="text-white font-semibold">Halal Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
              Interested in Our Products?
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us to discuss your requirements, request
              samples, or learn more about bulk ordering
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
                href="/brands"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-black dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-600 transition-all duration-200 hover:scale-105"
              >
                View Our Brands
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
