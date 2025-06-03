"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Certified Postnatal Yoga Teacher Training",
        "Gentle recovery practices after birth",
        "Core & pelvic floor strengthening",
        "Breathwork and emotional healing",
        "Yoga with or without baby",
        "Anatomy and safety guidance for postpartum",
        "Teaching tools for group or private sessions",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Healing sequences for abdominal and pelvic areas",
        "Postpartum-safe asanas and modifications",
        "Breathwork for emotional release and calm",
        "Mindfulness and meditation for mental wellness",
        "Techniques to manage fatigue and overwhelm",
        "Rebuilding strength and posture post-pregnancy",
        "Teaching strategies for postnatal classes",
        "Understanding postpartum body and hormone shifts",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You are looking for a fast-paced or intense yoga workout",
        "You have no interest in therapeutic or recovery-based practices",
        "You're not open to adapting practices for postpartum needs",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You're a new mother seeking mindful healing and strength",
        "You're a yoga teacher looking to safely guide postnatal clients",
        "You want to understand the postpartum body deeply",
        "You're interested in emotional and physical recovery through yoga",
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
