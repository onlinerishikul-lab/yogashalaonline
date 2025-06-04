"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Therapeutic Yoga for Diabetes Management",
        "Combines asana, pranayama, and relaxation for blood sugar control",
        "Includes Ayurvedic and yogic diet recommendations",
        "Self-paced modules plus optional live Q&A sessions",
        "Guided practices for daily diabetic support",
        "Learn stress-reduction techniques to support hormonal balance",
        "Designed by yoga experts with medical insights",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Daily therapeutic yoga sequences for diabetes",
        "Breathwork (Pranayama) to regulate insulin and stress",
        "Understanding diabetes from a yogic and physiological perspective",
        "Mindfulness and meditation for emotional balance",
        "Ayurvedic guidelines for diabetic-friendly eating",
        "Lifestyle changes for sustainable reversal",
        "Journaling and tracking health markers",
        "Teaching guidance for diabetic-focused yoga classes",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want a quick-fix without lifestyle changes",
        "You're not open to consistent practice or self-care",
        "You prefer only medication-based approaches",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You are diagnosed with prediabetes or Type 2 diabetes",
        "You want a natural, supportive way to manage or reverse it",
        "You’re a yoga teacher or therapist wanting to specialize in diabetic care",
        "You are ready to commit to healthy habits and daily practice",
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
