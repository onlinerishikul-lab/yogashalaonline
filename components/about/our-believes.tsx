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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[#4377B2] text-4xl md:text-5xl font-bold mb-8">
          Our Believes
        </h2>

        <h3 className="text-gray-900 text-xl font-semibold mb-6">
          Our Commitment to Provide Online YTTC
        </h3>

        <p className="text-gray-700 mb-8">
          At Rishikul Online, we are guided by core values that shape our
          approach to yoga education. These principles reflect our commitment to
          nurturing the entire individual and empowering each student to reach
          their highest potential—physically, mentally, and spiritually.
        </p>

        <ul className="space-y-4 mb-8 text-lg">
          {believes.map((item, index) => (
            <li key={index} className="text-[#4377B2]">
              {item}
            </li>
          ))}
        </ul>

        {/* <p className="text-gray-700 mb-12 italic">
        &quot;Money may buy us temporary pleasure, but it cannot buy us lasting fulfillment and happiness.&quot;
        </p> */}

        <p className="text-gray-700 mb-12">
          As you embark on your yoga journey, we are here to guide and support
          you every step of the way. Whether you&apos;re just starting or
          looking to advance your teaching skills, our team of global experts is
          dedicated to helping you succeed. You&apos;ll be part of a vibrant
          community, gaining knowledge that will transform you both personally
          and professionally. We look forward to being a part of your growth.
          Welcome to the journey!
        </p>

        <Link href="/contact">
          <Button className="bg-[#4377B2] hover:bg-[#4377B2]/90 text-white px-8 py-6 rounded-full text-lg">
            Start your Online Journey
          </Button>
        </Link>
      </div>
    </section>
  );
}
