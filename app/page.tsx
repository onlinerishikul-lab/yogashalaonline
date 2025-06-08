import React from 'react'
import { Header } from '@/components/common/header'
import { SiteFooter } from '@/components/common/footer'
import Blogs from '@/components/home/blogs/blogs'
import Faculty from '@/components/home/Faculty/faculty'
import GetInTouch from '@/components/home/get-in-touch/get-in-touch'
import Join from '@/components/home/join/join'
import OurTeaching from '@/components/home/our-teaching/our-teaching'
import Transforming from '@/components/home/transforming/transforming'
import Trust from '@/components/home/trust/trust'
import GuaranteeSection from '@/components/home/Guarantee/GuaranteeSection'
import Usp from '@/components/home/usp/usp'
import Testimonial from '@/components/home/testimonial/testimonial'
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
    <div>
      <Header />
      {/* This wrapper ensures content is not hidden behind the fixed header */}
      <div className="pt-20  min-h-screen">
        <Banner />
        <Usp />
        {/* Section 1: Benefits + Courses */}
        <section className="bg-white py-0">
          <div className="container mx-auto px-2">
            <ExploreOurCoursesView courses={courses} />
            <div className="mt-0 mb-0 py-0">
              <BenefitsOfOnlineLearning />
            </div>
          </div>
        </section>
        {/* Section 2: Course Levels + Ayurveda Courses */}
        <section className="bg-white py-0">
          <div className="container mx-auto px-2">
            <ExploreOurAyurvedaCoursesView courses={courses} />
            <CourseLevels />
          </div>
        </section>
        {/* Section 3: Yoga For Everyone + Yoga Classes */}
        <section className="bg-white py-0">
          <div className="container mx-auto px-2">
            <ExploreOurClassesView courses={courses} />
            <YogaForEveryone />
          </div>
        </section>
        <GuaranteeSection />
        <OurTeaching />
        <Transforming />
        <Trust />
        <Blogs blogs={blogs} />
        <Join />
        <Faculty />
        <Testimonial />
        <GetInTouch />
      </div>
      <SiteFooter />
    </div>
  )
}
