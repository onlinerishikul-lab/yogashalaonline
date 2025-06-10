"use client";

import React from "react";
import Image from "next/image";

const Join = () => {
  const handleJoinClick = () => {
    window.open("https://chat.whatsapp.com/your-group-invite-link", "_blank");
  };

  return (
    <div className="relative w-full min-h-[400px] flex justify-center items-center px-4 py-8 sm:py-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/join.jpg"
          alt="Join background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl text-center md:text-left px-2 sm:px-4">
        <div className="mx-auto md:mx-0">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-snug break-words">
            Stay Connected – <br className="block sm:hidden" />
            Join Our WhatsApp Group
          </h2>
          <p className="text-white mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
            Don&apos;t miss out on insights, updates, and shared energy from our yoga family.
            Join our WhatsApp group and keep your yoga journey flowing with support and inspiration!
          </p>
          <button
            onClick={handleJoinClick}
            className="mt-6 bg-[#4377B2] hover:bg-[#c94d24] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 w-full sm:w-auto"
          >
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
