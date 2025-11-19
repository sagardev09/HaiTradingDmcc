"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = {
  support: [
    {
      question: "What quality certifications do your products have?",
      answer:
        "All our products meet international quality standards and come with necessary certifications including ISO, HACCP, and country-specific import requirements. We provide full documentation with every shipment.",
    },
    {
      question: "Do you provide product samples before bulk orders?",
      answer:
        "Yes, we can arrange product samples for potential clients. Sample costs and shipping are typically borne by the requesting party, but can be discussed on a case-by-case basis.",
    },
    {
      question: "What is your delivery timeline for orders?",
      answer:
        "Delivery timelines vary by product, destination, and order size. Typically, orders are fulfilled within 3-6 weeks from confirmation. We provide detailed shipping schedules upon order placement.",
    },
  ],
  account: [
    {
      question: "What payment terms do you offer?",
      answer:
        "We offer flexible payment terms including LC (Letter of Credit), TT (Telegraphic Transfer), and other mutually agreed payment methods. Terms are customized based on order size and business relationship.",
    },
    {
      question: "What are the minimum order quantities?",
      answer:
        "Minimum order quantities vary by product. For bulk commodities like rice and sugar, MOQ typically starts from one container (20-25 tons). Contact us for specific product requirements.",
    },
  ],
  other: [
    {
      question: "Which countries do you ship to?",
      answer:
        "We primarily serve markets across East and West Africa, including Kenya, Somalia, Ethiopia, Tanzania, Nigeria, and more. We're continuously expanding our reach to serve new markets.",
    },
    {
      question: "Can you handle custom branding and packaging?",
      answer:
        "Yes, we offer private labeling and custom packaging solutions for bulk orders. Our team can work with you to develop packaging that meets your brand requirements and local market regulations.",
    },
  ],
};

export default function FAQSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto grid  gap-16 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Got Questions?
          </h2>
          <p className="text-muted-foreground max-w-md font-medium leading-snug ">
            If you can't find what you're looking for,{" "}
            <Link href="/contact" className="underline underline-offset-4">
              get in touch
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-6 text-start">
          {/* Support Section */}
          <div>
            <h3 className="text-muted-foreground border-b py-4 font-medium">
              Support
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqData.support.map((faq, index) => (
                <AccordionItem key={index} value={`support-${index}`}>
                  <AccordionTrigger className="text-start">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Your Account Section */}
          <div>
            <h3 className="text-muted-foreground border-b py-4 font-medium">
              Orders & Pricing
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqData.account.map((faq, index) => (
                <AccordionItem key={index} value={`account-${index}`}>
                  <AccordionTrigger className="text-start">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Other Questions Section */}
          <div>
            <h3 className="text-muted-foreground border-b py-4 font-medium">
              Other questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqData.other.map((faq, index) => (
                <AccordionItem key={index} value={`other-${index}`}>
                  <AccordionTrigger className="text-start">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
