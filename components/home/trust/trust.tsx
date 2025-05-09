import Image from "next/image";
import React from "react";

const Trust = () => {
  return (
    <div className='bg-[url("/assets/CoreValues.svg")] bg-cover bg-no-repeat flex justify-center'>
      <div className="max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        {/* Heading */}
        <div className="flex items-center flex-col space-y-4 sm:space-y-6 mb-3">
          <h2 className="text-center font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#4377B2]">
            Certification You Can Trust
          </h2>
        </div>

        {/* Images */}
        <div className="flex gap-6 sm:gap-8 md:gap-5 lg:gap-3 justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 flex-col md:flex-row items-center">
          <Image
            alt="certificate"
            height={450}
            width={400}
            src="/assets/certificates/certi-one.jpeg"
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto"
          />
          <Image
            alt="certificate"
            height={450}
            width={400}
            src="/assets/certificates/certi-two.jpeg"
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto"
          />
          <Image
            alt="certificate"
            height={450}
            width={400}
            src="/assets/certificates/certi-three.jpg"
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto"
          />
        </div>

        {/* Description */}
        <div className="flex items-center flex-col ">
          <p className="text-center text-sm sm:text-base md:w-3/4 lg:w-2/3">
            Upon successful completion of Rishikul online Yoga Teacher Training
            program, you will receive a globally recognized certificate
            accredited by Rishikul. This certification not only validates your
            expertise but also qualifies you to teach yoga anywhere in the
            world.
          </p>
          <p className="text-center text-sm sm:text-base px-4 sm:px-6">
            Whether you aim to teach professionally or deepen your practice,
            this certification is your key to unlocking limitless opportunities
            in the yoga community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
