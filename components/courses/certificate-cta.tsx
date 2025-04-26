import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CertificateCTA({ body }: { body: string }) {
  return (
    <section className="bg-[#4377B2] py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 text-white/20">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 right-16">
        <div className="w-4 h-4 text-yellow-400">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Excited to See Your Name on This Certificate?
            </h2>
            <p className="text-white/90 text-lg">{body}</p>
            <Button className="bg-white hover:bg-white/90 text-[#4377B2] rounded-full px-8 py-6 text-lg font-medium">
              Get Your Certificate
            </Button>
          </div>

          {/* Right Column - Certificate Image */}
          <div className="relative">
            <Image
              src="/course-certificate.jpeg"
              alt="Yoga Teacher Training Certificate"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
