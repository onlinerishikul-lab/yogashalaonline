import Blogs from '@/components/home/blogs/blogs'
import CoreView from '@/components/home/core-values/core.view'
import Faculty from '@/components/home/Faculty/faculty'
import GetInTouch from '@/components/home/get-in-touch/get-in-touch'
import Join from '@/components/home/join/join'
import OnlineYoga from '@/components/home/online-yoga/online-yoga'
import OurTeaching from '@/components/home/our-teaching/our-teaching'
import Testimonial from '@/components/home/experiences/experiences'
import Transforming from '@/components/home/transforming/transforming'
import Trust from '@/components/home/trust/trust'
import Guarante from '@/components/home/Guarantee/Guarante'
import Usp from '@/components/home/usp/usp'
import React from 'react'
import TestimonialView from '@/components/home/testimonial/testimonial'
import MainWrapper from '@/components/wrappers/main-wrapper'
import { Banner } from '@/components/home/Banner/banner'
import ExploreOurCoursesView from '@/components/home/explore-our-Online-Yoga-Course/explore-our-courses.view'
import { getCourses } from '@/server-actions/course'
import { getBlogs } from '@/server-actions/blog'
import ExploreOurCoursesView from '@/components/home/explore-our-Online-Ayurveda-Course/explore-our-courses.view'


export default async function Home() {
  const [{ courses = [], error: coursesError }, { blogs = [], error: blogsError }] = await Promise.all([
    getCourses(),
    getBlogs()
  ]);

  if (coursesError || blogsError) {
    return <div className="text-red-500 text-center py-8">{coursesError || blogsError}</div>;
  }

  return (
    <MainWrapper>
      <Banner />
      <Usp />
      <ExploreOurCoursesView courses={courses} />
      <ExploreOurCoursesView courses={courses} />
      <CoreView isBgVisible={true} />
      <Guarante />
      <Trust />
      <OurTeaching />
      <Transforming courses={courses} />
      <OnlineYoga />
      <Blogs blogs={blogs} />
      <Join />
      <Faculty />
      <Testimonial />
      <TestimonialView title="What Our Students Say" tilt={true}/>
      <GetInTouch />
    </MainWrapper>
  )
}

