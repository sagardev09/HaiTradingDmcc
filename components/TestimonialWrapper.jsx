"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./Maintestimonials";

const testimonials = [
  {
    text: "HAI Trading has been our trusted partner for premium rice supplies. Their Libaax brand quality is exceptional and deliveries are always on time. Highly recommend for reliable commodity trading.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    name: "Mohamed Hassan",
    role: "Procurement Manager, Somalia",
  },
  {
    text: "Working with HAI Trading has transformed our supply chain. Their palm oil and sunflower oil products meet international standards, and their team is always responsive to our needs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    name: "Amina Wanjiru",
    role: "Supply Chain Director, Kenya",
  },
  {
    text: "The quality of sugar and wheat flour we receive from HAI Trading is consistently excellent. Their commitment to quality assurance and timely delivery makes them stand out in the market.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    name: "Ibrahim Koroma",
    role: "Retail Operations Head, Sierra Leone",
  },
  {
    text: "HAI Trading DMCC is our go-to supplier for food commodities. Their AGT products are top-notch and their pricing is very competitive. Great partnership for our distribution business.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    name: "Ahmed Osman",
    role: "CEO, Djibouti Trading Co.",
  },
  {
    text: "From rice to spices, every product from HAI Trading meets our strict quality requirements. Their global sourcing capabilities and local market knowledge are impressive.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    name: "Fatima Diallo",
    role: "Purchasing Manager, Guinea",
  },
  {
    text: "We've been importing commodities from HAI Trading for over 3 years. Their professionalism, quality products, and reliable shipping schedule have never disappointed us.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces",
    name: "Yusuf Adeyemi",
    role: "Import Manager, Nigeria",
  },
  {
    text: "HAI Trading provides excellent customer service and their product portfolio is comprehensive. The Libaax rice and cooking oils are very popular with our customers.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    name: "Zainab Mohamed",
    role: "Wholesale Director, Tanzania",
  },
  {
    text: "Their door skin and paper products have been a great addition to our construction supply business. HAI Trading truly offers diverse commodity solutions under one roof.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
    name: "Omar Bashir",
    role: "Business Owner, Ethiopia",
  },
  {
    text: "The quality-to-price ratio of HAI Trading's products is unmatched. Their team understands our market needs and always delivers premium commodities that our customers love.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=faces",
    name: "Aisha Kamara",
    role: "Retail Chain Manager, Liberia",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className=" my-20 relative ">
      <div className="container z-[1000] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[740px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-black dark:text-secondary-foreground">
            What our Client say about us.
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
