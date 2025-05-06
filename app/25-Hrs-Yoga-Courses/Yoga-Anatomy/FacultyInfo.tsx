"use client";

import Image from "next/image";

const FacultyInfo = () => {
  return (
    <section id="faculty" className="bg-[#f9fafb] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4377B2] mb-6">
            Meet Your Yoga Anatomy Faculty
          </h2>
          <p className="text-[#4377B2] text-lg mb-8 leading-relaxed">
            Learn from certified yoga educators with deep expertise in anatomy, biomechanics, and safe movement practices. 
            Each instructor brings years of hands-on experience and compassionate teaching.
          </p>

          <div className="bg-[#4377B2] text-white p-6 rounded-xl w-64 text-center shadow-md">
            <div className="text-4xl font-bold">1000+</div>
            <div className="mt-1 text-sm">Students Trained Globally</div>

            <div className="flex justify-center mt-4 space-x-[-10px] relative z-0">
              {["1", "2", "3", "4"].map((_, idx) => (
                <Image
                  key={idx}
                  src={`/faculty-avatar-${idx + 1}.jpg`}
                  alt={`Faculty ${idx + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white z-10"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-white text-[#4377B2] font-bold flex items-center justify-center border-2 border-[#4377B2] z-10">
                +
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/faculty-main.jpg"
            alt="Yoga Anatomy Faculty"
            width={450}
            height={350}
            className="rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export defa
