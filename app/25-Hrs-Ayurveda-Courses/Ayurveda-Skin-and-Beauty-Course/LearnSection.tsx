"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Certified Ayurveda Skin & Beauty Course:",
      content: [
        "Certified Ayurveda Skin & Beauty Course",
        "Understand your skin through Ayurvedic doshas",
        "Learn herbal recipes for glowing, blemish-free skin",
        "Practice facial marma massage and natural skincare",
        "Detox methods for clear, healthy skin",
        "Beauty rituals to enhance inner and outer radiance",
        "DIY face masks, oils, and tonics",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Ayurvedic skin type assessment",
        "Herbal face masks, scrubs, and cleansers",
        "Dosha-specific skincare and beauty tips",
        "Facial marma therapy and self-massage",
        "Natural anti-ageing practices and glow boosters",
        "Internal detox & beauty-from-within guidance",
        "Beauty-enhancing diet and lifestyle habits",
        "Customized skincare routines for different seasons",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You prefer only chemical-based skin treatments",
        "You’re looking for quick beauty fixes without inner care",
        "You’re not open to learning natural or traditional beauty methods",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want glowing skin through natural, holistic methods",
        "You're a yoga or wellness teacher seeking Ayurvedic beauty tools",
        "You love herbal self-care and ancient wisdom",
        "You're looking to create a daily Ayurvedic skincare routine",
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
