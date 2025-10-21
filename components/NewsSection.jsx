"use client";

import { useState } from "react";
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
import { usePathname } from "next/navigation";

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';

  // News categories
  const categories = ["All", "Company News", "Market Insights", "Industry Trends", "Sustainability"];

  // News articles
  const articles = [
    {
      id: 1,
      slug: "expansion-three-new-african-markets",
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
      slug: "global-rice-market-trends-2024",
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
      slug: "sustainable-palm-oil-commitment",
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
      slug: "partnership-african-distributors",
      title: "Partnership with Leading African Distributors Strengthens Market Presence",
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
      slug: "food-commodity-trading-2024-challenges",
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
      slug: "record-tonnage-q4-2024",
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
      slug: "specialty-rice-varieties-africa",
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
      slug: "quality-assurance-standards",
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
      slug: "renewable-energy-logistics",
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
              <span className="text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-300">Latest Updates</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-black dark:from-white to-teal-600 dark:to-teal-400 text-transparent bg-clip-text px-2 break-words">
              News & Insights
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Stay informed with the latest developments, market insights, and industry trends from{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">HAI Trading DMCC</span> and the
              global commodity trading sector.
            </p>
          </div>

          {/* Featured Articles Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="size-6 text-teal-600 dark:text-teal-400" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white px-2">Featured Stories</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${currentLang}/news/${article.slug}`}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer block"
                  onMouseEnter={() => setHoveredArticle(article.id)}
                  onMouseLeave={() => setHoveredArticle(null)}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 dark:from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-8">
                    {/* Article Icon */}
                    <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/40 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{article.image}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-teal-600 dark:bg-teal-700 text-white text-xs rounded-full font-semibold mb-4">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-zinc-500 dark:text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
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
                    <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Read Full Article</span>
                      <ArrowRight className="size-5" />
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-teal-500 dark:border-teal-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="size-6 text-teal-600 dark:text-teal-400" />
              <h2 className="text-2xl font-semibold text-black dark:text-white">Browse by Category</h2>
            </div>

            <div className="flex flex-wrap gap-3">
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

          {/* All Articles Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-black dark:text-white mb-8">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${currentLang}/news/${article.slug}`}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer block"
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">{article.image}</span>
                    </div>

                    {/* Category */}
                    <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs rounded-full font-medium mb-3">
                      {article.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-16 bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <Newspaper className="size-16 text-white mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-teal-50 text-lg mb-8">
                Get the latest news, market insights, and industry updates delivered directly to your inbox
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap"
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
              We're always interested in hearing from industry experts, partners, and clients. Get in touch to share your insights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${currentLang}/contact`}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Contact Us
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href={`/${currentLang}/about`}
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
