"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Course Highlights",
      content: [
        "Vinyasa Flow Yoga Teacher Certification",
        "Learn breath-synchronized movement and flowing sequences",
        "Master foundational to advanced asanas with alignment focus",
        "Study yoga philosophy, anatomy, and teaching techniques",
        "Access self-paced video lessons and live interactive sessions",
        "Detailed posture demonstrations and sequencing workshops",
        "Training led by expert teachers rooted in traditional practice",
        "Certificate of Completion awarded",
      ],
    },
    {
      title: "What’s Inside the Course – Practical Aspects",
      content: [
        "Breath and movement coordination (Vinyasa basics)",
        "Sun salutations and flowing sequences practice",
        "Posture alignment, modifications, and injury prevention",
        "Sequencing for beginner, intermediate, and advanced classes",
        "Pranayama and meditation for flow enhancement",
        "Teaching methodology and voice cueing skills",
        "Anatomy focused on movement and joint safety",
        "Yoga philosophy and ethical teaching principles",
        "Practice teaching and peer feedback",
      ],
    },
    {
      title: "Is This Course for You? NO!",
      content: [
        "You want a slow, meditative yoga style only",
        "You’re not ready for active movement practice",
        "You prefer only in-person training",
        "You can’t dedicate consistent time weekly",
      ],
    },
    {
      title: "Is This Course for You? YES!",
      content: [
        "You love energetic, flowing yoga classes",
        "You want to deepen your Vinyasa practice or teaching",
        "You seek a flexible, online course with expert guidance",
        "You’re ready to build sequencing and teaching confidence",
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
