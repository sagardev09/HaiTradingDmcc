"use client";

import {
  Globe,
  Package,
  TrendingUp,
  Clock,
  Award,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function WhyTradingLLC() {
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

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-36 px-4 sm:px-6 md:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
            Why Choose HAI Trading?
          </h2>
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
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-xl flex items-center justify-center">
                  <feature.icon className="size-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Know More Button */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Know More
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
