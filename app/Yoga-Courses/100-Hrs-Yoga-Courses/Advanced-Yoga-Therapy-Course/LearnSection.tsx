"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Advanced Yoga Therapy Certification",
        "Study therapeutic yoga for physical and mental health",
        "Learn personalized yoga modifications and healing sequences",
        "Comprehensive anatomy and pathology insights",
        "Access self-paced lessons and live expert sessions",
        "Certificate of Completion awarded",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Advanced therapeutic yoga postures and adjustments",
        "Designing customized yoga therapy programs",
        "Breathwork and meditation for healing",
        "Understanding chronic conditions and yoga applications",
        "Anatomy, physiology, and pathology for therapists",
        "Client assessment and safety protocols",
        "Teaching methodology for therapeutic yoga",
        "Case studies and practice teaching",
        "Ethical considerations and professional development",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re new to yoga therapy and want beginner-level training",
        "You prefer general yoga practice without therapeutic focus",
        "You cannot commit to in-depth study and practice",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You have foundational yoga therapy knowledge and want to advance",
        "You want to support clients with specific health challenges",
        "You seek specialized skills in yoga for rehabilitation and healing",
        "You’re ready for a rigorous, in-depth online course",
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
