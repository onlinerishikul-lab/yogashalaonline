'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Online Yoga Training', href: '/online-yoga-training' },
  { title: 'Online Ayurveda Courses', href: '/online-ayurveda-courses' },
  { title: 'Online Yoga Courses', href: '/online-yoga-courses' },
  {
    title: 'About Us',
    dropdown: [
      { title: 'Our Teachers', href: '/our-teachers' },
      { title: 'Our Blogs', href: '/our-blogs' },
      { title: 'Our Testimonials', href: '/our-testimonials' },
    ],
  },
  { title: 'Contact Us', href: '/contact-us' },
  { title: 'Payment', href: '/payment' },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-6">
        {menuItems.map((item) =>
          item.dropdown ? (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger className="text-white text-sm font-medium bg-transparent hover:bg-white/10 rounded-md px-3 py-2">
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-2 bg-white rounded-md shadow-lg z-50">
                <div className="flex flex-col px-4 py-2 min-w-[200px]">
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.title} href={subItem.href}>
                      <span className="block px-2 py-1 text-sm text-gray-800 hover:bg-gray-100 rounded-md">
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className="text-white text-sm font-medium hover:underline px-3 py-2">
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
