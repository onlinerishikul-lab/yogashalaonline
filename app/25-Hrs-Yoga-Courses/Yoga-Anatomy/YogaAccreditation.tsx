'use client';

import React from "react";
import Image from "next/image";

const YogaAccreditation = () => {
return (
<section className="py-16 px-6 bg-white text-center">
<div className="max-w-6xl mx-auto">
{/* Horizontal Image Section */}
<div className="flex flex-wrap justify-center items-center gap-6 mb-10">
<Image src="/yoga-certifications-1.png" alt="Yoga Alliance Certification 1" width={160} height={120} className="w-auto h-auto max-w-full" />
<Image src="/yoga-certifications-2.png" alt="Yoga Alliance Certification 2" width={160} height={120} className="w-auto h-auto max-w-full" />
<Image src="/yoga-certifications-3.png" alt="Yoga Alliance Certification 3" width={160} height={120} className="w-auto h-auto max-w-full" />
</div>
  {/* Heading and Description */}
    <h2 className="text-3xl md:text-4xl font-bold text-sky-600 mb-6">
      Yoga Alliance Accreditation
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
      Our certification is proudly accredited by the Yoga Alliance, guaranteeing adherence
      to high international standards. This prestigious recognition enhances the credibility
      of your qualification, making it both valid and highly respected across the globe.
      With a Yoga Alliance–accredited certification, you can confidently teach and share your
      yoga expertise anywhere in the world.
    </p>
  </div>
</section>
);
};

export default YogaAccreditation;
