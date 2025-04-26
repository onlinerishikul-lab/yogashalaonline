import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="relative bg-[#FFF1ED] rounded-3xl p-8 md:p-16 overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#4377B2]" />

        {/* Content */}
        <div className="relative max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#4377B2] mb-8">
            Our Guarantee to You: Learn Risk-Free
          </h2>

          <div className="space-y-6 text-gray-800">
            <p className="text-lg">
              We&apos;re confident you&apos;ll love our course, but we
              understand it might not be for everyone. That&apos;s why we offer
              a money-back guarantee.
            </p>
            <p className="text-lg">
              If you enroll and find the course isn&apos;t what you expected,
              simply let us know within 7 days for a full refund.
            </p>
            <p className="text-lg">
              No question asked. It&apos;s our way of ensuring you can explore
              yoga with peace of mind.
            </p>

            <div className="pt-4">
              <p className="font-semibold text-xl mb-6">
                Ready to start your yoga journey?
              </p>
              <Button className="bg-[#4377B2] hover:bg-[#4377B2]/90 text-white rounded-full px-8 py-6 text-lg">
                Join Us Today Risk Free!
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Plus Pattern */}
        <div className="absolute bottom-8 right-8 grid grid-cols-5 gap-4">
          {[...Array(25)].map((_, i) => (
            <Plus key={i} className="w-4 h-4 text-[#4377B2]/20" />
          ))}
        </div>
      </div>
    </section>
  );
}
