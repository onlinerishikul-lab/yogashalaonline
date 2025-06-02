"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Certified Ayurvedic Foundational Course:",
      content: [
        "Certified Ayurvedic Foundational Course",
        "Learn core concepts like Doshas, Agni, and Prakriti",
        "Understand the connection between diet, lifestyle, and health",
        "Explore Ayurvedic nutrition and food combinations",
        "Daily routine (Dinacharya) for balance and vitality",
        "Intro to herbal home remedies and healing practices",
        "Easy, self-paced modules with expert guidance",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Personal Dosha self-assessment",
        "Daily routine (Dinacharya) design based on Dosha",
        "Introduction to Ayurvedic diet principles",
        "Basic pulse and tongue diagnosis",
        "Use of herbs and spices in everyday life",
        "Ayurvedic body care and detox practices",
        "Simple remedies for common imbalances",
        "Lifestyle alignment with seasons and time of day",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re only interested in modern medical approaches",
        "You’re looking for advanced Ayurvedic clinical training",
        "You don’t want to make lifestyle or diet changes",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re new to Ayurveda and want a strong foundation",
        "You want to live a healthier, more balanced life",
        "You’re a wellness/yoga professional looking to expand your knowledge",
        "You’re curious about natural healing and self-care",
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
