const Brands = ({ brands }) => {
  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <div className="overflow-hidden w-full relative max-w-6xl mx-auto select-none">
        {/* Clean fade gradients for edges */}
        <div className="absolute left-0 top-0 h-full w-32 sm:w-40 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-slate-900 via-white/80 dark:via-slate-900/80 to-transparent" />

        <div
          className="marquee-inner flex will-change-transform min-w-[200%]"
          style={{ animationDuration: "20s" }}
        >
          <div className="flex items-center py-4">
            {[...companyLogos, ...companyLogos, ...companyLogos].map(
              (company, index) => (
                <div key={index} className="relative flex-shrink-0">
                  {/* Light mode image */}
                  <img
                    src={brands[index % brands.length].image}
                    alt={brands[index % brands.length].id}
                    className="h-16 sm:h-20 md:h-28 w-auto object-contain mx-6 sm:mx-8 md:mx-10 opacity-80 hover:opacity-100 transition-opacity dark:hidden"
                    draggable={false}
                  />
                  {/* Dark mode image */}
                  <img
                    src={brands[index % brands.length].imagedark}
                    alt={brands[index % brands.length].id}
                    className="h-16 sm:h-20 md:h-28 w-auto object-contain mx-6 sm:mx-8 md:mx-10 opacity-80 hover:opacity-100 transition-opacity hidden dark:block"
                    draggable={false}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-32 sm:w-40 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-slate-900 via-white/80 dark:via-slate-900/80 to-transparent" />
      </div>
    </>
  );
};

export default Brands;
