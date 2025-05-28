"use client";
import React from "react";
import Image from "next/image";

const Join = () => {
  const handleJoinClick = () => {
    window.open("https://chat.whatsapp.com/your-group-invite-link", "_blank");
  };

  return (
    <div className="relative w-full min-h-[400px] flex justify-center items-center px-4 py-5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/join.jpg" // Ensure this image is in your public folder as /public/join.jpg
          alt="Join background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl w-full text-center md:text-left">
        <div className="md:max-w-xl mx-auto md:mx-0">
          <h2 className="text-white text-2xl md:text-4xl font-bold uppercase whitespace-nowrap">
            Join Our WhatsApp Community
          </h2>
          <p className="text-white mt-4 text-base md:text-lg">
            Get ready to connect with fellow yoga enthusiasts, receive course updates, and engage in meaningful discussions. Click below to join our exclusive WhatsApp group and be part of the journey!
          </p>
          <button
            onClick={handleJoinClick}
            className="mt-6 inline-block bg-[#4377B2] hover:bg-[#c94d24] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
