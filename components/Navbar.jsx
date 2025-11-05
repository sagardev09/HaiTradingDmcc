"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { X, Menu, Globe, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const langDropdownRef = useRef(null);

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  const openNavbar = () => {
    setIsMenuOpen(true);
  };

  // Language data
  const languages = {
    en: { name: "English", flag: "🇬🇧" },
    ar: { name: "العربية", flag: "🇸🇦" },
    so: { name: "Soomaali", flag: "🇸🇴" },
    am: { name: "አማርኛ", flag: "🇪🇹" }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    }

    if (isLangOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen]);

  // Extract current language from pathname
  const currentLang = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const locales = ['en', 'ar', 'so', 'am'];
    return locales.includes(segments[0]) ? segments[0] : 'en';
  }, [pathname]);

  // Handle language change
  const handleLanguageChange = (newLang) => {
    const segments = pathname.split('/').filter(Boolean);
    const locales = ['en', 'ar', 'so', 'am'];
    const currentLocale = locales.includes(segments[0]) ? segments[0] : null;

    if (currentLocale) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }

    const newPath = '/' + segments.join('/');
    window.location.href = newPath;
  };

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
      <nav className="flex items-center border mx-4 w-full max-w-7xl justify-between border-slate-700 dark:border-slate-600 px-6 py-3 rounded-xl text-black dark:text-white bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-50">
        <Link href={`/${currentLang}`} className="flex items-center gap-3">
          <img
            src="/donore.png"
            alt="HAI Trading DMCC"
            className="h-8 sm:h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-black dark:text-white leading-tight">
              HAI TRADING
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-teal-600 dark:text-teal-400 leading-tight">
              DMCC
            </span>
          </div>
        </Link>

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
            className="hidden md:inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition"
          >
            Contact Us
          </Link>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-200"
              aria-label="Change language"
            >
              <Globe className="size-4 text-slate-700 dark:text-slate-300" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {languages[currentLang].flag} {languages[currentLang].name}
              </span>
              <ChevronDown
                className={`size-4 text-slate-700 dark:text-slate-300 transition-transform duration-200 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Language Dropdown */}
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[200] animate-fade-in">
                <div className="py-2">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => {
                        handleLanguageChange(code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors ${
                        currentLang === code
                          ? "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                      {currentLang === code && (
                        <span className="ml-auto">
                          <svg
                            className="size-4 text-teal-600 dark:text-teal-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-white dark:bg-slate-900 animate-fade-in">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <img
                  src="/donore.png"
                  alt="HAI Trading DMCC"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-base font-bold text-black dark:text-white leading-tight">
                    HAI TRADING
                  </span>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 leading-tight">
                    DMCC
                  </span>
                </div>
              </div>
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
                        ? "bg-teal-600 text-white shadow-lg"
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
                className="block w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white text-center px-6 py-3 rounded-xl font-medium transition shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
              {/* Language Switcher */}
              <div className="space-y-2">
                <span className="text-sm text-slate-600 dark:text-slate-400 block">
                  Language
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => {
                        handleLanguageChange(code);
                        closeNavbar();
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        currentLang === code
                          ? "bg-teal-600 text-white font-medium"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-xs">{lang.name}</span>
                    </button>
                  ))}
                </div>
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
