import Image from "next/image";
import React from "react";

const Trust = () => {
  return (
    <div className='bg-[url("/assets/CoreValues.svg")] bg-cover bg-no-repeat flex justify-center'>
      <div className="max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8 py-3 md:py-5 lg:py-5">
        {/* Heading */}
        <div className="flex items-center flex-col mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4377B2]">
            Internationally Accredited Yoga Certification
          </h2>
        </div>

        {/* Certificates */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 lg:gap-8 mb-10">
          <Image
            src="/assets/certificates/certi-one.jpeg"
            alt="certificate"
            width={400}
            height={450}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[350px] h-auto rounded-xl shadow-md"
          />
          <Image
            src="/assets/certificates/certi-two.jpeg"
            alt="certificate"
            width={400}
            height={450}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[350px] h-auto rounded-xl shadow-md"
          />
          <Image
            src="/assets/certificates/certi-three.jpg"
            alt="certificate"
            width={400}
            height={450}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[350px] h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm sm:text-base md:text-lg px-4 leading-relaxed">
           Earn a globally recognized Rishikul certification that qualifies you to teach yoga worldwide or deepen your personal practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
