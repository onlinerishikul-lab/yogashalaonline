import { Button } from "@/components/ui/button";
import FeatureCard from "./feature-card";
import { WhatsInsideTheCourse } from "@/types/course";

export default function CourseFeatures({
  insideTheCourse,
}: {
  insideTheCourse: WhatsInsideTheCourse;
}) {
  return (
    <section className="bg-[#4377B2] py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              What&apos;s Inside The Course?
            </h2>
          </div>
          <div>
            <p className="text-white/90 text-lg mb-8">{insideTheCourse.body}</p>
            <Button className="bg-white hover:bg-white/90 text-[#4377B2] rounded-full px-8 py-2 text-base font-medium">
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {insideTheCourse.bulletPoints.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              body={feature.body}
              idx={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
