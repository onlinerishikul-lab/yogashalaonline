"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Class Highlights",
      content: [
        "Online Power Yoga Teacher Certification",
        "Learn fast-paced, strength-building sequences",
        "Improve stamina, flexibility, and balance",
        "Guided video lessons plus live practice sessions",
        "Study yoga anatomy, breathwork, and cueing",
        "Mind-body training through dynamic meditation",
        "Self-paced learning with lifetime access",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Class – Practical Aspects",
      content: [
        "Power yoga sequencing for different levels",
        "Core conditioning and muscle activation",
        "Breath coordination with intense movement",
        "Safety and injury prevention techniques",
        "Teaching methodology and voice training",
        "The philosophy behind Power Yoga",
        "Modifications and adjustments for all bodies",
        "Practicum: lead and record your own Power Yoga class",
      ],
    },
    {
      title: "Is This Class for You? NO!",
      content: [
        "You prefer only slow or passive yoga styles",
        "You’re not open to physical effort and sweat",
        "You don’t want to teach dynamic yoga classes",
      ],
    },
    {
      title: "Is This Class for You? YES!",
      content: [
        "You love energetic, athletic movement",
        "You want to become a confident Power Yoga instructor",
        "You’re a fitness trainer or yoga teacher expanding your style",
        "You enjoy physically challenging practices with mental clarity",
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
