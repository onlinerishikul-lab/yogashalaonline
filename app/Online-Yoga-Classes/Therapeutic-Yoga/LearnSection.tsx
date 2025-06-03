"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Yoga Alliance Certified Therapeutic Yoga Teacher Training",
        "Learn yoga for pain relief, chronic illness, and emotional wellbeing",
        "Gentle poses, breathwork, and restorative techniques included",
        "Covers anatomy, yoga therapy principles, and case study work",
        "Self-paced video modules + live interactive sessions",
        "Focus on trauma-informed, accessible, and adaptive yoga",
        "Certificate of Completion to teach therapeutic sessions worldwide",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Assessment techniques for individual needs",
        "Chair yoga, restorative yoga, and supported asana",
        "Breathwork and meditation for healing",
        "Working with chronic pain, anxiety, and fatigue",
        "Mindfulness-based stress reduction techniques",
        "Teaching methodology for one-on-one and group therapy",
        "Case study practice and personal healing reflection",
        "Ethics and scope of therapeutic yoga teaching",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You’re only interested in fast-paced or athletic yoga",
        "You’re not open to emotional, mental, or trauma-sensitive work",
        "You prefer fitness-focused rather than healing-centered yoga",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to help people manage physical or emotional challenges",
        "You’re drawn to gentle, restorative, and healing yoga practices",
        "You're a teacher, therapist, or wellness coach expanding your tools",
        "You’re passionate about yoga as a path to holistic wellbeing",
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
