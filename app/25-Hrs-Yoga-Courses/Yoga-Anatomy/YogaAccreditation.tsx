'use client';
import React from "react";
import Image from "next/image";

const YogaAccreditation = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Image Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 mb-12">
          {[1, 2, 3, 4].map((num, index) => (
            <div key={index} className="w-28 sm:w-32 md:w-36 lg:w-40 flex flex-col items-center">
              <div className="relative w-full aspect-square">
                <Image
                  src={`/rpys${num}.png`}
                  alt={`Yoga Alliance Certification ${num}`}
                  fill
                  className="object-contain rounded-md hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        {/* Heading and Description */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4377b2] mb-6">
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
