"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Kids Yoga Teacher Training Course:",
      content: [
        "Interactive and playful teaching techniques",
        "Age-specific yoga modules (3–5, 6–9, and 10–12 years)",
        "Creative yoga games, stories, songs, and visualizations",
        "Child psychology basics and communication tools",
        "Classroom management and teaching ethics",
        "Online + offline support materials",
        "Yoga Alliance Continuing Education Hours (YACEP)",
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Daily themed kids yoga class structures",
        "Warm-up games and safe asana techniques for children",
        "Breathing exercises and fun pranayama",
        "Guided storytelling, Yoga Nidra, and mindful relaxation",
        "Meditation and focus-building activities",
        "Teaching through art, music, dance, and creativity",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
         "You love working with kids and want to inspire them",
        "You’re a yoga teacher, parent, school teacher, or caregiver",
        "You wish to teach mindful movement in schools, studios, or at home",
        "You want to expand your yoga teaching to younger age groups",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        "You’re looking to teach only adult yoga",
        "You’re not comfortable engaging with children",
        "You want a purely academic, text-based yoga course,
        "You’re not open to using play and imagination in yoga sessions",
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
