"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-16 md:py-36 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto relative">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-teal-600 font-semibold uppercase tracking-wide">
          Our Portfolio
        </span>
        <h3 className="text-4xl md:text-6xl font-bold text-black dark:text-secondary-foreground">
          Trusted Brands We Represent
        </h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-white my-4 md:my-6">
          We partner with leading global brands to deliver quality products and
          services. Our diverse portfolio represents excellence in trading and
          distribution across multiple industries.
        </p>
        <button
          className={cn(
            "bg-teal-600 text-white font-medium py-2.5 px-6 rounded-full",
            "transition-all hover:bg-teal-700 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
          )}
        >
          Explore Our Brands
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&h=500&fit=crop",
    name: "Brand 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=500&h=500&fit=crop",
    name: "Brand 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=500&fit=crop",
    name: "Brand 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&h=500&fit=crop",
    name: "Brand 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop",
    name: "Brand 5",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&h=500&fit=crop",
    name: "Brand 6",
  },
];

const generateSquares = (data) => {
  return data.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-xl overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [squareOrder, setSquareOrder] = useState(squareData);

  useEffect(() => {
    setIsMounted(true);
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquareOrder((prev) => shuffle([...prev]));
    timeoutRef.current = setTimeout(shuffleSquares, 4000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 h-[400px] gap-3">
      {generateSquares(squareOrder)}
    </div>
  );
};
