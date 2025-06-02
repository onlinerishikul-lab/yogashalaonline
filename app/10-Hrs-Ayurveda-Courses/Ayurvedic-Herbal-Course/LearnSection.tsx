"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Ayurvedic Herbalism Certification:",
      content: [
        "Ayurvedic Herbalism Certification",
        "Learn 25+ essential Ayurvedic herbs and spices",
        "Herbal preparations: teas, decoctions, oils, and pastes",
        "Herbal skincare and beauty recipes",
        "Remedies for digestion, immunity, sleep, and stress",
        "Downloadable herb guide and usage charts",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "How to identify and classify Ayurvedic herbs",
        "Step-by-step tutorials for herbal infusions, powders, and oils",
        "Herbal support for cold, cough, skin issues, and women’s health",
        "Introduction to Ayurvedic pharmacology (Dravya Guna)",
        "DIY recipes for immunity boosters and detox",
        "Safe use, sourcing, and storage of herbs",
        "Integrating herbs into daily Ayurvedic routine",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You're seeking advanced clinical herbalism or Ayurvedic Vaidya training",
        "You’re not interested in using herbs at home or in yoga/wellness practice",
        "You expect a pharmaceutical or modern scientific approach only",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to use Ayurvedic herbs safely and effectively",
        "You’re a yoga teacher or wellness coach seeking herbal knowledge",
        "You love natural living, DIY health, and homemade remedies",
        "You want to learn how herbs support digestion, beauty, and immunity",
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
