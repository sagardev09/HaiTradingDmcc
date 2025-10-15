"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Globe,
  Award,
  Package,
  Users,
  Sparkles,
  Filter,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredArticle, setHoveredArticle] = useState(null);

  // News categories
  const categories = [
    "All",
    "Company News",
    "Market Insights",
    "Industry Trends",
    "Sustainability",
  ];

  // News articles
  const articles = [
    {
      id: 1,
      title: "HAI Trading DMCC Expands Operations to Three New African Markets",
      excerpt:
        "We're excited to announce our expansion into three new markets in West Africa, strengthening our commitment to serving the continent with premium commodities.",
      category: "Company News",
      date: "2024-12-15",
      readTime: "5 min read",
      image: "📰",
      featured: true,
      tags: ["Expansion", "Africa", "Growth"],
    },
    {
      id: 2,
      title: "Global Rice Market Trends: Insights for 2024",
      excerpt:
        "An in-depth analysis of the global rice market, including supply chain dynamics, pricing trends, and emerging opportunities in African markets.",
      category: "Market Insights",
      date: "2024-12-10",
      readTime: "8 min read",
      image: "📊",
      featured: true,
      tags: ["Rice", "Market Analysis", "Trends"],
    },
    {
      id: 3,
      title: "Sustainable Palm Oil: Our Commitment to Responsible Sourcing",
      excerpt:
        "Learn about our sustainable sourcing practices and partnerships that ensure environmentally responsible palm oil production.",
      category: "Sustainability",
      date: "2024-12-05",
      readTime: "6 min read",
      image: "🌱",
      featured: false,
      tags: ["Sustainability", "Palm Oil", "Environment"],
    },
    {
      id: 4,
      title:
        "Partnership with Leading African Distributors Strengthens Market Presence",
      excerpt:
        "New strategic partnerships with key distributors across East Africa enhance our ability to deliver quality products efficiently.",
      category: "Company News",
      date: "2024-11-28",
      readTime: "4 min read",
      image: "🤝",
      featured: false,
      tags: ["Partnership", "Distribution", "Growth"],
    },
    {
      id: 5,
      title: "Food Commodity Trading in 2024: Navigating Global Challenges",
      excerpt:
        "Industry experts discuss the major challenges and opportunities in food commodity trading, from supply chain disruptions to emerging markets.",
      category: "Industry Trends",
      date: "2024-11-20",
      readTime: "10 min read",
      image: "🌍",
      featured: false,
      tags: ["Industry", "Global Trade", "Analysis"],
    },
    {
      id: 6,
      title: "HAI Trading Achieves Record Tonnage in Q4 2024",
      excerpt:
        "Fourth quarter results show remarkable growth with over 3,000 tons of commodities delivered across our markets.",
      category: "Company News",
      date: "2024-11-15",
      readTime: "3 min read",
      image: "📈",
      featured: false,
      tags: ["Achievement", "Milestone", "Growth"],
    },
    {
      id: 7,
      title: "The Rise of Specialty Rice Varieties in African Markets",
      excerpt:
        "Consumer preferences are shifting towards premium and specialty rice varieties. Explore this growing trend and what it means for the market.",
      category: "Market Insights",
      date: "2024-11-08",
      readTime: "7 min read",
      image: "🌾",
      featured: false,
      tags: ["Rice", "Consumer Trends", "Market"],
    },
    {
      id: 8,
      title: "Quality Assurance: How We Maintain Premium Standards",
      excerpt:
        "Behind the scenes look at our rigorous quality control processes that ensure every product meets international standards.",
      category: "Company News",
      date: "2024-10-25",
      readTime: "5 min read",
      image: "✅",
      featured: false,
      tags: ["Quality", "Standards", "Process"],
    },
    {
      id: 9,
      title: "Renewable Energy in Commodity Logistics: Our Green Initiative",
      excerpt:
        "HAI Trading invests in renewable energy solutions for our logistics operations, reducing carbon footprint significantly.",
      category: "Sustainability",
      date: "2024-10-18",
      readTime: "6 min read",
      image: "♻️",
      featured: false,
      tags: ["Sustainability", "Green Energy", "Innovation"],
    },
  ];

  // Filter articles by category
  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  // Featured articles
  const featuredArticles = articles.filter((article) => article.featured);

  return (
    <section className="relative min-h-screen">
      <div className="relative z-10 flex flex-col items-center max-md:px-2 text-black dark:text-white text-sm pb-28 pt-8">
        <div className="w-full max-w-7xl mx-auto px-4 mt-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-6">
              <Sparkles className="size-5 text-primary " />
              <span className="text-sm font-medium text-primary">
                Latest Updates
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-primary">
              News & Insights
            </h1>

            <p className="text-black dark:text-white md:text-lg max-w-3xl mx-auto">
              Stay informed with the latest developments, market insights, and
              industry trends from{" "}
              <span className="font-semibold text-primary">
                HAI Trading DMCC
              </span>{" "}
              and the global commodity trading sector.
            </p>
          </div>

          {/* Featured Articles Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="size-6 text-primary-foreground" />
              <h2 className="text-3xl font-semibold text-primary">
                Featured Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div
                  key={article.id}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredArticle(article.id)}
                  onMouseLeave={() => setHoveredArticle(null)}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 dark:from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-8">
                    {/* Article Icon */}
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{article.image}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-green-600 dark:bg-green-700 text-white text-xs rounded-full font-semibold mb-4">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-secondary-foreground leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-zinc-500 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="size-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Read Full Article</span>
                      <ArrowRight className="size-5" />
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-green-500 dark:border-green-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="size-6 text-primary-foreground" />
              <h2 className="text-2xl font-semibold text-primary">
                Browse by Category
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer ${
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

          {/* All Articles Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-primary mb-8">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">{article.image}</span>
                    </div>

                    {/* Category */}
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs rounded-full font-medium mb-3">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-secondary-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-slate-300 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-16 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <Newspaper className="size-16 text-white mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-green-50 text-lg mb-8">
                Get the latest news, market insights, and industry updates
                delivered directly to your inbox
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
              Have a Story to Share?
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              We're always interested in hearing from industry experts,
              partners, and clients. Get in touch to share your insights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Contact Us
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-black dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-600 transition-all duration-200 hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
