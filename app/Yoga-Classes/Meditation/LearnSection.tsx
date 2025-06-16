"use client";

const LearnSection = () => {
  const sections = [
    {
      title: "Class Highlights",
      content: [
        "Certified Meditation Teacher Training (Online)",
        "Covers silent, mantra, guided & breath-focused meditations",
        "Techniques for calm, focus, and emotional well-being",
        "Self-paced modules with lifetime access",
        "Includes downloadable audio & video practices",
        "Teaching scripts, cues, and sequencing tools",
        "Learn how the mind works and how to guide it",
        "Certificate of Completion included",
      ],
    },
    {
      title: "What’s Inside the Class – Practical Aspects",
      content: [
        "Daily guided meditation and journaling",
        "Breath awareness, body scan, and mindfulness practices",
        "How to lead individual and group meditations",
        "Creating themes for emotional or spiritual focus",
        "Science of meditation and brain-mind connection",
        "Teaching cues, voice modulation & session flow",
        "Ethical guidelines and spiritual presence",
        "Designing personal and client-based meditation programs",
      ],
    },
    {
      title: "Is This Class for You? NO!",
      content: [
        "You’re looking for a physical workout or asana practice only",
        "You prefer highly active or movement-based methods only",
        "You’re not ready for silent or still introspective practices",
      ],
    },
    {
      title: "Is This Class for You? YES!",
      content: [
        "You want to deepen your meditation knowledge and practice",
        "You’re a teacher, coach, or healer wanting to add meditation to your work",
        "You seek inner peace, focus, and emotional clarity",
        "You enjoy self-paced learning with structured guidance",
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
