"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label="Toggle theme"
    >
      {/* Toggle slider */}
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-slate-800 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <Sun className="size-4 text-yellow-500 transition-transform duration-300 rotate-0" />
        ) : (
          <Moon className="size-4 text-blue-400 transition-transform duration-300 rotate-0" />
        )}
      </div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun
          className={`size-3.5 transition-opacity duration-300 ${
            theme === "light" ? "opacity-0" : "opacity-40 text-slate-400"
          }`}
        />
        <Moon
          className={`size-3.5 transition-opacity duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-40 text-slate-500"
          }`}
        />
      </div>
    </button>
  );
}
