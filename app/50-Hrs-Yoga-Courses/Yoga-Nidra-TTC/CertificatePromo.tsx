import Image from "next/image";
import Link from "next/link";

const CertificatePromo = () => {
  return (
    <section className="bg-[#4377b2] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
            Ready to Earn Your <br /> 50-Hrs Yoga Nidra TTC Certificate?
          </h2>
          <p className="text-lg mb-8 text-[#f9fafb]">
            Discover the power of guided deep relaxation and healing through our Yoga Nidra Teacher Training Course. 
            Complete the 50-hour program online and receive your certification.
          </p>
          <Link href="/50-Hrs-Yoga-Courses/Yoga-Nidra-TTC" passHref legacyBehavior>
            <a className="inline-block bg-[#f9fafb] text-[#4377b2] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white transition duration-300">
              Get Your Certificate
            </a>
          </Link>
        </div>

        {/* Certificate Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/course-certificate.jpeg"
            alt="50-Hrs Yoga Nidra TTC Certificate Preview"
            width={512}
            height={212}
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificatePromo;
