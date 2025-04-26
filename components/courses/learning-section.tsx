import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function LearningSection() {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-xl h-fit">
      <div className="grid md:grid-cols-2 gap-12 h-fit">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-medium text-[#D96B4F]">
            What you will learn?
          </h2>
          <p className="text-gray-600">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mus semper aptent sodales gravida gravida tempor; euismod class. Eros congue nec nunc iaculis leo; quisque maximus.
          </p>
          <Button 
            className="bg-[#D96B4F] hover:bg-[#C25A40] text-white rounded-full px-8"
          >
            Contact Us
          </Button>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="poses" className="border-b">
              <AccordionTrigger className="text-xl font-medium hover:no-underline">
                Poses Practice
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis et aliquet magnis nulla ut himenaeos. Duis vehicula imperdiet sed pulvinar ipsum. Quis primis etiam natoque parturient, consectetur hac tincidunt eros. Senectus sed augue purus blandit potenti purus phasellus vulputate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pranayama" className="border-b">
              <AccordionTrigger className="text-xl font-medium hover:no-underline">
                Pranayama
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Learn various breathing techniques and practices that help control vital energy through breath regulation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="philosophy" className="border-b">
              <AccordionTrigger className="text-xl font-medium hover:no-underline">
                Yoga Philosophy
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Explore the ancient wisdom and philosophical foundations of yoga, including the eight limbs of yoga and key concepts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="meditation" className="border-b">
              <AccordionTrigger className="text-xl font-medium hover:no-underline">
                Meditation
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Discover various meditation techniques and practices to cultivate mindfulness and inner peace.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

