"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Professional-Level Asana Refinement Certification",
        "Detailed breakdown of 50+ foundational & advanced poses",
        "Learn alignment, modifications, and common mistakes",
        "Adjustments and assists with safety and sensitivity",
        "HD video demonstrations by expert instructors",
        "Worksheets, pose manuals, and teaching templates",
        "Anatomy-focused insights to prevent injury",
        "Self-paced with lifetime access",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "In-depth analysis of standing, seated, twisting, and balancing poses",
        "Step-by-step instruction for safe entry, hold, and exit in asanas",
        "Corrective alignment cues for diverse body types",
        "Hands-on adjustment techniques and safety practices",
        "Common misalignments and how to address them",
        "Anatomy-informed sequencing and cueing",
        "Asana-based injury prevention techniques",
        "Teaching labs and peer reviews",
        "Class planning with layered pose options",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re a complete beginner to yoga",
        "You’re only interested in general yoga practice, not teaching",
        "You don’t want to dive into technical or anatomical detail",
        "You prefer follow-along classes over structured learning",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re a yoga teacher wanting to refine your teaching and practice",
        "You want to offer safer, more effective asana guidance",
        "You aim to build confidence with hands-on adjustments",
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
