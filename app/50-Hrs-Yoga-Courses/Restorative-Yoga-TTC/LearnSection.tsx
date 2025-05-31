"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights for Restorative Yoga TTC:",
      content: [
       "Yoga Alliance Certified Restorative TTC",
       "Learn to guide deeply relaxing, healing sessions",
       "Master the use of props for full body support",
        "Explore the mind-body connection & nervous system",
        "Self-paced learning with lifetime access",
        "Step-by-step video lessons & practice sessions"
      ],
    },
    {
      title: "What’s Inside The Course – Practical Aspects",
      content: [
        "Gentle, supported yoga poses using props like bolsters and blankets",
        "Step-by-step guidance on sequencing calming and healing classes",
        "Breathwork and relaxation techniques to soothe the nervous system",
        "Mindfulness and meditation practices integrated into sessions",
        "Safe adjustments and modifications for individual needs",
        "Instructions on creating a nurturing and peaceful teaching environment",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "Seeking a quick, online certification in Restorative Yoga",
        "Want to learn the basics of relaxation, healing, and prop-based yoga",
        "Can dedicate up to 6 hours per week to gentle, self-paced study",
        "Prefer solo learning without needing peer interaction or group sessions",
      ],
    },
    {
      title: "Is This Course for You? NO, if you are:",
      content: [
        "Looking for a fast-paced, dynamic or physically intense yoga style",
        "Want in-depth anatomy, therapy, or advanced yoga philosophy training",
        "Unable to commit at least a few quiet hours each week for gentle practice",
        "Prefer highly interactive group learning with frequent live sessions",
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
