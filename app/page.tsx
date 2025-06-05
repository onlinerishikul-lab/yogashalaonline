import React from 'react'
import Blogs from '@/components/home/blogs/blogs'
import Faculty from '@/components/home/Faculty/faculty'
import GetInTouch from '@/components/home/get-in-touch/get-in-touch'
import Join from '@/components/home/join/join'
import OurTeaching from '@/components/home/our-teaching/our-teaching'
import Transforming from '@/components/home/transforming/transforming'
import Trust from '@/components/home/trust/trust'
import Guarante from '@/components/home/Guarantee/Guarante'
import Usp from '@/components/home/usp/usp'
import TestimonialView from '@/components/home/testimonial/testimonial'
import MainWrapper from '@/components/wrappers/main-wrapper'
import { Banner } from '@/components/home/Banner/banner'
import ExploreOurCoursesView from '@/components/home/explore-our-Online-Yoga-Course/explore-our-courses.view'
import ExploreOurAyurvedaCoursesView from '@/components/home/explore-our-Online-Ayurveda-Course/explore-our-courses.view'
import ExploreOurClassesView from '@/components/home/explore-our-Online-Yoga-Classes/explore-our-courses.view'

import { getCourses } from '@/server-actions/course'
import { getBlogs } from '@/server-actions/blog'

import BenefitsOfOnlineLearning from '@/components/home/core-values/benefits-of-online-learning'
import CourseLevels from '@/components/home/core-values/course-levels'
import YogaForEveryone from '@/components/home/core-values/yoga-for-everyone'

export default async function Home() {
  const [{ courses = [], error: coursesError }, { blogs = [], error: blogsError }] = await Promise.all([
    getCourses(),
    getBlogs()
  ])

  if (coursesError || blogsError) {
    return <div className="text-red-500 text-center py-8">{coursesError || blogsError}</div>
  }

  return (
    <MainWrapper>
      <Banner />
      <Usp />

      {/* Section 1: Benefits + Yoga Courses */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ExploreOurCoursesView courses={courses} />
          <BenefitsOfOnlineLearning />
        </div>
      </section>

      {/* Section 2: Ayurveda Courses + Course Levels */}
      <section className="bg-[#F9F9F9] py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ExploreOurAyurvedaCoursesView courses={courses} />
          <CourseLevels />
        </div>
      </section>

      {/* Section 3: Yoga Classes + Yoga For Everyone */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ExploreOurClassesView courses={courses} />
          <YogaForEveryone />
        </div>
      </section>

      {/* Other Key Sections */}
      <section className="bg-[#F9F9F9]">
        <Guarante />
      </section>

      <section className="bg-white">
        <OurTeaching />
      </section>

      <section className="bg-[#F9F9F9]">
        <Transforming />
      </section>

      <section className="bg-white">
        <Trust />
      </section>

      <section className="bg-[#F9F9F9] py-6 sm:py-8 md:py-10">
        <Blogs blogs={blogs} />
      </section>

      <section className="bg-white py-6 sm:py-8 md:py-10">
        <Join />
      </section>

      <section className="bg-[#F9F9F9]">
        <Faculty />
      </section>

      <section className="bg-white py-6 sm:py-8 md:py-10">
        <TestimonialView title="What Our Students Say" tilt={true} />
      </section>

      <section className="bg-[#F9F9F9] py-6 sm:py-8 md:py-10">
        <GetInTouch />
      </section>
    </MainWrapper>
  )
}
