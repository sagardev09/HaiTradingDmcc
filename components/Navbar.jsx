"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  const openNavbar = () => {
    setIsMenuOpen(true);
  };

  // Extract current language from pathname
  const currentLang = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const locales = ['en', 'ar', 'so', 'am'];
    return locales.includes(segments[0]) ? segments[0] : 'en';
  }, [pathname]);

  const menuLinks = [
    { name: "Home", path: "" },
    { name: "About Us", path: "about" },
    { name: "Products", path: "products" },
    { name: "Brands", path: "brands" },
    { name: "Clients", path: "clients" },
    { name: "News", path: "news" },
  ];

  const isActive = (path) => {
    const fullPath = `/${currentLang}/${path}`;
    const currentPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

    if (path === "" && currentPath === `/${currentLang}`) return true;
    if (path !== "" && currentPath.endsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="flex items-center border mx-4 w-full max-w-7xl justify-between border-slate-700 dark:border-slate-600 px-6 py-3 rounded-xl text-black dark:text-white bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-10">
        <span className="font-semibold">HAI TRADING DMCC</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${currentLang}/${link.path}`}
              className={`px-4 py-2 cursor-pointer transition-all ${
                isActive(link.path)
                  ? "border border-black/10 dark:border-white/20 bg-black/10 dark:bg-white/10 font-medium rounded-lg"
                  : "hover:bg-black/5 dark:hover:bg-white/10 rounded-lg"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Desktop & Mobile */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={openNavbar}
            className="md:hidden p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>

          {/* Desktop Contact Us */}
          <Link
            href={`/${currentLang}/contact`}
            className="hidden md:inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Contact Us
          </Link>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white dark:bg-slate-900 animate-fade-in">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <span className="font-semibold text-lg text-black dark:text-white">
                HAI TRADING DMCC
              </span>
              <button
                onClick={closeNavbar}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
                aria-label="Close menu"
              >
                <X className="size-6 text-black dark:text-white" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-2">
                {menuLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={`/${currentLang}/${link.path}`}
                    onClick={closeNavbar}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive(link.path)
                        ? "bg-green-600 text-white shadow-lg"
                        : "text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Contact Us Button */}
              <Link
                href={`/${currentLang}/contact`}
                onClick={closeNavbar}
                className="block w-full mt-6 bg-green-600 hover:bg-green-700 text-white text-center px-6 py-3 rounded-xl font-medium transition shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
              {/* Language Switcher */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Language
                </span>
                <LanguageSwitcher openUpward={true} />
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
