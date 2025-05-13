import React from 'react'
import Blogs from '@/components/home/blogs/blogs'
import Faculty from '@/components/home/Faculty/faculty'
import GetInTouch from '@/components/home/get-in-touch/get-in-touch'
import Join from '@/components/home/join/join'
import OnlineYoga from '@/components/home/online-yoga/online-yoga'
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
    return <div className="text-red-500 text-center ">{coursesError || blogsError}</div>
  }

  return (
    <MainWrapper>
      <Banner />
      <Usp />

      {/* Section 1: Benefits + Courses */}
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <ExploreOurCoursesView courses={courses} />
          <BenefitsOfOnlineLearning />
        </div>
      </section>

      {/* Section 2: Course Levels + Ayurveda Courses */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 
          <ExploreOurAyurvedaCoursesView courses={courses} />
          <CourseLevels />
        </div>
      </section>

      {/* Section 3: Yoga For Everyone + Yoga Classes */}
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <ExploreOurClassesView courses={courses} />
          <YogaForEveryone />
        </div>
      </section>

      {/* Remaining Sections */}
      <Guarante />
      <Trust />
      <OurTeaching />
      <Transforming />
      <OnlineYoga />
      <Blogs blogs={blogs} />
      <Join />
      <Faculty />
      <TestimonialView title="What Our Students Say" tilt={true} />
      <GetInTouch />
    </MainWrapper>
  )
}
