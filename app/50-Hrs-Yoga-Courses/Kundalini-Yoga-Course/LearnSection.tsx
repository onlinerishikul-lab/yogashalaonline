"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Kundalini Yoga Course:",
      content: [
        "Certified Kundalini Yoga Teacher Training",
        "Learn kriyas, pranayama, mantra, and meditation",
        "Techniques to awaken and balance Kundalini energy",
        "Study the philosophy and chakras behind the practice",
        "Includes video lessons, guided practices, and live sessions",
        "Self-paced with flexible learning options",
        "Certificate of Completion awarded",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Detailed Kundalini kriyas and sequences",
        "Mantra chanting and breathwork techniques",
        "Meditation and visualization practices",
        "Chakra energy anatomy and awakening",
        "Safe practices for energy activation",
        "Teaching methodology and ethical guidelines",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to awaken and harness your life force energy",
        "You seek a transformative mind-body-spirit practice",
        "You’re drawn to mantra, meditation, and breathwork",
        "You’re ready to commit to a deep personal and teaching journey",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        "You prefer gentle, slow yoga styles without energetic intensity",
        "You’re not interested in spiritual or Kundalini energy work",
        "You can’t commit time to regular practice and study",
        "You want only physical yoga without meditation or mantra",
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
