"use client";
import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#f0f4fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#4377b2] mb-4">Yoga Anatomy Course Investment</h2>
          <p className="text-lg text-[#4377b2] max-w-3xl mx-auto">
            Invest in your future as a yoga teacher with our comprehensive Yoga Anatomy course.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="bg-[#4377b2] p-6 text-white text-center">
              <h3 className="text-xl font-serif font-medium">Early Bird</h3>
              <div className="mt-4">
                <span className="text-4xl font-semibold">$250</span>
              </div>
              <p className="mt-2 text-[#f0f4fa] text-sm">Limited availability</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Full Yoga Anatomy certification program</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Detailed video lessons on anatomy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Lifetime access to recordings</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">One private mentoring session</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#375f90] transition-all w-full">
                  Apply Now
                </button>
              </div>
              <p className="text-xs text-[#4377b2] mt-4 text-center">Must register 60 days before start date</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 relative">
            <div className="absolute top-0 right-0 bg-[#4377b2] text-white px-3 py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="bg-[#4377b2] p-8 text-white text-center">
              <h3 className="text-xl font-serif font-medium">Standard</h3>
              <div className="mt-4">
                <span className="text-4xl font-semibold">$250</span>
              </div>
              <p className="mt-2 text-[#f0f4fa] text-sm">Regular registration rate</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Full Yoga Anatomy certification program</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Detailed video lessons on anatomy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Lifetime access to recordings</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Two private mentoring sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Exclusive teaching resource bundle</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#375f90] transition-all w-full">
                  Apply Now
                </button>
              </div>
              <p className="text-xs text-[#4377b2] mt-4 text-center">Payment plans available</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="bg-[#4377b2] p-6 text-white text-center">
              <h3 className="text-xl font-serif font-medium">Premium</h3>
              <div className="mt-4">
                <span className="text-4xl font-semibold">$250</span>
              </div>
              <p className="mt-2 text-[#f0f4fa] text-sm">Enhanced experience</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">All Standard tier benefits</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Four private mentoring sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">Website review & personal branding</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#4377b2] w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4377b2]">One year of continuing education</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-[#4377b2] text-white px-6 py-2 rounded-md hover:bg-[#375f90] transition-all w-full">
                  Apply Now
                </button>
              </div>
              <p className="text-xs text-[#4377b2] mt-4 text-center">Includes post-graduation support</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-serif text-[#4377b2] mb-4">Payment Plans Available</h3>
          <p className="text-[#4377b2] max-w-2xl mx-auto mb-6">
            We offer flexible payment options to make this investment in your future more accessible. Split your tuition into 3, 6, or 12 monthly payments.
          </p>
          <button className="bg-white text-[#4377b2] border border-[#4377b2] px-6 py-2 rounded-md hover:bg-[#f0f4fa] transition-all">
            Inquire About Payment Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
