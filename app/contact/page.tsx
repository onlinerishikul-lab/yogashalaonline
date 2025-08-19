import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";
import { ReviewSection } from "@/components/review-section";
import MainWrapper from "@/components/wrappers/main-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <MainWrapper>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1520769945061-0a448c463865?q=80&w=2070&auto=format&fit=crop"
            alt="Person practicing yoga pose on a rock by a mountain lake"
            fill
            className="object-cover"
            priority
          />
          <div className="h-full w-full bg-black/25 absolute top-0 left-0" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-white transform -skew-y-3 translate-y-24" />
        </section>

        {/* Form Section */}
        <section className="py-0 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl text-center text-[#4377B2] font-semibold mb-2">
              Query Form
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Please fill the form below to receive a quote for your project.
              <br />
              Feel free to add as much detail as needed.
            </p>
            <div className="min-h-screen bg-white p-4 flex flex-col items-center">
              <Card className="w-full max-w-3xl bg-white rounded-[24px] shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Contact details
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Please fill your information so we can get in touch with
                    you.
                  </p>

                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <ReviewSection />
      </main>
    </MainWrapper>
  );
}
