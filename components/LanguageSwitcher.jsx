"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { locales, localeNames, localeFlags } from "@/lib/i18n";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageSwitcher({ openUpward = false }) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-200"
        aria-label="Change language"
      >
        <Globe className="size-4 text-slate-700 dark:text-slate-300" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:inline">
          {localeFlags[locale]} {localeNames[locale]}
        </span>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 sm:hidden">
          {localeFlags[locale]}
        </span>
        <ChevronDown
          className={`size-4 text-slate-700 dark:text-slate-300 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute right-0 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[200] animate-fade-in ${
          openUpward ? 'bottom-full mb-2' : 'top-full mt-2'
        }`}>
          <div className="py-2">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors ${
                  locale === loc
                    ? "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 font-medium"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                }`}
              >
                <span className="text-xl">{localeFlags[loc]}</span>
                <span className="text-sm">{localeNames[loc]}</span>
                {locale === loc && (
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
  );
}
