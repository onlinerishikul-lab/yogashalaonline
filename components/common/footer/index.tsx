import { Instagram, Send } from "lucide-react";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SiteFooter = () => {
  return (
    <div className="bg-[#4377B2] bg-cover flex justify-center">
      <div className="max-w-screen-2xl p-4 px-6 w-full py-8">
        <div className="flex justify-between flex-col md:flex-row items-center mb-8">
          <Image
            src="/assets/rishikulonlinlogo.png"
            alt="yoga logo"
            height={250}
            width={170}
          />
          <div>
            <ul className="flex flex-wrap gap-6">
              <li>
                <Link href="/about" className="text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:underline">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:underline">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <p className="w-full md:w-2/6 text-white">
            We at Rishikul Online deliver yoga and not just a skill; it is an
            ancient practice we transfer with thorough knowledge and wisdom,
            targeting bright intellect, understanding of its values, tradition,
            Yogic philosophy, and scientific explanations to our fellow
            students.
          </p>
          <div className="md:w-1/4 w-full">
            <div className="text-white flex flex-col md:items-end mb-10">
              <h2 className="text-xl mb-2">Contact Us</h2>
              <Link
                href="tel:+917448677761"
                className="text-white hover:underline"
              >
                +91 74486 77761
              </Link>
              <Link
                href="mailto:contact@rishikulyogshalaonline.com"
                className="text-white hover:underline"
              >
                contact@rishikulyogshalaonline.com
              </Link>
            </div>
{/*              <div className="text-white flex flex-col md:items-end">
              <h2 className="text-xl mb-2">Location</h2>
              <p className="md:text-right">
                The Kerala Retreat, Paravur Kollam, Kerala <br />
                Palm Paradise Resort, Querim, North Goa, Goa <br />
                Narayan Kunj, Ram Jhula, Rishikesh, India
              </p>
            </div>  */}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex space-x-4 mb-4">
            <Link
              href="#"
              className="rounded-full bg-white/80 p-2 hover:bg-white/20"
            >
              <Send className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white/80 p-2 hover:bg-white/20"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white/80 p-2 hover:bg-white/20"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-white">© 2021 — All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

// import Link from "next/link"
// import Image from "next/image"
// import { Facebook, Instagram, Send } from 'lucide-react'

// export function SiteFooter() {
//   return (
//     <footer className="w-full bg-[#E85C33] text-white">
//       <div className="px-5 md:px-20 py-12 md:py-16">
//         <div className="grid gap-8 lg:grid-cols-5">
//           {/* Left Column */}
//           <div className="lg:col-span-2 flex flex-col justify-between">
//          <div className="space-y-3">
//             <Link href="/" className="block w-48">
//             <Image src="/assets/yrlog-01.png" alt="yoga logo" height={250} width={170} />
//             </Link>

//             <p className="max-w-md text-white/90">
//               We at Rishikul Yogshala deliver yoga and not a skill; it is rather an ancient practice
//               we transfer with thorough knowledge, wisdom targeting bright intellect, understanding
//               of its values, tradition, Yogic philosophy, and scientific explanations to our fellow students.
//             </p>

//             <Link
//               href="/about"
//               className="inline-flex items-center space-x-2 text-sm hover:underline"
//             >
//               <span>More about us</span>
//               <span className="h-1 w-1 rounded-full bg-white"></span>
//             </Link>
//             </div>
//             <div className="space-y-3">
//             <div className="flex space-x-4">
//               <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
//                 <Send className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
//                 <Instagram className="h-5 w-5" />
//               </Link>
//             </div>

//             <p className="text-sm text-white/70">
//               © 2025 — Copyright
//               <br />
//               All Rights Reserved
//             </p>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col justify-end items-end space-y-8 lg:col-span-3 lg:pl-12">
//             <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
//               <Link href="/about" className="hover:underline">About</Link>
//               <Link href="/our-team" className="hover:underline">Our Team</Link>
//               <Link href="/blogs" className="hover:underline">Blogs</Link>
//               <Link href="/courses" className="hover:underline">Courses</Link>
//               <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
//               <Link href="/terms" className="hover:underline">Terms & Condition</Link>
//               <Link href="/refund-policy" className="hover:underline">Refund & Cancellation Policy</Link>
//             </nav>
//             <div className="space-y-8 text-right">
//               <div className="space-y-2">
//                 <h3 className="text-lg font-semibold">Contact Us</h3>
//                 <p className="text-white/90">+91 74486 77761</p>
//                 <p className="text-white/90 break-words">
//                   contact@rishikulyogshalaonline.com
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold">Location</h3>
//                 <div className="space-y-2 text-white/90">
//                   <p>The Kerala Retreat<br />Paravur kollam Kerala</p>
//                   <p>Palm Paradise Resort<br />Querim, North Goa, Goa<br />Narayan Kunj</p>
//                   <p>Ram Jhula Rishikesh, India</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
