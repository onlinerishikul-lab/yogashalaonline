import Image from "next/image";
import React from "react";

const Trust = () => {
  return (
    <div className='bg-[url("/assets/CoreValues.svg")] bg-cover bg-no-repeat flex justify-center'>
      <div className="max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4377B2] leading-tight">
            Internationally Accredited Yoga Certification
          </h2>
        </div>

        {/* Certificates */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10">
          <div className="w-full sm:w-auto max-w-[300px] flex-shrink-0">
            <Image
              src="/assets/certificates/certi-one.jpeg"
              alt="Yoga Certificate 1"
              width={400}
              height={450}
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-auto max-w-[300px] flex-shrink-0">
            <Image
              src="/assets/certificates/certi-two.jpeg"
              alt="Yoga Certificate 2"
              width={400}
              height={450}
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-auto max-w-[300px] flex-shrink-0">
            <Image
              src="/assets/certificates/certi-three.jpg"
              alt="Yoga Certificate 3"
              width={400}
              height={450}
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2 sm:px-4">
            Earn a globally recognized Rishikul certification that qualifies you to teach yoga worldwide or deepen your personal&nbsp;practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
