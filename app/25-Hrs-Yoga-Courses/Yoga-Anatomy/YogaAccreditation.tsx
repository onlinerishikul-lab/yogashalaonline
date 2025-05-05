import Image from "next/image";

const YogaAccreditation = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        {/* Certification Logos */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <Image
            src="/yoga-certifications.png" // Place your uploaded image in /public folder and rename if needed
            alt="Yoga Alliance Certifications"
            width={512}
            height={174}
            className="max-w-full h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
          Yoga Alliance Accreditation
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Our certification is proudly accredited by the Yoga Alliance, guaranteeing adherence to high international standards. This prestigious recognition enhances the credibility of your qualification, making it both valid and highly respected across the globe. With a Yoga Alliance–accredited certification, you can confidently teach and share your yoga expertise anywhere in the world.
        </p>
      </div>
    </section>
  );
};

export default YogaAccreditation;
