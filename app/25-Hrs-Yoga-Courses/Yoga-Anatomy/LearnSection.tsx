"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights section for your Yoga Anatomy course:",
      content: [
        "Comprehensive study of muscles, joints, and biomechanics",
        "Focus on safe alignment and injury prevention",
        "Integration of breath and body awareness techniques",
        "Detailed anatomy of spine, hips, shoulders, and core",
        "Practical lessons suitable for all skill levels",
        "Interactive learning with visuals and guided sessions",
        "Personalized tips for teaching and practicing yoga safely",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Hands-on guidance to safely perform and adjust yoga poses",
        "Step-by-step breakdown of muscle and joint functions during asanas",
        "Techniques to modify postures for different body types and limitations",
        "Exercises to improve breath control and body awareness",
        "Real-life applications to prevent injuries and enhance alignment",
        "Interactive sessions with feedback to deepen your understanding",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "Seeking quick online certification in Yoga Anatomy",
        "Need only basic foundational knowledge of Yoga Anatomy",
        "Can’t commit to more than 6 hours per week for study",
        "No preference for a peer community during Yoga Anatomy practice",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        "Looking for a quick online certification without in-depth study",
        "Only interested in basic or surface-level knowledge of anatomy",
        "Unable to dedicate at least 6 hours per week to learning",
        "Not interested in engaging with a supportive learning community",
      ],
    },
  ];

  return (
    <section className="bg-[#F5F5F5] px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto space-y-24">
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
