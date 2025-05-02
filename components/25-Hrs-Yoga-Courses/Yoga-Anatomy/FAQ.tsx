import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "Is this training recognized by Yoga Alliance?",
      answer: "Yes, our Online 200-Hour Teacher Training is fully accredited by Yoga Alliance. Upon successful completion, you'll be eligible to register as an RYT-200 with Yoga Alliance."
    },
    {
      question: "Do I need to be an advanced yoga practitioner to join?",
      answer: "No, you don&apos;t need to be an advanced practitioner. We welcome students with at least 6 months of consistent yoga practice. The program is designed to meet you where you are and help you progress in both your practice and teaching skills."
    },
    {
      question: "What if I can&apos;t attend all the live sessions?",
      answer: "All live sessions are recorded and made available within 24 hours. While we encourage attending live whenever possible for the interactive experience, we understand that time zones and schedules may prevent this. You can watch the recordings and submit any questions, which will be addressed in the next live session."
    },
    {
      question: "How is the practical teaching component handled online?",
      answer: "You&apos;ll practice teaching through video submissions, live Zoom sessions with peers, and one-on-one feedback sessions with instructors. We&apos;ve developed a comprehensive system to ensure you receive the guidance needed to develop strong teaching skills, even in a virtual environment."
    },
    {
      question: "What materials do I need for the training?",
      answer: "You&apos;ll need a yoga mat, 2 blocks, a strap, and a blanket. Required reading materials include the Yoga Sutras of Patanjali, Anatomy of Movement, and our House of OM Teacher Training Manual, which is included in your tuition. A detailed list will be provided upon registration."
    },
    {
      question: "Can I teach yoga internationally with this certification?",
      answer: "Yes, our Yoga Alliance certification is recognized worldwide, allowing you to teach internationally. However, some countries may have additional requirements, so we recommend checking local regulations if you plan to teach abroad."
    },
    {
      question: "What if I need more time to complete the program?",
      answer: "While we encourage completing the program with your cohort over the 10-week period, we understand that life happens. You&apos;ll have up to 6 months from your start date to complete all requirements without additional fees."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a full refund minus a $300 administrative fee up to 30 days before the program starts. After that, tuition is non-refundable but may be transferred to a future training (within one year) for a $300 transfer fee. Detailed terms will be provided in your registration agreement."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Find answers to common questions about our Online 200-Hour Teacher Training program.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-primary rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-5 flex justify-between items-center bg-primary-light hover:bg-white transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 bg-white text-primary">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-primary-light rounded-lg text-center">
          <h3 className="text-xl font-serif text-primary mb-2">Still Have Questions?</h3>
          <p className="text-primary mb-4">
            We&apos;re happy to help! Reach out to us for more information about our program.
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
