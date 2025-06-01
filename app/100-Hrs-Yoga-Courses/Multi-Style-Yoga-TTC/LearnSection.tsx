"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "100-Hour Multi-Style Yoga Certification (Yoga Alliance Continuing Education)",
        "Covers Hatha, Vinyasa, Yin & Ashtanga basics",
        "Learn sequencing, alignment, and breathwork",
        "Study yoga philosophy, anatomy & teaching skills",
        "Self-paced access with optional live sessions",
        "Video demos, posture clinics & practice guides",
        "Learn from expert teachers from India",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Practice and break down key postures across 4 styles",
        "Sun salutations, standing, seated, and restorative sequences",
        "Pranayama (breathwork) and guided meditation sessions",
        "Foundations of yoga philosophy and yogic lifestyle",
        "Asana alignment, safety, and modifications",
        "Teaching methodology for each style",
        "Developing self-practice and basic class structure",
        "Introduction to anatomy and movement science",
        "Reflection, journaling, and self-awareness practices",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want an advanced or full 200-hour certification",
        "You only want to learn one specific style",
        "You prefer only in-person training",
        "You're not ready to commit even a few hours per week",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re a beginner or intermediate yogi wanting deeper learning",
        "You want exposure to multiple yoga styles in one course",
        "You’re exploring teaching yoga in the future",
        "You want a flexible, short-format course to build consistency",
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
