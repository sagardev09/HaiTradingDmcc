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
      src: "/brands/agtsugar.jpg",
      alt: "Premium Sugar",
      title: "Rawda Sugar",
    },
    {
      src: "/brands/libaax/rice/featured/libaax-rice.jpeg",
      alt: "Premium Rice",
      title: "Libaax basmati Rice",
    },
    {
      src: "/brands/li2.png",
      alt: "Libaax Sunflower Oil",
      title: "Libaax Sunflower Oil",
    },
    {
      src: "/brands/karani-veg-oil1.png",
      alt: "Karina sunflower Oil",
      title: "Karina sunflower Oil",
    },
    {
      src: "/brands/sabasoap.png",
      alt: "laundry  Soap",
      title: "laundry  Soap",
    },

    {
      src: "/brands/kifayatissue.png",
      alt: "Kifaya Tissue Paper",
      title: "Kifaya Tissue Paper",
    },
    {
      src: "/brands/fstissue.jpg",
      alt: "Falling Star Tissue Paper",
      title: "Falling Star Tissue Paper",
    },
    {
      src: "/brands/abusita-oil.png",
      alt: "Abusita Vegetable Oil",
      title: "Abusita Vegetable Oil",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-primary relative px-2 break-words">
          Our Products
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
            className="relative flex h-[91%] w-full basis-[73%] items-center justify-center sm:basis-[50%] md:basis-[30%] lg:basis-[25%] xl:basis-[21%] bg-primary/10 py-6 dark:bg-transparent"
          >
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  current !== index
                    ? "inset(15% 0 15% 0 round 2rem)"
                    : "inset(0 0 0 0 round 2rem)",
              }}
              className="h-full w-full overflow-hidden rounded-3xl ring-2 ring-gray-300 dark:ring-gray-600"
            >
              <div className="relative h-full w-full">
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
