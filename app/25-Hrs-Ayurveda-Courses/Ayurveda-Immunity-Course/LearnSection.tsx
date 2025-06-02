"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Certified Ayurveda Immunity Course:",
      content: [
        "Certified Ayurveda Immunity Course",
        "Understand Ojas (vitality) and its role in immunity",
        "Learn immunity-boosting herbs, foods & self-care rituals",
        "Seasonal routines (Ritucharya) for year-round wellness",
        "Practices to calm stress, anxiety & immune depletion",
        "Daily detox & nourishment rituals (Dinacharya)",
        "Ayurvedic immunity protocols for adults and children",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Daily self-care routines to build immunity",
        "Diet and digestion tips for stronger health",
        "Rasayana (rejuvenation) therapies and tonics",
        "Dosha-specific immune care practices",
        "Herbal decoctions and recipes for prevention",
        "Pranayama, meditation, and yoga for immunity",
        "Immune-support for kids, elders & post-illness recovery",
        "Seasonal immunity planning with Ayurvedic principles",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You prefer synthetic supplements and modern-only medicine",
        "You’re looking for a quick fix, not a lifestyle approach",
        "You are not open to making gentle lifestyle or diet changes",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want natural, preventive care through Ayurveda",
        "You are a wellness or yoga practitioner wanting deeper tools",
        "You’re recovering from illness or want to avoid frequent colds/flu",
        "You believe in a mind-body-spirit approach to health",
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
