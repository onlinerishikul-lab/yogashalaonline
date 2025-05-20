import Image from "next/image";
import React from "react";

const Trust = () => {
  return (
    <div className='bg-[url("/assets/CoreValues.svg")] bg-cover bg-no-repeat flex justify-center'>
      <div className="max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        {/* Heading */}
        <div className="flex items-center flex-col mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4377B2]">
            Certification You Can Trust
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
          <p className="text-sm sm:text-base md:text-lg md:w-4/5 lg:w-2/3 leading-relaxed">
            Upon successful completion of Rishikul online Yoga Teacher Training program, you will receive a globally recognized certificate accredited by Rishikul. This certification not only validates your expertise but also qualifies you to teach yoga anywhere in the world.
          </p>
          <p className="text-sm sm:text-base md:text-lg px-4 leading-relaxed">
            Whether you aim to teach professionally or deepen your practice, this certification is your key to unlocking limitless opportunities in the yoga community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
