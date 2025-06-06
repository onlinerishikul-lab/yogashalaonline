"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is Power Yoga suitable for beginners?",
    answer:
      "Yes! While Power Yoga is dynamic and physically challenging, this course includes beginner-friendly modifications and step-by-step guidance for all levels.",
  },
  {
    question: "Will I get a teaching certificate after the course?",
    answer:
      "Absolutely. Upon completion, you'll receive a Power Yoga Teacher Training Certificate that qualifies you to teach globally.",
  },
  {
    question: "What if I can’t attend live sessions?",
    answer:
      "No worries! All live sessions are recorded and available for replay. The course is primarily self-paced, so you can learn at your own schedule.",
  },
  {
    question: "What makes Power Yoga different from other yoga styles?",
    answer:
      "Power Yoga emphasizes strength, stamina, and flow—it’s a more athletic, fitness-based style that blends traditional yoga with dynamic movement and breathwork.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9fafb] px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#4377b2] mb-2">
          Power Yoga Teacher Training: FAQ
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Find answers to your questions before beginning your Power Yoga TTC journey.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-sm text-[#4377b2]">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-[#4377b2]" size={20} />
                ) : (
                  <ChevronDown className="text-[#4377b2]" size={20} />
                )}
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Have a question not listed above? Ask us here..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4377b2]"
            rows={3}
          />

          <div className="text-xs text-gray-500 mt-1">
            We’ll get back to you with an answer via email within 24 hours.
          </div>

          <button className="mt-2 bg-[#4377b2] text-white px-6 py-2 text-sm rounded-full hover:bg-[#365a90] transition">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
