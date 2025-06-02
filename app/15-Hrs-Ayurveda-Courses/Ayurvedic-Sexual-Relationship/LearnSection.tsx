"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Certificate in Ayurvedic Relationship Wisdom:",
      content: [
        "Certificate in Ayurvedic Relationship Wisdom",
        "Explore compatibility through dosha types",
        "Understand emotional patterns and love languages in Ayurveda",
        "Learn rituals for bonding, communication, and forgiveness",
        "Ayurvedic practices for intimacy and connection",
        "Breathwork & meditation to balance relationship energy",
        "Worksheets, journal prompts, and partner exercises",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Identify your and your partner’s doshas and relationship tendencies",
        "Ayurvedic principles for emotional clarity and mindful communication",
        "Sacred rituals for healing, trust, and connection",
        "Lifestyle and diet tips for balancing energies in a partnership",
        "Guided meditations for heart-opening and emotional grounding",
        "Conflict resolution using the gunas (sattva, rajas, tamas)",
        "Love-enhancing herbs, oils, and aromatherapy techniques",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re not open to self-reflection or inner work",
        "You prefer only scientific or modern psychological approaches",
        "You’re looking for quick fixes without integrating lifestyle changes",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re in a relationship or seeking one with Ayurvedic insight",
        "You want to improve emotional balance and conscious communication",
        "You’re a yoga or wellness professional looking to support others",
        "You value holistic, heart-centered approaches to relationships",
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
            {/* Title Section */}
            <div className="md:w-1/2 px-6 py-6 flex items-center justify-center bg-white rounded-l-2xl md:rounded-l-2xl md:rounded-r-none shadow-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4377b2] text-center">
                {section.title}
              </h2>
            </div>

            {/* Vertical Divider */}
            <div className="w-[2px] bg-[#4377b2] hidden md:block" />

            {/* Content Section */}
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
