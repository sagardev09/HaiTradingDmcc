"use client";

import { useState } from "react";
import { Globe, MapPin, Users, TrendingUp, Package, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ClientsSection() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // African countries HAI Trading serves
  const countries = [
    { name: "Ethiopia", region: "East Africa", flag: "🇪🇹", established: "2018", products: ["Rice", "Sugar", "Palm Oil"] },
    { name: "Somalia", region: "East Africa", flag: "🇸🇴", established: "2017", products: ["Wheat Flour", "Rice", "Spices"] },
    { name: "Somaliland", region: "East Africa", flag: "🏴", established: "2019", products: ["Sugar", "Palm Oil", "Paper"] },
    { name: "Kenya", region: "East Africa", flag: "🇰🇪", established: "2016", products: ["Rice", "Sunflower Oil", "Dry Nuts"] },
    { name: "Tanzania", region: "East Africa", flag: "🇹🇿", established: "2019", products: ["Wheat Flour", "Sugar", "Palm Oil"] },
    { name: "Uganda", region: "East Africa", flag: "🇺🇬", established: "2020", products: ["Rice", "Spices", "Sunflower Oil"] },
    { name: "Djibouti", region: "East Africa", flag: "🇩🇯", established: "2018", products: ["Sugar", "Rice", "Palm Oil"] },
    { name: "Cameroon", region: "West Africa", flag: "🇨🇲", established: "2017", products: ["Rice", "Palm Oil", "Wheat Flour"] },
    { name: "Togo", region: "West Africa", flag: "🇹🇬", established: "2019", products: ["Sugar", "Sunflower Oil", "Rice"] },
    { name: "Mali", region: "West Africa", flag: "🇲🇱", established: "2020", products: ["Rice", "Sugar", "Palm Oil"] },
    { name: "Burkina Faso", region: "West Africa", flag: "🇧🇫", established: "2021", products: ["Wheat Flour", "Rice", "Sunflower Oil"] },
  ];

  // Stats data
  const stats = [
    { icon: Globe, label: "Countries Served", value: "11+", color: "text-green-600" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-600" },
    { icon: Package, label: "Products Delivered", value: "10K+", color: "text-purple-600" },
    { icon: TrendingUp, label: "Years in Business", value: "8+", color: "text-orange-600" },
  ];

  return (
    <section className="relative min-h-screen bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-green-950 bg-top bg-no-repeat">
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-slate-900/80 pointer-events-none" />

      <div className="relative z-0 flex flex-col items-center max-md:px-2 text-black dark:text-white text-sm pb-28 pt-8">
        <div className="w-full max-w-7xl mx-auto px-4 mt-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/40 rounded-full mb-6">
              <Globe className="size-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Serving Africa with Excellence</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-black dark:from-white to-[#37ac6e] dark:to-green-400 text-transparent bg-clip-text">
              Our Global Clients
            </h1>

            <p className="text-zinc-800 dark:text-slate-300 md:text-lg max-w-3xl mx-auto mb-8">
              Building lasting partnerships across East and West Africa, delivering quality commodities
              and exceptional service to markets that matter.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon className={`size-8 ${stat.color} dark:brightness-125 mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Countries Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-semibold text-black dark:text-white mb-2">Markets We Serve</h2>
                <p className="text-zinc-600 dark:text-slate-400">Trusted partnerships across the African continent</p>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-600 dark:text-slate-400">East Africa</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-zinc-600 dark:text-slate-400">West Africa</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredCountry(country.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  {/* Colored accent based on region */}
                  <div
                    className={`absolute top-0 left-0 w-2 h-full rounded-l-2xl ${
                      country.region === "East Africa" ? "bg-green-500" : "bg-blue-500"
                    }`}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{country.flag}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {country.name}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-slate-400">{country.region}</p>
                      </div>
                    </div>
                    <MapPin className="size-5 text-zinc-400 dark:text-slate-500 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-slate-400">
                      <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
                      <span>Partner since {country.established}</span>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-zinc-500 dark:text-slate-500 mb-2">Key Products:</p>
                      <div className="flex flex-wrap gap-2">
                        {country.products.map((product, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs rounded-full font-medium"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 dark:from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Why Partner With Us Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Why Partner With HAI Trading?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
                    <p className="text-green-50">
                      Premium commodities with rigorous quality control and certification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reliable Supply Chain</h3>
                    <p className="text-green-50">
                      Efficient logistics and timely delivery to ensure your business continuity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Competitive Pricing</h3>
                    <p className="text-green-50">
                      Best market rates with flexible payment terms tailored to your needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
                    <p className="text-green-50">
                      24/7 customer service with local market expertise and multilingual support
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Become a Client
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">
                Hear from businesses across Africa who trust HAI Trading for their commodity needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "HAI Trading has been our trusted partner for over 5 years. Their consistent quality and reliable delivery have been crucial to our business growth.",
                  author: "Ahmed Hassan",
                  role: "CEO, East African Imports",
                  country: "Kenya",
                  flag: "🇰🇪",
                },
                {
                  quote: "The team at HAI Trading understands our market needs perfectly. Their customer service and product range are exceptional.",
                  author: "Fatima Osman",
                  role: "Director, Somali Trade Co.",
                  country: "Somalia",
                  flag: "🇸🇴",
                },
                {
                  quote: "Working with HAI Trading has transformed our supply chain. Their competitive pricing and timely deliveries have exceeded our expectations.",
                  author: "John Kamau",
                  role: "Supply Chain Manager",
                  country: "Tanzania",
                  flag: "🇹🇿",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl text-green-600 dark:text-green-400 mb-4">"</div>
                  <p className="text-zinc-700 dark:text-slate-300 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.flag}</div>
                    <div>
                      <p className="font-semibold text-black dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-zinc-600 dark:text-slate-400">{testimonial.role}</p>
                      <p className="text-xs text-zinc-500 dark:text-slate-500">{testimonial.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
              Ready to Join Our Network?
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how HAI Trading can support your business with premium commodities and exceptional service.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get in Touch
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-black dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-600 transition-all duration-200 hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
