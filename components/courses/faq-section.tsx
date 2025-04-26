"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FAQ } from "@/types/course";
import { useState } from "react";

export default function FAQSection({ courseFAQs }: { courseFAQs: FAQ[] }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Question submitted:", question);
    setQuestion("");
  };

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#4377B2] mb-4">FAQ&apos;s</h2>
        <p className="text-gray-600">Providing answers to your questions</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {courseFAQs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-black rounded-lg overflow-hidden border-none"
          >
            <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-white/90">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Ask us what you want to know..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[120px] border-[#4377B2] bg-white focus-visible:ring-[#4377B2]"
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              We will answer your questions via email within 48 hours.
            </p>
            <Button
              type="submit"
              className="bg-[#4377B2] hover:bg-[#4377B2]/90 text-white rounded-full px-8"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
