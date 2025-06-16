"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Certified Ayurvedic Lifestyle Training:",
      content: [
        "Certified Ayurvedic Lifestyle Training",
        "Master Dinacharya (daily routine) & Ritucharya (seasonal care)",
        "Learn self-care, detox, and Ayurvedic hygiene rituals",
        "Daily habits for better digestion, energy, and sleep",
        "Yoga, meditation, and pranayama integration",
        "Dosha-aligned practices for each stage of life",
        "Tools to reduce stress and support mental balance",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Designing your ideal Ayurvedic daily routine",
        "Morning cleansing practices and oil therapies",
        "Sleep hygiene and nighttime rituals",
        "Seasonal food, behavior, and energy adjustments",
        "Breathwork and yoga synced with doshas",
        "Ayurvedic time management and productivity",
        "Digital detox and sensory care",
        "Journaling and emotional balance tools",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want a one-size-fits-all wellness plan",
        "You’re looking for quick fixes, not long-term habits",
        "You don’t want to adjust your current lifestyle or routine",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to live more naturally and mindfully",
        "You're interested in balancing health without medication",
        "You’re a wellness seeker, yoga teacher, or coach expanding your toolkit",
        "You want to feel energized, grounded, and aligned daily",
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
            {/* Title Section */}
            <div className="md:w-1/2 px-6 py-6 flex items-center justify-center bg-white rounded-l-2xl md:rounded-l-2xl md:rounded-r-none shadow-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4377b2] text-center">
                {section.title}
              </h2>
            </div>

            {/* Vertical Divider */}
            <div className="w-[2px] bg-[#4377b2] hidden md:block" />

            {/* Content Section */}
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
