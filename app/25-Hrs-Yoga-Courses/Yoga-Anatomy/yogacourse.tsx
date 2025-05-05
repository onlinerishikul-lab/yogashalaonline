import React from "react";

const YogaCourseBlue = () => {
  return (
    <div className="flex flex-col space-y-16 bg-black text-white p-8">
      {/* Section: Yoga Courses For Beginners */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-[#007BFF] leading-tight">
            Yoga Courses For <br /> Beginners
          </h1>
          <button className="mt-8 bg-[#007BFF] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 md:w-1/2">
          <div className="relative bg-white text-black rounded-xl p-6 shadow-lg">
            <div className="absolute -top-6 left-6 bg-[#007BFF] text-white p-4 rounded-full shadow-md">
              <i className="fas fa-child"></i>
            </div>
            <h3 className="text-lg font-semibold">Course Language</h3>
            <p className="text-sm mt-2">English</p>
          </div>

          <div className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-xl p-6 text-white shadow-md">
            <h4 className="text-xl font-semibold mb-2">Skills You’ll Learn</h4>
            <p className="text-sm">
              Yoga Poses for Beginners | The Science of Pranayama | Yoga Anatomy Basics | Eight-Limbs of Yoga | Seven Chakras | Bandhas & Mudras | Meditation | Mantras | Mobility Drills | Surya Namaskar and Basic Sequences
            </p>
          </div>
        </div>
      </div>

      {/* Section: Why Yogshala? */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-[#007BFF] mb-8">Why Yogshala?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white p-6 rounded-2xl space-x-4">
            <div className="bg-white text-[#007BFF] p-4 rounded-full">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <p className="text-lg font-medium">Top Indian Academy</p>
          </div>

          <div className="flex items-center bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white p-6 rounded-2xl space-x-4">
            <div className="bg-white text-[#007BFF] p-4 rounded-full">
              <i className="fas fa-star"></i>
            </div>
            <p className="text-lg font-medium">5-Star Ratings</p>
          </div>

          <div className="flex items-center bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white p-6 rounded-2xl space-x-4">
            <div className="bg-white text-[#007BFF] p-4 rounded-full">
              <i className="fas fa-certificate"></i>
            </div>
            <p className="text-lg font-medium">Globally Recognized Certifications</p>
          </div>

          <div className="flex items-center bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white p-6 rounded-2xl space-x-4">
            <div className="bg-white text-[#007BFF] p-4 rounded-full">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <p className="text-lg font-medium">Expert Instructors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaCourseBlue;
