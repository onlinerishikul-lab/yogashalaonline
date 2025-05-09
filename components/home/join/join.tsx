"use client";
import React from "react";
import Image from "next/image";

const Join = () => {
  const handleJoinClick = () => {
    window.open("https://chat.whatsapp.com/your-group-invite-link", "_blank");
  };

  return (
    <div className="relative flex justify-center px-2 overflow-hidden h-[600px]">
      {/* Background image layer */}
      <Image
        src="/community.jpg" // Make sure this is your uploaded image path or change accordingly
        alt="Join background"
        fill
        className="object-cover"
        priority
      />

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content layer */}
      <div className="relative max-w-screen-2xl w-full py-12 px-6">
        <div className="md:w-2/4">
          <h2 className="text-white md:text-4xl text-2xl font-bold uppercase">
            Join Our WhatsApp Community
          </h2>
          <p className="text-white mt-4 text-lg">
            Get ready to connect with fellow yoga enthusiasts, receive course
            updates, and engage in meaningful discussions. Click below to join
            our exclusive WhatsApp group and be part of the journey!
          </p>
          <button
            onClick={handleJoinClick}
            className="text-white font-semibold uppercase mt-5 py-3 px-6 rounded-full bg-[#4377B2] hover:bg-[#c94d24] transition-colors"
          >
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
