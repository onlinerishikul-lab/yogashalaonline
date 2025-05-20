import { Button } from "@/components/ui/button";

export function GuaranteeSection({ guaranteeBody }: { guaranteeBody: string }) {
  return (
    <section className="bg-[#4377B2] px-4 py-10 text-white sm:px-8 md:px-16 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-3xl font-bold leading-tight sm:text-4xl">
          Our Guarantee To You: Learn Risk-Free
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
          {guaranteeBody}
        </p>
        <div className="flex justify-center">
          <Button className="bg-white px-6 py-3 text-sm font-bold text-[#4377B2] hover:bg-white/90 sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg">
            JOIN US TODAY!
          </Button>
        </div>
      </div>
    </section>
  );
}
