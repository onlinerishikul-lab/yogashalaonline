"use client";
import React from "react";
import Image from "next/image";

const Join = () => {
  const handleJoinClick = () => {
    window.open("https://chat.whatsapp.com/your-group-invite-link", "_blank");
  };

  return (
    <div className="w-full min-h-[400px] flex justify-center items-center px-4 py-12 bg-[#167d3d]">
      <div className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 text-white">
        {/* Text Content */}
        <div className="md:max-w-xl w-full text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold uppercase">
            Join Our WhatsApp Community
          </h2>
          <p className="mt-4 text-base md:text-lg">
            Get ready to connect with fellow yoga enthusiasts, receive course updates, and engage in meaningful discussions. Click below to join our exclusive WhatsApp group and be part of the journey!
          </p>
          <button
            onClick={handleJoinClick}
            className="mt-6 inline-block bg-white text-[#167d3d] hover:bg-[#c94d24] hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Join Us Today
          </button>
        </div>

        {/* WhatsApp Icon - Next to Text */}
        <div
          className="cursor-pointer"
          onClick={handleJoinClick}
        >
          <Image
            src="/join.jpg" // Make sure this file is saved in the /public folder
            alt="Join WhatsApp"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
