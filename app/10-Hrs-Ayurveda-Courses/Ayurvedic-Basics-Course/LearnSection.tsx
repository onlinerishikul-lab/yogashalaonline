"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Ayurveda Certificate Course:",
      content: [
        "Introductory Ayurveda Certificate",
        "Learn basics of doshas (Vata, Pitta, Kapha)",
        "Understand Ayurvedic daily routine (Dinacharya)",
        "Basics of Ayurvedic nutrition & digestion",
        "Simple home remedies for common issues",
        "Mind-body balance through lifestyle changes",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Self-assessment to determine your dosha",
        "Daily routines to balance your energy and health",
        "Introduction to Ayurvedic diet and seasonal foods",
        "Ayurvedic home remedies using herbs and spices",
        "Natural detox and rejuvenation practices",
        "Basics of Ayurvedic body care and massage",
        "Lifestyle recommendations for stress, sleep, and digestion",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re looking for advanced clinical-level Ayurvedic training",
        "You want to become an Ayurvedic practitioner or therapist",
        "You’re not interested in natural healing or lifestyle changes",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re curious about Ayurveda and want to learn from scratch",
        "You want to improve your daily habits and health naturally",
        "You’re looking for easy, practical wellness tips rooted in ancient science",
        "You want to integrate Ayurvedic wisdom into your yoga or wellness journey",
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
