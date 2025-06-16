"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Class Highlights",
      content: [
        "Certified Pranayama Teacher Training (Online/Offline)",
        "Learn foundational and advanced breathing techniques",
        "Explore breath-mind-body connection in depth",
        "Self-paced learning modules with live support",
        "Guided breathwork videos & audios included",
        "Teaching sequences, cues, and safety guidelines",
        "Includes kriyas, mudras, and meditation integration",
        "Certificate of Completion awarded",
      ],
    },
    {
      title: "What’s Inside the Class – Practical Aspects",
      content: [
        "Daily breathwork practice with guidance",
        "Techniques like Nadi Shodhana, Kapalabhati, Bhastrika",
        "Use of breath to calm, energize, and balance the mind",
        "Breath awareness for emotional and nervous system health",
        "Integration with meditation and asana",
        "How to cue and sequence Pranayama classes",
        "Safety precautions and contraindications",
        "Building personalized breath programs",
      ],
    },
    {
      title: "Is This Class for You? NO!",
      content: [
        "You’re only interested in physical postures (asanas)",
        "You’re not ready to explore inner stillness or subtle energy",
        "You are unable to sit calmly for breath-based practices",
      ],
    },
    {
      title: "Is This Class for You? YES!",
      content: [
        "You want to deepen your personal breath practice",
        "You’re a yoga teacher or practitioner ready to guide others",
        "You seek tools for managing stress, energy, and emotions",
        "You enjoy learning how ancient science supports modern wellness",
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
