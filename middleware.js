import { NextResponse } from 'next/server';

// ============================================
// UNDER CONSTRUCTION MODE
// Set to true to show under construction page
// Set to false to restore normal site behavior
// ============================================
const UNDER_CONSTRUCTION = true;

const locales = ['en', 'ar', 'so', 'am'];
const defaultLocale = 'en';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Under Construction Mode: Redirect all routes to under-construction page
  if (UNDER_CONSTRUCTION) {
    // Allow the under-construction page itself
    if (pathname === '/under-construction') {
      return NextResponse.next();
    }

    // Redirect everything else to under-construction
    return NextResponse.redirect(new URL('/under-construction', request.url));
  }

  // Normal mode: Locale handling
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale if no locale in path
  const locale = defaultLocale;
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|.*\\..*).*)',
  ],
};
