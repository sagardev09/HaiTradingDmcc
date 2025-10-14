"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  const openNavbar = () => {
    setIsMenuOpen(true);
  };

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Brands", path: "/brands" },
    { name: "Clients", path: "/clients" },
    { name: "News", path: "/news" },
  ];

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="flex items-center border mx-4 w-full max-w-4xl justify-between border-slate-700 dark:border-slate-600 px-4 py-2.5 rounded-full text-black dark:text-white bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <span className="font-semibold">HAI TRADING DMCC</span>

      <div
        id="menu"
        className={`max-md:absolute max-md:bg-black/50 max-md:backdrop-blur max-md:top-0 transition-all duration-300 max-md:h-full max-md:w-full max-md:z-10 max-md:justify-center flex-col md:flex-row flex items-center gap-2 ${
          isMenuOpen ? "max-md:left-0" : "max-md:-left-full"
        }`}
      >
        {menuLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            onClick={closeNavbar}
            className={`px-4 py-2 cursor-pointer transition-all ${
              isActive(link.path)
                ? "border border-black/10 dark:border-white/20 bg-black/10 dark:bg-white/10 font-medium rounded-full"
                : "hover:bg-black/5 dark:hover:bg-white/10 rounded-full"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={closeNavbar}
          className="md:hidden bg-gray-800 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={openNavbar} className="md:hidden">
          <svg
            className="size-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
