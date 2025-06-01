"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Hatha Yoga Teacher Certification",
        "Focus on classic asanas and pranayama practices",
        "Study yoga philosophy, anatomy, and teaching methods",
        "Self-paced video lessons with live instructor sessions",
        "Develop strength, flexibility, and mindfulness",
        "Certificate of Completion awarded",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Fundamental Hatha asanas and alignment techniques",
        "Pranayama and breath control basics",
        "Meditation and relaxation methods",
        "Sequencing for balanced Hatha classes",
        "Teaching methodology and adjustments",
        "Anatomy relevant to Hatha practice",
        "Yoga philosophy and ethics",
        "Practice teaching with feedback",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want a fast-paced, flow-based yoga style only",
        "You prefer only in-person training",
        "You can’t commit time regularly",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to learn classic yoga postures deeply",
        "You’re interested in a balanced, mindful practice",
        "You want to teach or deepen your Hatha practice",
        "You prefer flexible, online learning with expert support",
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
