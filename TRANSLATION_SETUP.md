# Translation System - Setup Complete ✅

## Overview

A complete multi-language translation system has been implemented with dynamic routing for 4 languages:

- 🇬🇧 **English (en)** - Default
- 🇸🇦 **Arabic (ar)** - العربية
- 🇸🇴 **Somali (so)** - Soomaali
- 🇪🇹 **Amharic (am)** - አማርኛ

## Features Implemented

✅ **Dynamic `[lang]` Routing** - All routes now include language prefix
✅ **Middleware Auto-Redirect** - Automatically redirects `/` to `/en/`
✅ **LocalStorage Persistence** - Saves user's language preference
✅ **Language Switcher** - Dropdown component in navbar (desktop & mobile)
✅ **Translation Infrastructure** - Ready-to-use translation system

## File Structure

```
app/
├── [lang]/                    # Dynamic language folder
│   ├── layout.js             # Language layout with LanguageProvider
│   ├── page.js               # Home page
│   ├── about/                # All existing routes moved here
│   ├── brands/
│   ├── clients/
│   ├── contact/
│   ├── news/
│   └── products/
├── layout.js                 # Root layout
└── page.js                   # Root page (redirects handled by middleware)

components/
├── LanguageProvider.jsx      # Language context & state management
└── LanguageSwitcher.jsx      # Language dropdown component

lib/
├── i18n.js                   # Locale configuration
└── translations.js           # Translation loader

locales/
├── en.json                   # English translations
├── ar.json                   # Arabic translations
├── so.json                   # Somali translations
└── am.json                   # Amharic translations

middleware.js                 # Handles automatic locale redirects
```

## How It Works

### URL Structure

All URLs now follow this pattern:
```
/{lang}/{page}
```

**Examples:**
- `/en/` - Home in English
- `/ar/about` - About page in Arabic
- `/so/products` - Products page in Somali
- `/am/contact` - Contact page in Amharic

### Automatic Redirection

The middleware automatically handles redirects:

1. User visits `/` → Redirected to `/en/` (default)
2. User visits `/about` → Redirected to `/en/about`
3. User changes to Arabic → Redirected to `/ar/about`

### LocalStorage

Language preference is saved automatically:
```js
localStorage.setItem('locale', 'ar'); // Saved when user changes language
```

## Using Translations in Components

### 1. Import the hook

```jsx
import { useLanguage } from "@/components/LanguageProvider";
```

### 2. Use in your component

```jsx
export default function MyComponent() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>Current language: {locale}</p>
      <button onClick={() => setLocale('ar')}>
        Switch to Arabic
      </button>
    </div>
  );
}
```

### 3. Add translations to JSON files

**locales/en.json:**
```json
{
  "nav": {
    "home": "Home",
    "about": "About Us"
  }
}
```

**locales/ar.json:**
```json
{
  "nav": {
    "home": "الرئيسية",
    "about": "من نحن"
  }
}
```

## Adding New Translations

### Step 1: Add keys to all language files

Edit `locales/en.json`, `locales/ar.json`, `locales/so.json`, `locales/am.json`:

```json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

### Step 2: Use in components

```jsx
const { t } = useLanguage();

return (
  <div>
    <h1>{t('mySection.title')}</h1>
    <p>{t('mySection.description')}</p>
  </div>
);
```

## Language Switcher

The LanguageSwitcher is already integrated in the Navbar:

**Desktop:** Between "Contact Us" button and Theme Toggle
**Mobile:** In mobile menu footer, above Theme Toggle

### Usage in other components:

```jsx
import LanguageSwitcher from "@/components/LanguageSwitcher";

<LanguageSwitcher />
```

## Configuration

### Change Default Language

Edit `lib/i18n.js`:
```js
export const defaultLocale = 'ar'; // Change from 'en' to any supported locale
```

Also update `middleware.js`:
```js
const defaultLocale = 'ar';
```

### Add More Languages

1. **Add to `lib/i18n.js`:**
```js
export const locales = ['en', 'ar', 'so', 'am', 'fr']; // Added French

