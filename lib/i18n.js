// Internationalization configuration

export const locales = ["en", "ar", "so", "am"];
export const defaultLocale = "en";

export const localeNames = {
  en: "English",
  ar: "العربية", // Arabic
  so: "Somaliland", // Somali
  am: "አማርኛ", // Amharic
};

export const localeFlags = {
  en: "🇬🇧",
  ar: "🇸🇦",
  so: "🇸🇴",
  am: "🇪🇹",
};

// Get locale from browser localStorage or default
export function getStoredLocale() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("locale") || defaultLocale;
  }
  return defaultLocale;
}

// Save locale to localStorage
export function setStoredLocale(locale) {
  if (typeof window !== "undefined" && locales.includes(locale)) {
    localStorage.setItem("locale", locale);
  }
}
