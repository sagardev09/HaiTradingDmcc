const Brands = () => {
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

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none px-4">
        <div className="absolute left-0 top-0 h-full w-12 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-slate-900 to-transparent" />
        <div
          className="marquee-inner flex will-change-transform min-w-[200%]"
          style={{ animationDuration: "15s" }}
        >
          <div className="flex items-center">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <img
                key={index}
                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                alt={company}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain mx-4 sm:mx-6 md:mx-8 flex-shrink-0"
                draggable={false}
              />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-12 sm:w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-slate-900 to-transparent" />
      </div>
    </>
  );
};

export default Brands;
