"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Chair Yoga TTC:",
      content: [
        "Teach yoga safely using a chair as a prop",
        "Accessible techniques for seniors and limited mobility",
        "Focus on breath, posture, and gentle movements",
        "Learn safe alignment and injury prevention",
        "Adapt traditional poses for seated practice",
        "Inclusive methods for all body types and ages",
        "Build confidence in teaching relaxing and therapeutic classes",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Step-by-step guidance for chair-based yoga poses",
        "Real-time demos on modifying common asanas",
        "Tips for working with seniors and beginners",
        "Exercises to support mobility, strength, and relaxation",
        "Guided breathwork and mindfulness techniques",
        "Live feedback sessions to improve your teaching style",
      ],
    },
    {
      title: "Is This Course for You? YES! If You:",
      content: [
        "Want to offer yoga to people of all mobility levels",
        "Prefer a gentle and therapeutic yoga style",
        "Are looking for a certified and structured chair yoga TTC",
        "Have limited time but strong dedication to learning",
      ],
    },
    {
      title: "This Course May Not Be for You If:",
      content: [
        "You only want fast certification without real skills",
        "You’re looking for physically intense yoga styles",
        "You’re not open to working with gentle movement practices",
        "You can’t commit to at least 6 hours/week for learning",
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
