'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?',
    answer: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Vivamus eu eleifend magna nulla ut rhoncus.',
  },
  {
    question: 'Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?',
    answer: 'Donec vehicula imperdiet velit posuere ipsum.',
  },
  {
    question: 'Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?',
    answer: '',
  },
  {
    question: 'Lorem Ipsum Dolor Amet, Consectetuer Adipiscing?',
    answer: '',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <h1 className="text-2xl font-bold text-orange-600 mb-1">FAQ's</h1>
      <p className="text-gray-600 mb-6 text-sm">Providing answers to your questions</p>

      <div className="w-full max-w-md space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-black text-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="font-semibold text-sm">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openIndex === index && faq.answer && (
              <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask us what you want to know..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={3}
        />

        <div className="text-xs text-gray-500 mt-1">We’ll answer your question via email within 24 hours</div>

        <button className="mt-2 bg-orange-500 text-white px-6 py-2 text-sm rounded-full hover:bg-orange-600 transition">
          Send
        </button>
      </div>
    </div>
  );
}
