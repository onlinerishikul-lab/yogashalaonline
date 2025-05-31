"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Yoga-Nidra-TTC course:",
      content: [
        "Certified Online Yoga Nidra Teacher Training",
        " Learn to guide deeply restorative sessions",
        "Understand science behind yogic sleep & brainwaves",
        "Includes guided scripts, cues, and class templates",
        "Covers stress relief, subconscious work & deep relaxation",
        "Self-paced study with flexible access",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Daily and weekly practice templates",
        "Creating custom Yoga Nidra scripts",
        "Understanding brainwave states",
        "Student case studies and feedback",
        "Sequencing short & long sessions",
        "Audio recording and practice teaching",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You seek a deep, meditative teaching path",
        "You want to help others with stress, anxiety, or sleep issues",
        "You enjoy guiding and holding space for others",
        "You’re ready to invest time in subtle, powerful transformation",
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
