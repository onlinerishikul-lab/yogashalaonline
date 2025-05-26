'use client'

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
    return <div className="text-red-500 text-center py-8">{coursesError || blogsError}</div>
  }

  return (
    <MainWrapper>
      <div className="w-full overflow-hidden">
        <Banner />
        <Usp />

        {/* Section 1: Benefits + Courses */}
        <section className="bg-[#f5f5f5] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ExploreOurCoursesView courses={courses} />
            <div className="mt-10">
              <BenefitsOfOnlineLearning />
            </div>
          </div>
        </section>

        {/* Section 2: Course Levels + Ayurveda Courses */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ExploreOurAyurvedaCoursesView courses={courses} />
            <div className="mt-10">
              <CourseLevels />
            </div>
          </div>
        </section>

        {/* Section 3: Yoga For Everyone + Yoga Classes */}
        <section className="bg-[#f5f5f5] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ExploreOurClassesView courses={courses} />
            <div className="mt-10">
              <YogaForEveryone />
            </div>
          </div>
        </section>

        {/* Remaining Sections */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
            <Guarante />
            <Trust />
            <OurTeaching />
            <Transforming />
            <OnlineYoga />
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Blogs blogs={blogs} />
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
            <Join />
            <Faculty />
            <TestimonialView title="What Our Students Say" tilt={true} />
            <GetInTouch />
          </div>
        </section>
      </div>
    </MainWrapper>
  )
}
