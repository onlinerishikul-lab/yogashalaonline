"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Hatha Yoga?",
    answer:
      "Hatha Yoga is a branch of yoga that focuses on physical postures (asanas), breath control (pranayama), and meditation. It aims to balance the mind and body, promoting health, flexibility, and mental clarity.",
  },
  {
    question: "Is Hatha Yoga suitable for beginners?",
    answer:
      "Yes, Hatha Yoga is perfect for beginners. The course starts with basic poses and gradually builds up to more advanced practices, helping you develop strength, flexibility, and mindfulness.",
  },
  {
    question: "What equipment do I need for Hatha Yoga?",
    answer:
      "You only need a yoga mat for comfort. Optional accessories include yoga blocks, straps, and cushions to assist with certain poses, but they are not necessary to start the practice.",
  },
  {
    question: "How often should I practice Hatha Yoga?",
    answer:
      "It's recommended to practice Hatha Yoga at least 3-4 times a week. However, you can start with a few sessions per week and gradually increase as you become more comfortable with the practice.",
  },
  {
    question: "Can Hatha Yoga help with stress and anxiety?",
    answer:
      "Yes, Hatha Yoga is known for its calming effects. The combination of gentle movements, breathwork, and meditation can significantly reduce stress and anxiety levels.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of the course, you will receive a digital certificate to mark your achievement in Hatha Yoga.",
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
          Hatha Yoga Course: FAQ
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Find answers to your questions before beginning your Hatha Yoga journey.
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