export const localeNames = {
  // ... existing
  fr: 'Français',
};

export const localeFlags = {
  // ... existing
  fr: '🇫🇷',
};
```

2. **Create translation file:**
`locales/fr.json`

3. **Import in `lib/translations.js`:**
```js
import fr from '@/locales/fr.json';

export const translations = {
  en, ar, so, am, fr,
};
```

4. **Update `middleware.js`:**
```js
const locales = ['en', 'ar', 'so', 'am', 'fr'];
```

5. **Update `app/[lang]/layout.js`:**
```js
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' },
    { lang: 'so' },
    { lang: 'am' },
    { lang: 'fr' }, // Added
  ];
}
```

## API Reference

### useLanguage() Hook

Returns an object with:

- **`locale`** (string) - Current language code ('en', 'ar', 'so', 'am')
- **`setLocale`** (function) - Change language: `setLocale('ar')`
- **`t`** (function) - Translate text: `t('key.path', 'fallback')`

### Translation Function

```js
t(key, fallback?)
```

**Parameters:**
- `key` - Translation key with dot notation (e.g., 'nav.home')
- `fallback` - Optional fallback text if key not found

**Examples:**
```js
t('nav.home')                        // "Home" or "الرئيسية"
t('some.missing.key', 'Default')    // "Default" if key doesn't exist
```

## Current Translation Keys

Basic translations are set up in all language files:

```
nav.home        - "Home" / "الرئيسية" / "Guriga" / "መነሻ"
nav.about       - "About Us" / "من نحن" / "Naga Aqoonso" / "ስለእኛ"
nav.products    - "Products" / "المنتجات" / "Alaabta" / "ምርቶች"
nav.brands      - "Brands" / "العلامات التجارية" / "Sumadaha" / "ብራንዶች"
nav.clients     - "Clients" / "العملاء" / "Macaamiisha" / "ደንበኞች"
nav.news        - "News" / "الأخبار" / "Wararka" / "ዜና"
nav.contact     - "Contact Us" / "اتصل بنا" / "Nala Soo Xiriir" / "አግኙን"

common.readMore     - "Read More" / etc.
common.viewAll      - "View All" / etc.
common.getStarted   - "Get Started" / etc.
common.learnMore    - "Learn More" / etc.
```

## Next Steps

### To Complete Translation:

1. **Identify all hardcoded text** in components
2. **Add translation keys** to all 4 language JSON files
3. **Replace hardcoded text** with `t()` function
4. **Test each language** thoroughly

### Pages to Translate:

- [ ] Home page (HeroSection)
- [ ] About page
- [ ] Products page
- [ ] Brands page
- [ ] Clients page
- [ ] News page
- [ ] Contact page
- [ ] Footer component
- [ ] Any other components with user-facing text

## Testing

### 1. Test URL Routing
- Visit `/` → Should redirect to `/en/`
- Visit `/about` → Should redirect to `/en/about`
- Change language → URL should update

### 2. Test Language Persistence
1. Select Arabic from dropdown
2. Refresh page
3. Should stay on Arabic
4. Close browser and reopen
5. Should still be in Arabic

### 3. Test LocalStorage
Open browser console:
```js
localStorage.getItem('locale') // Should return current language
```

## Troubleshooting

### Issue: 404 on language routes
**Solution:** Make sure dev server is restarted after moving routes to `[lang]` folder

### Issue: Language not persisting
**Solution:** Check browser console for localStorage errors

### Issue: Translations not showing
**Solution:** Verify translation keys exist in all language JSON files

### Issue: Wrong language on load
**Solution:** Clear localStorage: `localStorage.removeItem('locale')`

## Important Notes

⚠️ **No Content Translated Yet** - Only the infrastructure is set up. You need to add translations for all your content.

⚠️ **Restart Dev Server** - After these changes, restart your development server:
```bash
npm run dev
```

⚠️ **All Routes Moved** - All routes are now inside `app/[lang]/` folder

✅ **Ready to Use** - The system is fully functional and ready for translation work

---

For questions or issues, refer to the files in `/lib/` and `/components/` folders.
