import Image from "next/image";
import React from "react";
import styles from "./corevalue.style.module.css";

const CoreValues = () => {
  return (
    <>
      <h2 className="text-center text-5xl font-bold text-[#4377B2] mb-6">
        Core Values
      </h2>
      <div className="flex flex-col md:gap-12">
        <div className="pt-4 pb-4 flex flex-col items-center gap-10 md:flex-row md:justify-around relative">
          <div className="flex flex-col items-center">
            <div className="bg-[#4377B2] rounded-full h-[100px] w-[100px] flex items-center justify-center mb-2">
              <Image
                src="/assets/usp/solar_star-linear.png"
                height={60}
                width={60}
                alt="usp icon"
              />
            </div>
            <h2 className="text-black text-2xl font-semibold">Affordable</h2>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`bg-[#4377B2] rounded-full h-[100px] w-[100px] flex items-center justify-center mb-2 ${styles.icon_boxing}`}
            >
              <Image
                src="/assets/usp/solar_star-linear.png"
                height={60}
                width={60}
                alt="usp icon"
              />
            </div>
            <h2 className="text-black text-2xl font-semibold">Lorem ipsum</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#4377B2] rounded-full h-[100px] w-[100px] flex items-center justify-center mb-2">
              <Image
                src="/assets/usp/solar_star-linear.png"
                height={60}
                width={60}
                alt="usp icon"
              />
            </div>
            <h2 className="text-black text-2xl font-semibold">Lorem ipsum</h2>
          </div>
        </div>

        <div className="pt-4 pb-4 flex flex-col items-center gap-10 md:flex-row md:justify-around relative">
          <div className="flex flex-col items-center">
            <div className="bg-[#4377B2] rounded-full h-[100px] w-[100px] flex items-center justify-center mb-2">
              <Image
                src="/assets/usp/solar_star-linear.png"
                height={60}
                width={60}
                alt="usp icon"
              />
            </div>
            <h2 className="text-black text-2xl font-semibold">Lorem ipsum</h2>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`bg-[#4377B2] rounded-full h-[100px] w-[100px] flex items-center justify-center mb-2 ${styles.icon_boxing}`}
            >
              <Image
                src="/assets/usp/solar_star-linear.png"
                height={60}
                width={60}
                alt="usp icon"
              />
            </div>
            <h2 className="text-black text-2xl font-semibold">Lorem ipsum</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#4377B2] rounded-full h-[100px] w-[100px] flex items-center justify-center mb-2">
              <Image
                src="/assets/usp/solar_star-linear.png"
                height={60}
                width={60}
                alt="usp icon"
              />
            </div>
            <h2 className="text-black text-2xl font-semibold">Lorem ipsum</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreValues;
