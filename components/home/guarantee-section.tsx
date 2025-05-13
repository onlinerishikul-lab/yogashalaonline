import { Button } from "@/components/ui/button";

export function GuaranteeSection({ guaranteeBody }: { guaranteeBody: string }) {
  return (
    <section className="bg-[#4377B2] px-6  text-white md:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-4xl font-bold leading-tight md:text-4xl">
          Our Guarantee To You: Learn Risk-Free
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center text-base leading-relaxed text-white/90 md:text-lg">
          {guaranteeBody}
        </p>
        <div className="flex justify-center">
          <Button className="bg-white px-6 py-5 text-base font-bold text-[#4377B2] hover:bg-white/90">
            JOIN US TODAY!
          </Button>
        </div>
      </div>
    </section>
  );
}
