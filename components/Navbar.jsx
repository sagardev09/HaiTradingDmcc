"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  const openNavbar = () => {
    setIsMenuOpen(true);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    closeNavbar();
  };

  const menuLinks = ["Home", "Products", "Clients", "Contact Us"];

  return (
    <nav className="flex items-center border mx-4 w-full max-w-4xl justify-between border-slate-700 px-4 py-2.5 rounded-full text-black">
      <span>HAI TRADING DMCC</span>

      <div
        id="menu"
        className={`max-md:absolute max-md:bg-black/50 max-md:backdrop-blur max-md:top-0 transition-all duration-300 max-md:h-full max-md:w-full max-md:z-10 max-md:justify-center flex-col md:flex-row flex items-center gap-2 ${
          isMenuOpen ? "max-md:left-0" : "max-md:-left-full"
        }`}
      >
        {menuLinks.map((link) => (
          <a
            key={link}
            onClick={() => handleLinkClick(link)}
            className={`px-4 py-2 cursor-pointer ${
              activeLink === link
                ? "border border-black/10 bg-black/10 font-medium rounded-full"
                : ""
            }`}
            href="#"
          >
            {link}
          </a>
        ))}
        <button
          onClick={closeNavbar}
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
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

      <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition">
        Contact Us
      </button>
    </nav>
  );
}
