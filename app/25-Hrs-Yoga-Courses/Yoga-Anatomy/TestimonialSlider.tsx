"use client";

import React from "react";

const StickyCourseCard = () => {
  return (
    <div className="hidden lg:flex justify-center sticky top-24 h-fit w-full">
      <div className="bg-gradient-to-br from-[#4377b2] to-[#365a92] border border-gray-300 shadow-lg rounded-2xl p-6 space-y-4 w-80 text-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-center">
          25 Hrs Online Yoga Anatomy For Safety
        </h2>

        <div className="border-t border-b border-white/30 py-3 text-sm space-y-2">
          <p className="font-semibold">Course Highlights:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Starting 1st of every month</li>
            <li>Ends 15th of every month</li>
            <li>15 Days Program</li>
            <li>Daily 3 hrs</li>
            <li>IST 6 AM - 7:30 AM</li>
            <li>IST 6 PM - 7:30 PM</li>
            <li>Instructed in English</li>
            <li>Weekly Sunday Off</li>
            <li>Most Recommended Teacher</li>
            <li>Accredited by Yoga Alliance</li>
          </ul>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-sm font-medium mb-1">Discounted Course Fees:</p>
          <p className="text-2xl font-bold">USD 250</p>
          <p className="text-xs text-white/80">(Included All Tax)</p>
        </div>

        <button className="bg-white hover:bg-gray-200 text-[#4377b2] px-5 py-2.5 rounded-full font-medium flex items-center justify-center space-x-2 text-sm w-full transition duration-200">
          <span>BOOK YOUR SEAT NOW</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default StickyCourseCard;
