"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus eu eleifend magna nulla ut rhoncus.",
  },
  {
    question: "Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?",
    answer: "Donec vehicula imperdiet velit posuere ipsum.",
  },
  {
    question: "Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?",
    answer: "Etiam sit amet magna et lorem pulvinar volutpat.",
  },
  {
    question: "Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?",
    answer: "Phasellus placerat, sapien non ultricies pretium, erat risus.",
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
        <h1 className="text-3xl font-bold text-center text-[#4377b2] mb-2">FAQ&rsquo;s</h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Providing answers to your questions
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-sm text-[#4377b2]">{faq.question}</h3>
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
            placeholder="Ask us what you want to know..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4377b2]"
            rows={3}
          />

          <div className="text-xs text-gray-500 mt-1">
            We&rsquo;ll answer your question via email within 24 hours
          </div>

          <button className="mt-2 bg-[#4377b2] text-white px-6 py-2 text-sm rounded-full hover:bg-[#365a90] transition">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
