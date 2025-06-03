"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Certified Hatha Yoga Teacher Training (200/300 hrs options)",
        "Learn over 70 classical yoga poses with correct alignment",
        "Integrate Pranayama and meditation into daily practice",
        "Study yogic philosophy, anatomy, and teaching methodology",
        "Video modules + live classes with Indian yoga masters",
        "Teaching scripts, cueing techniques & posture corrections",
        "Self-paced learning with lifetime access",
        "Certificate of Completion recognized by Yoga Alliance",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Daily guided Hatha yoga practice",
        "Alignment and adjustment techniques for key asanas",
        "Teaching methodology and sequencing",
        "Basic anatomy and physiology for safe practice",
        "Introduction to yogic cleansing (kriyas)",
        "Study of yogic texts and principles",
        "Pranayama and mantra chanting sessions",
        "Meditation and concentration techniques",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You're only looking for fitness-based yoga styles",
        "You’re not open to traditional yogic teachings and discipline",
        "You can’t commit to consistent practice and self-reflection",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to explore yoga from its authentic roots",
        "You wish to build a solid foundation in asana, pranayama, and meditation",
        "You aspire to teach yoga with deep understanding and confidence",
        "You're interested in physical, mental, and spiritual balance",
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
