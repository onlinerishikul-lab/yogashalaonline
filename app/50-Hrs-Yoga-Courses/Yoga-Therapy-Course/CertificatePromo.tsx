import Image from "next/image";
import Link from "next/link";

const CertificatePromo = () => {
  return (
    <section className="bg-[#4377b2] py-16 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            Earn Your Yoga Therapy Certificate
          </h2>
          <p className="text-base sm:text-lg mb-8 text-[#f9fafb]">
            Begin your journey into therapeutic yoga with this professional, online Yoga Therapy Course. Complete the training and receive a recognized certificate that honors your dedication to healing through yoga.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-[#f9fafb] text-[#4377b2] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-md hover:bg-white transition duration-300 text-sm sm:text-base">
              Join Us
            </a>
          </Link>
        </div>

        {/* Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/course-certificate.jpeg"
            alt="25-hrs Yoga Anatomy Certificate Preview"
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
