"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Brands", path: "/brands" },
    { name: "Clients", path: "/clients" },
    { name: "News", path: "/news" },
  ];

  const opencontactpage = () => {
    window.location.href = "/contact";
  };

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 left-0 bg-primary w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        mounted && isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      <span
        className={` ${
          isScrolled ? "text-gray-700" : "text-white"
        }  font-black md:text-2xl text-xl`}
      >
        HAI TRADING DMCC
      </span>

      {/* Desktop Nav */}
      <div
        className="hidden md:flex items-center gap-4 lg:gap-8"
        suppressHydrationWarning
      >
        {menuLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              mounted && isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                mounted && isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
      </div>

      {/* Desktop Right */}
      <div
        className="hidden md:flex items-center gap-4"
        suppressHydrationWarning
      >
        <div className="hidden md:block relative">
          <ThemeToggle />
        </div>
        <button
          onClick={opencontactpage}
          className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer ${
            mounted && isScrolled
              ? "text-white bg-black"
              : "bg-white text-black"
          }`}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="flex items-center gap-3 md:hidden"
        suppressHydrationWarning
      >
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${
            mounted && isScrolled ? "invert" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {menuLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        <button
          onClick={opencontactpage}
          className="bg-primary text-white px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
