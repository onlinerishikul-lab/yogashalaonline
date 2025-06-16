"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "300-Hour Yoga Alliance Certification",
        "Advanced training in Hatha, Vinyasa, Ashtanga, Yin, and other styles",
        "In-depth study of anatomy, yoga philosophy, and advanced teaching techniques",
        "Flexible self-paced lessons plus live interactive sessions",
        "Focus on refining alignment, sequencing, and therapeutic applications",
        "Receive an internationally recognized certificate",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Master advanced postures and alignment principles",
        "Learn complex pranayama and breath control techniques",
        "Deepen meditation, mindfulness, and relaxation practices",
        "Design advanced class sequences for various yoga traditions",
        "Study detailed anatomy and physiology for safe teaching",
        "Explore yoga therapy and modification techniques",
        "Engage in practice teaching with expert feedback",
        "Analyze yoga philosophy and ethics in depth",
        "Connect with a global yoga community for support",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re looking for beginner-level yoga training",
        "You want a very specialized single-style course only",
        "You cannot commit to a more intensive study schedule",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You’re a certified yoga teacher aiming to deepen your skills",
        "You want to teach multiple yoga styles with confidence",
        "You seek to learn therapeutic and advanced yoga techniques",
        "You’re ready for a comprehensive, flexible, and expert-led course",
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
