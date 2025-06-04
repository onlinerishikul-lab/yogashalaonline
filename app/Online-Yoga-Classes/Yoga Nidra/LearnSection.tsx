"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Yoga Alliance Certified Yoga Nidra Teacher Training",
        "Learn to guide full Yoga Nidra journeys with confidence",
        "Understand brainwave states, Sankalpa, and deep relaxation techniques",
        "Self-paced learning plus live sessions with expert mentors",
        "Includes downloadable scripts, guided audios, and practice templates",
        "Learn modern neuroscience alongside ancient yogic wisdom",
        "Suitable for yoga teachers, wellness coaches, and beginners",
        "Certificate of Completion provided",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Structure and components of a Yoga Nidra session",
        "Voice modulation and script delivery techniques",
        "Exploring Sankalpa (intention) and visualization",
        "Yoga Nidra for stress, sleep, trauma, and healing",
        "Understanding brainwave states and conscious relaxation",
        "Designing Yoga Nidra for various needs (kids, anxiety, etc.)",
        "Daily practice and journaling for personal insight",
        "How to teach in studios, online, or therapy settings",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want only physical or fitness-based yoga practices",
        "You are not interested in relaxation, inner awareness, or stillness",
        "You’re unwilling to explore the emotional or spiritual layers of yoga",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to guide deep relaxation and healing practices",
        "You are interested in the science of rest and meditation",
        "You’re a yoga teacher, healer, therapist, or wellness coach",
        "You want to reduce stress and improve sleep for yourself or others",
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
