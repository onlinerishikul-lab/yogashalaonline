import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pricing } from "@/types/course";

export default function PricingSection({
  paymentOptions,
}: {
  paymentOptions: Pricing;
}) {
  return (
    <div className="bg-[url('/assets/CoreValues.svg')] bg-cover bg-no-repeat min-h-screen relative">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4377B2] text-center mb-12 md:mb-20">
          Our Pricing Option
        </h2>

        <div className="space-y-6 md:space-y-8">
          {/* {paymentOptions.map((tier, index) => (
          
        ))} */}

          <div className="rounded-3xl overflow-hidden bg-white border-2 border-[#4377B2] shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Left Section */}
              <div className="bg-[#4377B2] p-6 md:p-10 text-white">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                      FULL PAYMENT
                    </h3>
                    <p className="text-base md:text-lg text-white/90">
                      Unlock the full benefits of the course with our convenient
                      full payment plan.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-bold">$</span>
                      <span className="text-5xl md:text-7xl font-bold">
                        {paymentOptions.fullPayment.amount}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-white/90">
                      Click below to secure your spot and make the full payment
                      today!
                    </p>
                  </div>
                  <Button className="w-full bg-white text-[#4377B2] hover:bg-white/90 text-base md:text-lg py-6 rounded-xl">
                    PAY NOW
                  </Button>
                </div>
              </div>

              {/* Right Section */}
              <div className="bg-[#f8f9ff] p-6 md:p-10">
                <h4 className="text-lg md:text-xl font-semibold text-[#121533] mb-8">
                  What&apos;s included?
                </h4>
                <ul className="space-y-5">
                  {paymentOptions.fullPayment.whatsIncluded.map(
                    (feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-4"
                      >
                        <div className="h-6 w-6 rounded-full bg-[#4377B2] flex items-center justify-center flex-shrink-0">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-base md:text-lg text-[#121533]">
                          {feature}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border-2 border-[#4377B2] shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Left Section */}
              <div className="bg-[#4377B2] p-6 md:p-10 text-white">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                      EASY INSTALLMENTS
                    </h3>
                    <p className="text-base md:text-lg text-white/90">
                      For businessess, enterprise domain registrars and
                      registries.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-bold">$</span>
                      <span className="text-5xl md:text-7xl font-bold">
                        {paymentOptions.halfPayment.amount}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-white/90">
                      Click below to secure your spot and make the first
                      Installment payment today!
                    </p>
                  </div>
                  <Button className="w-full bg-white text-[#4377B2] hover:bg-white/90 text-base md:text-lg py-6 rounded-xl">
                    PAY NOW
                  </Button>
                </div>
              </div>

              {/* Right Section */}
              <div className="bg-[#f8f9ff] p-6 md:p-10">
                <h4 className="text-lg md:text-xl font-semibold text-[#121533] mb-8">
                  What&apos;s included?
                </h4>
                <ul className="space-y-5">
                  {paymentOptions.halfPayment.whatsIncluded.map(
                    (feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-4"
                      >
                        <div className="h-6 w-6 rounded-full bg-[#4377B2] flex items-center justify-center flex-shrink-0">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-base md:text-lg text-[#121533]">
                          {feature}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center space-y-3">
          <p className="font-medium text-lg md:text-xl text-[#121533]">
            100% Secure Payment
          </p>
          {/* <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          If you are not happy after your purchase, do let us know within 7 days
          of purchase and we will refund you 100%.
          <br />
          We&apos;re here for you
        </p> */}
        </div>
      </section>
    </div>
  );
}
