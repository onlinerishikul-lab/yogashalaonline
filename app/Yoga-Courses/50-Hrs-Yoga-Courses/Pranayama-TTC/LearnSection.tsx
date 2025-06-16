"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Yoga Anatomy course:",
      content: [
        "Online Pranayama Teacher Certification",
        "Learn a variety of breathing techniques for energy, relaxation, and healing",
        "Understand the role of breath in yoga and daily life",
        "Flexible, self-paced modules with lifetime access",
        " Video demonstrations and guided breathwork sessions",
        "Includes teaching scripts, practice plans, and resources",
        "Basics of respiratory system and mind-body connection",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Breath Awareness Exercises – Build foundational breath control skills",
        "Pranayama Techniques – Learn various breathing practices like Nadi Shodhana, Kapalabhati, and more",
        "Guided Practice Sessions – Follow expert-led breathwork videos step-by-step",
        "Teaching Methodology – Develop skills to instruct safely and effectively",
        "Self-Practice & Assessment – Track your progress and deepen your experience",
        "Daily Breathwork Routines – Create simple, consistent habits for health and vitality",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "Want a quick, online certification focused on pranayama breathing techniques",
        "Looking to deepen your understanding of breath control and its benefits",
        "Can commit 5–6 hours per week to focused, self-paced study",
        "Comfortable learning independently without a peer group",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        "Expecting a broad yoga teacher training including asanas or philosophy",
        "Want highly interactive live sessions or group learning experiences",
        "Unable to dedicate quiet time regularly for breathwork practice",
        "Looking for in-depth medical or scientific study of respiratory anatomy",
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
