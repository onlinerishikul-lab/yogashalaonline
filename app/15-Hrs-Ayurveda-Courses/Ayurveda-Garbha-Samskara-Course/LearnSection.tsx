"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Ayurvedic Certification in Garbha Samskara:",
      content: [
        "Ayurvedic Certification in Garbha Samskara",
        "Ancient Vedic techniques for conscious pregnancy",
        "Understand dosha balance in pre-conception and pregnancy",
        "Ayurvedic diet, herbs & routines for mother and fetus",
        "Prenatal yoga, pranayama, and meditative practices",
        "Mantras, music & rituals for fetal development",
        "Daily care routines from conception to postnatal phase",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Guidelines for ideal conception (ritucharya, preparation for parents)",
        "Pregnancy care for each trimester through Ayurvedic lens",
        "Garbhini Paricharya (monthly guidelines for pregnant women)",
        "Ayurvedic nutrition for fetal growth & maternal vitality",
        "Safe herbs, oils, and self-care rituals during pregnancy",
        "Mantras and music therapy for fetal mind-body harmony",
        "Gentle prenatal yoga, breathwork & visualization",
        "Postnatal recovery and lactation support",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You're not interested in holistic or spiritual approaches to pregnancy",
        "You seek only clinical or modern medical prenatal care",
        "You can't commit time for self-practice and lifestyle integration",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re pregnant or planning for conscious conception",
        "You’re a yoga teacher, doula, or wellness practitioner",
        "You want to support mothers using Ayurvedic and yogic traditions",
        "You believe in nurturing emotional, spiritual, and physical wellbeing in pregnancy",
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
