import React from "react";
import { Languages, Star, GraduationCap, BadgeCheck, ChalkboardTeacher } from "lucide-react";

const YogaCourse = () => {
  return (
    <div className="flex flex-col space-y-16 bg-[#f5f5f5] text-black p-8 md:p-16">
      {/* Section: Yoga Courses For Beginners */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4377b2] leading-tight">
            Yoga Courses For <br /> Beginners
          </h1>
          <button className="mt-8 bg-[#4377b2] hover:bg-[#365f91] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>

        <div className="flex flex-col space-y-4 md:w-1/2">
          <div className="relative bg-white text-black rounded-xl p-6 shadow-md">
            <div className="absolute -top-6 left-6 bg-[#4377b2] text-white p-4 rounded-full shadow-md">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Course Language</h3>
            <p className="text-sm mt-2">English</p>
          </div>

          <div className="bg-gradient-to-r from-[#4377b2] to-[#365f91] rounded-xl p-6 text-white shadow-md">
            <h4 className="text-xl font-semibold mb-2">Skills You’ll Learn</h4>
            <p className="text-sm leading-relaxed">
              Yoga Poses for Beginners | The Science of Pranayama | Yoga Anatomy Basics | Eight-Limbs of Yoga | Seven Chakras | Bandhas & Mudras | Meditation | Mantras | Mobility Drills | Surya Namaskar and Basic Sequences
            </p>
          </div>
        </div>
      </div>

      {/* Section: Why Yogshala? */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#4377b2] mb-8">Why Yogshala?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#4377b2] text-white p-4 rounded-full shadow">
              <GraduationCap className="w-5 h-5" />
            </div>
            <p className="text-lg font-medium">Top Indian Academy</p>
          </div>

          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#4377b2] text-white p-4 rounded-full shadow">
              <Star className="w-5 h-5" />
            </div>
            <p className="text-lg font-medium">5-Star Ratings</p>
          </div>

          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#4377b2] text-white p-4 rounded-full shadow">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <p className="text-lg font-medium">Globally Recognized Certifications</p>
          </div>

          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#4377b2] text-white p-4 rounded-full shadow">
              <ChalkboardTeacher className="w-5 h-5" />
            </div>
            <p className="text-lg font-medium">Expert Instructors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaCourse;
