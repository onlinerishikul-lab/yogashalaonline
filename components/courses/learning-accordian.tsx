import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WhatYouWillLearnSection } from "@/types/course";

export default function LearningSection({
  learning,
}: {
  learning: WhatYouWillLearnSection;
}) {
  return (
    <div className="container flex items-center justify-center mx-auto  rounded-xl md:py-20">
      <div className=" bg-[#F3F3F3] p-5 rounded-xl">
        <div className="grid md:grid-cols-2 gap-12 h-fit bg-white p-5 rounded-xl">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#4377B2]">
              What you will learn?
            </h2>
            <p className="text-gray-600">{learning.body}</p>
            <Button className="bg-[#4377B2] hover:bg-[#285384] text-white rounded-full px-8">
              Contact Us
            </Button>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {learning.accordian.map((item, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b"
                  key={index}
                >
                  <AccordionTrigger className="text-xl font-medium hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
