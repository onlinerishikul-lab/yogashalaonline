"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Vinyasa-Flow Yoga?",
    answer:
      "Vinyasa-Flow is a dynamic style of yoga that links breath with movement through a continuous sequence of postures. It improves flexibility, builds strength, and boosts mental focus.",
  },
  {
    question: "Is Vinyasa-Flow suitable for beginners?",
    answer:
      "Yes, Vinyasa-Flow can be adapted for beginners. The Class includes foundational sequences and gradually increases intensity, allowing beginners to grow with confidence.",
  },
  {
    question: "What equipment do I need for Vinyasa-Flow Yoga?",
    answer:
      "A yoga mat is essential. Optional props like yoga blocks and straps can enhance your practice but are not required.",
  },
  {
    question: "How often should I practice Vinyasa-Flow Yoga?",
    answer:
      "Practicing 3–5 times a week is ideal for building consistency and progress. Even short daily sessions can offer noticeable benefits.",
  },
  {
    question: "Can Vinyasa-Flow help with stress and anxiety?",
    answer:
      "Yes, the breath-focused sequences in Vinyasa-Flow help calm the nervous system, reduce anxiety, and promote emotional balance.",
  },
  {
    question: "Will I receive a certificate after completing the Class?",
    answer:
      "Yes, after completing the Vinyasa-Flow Class, you’ll receive a digital certificate recognizing your participation and progress.",
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
          Vinyasa-Flow Class: FAQ
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Get clarity on everything before you begin your Vinyasa-Flow journey.
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
