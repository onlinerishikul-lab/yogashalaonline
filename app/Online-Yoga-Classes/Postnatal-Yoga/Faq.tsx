"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Postnatal Yoga?",
    answer:
      "Postnatal Yoga is a gentle and restorative practice designed to help new mothers regain strength, flexibility, and overall well-being after childbirth.",
  },
  {
    question: "Is this course suitable for all new mothers?",
    answer:
      "Yes, this course is suitable for new mothers who are cleared by their healthcare provider to engage in physical activity post childbirth. It’s designed to be gentle and restorative.",
  },
  {
    question: "When can I start practicing Postnatal Yoga after childbirth?",
    answer:
      "It’s recommended to wait at least 6 weeks postpartum (or as advised by your doctor) before starting any physical activity, including Postnatal Yoga.",
  },
  {
    question: "Will this course help with post-pregnancy weight loss?",
    answer:
      "While Postnatal Yoga can aid in toning muscles and improving overall health, it is not specifically aimed at weight loss. It’s about rebuilding strength and creating balance in your body.",
  },
  {
    question: "Do I need any previous yoga experience to join this course?",
    answer:
      "No prior yoga experience is required. This course is designed for beginners and new mothers who want to ease back into physical activity safely.",
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
          Postnatal Yoga Course: FAQ
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
