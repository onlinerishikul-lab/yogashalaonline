"use client";

import React from "react";

const StickyCourseCard = () => {
  return (
    <div className="hidden lg:block sticky top-24 h-fit w-80">
      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold text-[#4377b2] uppercase tracking-wide text-center">
          25 Hrs Online Yoga Anotomy For Safety
        </h2>

        <div className="border-t border-b py-3 text-sm text-gray-700 space-y-2">
          <p><strong>Course Highlights:</strong></p>
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

        <div className="bg-[#f7f9fc] rounded-xl p-4 text-center">
          <p className="text-sm font-medium text-gray-700 mb-1">Discounted Course Fees:</p>
          <p className="text-2xl font-bold text-[#4377b2]">USD 250</p>
          <p className="text-xs text-gray-500">(Included All Tax)</p>
        </div>

        <button className="bg-[#4377b2] hover:bg-[#365a92] text-white px-5 py-2.5 rounded-full font-medium flex items-center justify-center space-x-2 text-sm w-full transition duration-200">
          <span>BOOK YOUR SEAT NOW</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default StickyCourseCard;
