"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Yoga Anatomy course:",
      content: [
        "Online Meditation Teacher Certification",
        "Covers guided, silent, and breath-focused meditation styles",
        "Learn relaxation techniques and mind-centering practices",
        "Self-paced modules with flexible access",
        "Audio and video guided meditations included",
        "Includes teaching scripts, tips, and daily routines",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Daily Meditation Practices – Build focus, calm, and self-awareness",
        "Breath & Mindfulness Techniques – Learn to center your breath and thoughts",
        "Structured Routines – Create a simple, consistent daily meditation habit",
        "Guided Videos & Audios – Follow along with expert-led sessions",
        "Reflection & Journaling Prompts – Deepen your insight after each practice",
        "Teaching Tools – Gain confidence to guide others in meditation",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "Seeking a quick, online certification in meditation",
        "Want to build a basic understanding of meditation techniques and benefits",
        "Can commit 5–6 quiet hours per week to personal practice",
        "Comfortable learning at your own pace without a peer group",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        " Looking for physical activity, yoga postures, or movement-based practices",
        "Expecting in-depth psychology, therapy, or spiritual philosophy teachings",
        "Prefer live, group-based sessions with high interaction",
        "Unable to create a calm, consistent space for daily meditation",
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
