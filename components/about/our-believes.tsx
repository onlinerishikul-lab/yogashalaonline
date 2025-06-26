import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OurBelieves() {
  const believes = [
    "Instruction from highly experienced educators, ensuring authentic and comprehensive training.",
    "Receive internationally recognized Yoga Alliance certifications, enhancing your credibility as a yoga instructor.",
    "Enjoy the live interactive classes, tailored to fit your routine, at accessible and affordable prices.",
    "Access high-quality, carefully curated content designed to support practitioners of all experience levels.",
    "Become part of a supportive, inclusive community of yoga practitioners from around the globe.",
  ];

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[#4377B2] text-4xl md:text-5xl font-bold mb-8">
          Our Believes
        </h2>

        <h3 className="text-gray-900 text-xl font-semibold mb-6">
          Our Commitment to Provide Online YTTC
        </h3>

        <p className="text-gray-700 mb-6">
          At Rishikul Online, we are guided by core values that shape our approach to yoga education. These principles reflect our commitment to nurturing the entire individual and empowering each student to reach their highest potential—physically, mentally, and spiritually.
        </p>

        <ul className="space-y-4 mb-8 text-lg">
          {believes.map((item, index) => (
            <li key={index} className="text-[#4377B2]">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-gray-700 mb-6">
          We believe that yoga is more than just physical postures—it&apos;s a pathway to inner peace and lifelong well-being. Our online platform is designed to meet the needs of modern learners while preserving the ancient wisdom of yoga and Ayurveda.
        </p>

        <p className="text-gray-700 mb-12">
          Through interactive learning, one-on-one mentoring, and immersive course material, we empower you to become a confident practitioner and instructor. Begin your journey today and discover the transformational power of a true yogic lifestyle.
        </p>

        <Link
          href="https://www.rishikulonline.com/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#4377B2] hover:bg-[#4377B2]/90 text-white px-8 py-6 rounded-full text-lg">
            Start your Online Journey
          </Button>
        </Link>
      </div>
    </section>
  );
}
