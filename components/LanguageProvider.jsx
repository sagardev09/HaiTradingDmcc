"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import { locales, defaultLocale, setStoredLocale, getStoredLocale } from "@/lib/i18n";

const LanguageContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  t: () => {},
});

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function LanguageProvider({ children, translations }) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocaleState] = useState(params.lang || defaultLocale);
  const [currentTranslations, setCurrentTranslations] = useState(translations?.[locale] || {});

  // Sync locale from URL params
  useEffect(() => {
    if (params.lang && locales.includes(params.lang)) {
      setLocaleState(params.lang);
      setStoredLocale(params.lang);
      setCurrentTranslations(translations?.[params.lang] || {});
    }
  }, [params.lang, translations]);

  const setLocale = (newLocale) => {
    if (!locales.includes(newLocale)) {
      console.error(`Locale ${newLocale} is not supported`);
      return;
    }

    // Save to localStorage
    setStoredLocale(newLocale);

    // Update URL - replace current locale with new locale
    const segments = pathname.split('/').filter(Boolean);
    const currentLocale = locales.includes(segments[0]) ? segments[0] : null;

    if (currentLocale) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = '/' + segments.join('/');
    router.push(newPath);
  };

  // Translation function with nested key support
  const t = (key, fallback = key) => {
    if (!key) return fallback;

    const keys = key.split('.');
    let value = currentTranslations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback;
      }
    }

    return typeof value === 'string' ? value : fallback;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
