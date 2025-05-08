'use client';

import React from "react";

const YogaCourse = () => {
  return (
    <div className="flex flex-col space-y-16 bg-gray-50 text-black p-8 md:p-16">
      {/* Section: Course Introduction */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4377b2] leading-tight">
            25-Hour Yoga Anatomy <br /> for a Safe Journey
          </h1>
          <button className="mt-8 bg-[#4377b2] hover:bg-[#365a92] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 md:w-1/2">
          <div className="relative bg-white text-black rounded-xl p-6 shadow-md">
            <div className="absolute -top-6 left-6 bg-[#4377b2] text-white p-4 rounded-full shadow-md">
              <i className="fas fa-language text-lg"></i>
            </div>
            <h3 className="text-lg font-semibold">Course Language</h3>
            <p className="text-sm mt-2">English</p>
          </div>

          <div className="bg-gradient-to-r from-[#4377b2] to-[#365a92] rounded-xl p-6 text-white shadow-md">
            <h4 className="text-xl font-semibold mb-2">What You’ll Learn</h4>
            <p className="text-sm leading-relaxed">
              Functional Anatomy for Yoga | Understanding Joints & Movement | Preventing Injuries | Safe Asana Alignment | Body Mechanics | Breath & Nervous System | Muscle Engagement | Posture Breakdown | Modifications for All Levels | Practical Application for Teaching
            </p>
          </div>
        </div>
      </div>

      {/* Section: Why Yogshala? */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#4377b2] mb-8">
          Why Choose Yogshala?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "fas fa-user-md", text: "Anatomy-Focused Approach" },
            { icon: "fas fa-heartbeat", text: "Injury Prevention Techniques" },
            { icon: "fas fa-globe", text: "Globally Recognized Accreditation" },
            { icon: "fas fa-chalkboard-teacher", text: "Led by Expert Trainers" },
          ].map(({ icon, text }, idx) => (
            <div key={idx} className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
              <div className="bg-[#4377b2] text-white p-4 rounded-full shadow">
                <i className={`${icon} text-lg`}></i>
              </div>
              <p className="text-lg font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaCourse;
