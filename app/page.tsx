import React from 'react';
import { Header } from '@/components/common/header';
import { SiteFooter } from '@/components/common/footer';
import Blogs from '@/components/home/blogs/blogs';
import Faculty from '@/components/home/Faculty/faculty';
import GetInTouch from '@/components/home/get-in-touch/get-in-touch';
import Join from '@/components/home/join/join';
import OurTeaching from '@/components/home/our-teaching/our-teaching';
import Transforming from '@/components/home/transforming/transforming';
import Trust from '@/components/home/trust/trust';
import GuaranteeSection from '@/components/home/Guarantee/Guarante';
import Usp from '@/components/home/usp/usp';
import Testimonial from '@/components/home/testimonial/testimonial';
import { Banner } from '@/components/home/Banner/banner';
import ExploreOurCoursesView from '@/components/home/explore-our-Online-Yoga-Course/explore-our-courses.view';
import ExploreOurAyurvedaCoursesView from '@/components/home/explore-our-Online-Ayurveda-Course/explore-our-courses.view';
import ExploreOurClassesView from '@/components/home/explore-our-Online-Yoga-Classes/explore-our-courses.view';

import { getCourses } from '@/server-actions/course';
import { getBlogs } from '@/server-actions/blog';

import BenefitsOfOnlineLearning from '@/components/home/core-values/benefits-of-online-learning';
import CourseLevels from '@/components/home/core-values/course-levels';
import YogaForEveryone from '@/components/home/core-values/yoga-for-everyone';

export default async function Home() {
  const [{ courses = [], error: coursesError }, { blogs = [], error: blogsError }] = await Promise.all([
    getCourses(),
    getBlogs(),
  ]);

  if (coursesError || blogsError) {
    return <div className="text-red-500 text-center py-8">{coursesError || blogsError}</div>;
  }

  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        <Banner />
        <Usp />

        {/* Section 1 */}
        <section className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          <ExploreOurCoursesView courses={courses} />
          <div className="mt-8">
            <BenefitsOfOnlineLearning />
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          <ExploreOurAyurvedaCoursesView courses={courses} />
          <CourseLevels />
        </section>

        {/* Section 3 */}
        <section className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          <ExploreOurClassesView courses={courses} />
          <YogaForEveryone />
        </section>

        {/* Extra Sections */}
        <GuaranteeSection />
        <OurTeaching />
        <Transforming />
        <Trust />

        <section className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          <Blogs blogs={blogs} />
        </section>

        <Join />
        <Faculty />
        <Testimonial title="What Our Students Say" tilt={true} />
        <GetInTouch />
      </main>
      <SiteFooter />
    </div>
  );
}
