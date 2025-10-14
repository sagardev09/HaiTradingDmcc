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
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=500&fit=crop",
      alt: "Supply Chain 1",
      title: "Global Sourcing",
    },
    {
      src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=500&fit=crop",
      alt: "Supply Chain 2",
      title: "Logistics",
    },
    {
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&h=500&fit=crop",
      alt: "Supply Chain 3",
      title: "Warehousing",
    },
    {
      src: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=500&h=500&fit=crop",
      alt: "Supply Chain 4",
      title: "Distribution",
    },
    {
      src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500&h=500&fit=crop",
      alt: "Supply Chain 5",
      title: "Quality Control",
    },

    {
      src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=500&fit=crop",
      alt: "Supply Chain 7",
      title: "Supply Management",
    },
    {
      src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=500&h=500&fit=crop",
      alt: "Supply Chain 8",
      title: "Import/Export",
    },
    {
      src: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=500&h=500&fit=crop",
      alt: "Supply Chain 9",
      title: "Trade Solutions",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden  py-20">
      <div className="w-full  px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary relative">
          Our Supply Chain
        </h2>
        <Carousel_006
          images={images}
          className=""
          loop={true}
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
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]
          : []
      }
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
