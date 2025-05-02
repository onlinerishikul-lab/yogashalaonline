import React from 'react';
import { Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-primary-light py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <Leaf className="text-primary w-10 h-10 mb-4" />
          <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight text-primary mb-4 animate-fade-in">
            Online 200-Hour Teacher Training
          </h1>
          <p className="text-lg md:text-xl text-primary max-w-2xl animate-slide-up">
            Embark on a transformative journey with our globally recognized 200-hour yoga teacher training, now available online.
          </p>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 animate-slide-up">
          <button className="bg-primary text-primary-light px-8 py-3 rounded-md hover:bg-primary-dark transition-all">
            Apply Now
          </button>
          <button className="bg-primary-light text-primary border border-primary px-8 py-3 rounded-md hover:bg-primary-light transition-all">
            Learn More
          </button>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-serif font-medium text-primary mb-2">Internationally Recognized</h3>
            <p className="text-primary">Our program is recognized by Yoga Alliance, ensuring global teaching opportunities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-serif font-medium text-primary mb-2">Study From Anywhere</h3>
            <p className="text-primary">Join our community of practitioners from over 30 countries around the world.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-serif font-medium text-primary mb-2">Expert Teachers</h3>
            <p className="text-primary">Learn from seasoned instructors with decades of combined experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;