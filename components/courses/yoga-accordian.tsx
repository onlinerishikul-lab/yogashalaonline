import RysBadgeSection from "../resgistered-badge-section";

export default function YogaAccreditation({
  accreditation,
}: {
  accreditation: string;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Certifications Grid */}
        <RysBadgeSection />

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#4377B2]">
            Yoga Alliance Accreditation
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>{accreditation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
