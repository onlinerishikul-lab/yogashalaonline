"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Certified 95-hour Kids Yoga Teacher Training (Yoga Alliance Continuing Education)",
        "Age-specific teaching for toddlers to teens",
        "Yoga through storytelling, games, music, and art",
        "Learn child development, classroom management, and safety",
        "Teaching resources, lesson plans, and creativity tools",
        "Video demos, real class recordings & activity worksheets",
        "Self-paced with live mentorship sessions",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Foundations of kids’ yoga and how it differs from adult yoga",
        "Creating age-appropriate classes for different age groups",
        "Breathing, mindfulness, and relaxation techniques for children",
        "Yoga games, partner poses, and creative movement",
        "Teaching through themes, stories, music, and art",
        "Addressing behavioral challenges and building connection",
        "Managing group dynamics and classroom flow",
        "Trauma-awareness and inclusivity in children’s yoga",
        "Real teaching practice and feedback",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You only want to teach adult yoga classes",
        "You’re not comfortable working with children",
        "You’re looking for a fast track without learning classroom skills",
        "You’re not interested in using creativity, stories, or play in yoga",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You want to teach yoga to kids in schools, studios, or at home",
        "You enjoy working with children and using creativity in learning",
        "You want to help children build confidence, focus, and calm",
        "You’re looking for a professional, structured, and certified course",
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
