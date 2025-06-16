"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Class Highlights",
      content: [
        "Yoga Alliance Certified Vinyasa Yoga Teacher Training",
        "Master fluid sequencing and breath-synchronized movement",
        "Learn creative flows, transitions, and class themes",
        "Study yoga philosophy, anatomy, and alignment",
        "Includes video lessons + live sessions with expert teachers",
        "Build strong cueing, adjustment, and teaching skills",
        "Flexible self-paced or live formats available",
        "Internationally recognized certificate of completion",
      ],
    },
    {
      title: "What’s Inside the Class – Practical Aspects",
      content: [
        "Daily Vinyasa practice and guided flows",
        "Class structuring: warm-up, peak, cool down",
        "Pranayama, meditation, and mantra integration",
        "Teaching methodology and voice development",
        "Alignment, transitions, and safe adjustments",
        "Creative and themed sequencing",
        "Introduction to yogic texts and values",
        "Anatomy for movement and injury prevention",
      ],
    },
    {
      title: "Is This Class for You? NO!",
      content: [
        "You’re only interested in static or restorative yoga",
        "You’re not comfortable with dynamic or physically engaging styles",
        "You don’t want to teach or deepen your understanding",
      ],
    },
    {
      title: "Is This Class for You? YES!",
      content: [
        "You want to teach or practice energetic, flowing yoga",
        "You’re looking to blend creativity with discipline in your classes",
        "You’re interested in breath, rhythm, and physical vitality",
        "You enjoy structured movement with deeper philosophical roots",
      ],
    },
  ];

  return (
    <section className="bg-[#F5F5F5] px-4 sm:px-6 py-5 sm:py-10">
      <div className="max-w-6xl mx-auto space-y-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-stretch gap-0`}
          >
            {/* Title */}
            <div className="md:w-1/2 px-6 py-6 flex items-center justify-center bg-white rounded-l-2xl md:rounded-l-2xl md:rounded-r-none shadow-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4377b2] text-center">
                {section.title}
              </h2>
            </div>

            {/* Divider */}
            <div className="w-[2px] bg-[#4377b2] hidden md:block" />

            {/* Content */}
            <div className="md:w-1/2 px-6 py-6 flex flex-col justify-center bg-white rounded-r-2xl md:rounded-r-2xl md:rounded-l-none shadow-md space-y-2 text-gray-700 text-sm sm:text-base">
              {section.content.map((line, i) => (
                <p key={i}>• {line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnSection;
