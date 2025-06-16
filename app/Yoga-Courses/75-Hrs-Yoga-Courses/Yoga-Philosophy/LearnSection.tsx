"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Online Certification in Core Yoga Philosophy",
        "Covers Yoga Sutras, Bhagavad Gita, & Hatha Yoga Pradipika",
        "Learn Yamas, Niyamas, Karma, Dharma & more",
        "Audio/video lectures from experienced Indian teachers",
        "Self-paced modules with downloadable study materials",
        "Apply ancient wisdom to modern life and teaching",
        "Reflection prompts, quizzes & real-life application tasks",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Study of key yogic texts: Yoga Sutras, Gita, Upanishads",
        "In-depth understanding of Yamas & Niyamas",
        "Exploration of the Eight Limbs of Yoga",
        "Concepts of Karma, Rebirth, and Liberation (Moksha)",
        "Role of the Gunas (qualities of nature)",
        "Dharma & life purpose according to yoga",
        "Philosophical roots of meditation and asana practice",
        "Integration of philosophy into daily life and teaching",
        "Guided reflections and personal journaling exercises",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re only interested in physical yoga (asanas)",
        "You’re looking for a quick-fix or shortcut",
        "You don’t enjoy reflective or theoretical learning",
        "You’re not interested in ancient scriptures or texts",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to understand the deeper meaning behind yoga",
        "You're a yoga teacher or student seeking spiritual growth",
        "You enjoy reflective study and exploring ancient wisdom",
        "You want to teach or live yoga more authentically",
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
