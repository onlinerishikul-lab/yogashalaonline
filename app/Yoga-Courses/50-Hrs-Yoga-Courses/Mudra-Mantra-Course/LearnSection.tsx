"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Yoga Anatomy course:",
      content: [
        "Online Mudra & Mantra Certification Course",
        "Learn key mudras and their energetic effects",
        "Practice powerful mantras with correct pronunciation",
        "Includes historical background and modern applications",
        "Integrate mudras and mantras into yoga and meditation",
        "Self-paced with flexible study schedule",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Audio guides for mantra chanting",
        "Combining mudras and mantras in sequences",
        "Understanding chakra connections",
        "Daily practice routines",
        "Breathing and focus techniques",
        "Guided meditation scripts using mudras and mantras",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to deepen your meditation and yoga with sacred tools",
        "You’re interested in ancient wisdom and energy healing",
        "You enjoy learning through sound, movement, and intention",
        "You’re ready to commit time to personal and teaching growth",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        "You prefer a purely physical yoga practice",
        "You’re not interested in spiritual or energetic aspects",
        "You want a quick certification without practice",
        "You don’t wish to explore sound or subtle energy work",
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
