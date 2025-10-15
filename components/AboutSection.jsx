"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Handshake,
  Leaf,
  Package,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const [activeValue, setActiveValue] = useState(0);

  // Core values
  const values = [
    {
      icon: Shield,
      title: "Quality & Integrity",
      description: "Uncompromising standards in every transaction, building trust through excellence",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Handshake,
      title: "Customer-Centric",
      description: "Your success is our priority, with personalized solutions and dedicated support",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Connecting supply and demand responsibly, ensuring long-term growth for all",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging technology and market insights to deliver cutting-edge solutions",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Heart,
      title: "Ethical Practice",
      description: "Operating with transparency and fairness in all our business relationships",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "Empowering our people to shape their future and drive our collective success",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  // Why choose us features
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive sourcing capabilities across continents with local market expertise",
    },
    {
      icon: Package,
      title: "Multi-Product Portfolio",
      description: "Comprehensive range of premium commodities from trusted brands",
    },
    {
      icon: TrendingUp,
      title: "Market Leadership",
      description: "Independent global market leader with proven track record",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient supply chain ensuring quick shipping and reliability",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control and packaging standards",
    },
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description: "Building lasting relationships through dedication and cooperation",
    },
  ];

  // Timeline milestones
  const milestones = [
    { year: "2014", event: "Company Founded", description: "HAI Trading DMCC established in Dubai" },
    { year: "2016", event: "Regional Expansion", description: "Entered East African markets" },
    { year: "2018", event: "Brand Partnerships", description: "Partnered with AGT and Libaax brands" },
    { year: "2020", event: "Market Leader", description: "Became top commodity trader in the region" },
    { year: "2024", event: "Global Presence", description: "Serving 9+ countries with 500+ clients" },
  ];

  return (
    <section className="relative min-h-screen bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-green-950 bg-top bg-no-repeat">
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-md:px-2 text-black dark:text-white text-sm pb-28 pt-8">
        <Navbar />

        <div className="w-full max-w-7xl mx-auto px-4 mt-16">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/40 rounded-full mb-6">
              <Sparkles className="size-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Established 2014</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-black dark:from-white to-[#37ac6e] dark:to-green-400 text-transparent bg-clip-text">
              About HAI Trading DMCC
            </h1>

            <p className="text-zinc-800 dark:text-slate-300 md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
              We are an <span className="font-semibold text-green-600 dark:text-green-400">independent global market leader</span> in food
              commodities, connecting supply and demand sustainably by integrating{" "}
              <span className="font-semibold text-black dark:text-white">global know-how with local knowledge</span>.
            </p>

            {/* Quick stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: "2014", label: "Established" },
                { value: "10K+", label: "Tons Traded" },
                { value: "2", label: "Major Brands" },
                { value: "24/7", label: "Customer Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Mission Card */}
            <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 dark:from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="size-8 text-green-600 dark:text-green-400" />
                </div>

                <h2 className="text-3xl font-semibold text-black dark:text-white mb-4 flex items-center gap-3">
                  Our Mission
                </h2>

                <p className="text-zinc-700 dark:text-slate-300 text-lg leading-relaxed">
                  To establish a <span className="font-semibold text-green-600 dark:text-green-400">global presence</span> through our
                  completely integrated business model, customer-centric products, dependable commitments,{" "}
                  <span className="font-semibold text-black dark:text-white">unrivaled quality</span>, timely services, and{" "}
                  <span className="font-semibold text-black dark:text-white">ethical business practices</span>.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Quality", "Service", "Ethics", "Innovation"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Animated shimmer */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="size-8 text-white" />
                </div>

                <h2 className="text-3xl font-semibold text-white mb-4 flex items-center gap-3">
                  Our Vision
                </h2>

                <p className="text-green-50 text-lg leading-relaxed mb-6">
                  To encourage <span className="font-semibold text-white">entrepreneurship</span>, enable our employees
                  to shape their own future, and expand naturally by leveraging our strengths while maintaining our{" "}
                  <span className="font-semibold text-white">expertise in commodity groups</span>.
                </p>

                <div className="space-y-3">
                  {["Empower People", "Natural Growth", "Market Expertise"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="size-5 flex-shrink-0" />
                      <span className="text-green-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">Our Core Values</h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                The principles that guide our decisions and define who we are
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div
                    className={`w-14 h-14 ${value.color} dark:bg-opacity-20 dark:brightness-125 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="size-7 dark:brightness-150" />
                  </div>

                  <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-slate-400 leading-relaxed">{value.description}</p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Journey Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">Our Journey</h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                A decade of growth, innovation, and market leadership
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 via-green-500 to-green-400" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className="flex-1">
                      <div
                        className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <div className="text-green-600 dark:text-green-400 font-bold text-2xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{milestone.event}</h3>
                        <p className="text-zinc-600 dark:text-slate-400">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-6 h-6 bg-green-600 dark:bg-green-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg relative z-10" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">Why Choose HAI Trading?</h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Our competitive advantages that set us apart in the global commodities market
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center">
                      <feature.icon className="size-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-zinc-600 dark:text-slate-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Culture & Team Section */}
          <div className="mb-20 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-800 dark:to-green-950 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-600 dark:bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="size-10 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-6">Our Team & Culture</h2>

              <p className="text-zinc-700 dark:text-slate-300 text-lg leading-relaxed mb-8">
                We are composed of <span className="font-semibold text-green-600 dark:text-green-400">motivated professionals</span> who
                bring global expertise and local market knowledge to every transaction. Our decentralized
                decision-making empowers teams to deliver exceptional results while maintaining the highest standards of
                quality and service.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Lightbulb, label: "Innovation Driven" },
                  { icon: Users, label: "Team Collaboration" },
                  { icon: Award, label: "Excellence Focused" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <item.icon className="size-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                    <p className="font-semibold text-black dark:text-white">{item.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Join Our Team
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Experience the HAI Trading difference – quality commodities, reliable service, and sustainable partnerships.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get Started
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
