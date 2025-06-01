"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Yoga Therapy Course:",
      content: [
        " International Yoga Therapy Certification",
        "Study anatomy, physiology & mental health principles",
        "Learn therapeutic asanas, breathing, and relaxation techniques",
        "Create customized yoga therapy plans",
        "Includes self-paced video lectures & live sessions",
        "Personalized mentoring & peer discussions",
        "Case study-based practical assignments",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Assessment techniques for individual needs",
        "Yoga for chronic conditions (back pain, anxiety, diabetes, etc.)",
        "Use of props for healing and comfort",
        "Yogic counseling and mental health support",
        "Designing and delivering therapy sessions",
        "Ethics, scope, and role of a yoga therapist",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re passionate about using yoga to help others heal",
        "You want to understand yoga’s therapeutic benefits deeply",
        "You work (or want to work) with special populations or health conditions",
        "You’re ready to learn body systems, conditions, and modifications",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        "You’re only looking for general yoga teacher training",
        "You’re not interested in adapting yoga for individual needs",
        "You can’t dedicate consistent time to study and client practice",
        "You prefer high-intensity, non-healing yoga styles",
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
