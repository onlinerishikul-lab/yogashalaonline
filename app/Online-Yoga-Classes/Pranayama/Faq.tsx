"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Pranayama?",
    answer:
      "Pranayama is the practice of controlled breathing techniques that help to regulate energy flow, improve mental clarity, and enhance physical health.",
  },
  {
    question: "Do I need prior experience to join this course?",
    answer:
      "No prior experience is necessary. This course is suitable for beginners and guides you through the basics of breathing techniques.",
  },
  {
    question: "What will I learn in this Pranayama course?",
    answer:
      "You will learn different Pranayama techniques, how to incorporate them into your daily life, and how they can improve your overall well-being.",
  },
  {
    question: "Is this course suitable for people with respiratory conditions?",
    answer:
      "Pranayama can be beneficial for individuals with respiratory conditions, but we recommend consulting with a healthcare provider before starting the course.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, upon successful completion, you will receive a digital certificate of completion that you can use for continuing education or personal growth.",
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
          Pranayama Course: FAQ
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Find answers to your questions before joining the course
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
