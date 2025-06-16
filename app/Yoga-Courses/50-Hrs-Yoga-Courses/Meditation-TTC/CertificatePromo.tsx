import Image from "next/image";
import Link from "next/link";

const CertificatePromo = () => {
  return (
    <section className="bg-[#4377b2] py-16 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            Earn Your 50-Hour Meditation TTC Certificate
          </h2>
          <p className="text-base sm:text-lg mb-8 text-[#f9fafb]">
            Immerse yourself in the practice and philosophy of meditation. Complete our online 50-hour teacher training and receive a certificate that validates your journey into inner stillness and mindful teaching.
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
            alt="50-Hour Meditation TTC Certificate Preview"
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
