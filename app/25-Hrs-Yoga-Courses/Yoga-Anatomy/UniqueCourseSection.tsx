"use client";

import { GraduationCap, Users, Sun, BarChart3 } from "lucide-react";

export default function UniqueCourseSection() {
  const items = [
    {
      title: "Experienced Teachers",
      icon: <Users className="text-orange-600 w-8 h-8" />,
    },
    {
      title: "Flexible Schedule",
      icon: <Sun className="text-orange-600 w-8 h-8" />,
    },
    {
      title: "Certified Curriculum",
      icon: <GraduationCap className="text-orange-600 w-8 h-8" />,
    },
    {
      title: "Progress Tracking",
      icon: <BarChart3 className="text-orange-600 w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
            Why is Our 100 Hour Online Teacher Training Course Unique
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {item.icon}
              <p className="mt-2 font-semibold text-lg text-black">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { UniqueCourseSection };
