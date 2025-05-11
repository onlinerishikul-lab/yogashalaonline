"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What does “Multi-Style” mean in this Yoga TTC?",
    answer:
      "“Multi-Style” means the course covers several major yoga traditions—including Hatha, Vinyasa, and Ashtanga—providing you with a well-rounded foundation to teach various class styles confidently.",
  },
  {
    question: "Is this course suitable for beginners or only experienced practitioners?",
    answer:
      "This TTC is open to all levels. While some yoga experience is recommended, the course begins with foundational practices and builds progressively, making it accessible to motivated beginners.",
  },
  {
    question: "What certification will I receive after completing the course?",
    answer:
      "Upon successful completion, you’ll receive a 100-hour Yoga Teacher Training certificate recognized by Yoga Alliance, enabling you to teach internationally.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "The curriculum includes asana, pranayama, meditation, yoga philosophy, anatomy, alignment, teaching methodology, and practicum sessions to prepare you for real-world teaching.",
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
