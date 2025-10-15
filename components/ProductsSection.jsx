"use client";

import { useState } from "react";
import Navbar from "./Navbar";
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

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Product categories
  const categories = [
    "All",
    "Grains & Flour",
    "Oils",
    "Sugar & Sweeteners",
    "Other Products",
  ];

  // Products data
  const products = [
    {
      id: 1,
      name: "Sugar",
      category: "Sugar & Sweeteners",
      icon: "🍬",
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
      id: 2,
      name: "Rice",
      category: "Grains & Flour",
      icon: "🌾",
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
      id: 3,
      name: "Palm Oil",
      category: "Oils",
      icon: "🌴",
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
      id: 4,
      name: "Sunflower Oil",
      category: "Oils",
      icon: "🌻",
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
      id: 5,
      name: "Dry Nuts",
      category: "Other Products",
      icon: "🥜",
      description: "Premium quality assorted dry nuts rich in nutrients",
      features: [
        "Variety of nuts available",
        "High protein content",
        "Natural and unprocessed",
        "Rich in healthy fats",
        "Perfect for snacking",
      ],
      brands: ["Multiple Brands"],
      origin: "Multiple Sources",
      featured: false,
      color: "from-stone-600 to-stone-700",
    },
    {
      id: 6,
      name: "Wheat Flour",
      category: "Grains & Flour",
      icon: "🌾",
      description: "Premium wheat flour for baking and culinary excellence",
      features: [
        "Multiple flour grades",
        "All-purpose and bread flour",
        "Finely milled",
        "High gluten content",
        "Perfect for baking",
      ],
      brands: ["AGT Wheat Flour"],
      origin: "Canada, USA",
      featured: false,
      color: "from-stone-600 to-stone-700",
    },
    {
      id: 7,
      name: "Spices",
      category: "Other Products",
      icon: "🌶️",
      description: "Wide variety of authentic spices for culinary perfection",
      features: [
        "Authentic flavors",
        "Premium quality spices",
        "Aromatic and fresh",
        "Various spice blends",
        "Sealed packaging",
      ],
      brands: ["Multiple Brands"],
      origin: "India, Sri Lanka",
      featured: false,
      color: "from-red-600 to-red-700",
    },
    {
      id: 8,
      name: "Door Skin",
      category: "Other Products",
      icon: "🚪",
      description:
        "High-quality door skin panels for construction and furniture",
      features: [
        "Durable construction",
        "Multiple finishes available",
        "Termite resistant",
        "Easy to install",
        "Cost-effective solution",
      ],
      brands: ["Industrial Grade"],
      origin: "Multiple Sources",
      featured: false,
      color: "from-brown-600 to-brown-700",
    },
    {
      id: 9,
      name: "Paper",
      category: "Other Products",
      icon: "📄",
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
      featured: false,
      color: "from-blue-600 to-blue-700",
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
      color: "text-green-600",
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
    <section className="relative min-h-screen ">
      <div className="relative z-10 flex flex-col items-center max-md:px-2 text-black dark:text-white text-sm pb-28 pt-8">
        <div className="w-full max-w-7xl mx-auto px-4 mt-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-6">
              <Sparkles className="size-5 text-primary " />
              <span className="text-sm font-medium text-primary">
                Premium Commodities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-primary">
              Our Products
            </h1>

            <p className="text-black dark:text-white md:text-lg max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of{" "}
              <span className="font-semibold text-primary">
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
                  className="bg-primary backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon
                    className={`size-8 ${stat.color} dark:brightness-125 mx-auto mb-3`}
                  />
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="size-6 text-green-600 dark:text-green-400 fill-current" />
              <h2 className="text-3xl font-semibold text-primary">
                Featured Products
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 bg-green-600 dark:bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      <Star className="size-3 fill-current" />
                      Featured
                    </div>
                  </div>

                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 p-6">
                    {/* Product Icon */}
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{product.icon}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {product.name}
                    </h3>

                    {/* Category */}
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs rounded-full font-medium mb-3">
                      {product.category}
                    </div>

                    {/* Brand */}
                    <div className="text-xs text-secondary-foreground mb-4">
                      Brand:{" "}
                      <span className="font-semibold ">
                        {product.brands[0]}
                      </span>
                    </div>

                    {/* Learn More */}
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      <span>View Details</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-green-500 dark:border-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Browse by Category
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer duration-200 ${
                    selectedCategory === category
                      ? "bg-green-600 dark:bg-green-700 text-white shadow-lg scale-105"
                      : "bg-white/80 dark:bg-slate-800/80 text-black dark:text-white border border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Products Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-primary mb-8">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 p-8">
                    {/* Product Icon */}
                    <div className="w-20 h-20 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">{product.icon}</span>
                    </div>

                    {/* Product Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {product.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs rounded-full font-medium mb-4">
                        {product.category}
                      </div>
                      <p className="text-secondary-foreground leading-relaxed mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-secondary mb-3 uppercase tracking-wide">
                        Key Features
                      </p>
                      <div className="space-y-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm text-zinc-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="size-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brand & Origin */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-zinc-500 dark:text-slate-300 text-xs mb-1">
                            Brand
                          </p>
                          <p className="font-semibold text-black dark:text-white">
                            {product.brands[0]}
                          </p>
                        </div>
                        <div>
                          <p className="text-zinc-500 dark:text-slate-300 text-xs mb-1">
                            Origin
                          </p>
                          <p className="font-semibold text-black dark:text-white">
                            {product.origin}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="flex items-center justify-between text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>View Full Details</span>
                      <ArrowRight className="size-5" />
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 border-2 border-green-500 dark:border-green-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Products Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Quality, reliability, and excellence in every product we deliver
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="size-7 text-green-600 dark:text-green-400" />
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

          {/* Quality Assurance Banner */}
          <div className="mb-16 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

            <div className="relative z-10 text-center">
              <Leaf className="size-16 text-white mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Quality You Can Trust
              </h2>

              <p className="text-green-50 text-lg max-w-3xl mx-auto mb-8">
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
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
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
