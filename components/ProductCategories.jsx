"use client";

import Link from "next/link";
import { ArrowRight, Package, Hammer } from "lucide-react";
import { GlareCard } from "./ui/glare-card";

export default function ProductCategories() {
  const categories = [
    {
      id: "food",
      title: "Food Products & Commodities",
      icon: Package,
      image: "/brands/libaaxbox.png",
      description:
        "Premium quality food staples including Libaax rice, refined sugar, authentic spices, palm oil, sunflower oil, wheat flour, and dry nuts.",
      features: [
        "International quality standards",
        "Trusted global suppliers",
        "Guaranteed certifications",
        "Bulk & retail packaging",
      ],
      link: "/products",
      linkText: "Explore Food Products",
      gradient: "from-orange-600/50 to-amber-600/90",
    },
    {
      id: "construction",
      title: "Construction & Building Materials",
      icon: Hammer,
      image:
        "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&h=600&fit=crop",
      description:
        "High-quality construction materials including premium door skins, industrial paper products, and building essentials.",
      features: [
        "Durable construction grade",
        "Multiple finish options",
        "Certified materials",
        "Contractor & retail supply",
      ],
      link: "/construction",
      linkText: "Explore Construction Materials",
      gradient: "from-slate-700/90 to-slate-600/90",
    },
  ];

  return (
    <section className="py-10 mb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4 text-2xl font-semibold md:text-4xl lg:text-5xl">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground mb-6 text-base lg:text-lg">
            Explore our comprehensive range of premium commodities, from
            essential food staples to quality construction materials, serving
            markets across Africa with excellence.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center text-sm font-medium md:text-base hover:text-primary transition-colors"
          >
            Request a Quote
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Two Cards - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <GlareCard key={category.id} className="h-[500px]">
              <Link
                href={category.link}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-full w-full block shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.gradient} from-black/95 via-black/85 to-black/40`}
                  />
                </div>

                {/* Icon Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="size-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-base mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="inline-flex items-center gap-2 text-white font-semibold text-base bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/20 transition-all">
                    <span>{category.linkText}</span>
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </GlareCard>
          ))}
        </div>
      </div>
    </section>
  );
}
