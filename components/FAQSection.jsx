"use client";
import { useState, useRef, useEffect } from "react";

const MainFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [tailPosition, setTailPosition] = useState(40);
  const questionRefs = useRef([]);
  const containerRef = useRef(null);

  // Calculate tail position when openIndex changes or on scroll
  useEffect(() => {
    const updateTailPosition = () => {
      if (
        openIndex !== null &&
        questionRefs.current[openIndex] &&
        containerRef.current
      ) {
        const questionElement = questionRefs.current[openIndex];
        const containerElement = containerRef.current;

        const questionRect = questionElement.getBoundingClientRect();
        const containerRect = containerElement.getBoundingClientRect();

        // Calculate the center of the question relative to the answer container
        const questionCenter = questionRect.top + questionRect.height / 2;
        const containerTop = containerRect.top;
        const relativePosition = questionCenter - containerTop;

        setTailPosition(relativePosition);
      }
    };

    // Initial calculation
    updateTailPosition();

    // Add scroll listener for smooth updates when scrolling
    const questionsContainer = document.querySelector(
      ".space-y-3.overflow-y-auto"
    );
    if (questionsContainer) {
      questionsContainer.addEventListener("scroll", updateTailPosition);
    }

    // Add window resize listener
    window.addEventListener("resize", updateTailPosition);

    return () => {
      if (questionsContainer) {
        questionsContainer.removeEventListener("scroll", updateTailPosition);
      }
      window.removeEventListener("resize", updateTailPosition);
    };
  }, [openIndex]);

  // Reusable Answer Bubble Component
  const AnswerBubble = ({
    faq,
    isVisible,
    isFullHeight = false,
    tailPos = 40,
  }) => {
    if (!isVisible) return null;

    return (
      <div className={`${isFullHeight ? "" : "mt-4"}`}>
        {/* Chat Bubble Container */}
        <div
          className={`relative p-6 bg-primary rounded-3xl shadow-2xl border-2 ${
            isFullHeight ? "h-[550px] flex flex-col" : ""
          }`}
        >
          {/* Decorative Corner */}
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary rounded-full opacity-30 blur-xl animate-pulse"></div>

          {/* Chat Bubble Tail - Different position for mobile */}
          <div
            className="absolute lg:-left-2 left-8 w-6 h-6 bg-primary transform rotate-45 border-l-2 border-b-2 lg:border-t-0 lg:border-r-0 border-primary"
            style={{
              top: isFullHeight ? `${tailPos}px` : "-12px",
              transition: "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          ></div>

          {/* Avatar Section */}
          <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-white/20">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white dark:text-black font-bold shadow-lg ">
              HT
            </div>
            <div>
              <h4 className="font-semibold text-white dark:text-black">
                Hai Trading DMCC
              </h4>
              <p className="text-xs text-white dark:text-black">Support Team</p>
            </div>
          </div>

          {/* Question Echo */}
          <div className="mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border-l-4 border-secondary">
            <p className="text-xs text-white dark:text-black font-medium mb-1">
              Your Question:
            </p>
            <p className="text-sm text-white dark:text-black font-medium">
              {faq.question}
            </p>
          </div>

          {/* Answer Content */}
          <div
            className={`space-y-3 ${
              isFullHeight ? "flex-1 overflow-y-auto" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="text-xs font-semibold text-white dark:text-black uppercase tracking-wide">
                Answer
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-white dark:text-black">
              {faq.answer}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-secondary animate-bounce"></div>
            <div
              className="w-2 h-2 rounded-full bg-secondary animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-white/70 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  const faqsData = [
    {
      question: "What products does HAI Trading DMCC offer?",
      answer:
        "HAI Trading DMCC specializes in two main categories: Food Products & Commodities (including Libaax rice, refined sugar, palm oil, sunflower oil, wheat flour, spices, and dry nuts) and Construction & Building Materials (including plywood, MDF, paints, thinners, plumbing fixtures, and hardware). All our products meet international quality standards.",
    },
    {
      question: "Which regions do you supply to?",
      answer:
        "We primarily serve markets across Africa with a strong presence in Somalia, Ethiopia, Djibouti, and other East African nations. Our headquarters is in Dubai, UAE, which allows us to efficiently source products globally and distribute them to our target markets.",
    },
    {
      question: "What are your main food product brands?",
      answer:
        "Our flagship brand is Libaax, which includes premium Basmati rice, parboiled rice, palm oil, and sunflower oil. We also supply AGT Sugar, Rawda products, Karina Sunflower Oil, Abusita Vegetable Oil, and various other trusted brands known for quality and consistency.",
    },
    {
      question: "Do you offer bulk ordering for businesses?",
      answer:
        "Yes, we specialize in bulk orders for wholesalers, retailers, and businesses. We offer flexible packaging options from retail sizes to industrial bulk quantities. Contact our sales team to discuss volume pricing, custom packaging, and delivery schedules tailored to your business needs.",
    },
    {
      question: "What quality certifications do your products have?",
      answer:
        "All our products are HACCP compliant and Halal certified. We work only with certified suppliers and conduct regular quality audits to ensure consistent excellence. Our food products meet international food safety standards, and our construction materials come with proper quality documentation.",
    },
    {
      question: "How can I place an order or request a quote?",
      answer:
        "You can request a quote by contacting us through our website's contact form, emailing us at info@haitrading.com, or calling our Dubai office at +971 4 575 4755. Our team typically responds within 24-48 hours with detailed pricing, availability, and delivery information.",
    },
  ];
  return (
    <section className="w-full py-12 sm:py-16 relative overflow-hidden">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }

                @keyframes slideInLeft {
                  from {
                    opacity: 0;
                    transform: translateX(-30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }

                @keyframes slideInRight {
                  from {
                    opacity: 0;
                    transform: translateX(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }

                @keyframes bubblePop {
                  0% {
                    opacity: 0;
                    transform: scale(0.8) translateY(20px);
                  }
                  70% {
                    transform: scale(1.05) translateY(-5px);
                  }
                  100% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                  }
                }

                @keyframes float {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-10px);
                  }
                }

                .animate-slide-in-left {
                  animation: slideInLeft 0.5s ease-out;
                }

                .animate-slide-in-right {
                  animation: slideInRight 0.5s ease-out;
                }

                .animate-bubble-pop {
                  animation: bubblePop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                .animate-float {
                  animation: float 3s ease-in-out infinite;
                }
            `}</style>

      {/* Header Section */}
      <div className="flex flex-col items-center text-center text-slate-800 px-4 sm:px-6 md:px-8 mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-black dark:text-white px-2 break-words">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-secondary-foreground mt-4 max-w-2xl px-2">
          Have questions about our services? Click on any question to see the
          answer
        </p>
      </div>

      {/* Split Screen Layout */}
      <div className="w-full container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:min-h-[600px]">
          {/* Left Side - FAQ Questions */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {/* Desktop Only Header */}
            <div className="hidden lg:block sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-float"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Select a Question
                </h3>
              </div>
            </div>
            <div className="space-y-3 overflow-y-auto lg:max-h-[550px] pr-2 scrollbar-thin scrollbar-thumb-[#9B5DE0] scrollbar-track-gray-200">
              {faqsData.map((faq, index) => (
                <div key={index}>
                  {/* Question Card */}
                  <div
                    ref={(el) => (questionRefs.current[index] = el)}
                    className={`group cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 animate-slide-in-left bg-primary ${
                      openIndex === index
                        ? "border-border  shadow-lg"
                        : "border-border"
                    }`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 bg-primary-foreground ${
                          openIndex === index ? " text-primary" : "text-primary"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                            openIndex === index
                              ? "text-white dark:text-black"
                              : "text-white dark:text-black"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <svg
                        className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
                          openIndex === index
                            ? "text-white dark:text-black "
                            : "text-white dark:text-black rotate-90"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Answer Bubble for Mobile - Hidden on lg and above */}
                  <div className="lg:hidden">
                    <AnswerBubble faq={faq} isVisible={openIndex === index} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Chat Bubble Answer (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-start justify-center lg:sticky lg:top-4">
            <div ref={containerRef} className="w-full h-[550px]">
              {openIndex === null ? (
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl border-2 border-dashed border-border text-center p-8 animate-slide-in-right">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <svg
                      className="w-24 h-24 text-secondary relative animate-float"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">
                    Select a question
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
                    Click on any question from the left to see the answer appear
                    here
                  </p>
                </div>
              ) : (
                <AnswerBubble
                  faq={faqsData[openIndex]}
                  isVisible={true}
                  isFullHeight={true}
                  tailPos={tailPosition}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFaq;
