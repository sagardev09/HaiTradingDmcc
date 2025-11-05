"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function SupplyChainCarousel() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1673791031093-eb8eefa60083?q=80&w=1200&auto=format&fit=crop",
      alt: "Premium Sugar",
      title: "Sugar",
    },
    {
      src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
      alt: "Premium Rice",
      title: "Rice",
    },
    {
      src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop",
      alt: "Palm Oil",
      title: "Palm Oil",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663089525424-ca57c1a28a08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Sunflower Oil",
      title: "Sunflower Oil",
    },
    {
      src: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?q=80&w=1200&auto=format&fit=crop",
      alt: "Dry Fruits and Nuts",
      title: "Dry Fruits & Nuts",
    },
    {
      src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop",
      alt: "Wheat Flour",
      title: "Wheat Flour",
    },
    {
      src: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      alt: "Premium Spices",
      title: "Spices",
    },
    {
      src: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1200&auto=format&fit=crop",
      alt: "Door Skin",
      title: "Door Skin",
    },
    {
      src: "https://images.unsplash.com/photo-1648622981113-1e0f7e2c1b4e?q=80&w=1200&auto=format&fit=crop",
      alt: "Paper and Paper Cups",
      title: "Paper & Paper Cups",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-primary relative px-2 break-words">
          Our Supply Chain
        </h2>
        <Carousel_006
          images={images}
          className=""
          loop={true}
          autoplay={true}
          showNavigation={true}
          showPagination={true}
        />
      </div>
    </div>
  );
}

const Carousel_006 = ({
  images,
  className,
  autoplay = false,
  loop = true,
  showNavigation = true,
  showPagination = true,
}) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("w-full", className)}
      opts={{
        loop,
        slidesToScroll: 1,
      }}
      plugins={autoplay ? [autoplayPlugin.current] : []}
    >
      <CarouselContent className="flex h-[500px] w-full">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="relative flex h-[81.5%] w-full basis-[73%] items-center justify-center sm:basis-[50%] md:basis-[30%] lg:basis-[25%] xl:basis-[21%]"
          >
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  current !== index
                    ? "inset(15% 0 15% 0 round 2rem)"
                    : "inset(0 0 0 0 round 2rem)",
              }}
              className="h-full w-full overflow-hidden rounded-3xl"
            >
              <div className="relative h-full w-full border">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full scale-105 object-cover"
                />
              </div>
            </motion.div>
            <AnimatePresence mode="wait">
              {current === index && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-2 flex h-[14%] w-full translate-y-full items-center justify-center p-2 text-center  tracking-tight text-primary font-extrabold uppercase text-lg md:text-xl"
                >
                  {img.title}
                </motion.div>
              )}
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>

      {showNavigation && (
        <div className="absolute -bottom-4 right-0 flex w-full items-center justify-between gap-2 px-4">
          <button
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()}
            className="rounded-full bg-black/10 p-2 hover:bg-black/20 transition"
          >
            <ChevronLeft className="text-black" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => api?.scrollNext()}
            className="rounded-full bg-black/10 p-2 hover:bg-black/20 transition"
          >
            <ChevronRight className="text-black" />
          </button>
        </div>
      )}

      {showPagination && (
        <div className="flex w-full items-center justify-center mt-8">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: images.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 w-2 cursor-pointer rounded-full transition-all",
                  current === index ? "bg-black w-8" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </Carousel>
  );
};
