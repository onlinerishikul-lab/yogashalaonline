"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who is this course designed for?",
    answer:
      "This course is intended for certified yoga teachers who wish to safely and knowledgeably guide pregnant and postpartum students through yoga practice tailored to their unique needs.",
  },
  {
    question: "What will I learn in this course?",
    answer:
      "You’ll gain a deep understanding of physiological and emotional changes during pregnancy and postpartum, trimester-specific asana adaptations, contraindications, breathwork, pelvic floor support, and how to create nurturing, inclusive class environments.",
  },
  {
    question: "Do I need prior experience with prenatal yoga to join?",
    answer:
      "No, prior experience is not required. This course begins with foundational knowledge and progresses to advanced teaching strategies, making it accessible to teachers of all levels.",
  },
  {
    question: "Is this course recognized for continuing education?",
    answer:
      "Yes, this course qualifies for continuing education credits with Yoga Alliance and includes a certificate of completion upon meeting all course requirements.",
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
