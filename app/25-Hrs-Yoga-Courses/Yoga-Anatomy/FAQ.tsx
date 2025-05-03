"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Is this training recognized by Yoga Alliance?",
      answer:
        "Yes, our Online 200-Hour Teacher Training is fully accredited by Yoga Alliance. Upon successful completion, you'll be eligible to register as an RYT-200 with Yoga Alliance.",
    },
    {
      question: "Do I need to be an advanced yoga practitioner to join?",
      answer:
        "No, you don't need to be an advanced practitioner. We welcome students with at least 6 months of consistent yoga practice. The program is designed to meet you where you are and help you progress in both your practice and teaching skills.",
    },
    {
      question: "What if I can't attend all the live sessions?",
      answer:
        "All live sessions are recorded and made available within 24 hours. While we encourage attending live whenever possible for the interactive experience, we understand that time zones and schedules may prevent this. You can watch the recordings and submit any questions, which will be addressed in the next live session.",
    },
    {
      question: "How is the practical teaching component handled online?",
      answer:
        "You'll practice teaching through video submissions, live Zoom sessions with peers, and one-on-one feedback sessions with instructors. We've developed a comprehensive system to ensure you receive the guidance needed to develop strong teaching skills, even in a virtual environment.",
    },
    {
      question: "What materials do I need for the training?",
      answer:
        "You'll need a yoga mat, 2 blocks, a strap, and a blanket. Required reading materials include the Yoga Sutras of Patanjali, Anatomy of Movement, and our House of OM Teacher Training Manual, which is included in your tuition. A detailed list will be provided upon registration.",
    },
    {
      question: "Can I teach yoga internationally with this certification?",
      answer:
        "Yes, our Yoga Alliance certification is recognized worldwide, allowing you to teach internationally. However, some countries may have additional requirements, so we recommend checking local regulations if you plan to teach abroad.",
    },
    {
      question: "What if I need more time to complete the program?",
      answer:
        "While we encourage completing the program with your cohort over the 10-week period, we understand that life happens. You'll have up to 6 months from your start date to complete all requirements without additional fees.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "We offer a full refund minus a $300 administrative fee up to 30 days before the program starts. After that, tuition is non-refundable but may be transferred to a future training (within one year) for a $300 transfer fee. Detailed terms will be provided in your registration agreement.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#4377b2] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#4377b2] max-w-3xl mx-auto">
            Find answers to common questions about our Online 200-Hour Teacher Training program.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#4377b2] rounded-lg overflow-hidden"
            >
              <button
                id={`faq-${index}`}
                className="w-full text-left p-5 flex justify-between items-center bg-[#4377b2]/10 hover:bg-white transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-medium text-[#4377b2]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#4377b2]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#4377b2]" />
                )}
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-${index}`}
                className={`transition-all duration-300 ${openIndex === index
                    ? 'max-h-[500px] opacity-100 p-5'
                    : 'max-h-0 opacity-0 p-0'
                  } overflow-hidden bg-white text-[#4377b2]`}
              >
                <p className="text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#4377b2]/10 rounded-lg text-center">
          <h3 className="text-xl font-serif text-[#4377b2] mb-2">
            Still Have Questions?
          </h3>
          <p className="text-[#4377b2] mb-4">
            We&apos;re happy to help! Reach out to us for more information about our program.
          </p>
          <button className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#365d91] transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
