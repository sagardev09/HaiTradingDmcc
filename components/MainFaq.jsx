"use client";
import { useState } from "react";

const MainFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqsData = [
    {
      question: "What services does HAI Trading DMCC provide?",
      answer:
        "HAI Trading DMCC specializes in international trading, supply chain management, product sourcing, distribution, and logistics solutions. We partner with leading global brands to deliver quality products across multiple industries including consumer goods, industrial supplies, and specialty products.",
    },
    {
      question: "Which regions do you operate in?",
      answer:
        "We operate globally with a strong presence in the Middle East, Asia, Africa, and Europe. Our extensive network enables us to facilitate seamless trade across borders and provide comprehensive import/export services to our partners worldwide.",
    },
    {
      question: "How can I become a partner or distributor?",
      answer:
        "We're always looking for strategic partnerships. To explore collaboration opportunities, please contact us through our website or email. Our team will review your business profile and discuss potential partnership models that align with your goals and our brand portfolio.",
    },
    {
      question:
        "What makes HAI Trading DMCC different from other trading companies?",
      answer:
        "Our commitment to excellence, proven track record with leading brands, end-to-end supply chain management, and customer-centric approach set us apart. We focus on building long-term relationships and delivering measurable results through our expertise in global trade and logistics.",
    },
    {
      question: "Do you provide customized trading solutions?",
      answer:
        "Yes, we understand that every business has unique requirements. Our team works closely with clients to develop tailored trading solutions that address specific challenges, optimize costs, and maximize efficiency in sourcing, distribution, and supply chain management.",
    },
    {
      question: "How do I request a quote or inquiry?",
      answer:
        "You can request a quote by contacting us through our website's contact form, emailing our sales team, or calling our office directly. We typically respond within 24-48 hours with detailed information about pricing, availability, and delivery timelines.",
    },
  ];
  return (
    <section className="w-full py-16  relative">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <div className="flex flex-col items-center text-center text-slate-800 px-3">
        <h1 className="text-3xl md:text-5xl font-bold mt-2 text-black">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-gray-700 mt-4 max-w-2xl">
          Have questions about our services? Find answers to the most common
          questions about HAI Trading DMCC, our global operations, and how we
          can help your business grow.
        </p>
        <div className="max-w-3xl w-full mt-10 flex flex-col gap-4 items-start text-left">
          {faqsData.map((faq, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex items-center justify-between w-full cursor-pointer border border-green-200 bg-white hover:bg-green-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h2>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`text-base leading-relaxed text-gray-700 px-5 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "opacity-100 max-h-[400px] translate-y-0 pt-4 pb-2"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFaq;
