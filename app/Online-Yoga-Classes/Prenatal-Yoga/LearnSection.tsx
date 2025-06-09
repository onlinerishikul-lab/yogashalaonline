"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Class Highlights",
      content: [
        "Certified Prenatal Yoga Training",
        "Trimester-specific yoga sequences",
        "Breathwork & meditation for labor prep",
        "Gentle asanas for comfort & strength",
        "Anatomy & safety guidelines for pregnancy",
        "Emotional & mental well-being tools",
        "Teaching methodology for prenatal groups",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Class – Practical Aspects",
      content: [
        "Safe postures and movement during each trimester",
        "Pelvic floor strengthening and core stability",
        "Breathing techniques for labor preparation",
        "Meditation and visualization practices",
        "Common pregnancy symptoms & modifications",
        "Teaching methodology & prenatal class planning",
        "Emotional support tools & creating a nurturing space",
        "Contraindications and safety checks",
      ],
    },
    {
      title: "Is This Class for You? NO!",
      content: [
        "You're looking for intense or advanced physical practice",
        "You’re not open to working with subtle, gentle approaches",
        "You don’t want to adapt your teaching style for pregnancy",
      ],
    },
    {
      title: "Is This Class for You? YES!",
      content: [
        "You're a yoga teacher wanting to guide pregnant students safely",
        "You're pregnant and want to practice yoga safely at home",
        "You seek a deeper mind-body connection during pregnancy",
        "You want to support women through a transformative life stage",
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
