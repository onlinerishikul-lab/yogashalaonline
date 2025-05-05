// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/25.hrs.png")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Get Certified in 100-HOUR <br />
          Multi-style Yoga
        </h1>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full text-lg">
          Enroll Now
        </button>
        <div className="absolute bottom-6 flex space-x-6">
          <img src="/rys200.png" alt="RYS 200" className="w-16 h-16" />
          <img src="/rys300.png" alt="RYS 300" className="w-16 h-16" />
          <img src="/rpys.png" alt="RPYS" className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
