'use client';

import React from "react";
import Image from "next/image";

const YogaAccreditation = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Image Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          <div className="w-36 sm:w-40 md:w-44 lg:w-48 relative">
            <Image
              src="/rpys.png"
              alt="Yoga Alliance Certification 1"
              width={160}
              height={120}
              className="object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="w-36 sm:w-40 md:w-44 lg:w-48 relative">
            <Image
              src="/rys-200.png"
              alt="Yoga Alliance Certification 2"
              width={160}
              height={120}
              className="object-contain  hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="w-36 sm:w-40 md:w-44 lg:w-48 relative">
            <Image
              src="/rys-300.png"
              alt="Yoga Alliance Certification 3"
              width={160}
              height={120}
              className="object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>

        {/* Heading and Description */}
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-600 mb-6">
          Yoga Alliance Accreditation
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2 sm:px-0">
          Our certification is proudly accredited by the Yoga Alliance, guaranteeing adherence
          to high international standards. This prestigious recognition enhances the credibility
          of your qualification, making it both valid and highly respected across the globe.
          With a Yoga Alliance–accredited certification, you can confidently teach and share your
          yoga expertise anywhere in the world.
        </p>
      </div>
    </section>
  );
};

export default YogaAccreditation;
