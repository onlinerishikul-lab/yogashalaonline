"use client";

const LearnSection = () => {
const sections = [
  {
    title: "Course Highlights for Face Yoga TTC:",
    content: [
      "In-depth study of facial muscles and their functions",
      "Techniques to tone, lift, and relax the face naturally",
      "Focus on facial alignment, symmetry, and glow enhancement",
      "Breathwork and mindfulness practices for inner and outer radiance",
      "Daily routines to reduce signs of aging and stress",
      "Visual demonstrations and guided video sessions",
      "Teaching methodologies for conducting effective face yoga classes",
    ],
  },
  {
    title: "What’s Inside The Course – Practical Aspects",
    content: [
      "Step-by-step face yoga exercises targeting all facial zones",
      "Hands-on practice for reducing wrinkles, puffiness, and tension",
      "Customization of face yoga sequences for different age groups and concerns",
      "Facial massage and acupressure techniques for relaxation and rejuvenation",
      "Live feedback and correction to ensure accurate practice",
      "Tips for building confidence and presence as a face yoga teacher",
    ],
  },
  {
    title: "Is This Course for You? YES!",
    content: [
      "Looking to become a certified Face Yoga teacher",
      "Interested in natural methods for facial wellness and beauty",
      "Can dedicate 4–6 hours per week for structured learning and practice",
      "Comfortable with online learning and self-paced study",
    ],
  },
  {
    title: "Is This Course for You? NO, if you are:",
    content: [
      "Expecting instant facial transformation without consistent effort",
      "Only interested in theory with no practical application",
      "Unable to commit a few hours weekly for hands-on learning",
      "Not interested in guiding others or building a teaching career",
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
