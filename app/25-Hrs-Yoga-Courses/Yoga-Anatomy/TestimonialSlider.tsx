"use client";

import React from "react";

const StickyCourseCard = () => {
  return (
    <div className="hidden lg:block sticky top-24 h-fit w-80">
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-bold text-[#4377b2]">Course Info</h3>
        <p className="text-sm text-gray-700">
          <strong>Duration:</strong> 15 Days<br />
          <strong>Time:</strong> Morning (6:00 – 7:30 AM IST) or Evening (6:00 – 7:30 PM IST)<br />
          <strong>Start Date:</strong> 1st of every month<br />
          <strong>Language:</strong> English<br />
          <strong>Certification:</strong> Yoga Alliance
        </p>
        <div>
          <p className="text-2xl font-bold text-[#4377b2]">USD 250</p>
          <p className="text-xs text-gray-500">(All taxes included)</p>
        </div>
        <button className="bg-[#4377b2] hover:bg-[#365a92] text-white px-5 py-2.5 rounded-full font-medium flex items-center justify-center space-x-2 text-sm w-full">
          <span>BOOK YOUR SEAT NOW</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default StickyCourseCard;
