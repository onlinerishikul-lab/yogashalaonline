// components/CourseDetailPage.tsx
'use client';

import { useState } from 'react';

export default function CourseDetailPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-200 to-pink-100 py-10 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Get Certified in 100-HOUR Multi-style Yoga</h1>
        <p className="text-lg max-w-xl mx-auto">Yoga Poses | Pranayama | Anatomy | Meditation | Mantras & More</p>
        <div className="mt-6">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition">Enroll Now</button>
        </div>
      </header>

      {/* Skills */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Skills You’ll Learn</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Yoga Poses', 'Meditation', 'Breathing Techniques', 'Philosophy'].map(skill => (
            <div key={skill} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8">Why Our Training is Unique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {['Versatile Styles', 'Open to All', 'Expert Teachers', 'Comprehensive Growth'].map(feature => (
            <div key={feature} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold">{feature}</h3>
              <p className="text-sm mt-2 text-gray-600">Learn from authentic and certified yoga instructors.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Pricing Options</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { title: 'Full Payment', price: '$49.99/mo' },
            { title: 'Easy Installments', price: '$20.99/mo' }
          ].map(({ title, price }) => (
            <div key={title} className="border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">{price}</p>
              <ul className="text-left text-sm mb-6">
                <li>✔ 200 Hr Certification</li>
                <li>✔ Lifetime Access</li>
                <li>✔ 24-Months Teacher Support</li>
              </ul>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Pay Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-orange-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Anjali S.', quote: 'This course transformed my understanding of yoga!' },
            { name: 'Rahul M.', quote: 'Clear instruction, loving guidance, and deep knowledge.' },
            { name: 'Lisa K.', quote: 'Felt connected even online. Worth every second!' }
          ].map(({ name, quote }) => (
            <div key={name} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm italic mb-4">"{quote}"</p>
              <p className="font-semibold">– {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: 'Is this course suitable for beginners?',
              answer: 'Yes! This course is designed for all levels, including complete beginners.'
            },
            {
              question: 'Do I need to attend live sessions?',
              answer: 'No, the course is self-paced and fully pre-recorded with optional live support.'
            },
            {
              question: 'Is there a refund policy?',
              answer: 'Absolutely! We offer a 7-day full refund if you’re not satisfied.'
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 font-medium focus:outline-none"
              >
                {faq.question}
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 text-sm text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-orange-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-700">Reach out to our friendly team and get personal support before enrolling.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border px-4 py-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded" rows={4}></textarea>
          <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
