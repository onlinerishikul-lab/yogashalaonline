import { TrainingCourseUniqueItem } from "@/types/course";
import FeatureCard from "./feature-card";

export default function FeaturesSection({
  courseName,
  features,
}: {
  courseName: string;
  features: TrainingCourseUniqueItem[];
}) {
  return (
    <div className="container px-5 flex items-center justify-center mx-auto bg-white rounded-xl h-screen">
      <div className="grid md:grid-cols-2 gap-12 ">
        <div>
          <h2 className="text-4xl font-bold text-[#4377B2] leading-tight">
            Why is {courseName} Unique
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.heading}
              body={feature.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
