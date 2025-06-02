"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Certified Ayurvedic Diet & Nutrition Course:",
      content: [
        "Certified Ayurvedic Diet & Nutrition Course",
        "Understand Dosha-specific diets and digestive health",
        "Learn food combinations, seasonal eating, and mindful meals",
        "Practical Ayurvedic cooking demos and kitchen setup",
        "Knowledge of Agni (digestive fire) and Ama (toxins)",
        "Recipes, charts, and self-assessment tools included",
        "Self-paced, beginner-friendly modules",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Dosha and Agni self-assessment",
        "Creating personalized meal plans",
        "Ayurvedic grocery list & kitchen guide",
        "Detox foods and digestive reset routines",
        "Six tastes and their therapeutic effects",
        "Balancing meals for each season and dosha",
        "Herbal teas, tonics, and food-based remedies",
        "Understanding emotional eating and cravings",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want a modern diet program like keto or intermittent fasting",
        "You’re looking for a strict calorie-counting method",
        "You’re not open to changing your cooking and eating habits",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to eat according to your body and mind constitution",
        "You're curious about healing through food",
        "You struggle with digestion, fatigue, or imbalance",
        "You’re a yoga or wellness professional enhancing your holistic approach",
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
