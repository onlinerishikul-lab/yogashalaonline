export type HeaderSection = {
  image: string;
  title: string;
  subHeading: string;
}

export type Testimonial = {
  coverImage: string;
  profileImage: string;
  body: string;
}

export type YogaCoursesForBeginners = {
  body: string;
  courseLanguage: string;
  skillsYouWillLearn: string;
}

export type AccordionItem = {
  title: string;
  body: string;
}

export type WhatYouWillLearnSection = {
  body: string;
  accordian: AccordionItem[];
}

export type TrainingCourseUniqueItem = {
  heading: string;
  body: string;
}

export type BulletPoint = {
  title: string;
  body: string;
}

export type WhatsInsideTheCourse = {
  body: string;
  bulletPoints: BulletPoint[];
}

export type Faculty = {
  image: string;
  body: string;
}

export type Payment = {
  amount: number;
  currency: string;
  whatsIncluded: string[];
}

export type Pricing = {
  fullPayment: Payment;
  halfPayment: Payment;
}

export type StudentCorner = {
  image: string;
  name: string;
  body: string;
}

export type FAQ = {
  title: string;
  answer: string;
}

export type Blog = {
  id: string;
  title: string;
  slug: string;
  overview: string;
  content: string;
  coverImage: string;
  createdAt: Date;
  tags: string[];
  author: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export type Course = {
  id: string;
  headerSection: HeaderSection;
  testimonial: Testimonial[];
  yogaCoursesForBeginners: YogaCoursesForBeginners;
  coreValues: string[];
  whyYogshala: string[];
  whatYouWillLearn: WhatYouWillLearnSection;
  whyOurTrainingCourseUnique: TrainingCourseUniqueItem[];
  ourTeachingApproach: string[];
  whatsInsideTheCourse: WhatsInsideTheCourse;
  yogaAllianceAccrediation: string;
  Certificate: string;
  faculty: Faculty[];
  pricing: Pricing;
  ourGurantee: string;
  studentCorner: StudentCorner[];
  faq: FAQ[];
  availableSeats: number;
  reserveSeats: number; 
  createdAt: Date;
  updatedAt: Date;
}


export interface TeachingApproachProps {
  points: string[]
  title?: string
  centerImage: string
  buttonText?: string
}