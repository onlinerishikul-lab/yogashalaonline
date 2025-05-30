"use client";

import React from "react";

const YogaCoursePage = () => {
  return (
    <div className="bg-gray-50 text-black px-4 py-10 md:px-10 space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4377b2] leading-snug">
          25-Hour Yoga Anatomy <br /> for a Safe Journey
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          Deepen your understanding of the human body with our 25-hour Yoga Anatomy course, designed to help you practice and teach yoga safely. Learn about muscles, joints, bones, and movement patterns to prevent injuries and improve alignment. This course is ideal for yoga teachers and dedicated practitioners seeking a strong foundation in anatomy for a more mindful and informed yoga journey.
        </p>
      </section>

      {/* Key Skills */}
      <section className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-[#4377b2] text-center">
          Key Skills You’ll Learn
        </h2>
        <div className="space-y-6 text-gray-700 text-sm md:text-base">
          <div>
            <h3 className="font-semibold text-[#4377b2]">1. Anatomy & Biomechanics</h3>
            <p>Understand how the body moves through yoga with practical insights into functional anatomy.<br />Learn the mechanics behind each posture to enhance safety and effectiveness.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#4377b2]">2. Muscles & Joints</h3>
            <p>Explore how muscles, joints, and connective tissues work during different asanas.<br />Gain clarity on body movement patterns and alignment principles.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#4377b2]">3. Injury Prevention</h3>
            <p>Learn how to modify poses to suit individual needs and avoid common yoga injuries.<br />Build a safe practice for yourself and your students.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#4377b2]">4. Breath & Body Awareness</h3>
            <p>Discover the link between breath, movement, and mental focus.<br />Improve overall body awareness and deepen your practice.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#4377b2]">5. Key Body Areas</h3>
            <p>Focus on the anatomy of the spine, hips, shoulders, and core—the foundations of most yoga poses.<br />Understand how to protect and strengthen these vital areas.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#4377b2]">6. For All Levels</h3>
            <p>This course is designed for both beginners and experienced yoga teachers.<br />The content is easy to follow, insightful, and immediately applicable.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaCoursePage;
