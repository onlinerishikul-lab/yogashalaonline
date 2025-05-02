"use client";
import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">Investment</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            Invest in your future as a yoga teacher with our comprehensive training program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="bg-primary p-6 text-white text-center">
              <h3 className="text-xl font-serif font-medium">Early Bird</h3>
              <div className="mt-4">
                <span className="text-4xl font-semibold">$2,200</span>
              </div>
              <p className="mt-2 text-primary-light text-sm">Limited availability</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Full 200-hour certification program</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">All course materials and resources</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Lifetime access to recordings</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">One private mentoring session</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-all w-full">
                  Apply Now
                </button>
              </div>
              <p className="text-xs text-primary mt-4 text-center">Must register 60 days before start date</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 relative">
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="bg-primary p-8 text-white text-center">
              <h3 className="text-xl font-serif font-medium">Standard</h3>
              <div className="mt-4">
                <span className="text-4xl font-semibold">$2,500</span>
              </div>
              <p className="mt-2 text-primary-light text-sm">Regular registration rate</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Full 200-hour certification program</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">All course materials and resources</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Lifetime access to recordings</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Two private mentoring sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Exclusive teaching resource bundle</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-all w-full">
                  Apply Now
                </button>
              </div>
              <p className="text-xs text-primary mt-4 text-center">Payment plans available</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="bg-primary p-6 text-white text-center">
              <h3 className="text-xl font-serif font-medium">Premium</h3>
              <div className="mt-4">
                <span className="text-4xl font-semibold">$2,900</span>
              </div>
              <p className="mt-2 text-primary-light text-sm">Enhanced experience</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">All Standard tier benefits</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Four private mentoring sessions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">Website review & personal branding</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-primary">One year of continuing education</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-all w-full">
                  Apply Now
                </button>
              </div>
              <p className="text-xs text-primary mt-4 text-center">Includes post-graduation support</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-serif text-primary mb-4">Payment Plans Available</h3>
          <p className="text-primary max-w-2xl mx-auto mb-6">
            We offer flexible payment options to make this investment in your future more accessible. Split your tuition into 3, 6, or 12 monthly payments.
          </p>
          <button className="bg-white text-primary border border-primary px-6 py-2 rounded-md hover:bg-primary-light transition-all">
            Inquire About Payment Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;