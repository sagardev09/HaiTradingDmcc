import { LanguageProvider } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function LangLayout({ children, params }) {
  return (
    <LanguageProvider translations={translations}>
      {children}
    </LanguageProvider>
  );
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' },
    { lang: 'so' },
    { lang: 'am' },
  ];
}
