"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Certified Pregnancy Yoga Teacher Training",
        "Learn trimester-specific asanas & breathwork",
        "Understand physical & emotional changes in pregnancy",
        "Includes restorative & relaxation-based practices",
        "Self-paced content + live Q&A sessions",
        "Teaching scripts, safety guidelines & class plans",
        "Guided meditations for moms-to-be",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Anatomy & physiology during pregnancy",
        "Trimester-wise yoga sequences",
        "Safe asanas, pranayama & meditation",
        "Yoga for labor preparation & birth",
        "Addressing pregnancy discomforts (back pain, nausea, stress)",
        "Emotional support through yoga & mindfulness",
        "Postnatal yoga basics for recovery",
        "Modifications for high-risk pregnancies",
        "Teaching real-life pregnant students (case studies)",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re looking for general yoga teacher training",
        "You don’t want to teach special populations",
        "You have no interest in working with pregnant women",
        "You’re unable to commit time for practical learning",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to help expecting mothers feel strong and supported",
        "You’re a yoga teacher ready to specialize in prenatal yoga",
        "You want in-depth knowledge of pregnancy-safe practices",
        "You’re passionate about women’s health and emotional well-being",
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
