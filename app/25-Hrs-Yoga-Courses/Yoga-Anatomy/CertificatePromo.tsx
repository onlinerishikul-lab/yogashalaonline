import Image from "next/image";
import Link from "next/link";

const CertificatePromo = () => {
  return (
    <section className="bg-orange-600 py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Excited to See Your <br /> Name on This Certificate?
          </h2>
          <p className="text-lg mb-6">
            Prepare yourself to take the next step and proudly see your name
            showcased on this certificate as a symbol of your hard work and
            achievement!
          </p>
          <Link href="/get-certificate">
            <a className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-100 transition duration-300">
              Get Your Certificate
            </a>
          </Link>
        </div>

        {/* Certificate Image */}
        <div className="md:w-1/2">
          <Image
            src="/certificate-preview.png" // Place your image in /public with this name
            alt="Yoga Certificate Preview"
            width={512}
            height={212}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificatePromo;
