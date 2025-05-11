"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Meditation?",
    answer:
      "Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.",
  },
  {
    question: "Is meditation suitable for beginners?",
    answer:
      "Yes, meditation is suitable for beginners. The course is designed to help you get started with simple techniques and gradually build up your practice.",
  },
  {
    question: "How long should I meditate each day?",
    answer:
      "It's recommended to start with 5-10 minutes of meditation per day. As you progress, you can gradually increase the duration based on your comfort level.",
  },
  {
    question: "Do I need any special equipment for meditation?",
    answer:
      "No special equipment is required. You can meditate anywhere that is quiet and comfortable. Some people choose to use cushions or mats, but they are optional.",
  },
  {
    question: "Can meditation help reduce stress and anxiety?",
    answer:
      "Yes, meditation has been shown to help reduce stress and anxiety by promoting relaxation and mindfulness, which can help you stay grounded in the present moment.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of the course, you will receive a digital certificate that you can proudly share.",
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
          Meditation Course: FAQ
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Find answers to your questions before starting your meditation journey.
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
