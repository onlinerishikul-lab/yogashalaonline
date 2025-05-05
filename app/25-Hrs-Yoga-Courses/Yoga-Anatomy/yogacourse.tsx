import React from "react";

const YogaCourse = () => {
  return (
    <div className="flex flex-col space-y-16 bg-gray-50 text-black p-8 md:p-16">
      {/* Section: Yoga Courses For Beginners */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#007BFF] leading-tight">
            Yoga Courses For <br /> Beginners
          </h1>
          <button className="mt-8 bg-[#.bg-[#.bg-[#007BFF]]] hover:bg-[#.bg-[#007BFF]] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition">
            <span>Join Now</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 md:w-1/2">
          {/* Language Card */}
          <div className="relative bg-white text-black rounded-xl p-6 shadow-md">
            <div className="absolute -top-6 left-6 bg-[#007BFF] text-white p-4 rounded-full shadow-md">
              <i className="fas fa-language text-lg"></i>
            </div>
            <h3 className="text-lg font-semibold">Course Language</h3>
            <p className="text-sm mt-2">English</p>
          </div>

          {/* Skills Card */}
          <div className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-xl p-6 text-white shadow-md">
            <h4 className="text-xl font-semibold mb-2">Skills You’ll Learn</h4>
            <p className="text-sm leading-relaxed">
              Yoga Poses for Beginners | The Science of Pranayama | Yoga Anatomy Basics | Eight-Limbs of Yoga | Seven Chakras | Bandhas & Mudras | Meditation | Mantras | Mobility Drills | Surya Namaskar and Basic Sequences
            </p>
          </div>
        </div>
      </div>

      {/* Section: Why Yogshala? */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#007BFF] mb-8">Why Yogshala?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#007BFF] text-white p-4 rounded-full shadow">
              <i className="fas fa-graduation-cap text-lg"></i>
            </div>
            <p className="text-lg font-medium">Top Indian Academy</p>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#007BFF] text-white p-4 rounded-full shadow">
              <i className="fas fa-star text-lg"></i>
            </div>
            <p className="text-lg font-medium">5-Star Ratings</p>
          </div>

          {/* Card 3 */}
          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#007BFF] text-white p-4 rounded-full shadow">
              <i className="fas fa-certificate text-lg"></i>
            </div>
            <p className="text-lg font-medium">Globally Recognized Certifications</p>
          </div>

          {/* Card 4 */}
          <div className="flex items-center bg-white p-6 rounded-2xl shadow-md space-x-4">
            <div className="bg-[#007BFF] text-white p-4 rounded-full shadow">
              <i className="fas fa-chalkboard-teacher text-lg"></i>
            </div>
            <p className="text-lg font-medium">Expert Instructors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaCourse;
