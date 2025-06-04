"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do I need to be a yoga teacher to enroll in this course?",
    answer:
      "No. This course is open to everyone—whether you're a yoga teacher, therapist, healer, or simply someone seeking to deepen your personal practice of relaxation and inner awareness.",
  },
  {
    question: "Will I be certified to teach Yoga Nidra after completing the course?",
    answer:
      "Yes. Upon successful completion, you’ll receive a Yoga Nidra Teacher Training Certificate that qualifies you to guide others through Yoga Nidra sessions.",
  },
  {
    question: "Is this course theoretical or practical?",
    answer:
      "Both. The training combines deep philosophical understanding with guided practice sessions so you can experience, learn, and confidently lead Yoga Nidra.",
  },
  {
    question: "Can I complete this course at my own pace?",
    answer:
      "Yes. The course is self-paced and fully online, allowing you to progress through the lessons whenever it suits your schedule.",
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
          Yoga Nidra Teacher Training: FAQ
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Find answers to your questions before beginning your Yoga Nidra TTC journey.
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
