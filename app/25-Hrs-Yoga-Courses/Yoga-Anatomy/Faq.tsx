"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who is this 25-hrs Yoga Anatomy course for?",
    answer:
      "This course is ideal for yoga practitioners, teachers, and wellness professionals who want a deeper understanding of human anatomy in relation to yoga practice.",
  },
  {
    question: "Do I need prior anatomy knowledge to enroll?",
    answer:
      "No prior anatomy knowledge is required. We start with the basics and gradually build a solid foundation tailored to yoga movement.",
  },
  {
    question: "Is the course completely online?",
    answer:
      "Yes, the course is 100% online and self-paced, allowing you to learn at your convenience from anywhere in the world.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Absolutely! Upon successful completion, you’ll receive a digital certificate you can proudly share or use for continuing education credits.",
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
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Get clarity before you enroll in the course
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
