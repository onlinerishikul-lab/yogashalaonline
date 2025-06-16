"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "200-Hour Yoga Alliance Certification",
        "Learn various yoga styles: Hatha, Vinyasa, Ashtanga, Yin, and more",
        "Study anatomy, philosophy, and teaching methodology",
        "Flexible online learning with live interactive sessions",
        "Develop well-rounded practice and teaching skills",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Core asanas from multiple yoga traditions",
        "Pranayama and breathwork practices",
        "Meditation and mindfulness techniques",
        "Class sequencing for different yoga styles",
        "Teaching methods and class management",
        "Anatomy and alignment principles",
        "Practice teaching and feedback",
        "Yoga philosophy and ethics",
        "Community support and live Q&A",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want to specialize in only one yoga style",
        "You prefer only in-person training",
        "You cannot dedicate regular study time",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want a broad understanding of different yoga styles",
        "You’re aiming to teach versatile classes confidently",
        "You seek flexible, online learning with expert guidance",
        "You want to deepen your personal practice across traditions",
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
