"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "#" },
      { name: "News", href: "/news" },
    ],
    products: [
      { name: "Rice", href: "/products#rice" },
      { name: "Sugar", href: "/products#sugar" },
      { name: "Palm Oil", href: "/products#palm-oil" },
      { name: "Wheat Flour", href: "/products#wheat-flour" },
    ],
    resources: [
      { name: "Our Clients", href: "/clients" },
      { name: "Brands", href: "/products#brands" },
      { name: "Quality Assurance", href: "/about#quality" },
      { name: "Sustainability", href: "/about#sustainability" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-600 to-teal-400" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        {/* Top Section - Logo, Description, and Newsletter */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-slate-700">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4 sm:mb-6">
              {/* Logo */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="/donore.png"
                  alt="HAI Trading DMCC"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert"
                />
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                    HAI GENERAL TRADING
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-teal-400 leading-tight">
                    DMCC
                  </span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Independent global market leader in food commodities, connecting
              supply and demand sustainably across Africa.
            </p>
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-teal-600/20 border border-teal-500/30 rounded-full text-[10px] sm:text-xs text-teal-300 font-medium">
                ✓ Halal Certified
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-4">
              Subscribe to our newsletter for the latest commodity market
              insights and company updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-teal-600 hover:bg-teal-700 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="size-3 sm:size-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-teal-400 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Products
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-teal-400 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-teal-400 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-teal-400 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-slate-700">
          {/* Email */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600/20 rounded-lg flex items-center justify-center border border-teal-500/30">
              <Mail className="size-4 sm:size-5 text-teal-400" />
            </div>
            <div className="min-w-0">
              <p className="text-slate-400 text-xs sm:text-sm mb-1">Email Us</p>
              <a
                href="mailto:info@haitrading.com"
                className="text-white hover:text-teal-400 transition-colors font-medium text-xs sm:text-base break-all"
              >
                info@haitrading.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600/20 rounded-lg flex items-center justify-center border border-teal-500/30">
              <Phone className="size-4 sm:size-5 text-teal-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs sm:text-sm mb-1">Call Us</p>
              <a
                href="tel:+97145754755"
                className="text-white hover:text-teal-400 transition-colors font-medium text-xs sm:text-base block"
              >
                +971 4 575 4755
              </a>
              <a
                href="tel:+971505013725"
                className="text-white hover:text-teal-400 transition-colors font-medium text-xs sm:text-base"
              >
                +971 50 501 3725
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 sm:gap-4 sm:col-span-2 md:col-span-1">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600/20 rounded-lg flex items-center justify-center border border-teal-500/30">
              <MapPin className="size-4 sm:size-5 text-teal-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs sm:text-sm mb-1">Visit Us</p>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Office 1406, Gold Crest Executive
                <br />
                Cluster C, JLT Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Copyright */}
          <div className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            <p>
              © {currentYear}{" "}
              <span className="text-white font-medium">HAI Trading DMCC</span>.
              All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 ${social.color} transition-all duration-300 hover:scale-110 hover:border-transparent group`}
                aria-label={social.name}
              >
                <social.icon className="size-4 sm:size-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <Link
              href="#"
              className="text-slate-400 hover:text-teal-400 transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="#"
              className="text-slate-400 hover:text-teal-400 transition-colors whitespace-nowrap"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="h-1 bg-gradient-to-r from-teal-400 via-teal-600 to-teal-400 opacity-50" />
    </footer>
  );
}
