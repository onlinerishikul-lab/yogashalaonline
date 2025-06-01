"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Internationally recognized certification for prenatal & postnatal yoga",
        "Covers all trimesters and postnatal recovery phases",
        "Safe asana, breathwork, and meditation techniques for mothers",
        "Learn anatomy, hormonal changes, and emotional wellbeing",
        "Video classes, teaching demos, and practice sessions",
        "Includes handbooks, sequencing guides, and cueing tips",
        "Self-paced + live Q&A support",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Week-by-week yoga modifications for each trimester",
        "Asana and breath practices for labor preparation",
        "Postpartum recovery yoga and gentle re-strengthening",
        "Pelvic floor awareness and core-safe movement",
        "Common pregnancy symptoms and how to support them",
        "Emotional support techniques and meditations",
        "Guidelines for group vs. private sessions",
        "Safety precautions and contraindications",
        "Sample class plans and real-time teaching practice",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re not interested in working with pregnant or postpartum students",
        "You’re only looking for general yoga training",
        "You don’t want to learn anatomy or medical considerations",
        "You prefer to teach only fitness or dynamic styles of yoga",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to teach yoga to expecting or new mothers",
        "You care about safety, healing, and emotional well-being",
        "You’re already a yoga teacher and want to specialize",
        "You want a certified and comprehensive course on women’s wellness",
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
