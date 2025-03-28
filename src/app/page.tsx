"use client";

import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

import { 
  IconHome, 
  IconInfoCircle, 
  IconBriefcase, 
  IconUsers, 
  IconMail, 
  IconMapPin, 
  IconPhone, 
  IconFlag, 
  IconBuilding 
} from "@tabler/icons-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const items = [
  { title: "Home", icon: <IconHome />, href: "/" },
  { title: "About Us", icon: <IconInfoCircle />, href: "/about" },
  { title: "Services", icon: <IconBriefcase />, href: "/services" },
  { title: "Careers", icon: <IconUsers />, href: "/careers" },
  { title: "Contact Us", icon: <IconMail />, href: "/contact" },
];

const marqueeImages = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
  "https://assets.aceternity.com/world-map.webp",
];

const companyLogos = [
  "https://cdn-icons-png.flaticon.com/128/731/731985.png",
"https://cdn-icons-png.flaticon.com/128/5969/5969205.png",
"https://cdn-icons-png.flaticon.com/128/5968/5968830.png",
"https://cdn-icons-png.flaticon.com/128/5968/5968812.png",
"https://cdn-icons-png.flaticon.com/128/11865/11865338.png",
"https://cdn-icons-png.flaticon.com/128/5969/5969323.png",
"https://cdn-icons-png.flaticon.com/128/4494/4494624.png",
"https://cdn-icons-png.flaticon.com/128/5968/5968759.png",
];

const content = [
  {
    title: "Project Lifecycle Management",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Managed IT",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "MENDIX Development",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const statistics = [
  { title: "Projects Completed", value: "120+", description: "Successfully delivered over 120 projects to clients worldwide." },
  { title: "Active Clients", value: "50+", description: "Currently working with over 50 active clients globally." },
  { title: "Team Members", value: "200+", description: "A strong team of over 200 skilled professionals." },
  { title: "Years of Experience", value: "10+", description: "Over a decade of experience in delivering IT solutions." },
  { title: "Global Reach", value: "15 Countries", description: "Providing services to clients in 15 different countries." },
  { title: "Customer Satisfaction", value: "98%", description: "Achieved a 98% customer satisfaction rate." },
];

export default function Home() {
  const companiesRef = useRef<HTMLDivElement>(null);
  const contentAboveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustPositions = () => {
      if (companiesRef.current && contentAboveRef.current) {
        const windowHeight = window.innerHeight;
        const companiesHeight = companiesRef.current.offsetHeight;
        const contentAboveHeight = windowHeight - companiesHeight;

        // Adjust the height of the div above the companies section
        contentAboveRef.current.style.height = `${contentAboveHeight}px`;
      }
    };

    adjustPositions();
    window.addEventListener("resize", adjustPositions);

    return () => {
      window.removeEventListener("resize", adjustPositions);
    };
  }, []);

  return (
    <div className="relative min-h-[200vh]">
      <Navbar className="top-2" />
      
      {/* Main content container */}
      <main className="relative z-10">
        {/* Hero section */}
        <div ref={contentAboveRef} className="relative w-full">
          <div className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden"> {/* Reduced height */}
            {/* Solid background color */}
            <div className="absolute inset-0 bg-[#162F62] z-0"></div>
            
            {/* 3D Marquee Background with overlay */}
            <div className="absolute inset-0 z-[1]">
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-indigo-900/30 z-[1] mix-blend-multiply"></div>
              
              {/* 3D Marquee component */}
              <div className="absolute inset-0 z-[1]">
                <ThreeDMarquee 
                  images={marqueeImages} 
                  className="h-full filter blur-[1px] opacity-60 brightness-75 contrast-75"
                />
              </div>
            </div>
            
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-4 text-center">
              {/* Frosted glass backdrop for text */}
              <div className="absolute inset-0 -mx- -my-12 bg-gray-800/40 backdrop-blur-sm rounded-xl shadow-lg"></div>
              
              <h1 className="relative z-10 text-5xl sm:text-9xl font-bold text-white">PLMITPro</h1>
              <p className="relative z-10 text-3xl font-bold text-indigo-200 mt-4">
                Empowering your Enterprise through<br/>
                Seamless Software Implementation
              </p>

              <Button className="relative z-10 mt-12 text-lg px-10 py-7 mx-auto bg-white text-indigo-900 hover:bg-indigo-100" variant="outline">
                View Our Services
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Company Logos Carousel */}
        <div
          ref={companiesRef}
          className="w-full bg-gray-100 pt-7 pb-8" // Changed from py-8 to pt-4 pb-8
        >
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-center text-lg font-semibold text-gray-700 mb-4 mt-6"> {/* Added mt-6 for more top margin */}
              Companies We Have Worked With
            </h3>
            <CompanyLogosCarousel logos={companyLogos} />
          </div>
        </div>
              
        {/* Add additional content sections to create more scrollable area */}
        <div className="w-full bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service cards */}
              {[
                {
                  title: "PLM Services",
                  description:
                    "Comprehensive enterprise solutions tailored to your business needs, ensuring seamless integration with your existing infrastructure.",
                  icon: <IconBriefcase className="w-10 h-10 text-indigo-600" />,
                },
                {
                  title: "Managed IT Services",
                  description:
                    "Expert consulting to guide your digital transformation journey. Our team of professionals will help you navigate the complexities of modern IT.",
                  icon: <IconUsers className="w-10 h-10 text-indigo-600" />,
                },
                {
                  title: "MENDIX Services",
                  description:
                    "End-to-end implementation support ensuring your software solutions are deployed efficiently with minimal disruption to your operations.",
                  icon: <IconInfoCircle className="w-10 h-10 text-indigo-600" />,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    translateY: -10,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <div className="bg-indigo-100 p-4 rounded-lg mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button className="mt-auto" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Scroll Section with Left Box */}
        <div className="w-full bg-indigo-50 py-20">

        <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center">What / How We Provide</h2>

          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-10">
            {/* Left Box */}
            <div className="flex-1 bg-indigo-100 rounded-lg p-8 shadow-md flex flex-col justify-center items-center h-[30rem]">
              <h3 className="text-3xl font-bold text-indigo-900 mb-4 text-center">Check out our AI services</h3>
              <p className="text-gray-700 mb-6 text-center">
                Discover how our cutting-edge AI solutions can transform your business. From predictive analytics to intelligent automation, we have you covered.
              </p>
              <Button className="text-lg px-6 py-4 bg-white text-indigo-900 hover:bg-indigo-200" variant="outline">
                Learn More
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>

            {/* Sticky Scroll Component */}
            <div className="flex-1 h-[30rem] shadow-md rounded-lg">
              <StickyScroll content={content} />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-white py-20">
          <h2 className="text-4xl font-bold text-indigo-900 mb-12 text-center">Statistics on our development services</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-indigo-100 rounded-lg p-6 shadow-md text-center"
              >
                <h3 className="text-2xl font-bold text-indigo-900">{stat.value}</h3>
                <p className="text-gray-700 mt-2">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </main>
      
      {/* Footer section */}
      <footer className="w-full bg-[#162F62] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Centered Let's Talk section */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-2">Let&apos;s Talk</h2>
            <h3 className="text-2xl font-bold mb-4">Ready to get Started?</h3>
            <p className="text-indigo-200">Your email address will not be published.</p>
          </div>
          
          {/* Two column layout with center division */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* US Office */}
            <div className="space-y-4 md:ml-auto md:mr-4 md:max-w-md">
              <div className="flex items-center gap-2">
                <div className="bg-white p-1 rounded-sm">
                  <IconFlag className="w-5 h-5 text-blue-700" />
                </div>
                <h4 className="font-bold text-xl">Head Office (USA)</h4>
              </div>
              
              <div className="flex items-start gap-3">
                <IconMapPin className="w-5 h-5 flex-shrink-0 mt-1 text-indigo-200" />
                <p>880 West Long Lake Rd, STE 225, Troy, MI 48098, USA</p>
              </div>
              
              <div className="flex items-center gap-3">
                <IconPhone className="w-5 h-5 text-indigo-200" />
                <p>+1 248-823-7276</p>
              </div>
              
              <div className="flex items-center gap-3">
                <IconMail className="w-5 h-5 text-indigo-200" />
                <p>usa@plmitpro.com</p>
              </div>
            </div>
            
            {/* India Office */}
            <div className="space-y-4 flex flex-col justify-center md:ml-4 md:mr-auto md:max-w-md">
              <div className="flex items-center gap-2">
                <div className="bg-white p-1 rounded-sm">
                  <IconFlag className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="font-bold text-xl">Regional Office (INDIA)</h4>
              </div>
              
              <div className="flex items-start gap-3">
                <IconBuilding className="w-5 h-5 flex-shrink-0 mt-1 text-indigo-200" />
                <p>PLMITPRO INDIA PVT LTD</p>
              </div>
              
              <div className="flex items-start gap-3">
                <IconMapPin className="w-5 h-5 flex-shrink-0 mt-1 text-indigo-200" />
                <p>D. No: 4-183, Plot No: 98 (Upper floor) Block No 4, Beside Mithila Nagar, Jillelaguda, Saroor Nagar, Hyderabad, Rangareddi Dist. TELANGANA 500097, INDIA</p>
              </div>
              
              <div className="flex items-center gap-3">
                <IconPhone className="w-5 h-5 text-indigo-200" />
                <p>+91 7780 221003</p>
              </div>
              
              <div className="flex items-center gap-3">
                <IconMail className="w-5 h-5 text-indigo-200" />
                <p>india@plmitpro.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 w-fit mx-auto left-1/2 -translate-x-1/2 z-50 shadow-lg", className)}
    >
      <Menu 
        setActive={setActive} 
        className="rounded-[15px]"
      >
        <div className="px-6">
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {items.map((item) => (
                <HoveredLink key={item.title} href={item.href}>
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
        </div>

        <div className="px-6">
        <MenuItem setActive={setActive} active={active} item="About Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">About PLMITPro</HoveredLink>
              <HoveredLink href="/interface-design">Who We Are</HoveredLink>
              <HoveredLink href="/seo">Our Vision</HoveredLink>
            </div>
          </MenuItem>
        </div>

        <div className="px-6">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Project Lifecycle Management</HoveredLink>
              <HoveredLink href="/interface-design">Managed IT Services</HoveredLink>
              <HoveredLink href="/seo">Mendix Development</HoveredLink>
            </div>
          </MenuItem>
        </div>


        <div className="px-6">
          <MenuItem setActive={setActive} active={active} item="Careers">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Join Our Team!</HoveredLink>

            </div>
          </MenuItem>
        </div>


        <div className="px-6">
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Socials</HoveredLink>
              <HoveredLink href="/individual">Mailing</HoveredLink>
              <HoveredLink href="/team">Location</HoveredLink>
            </div>
          </MenuItem>
        </div>


      </Menu>
    </div>
  );
}

function CompanyLogosCarousel({ logos }: { logos: string[] }) {
  // Triple the array to ensure we have enough logos for a smooth continuous loop
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden w-full py-2">
      <div className="flex whitespace-nowrap">
        {/* First animation container */}
        <motion.div
          className="flex space-x-6"
          animate={{
            x: "-100%"
          }}
          transition={{
            repeat: Infinity,
            duration: 40, // Slower animation
            ease: "linear",
            repeatType: "loop",
            repeatDelay: 0
          }}
          style={{
            willChange: "transform" // Performance optimization
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 w-24 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                width={70}
                height={25}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Second animation container that seamlessly continues where the first one ends */}
        <motion.div
          className="flex space-x-6 absolute left-0"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 40, // Same duration
            ease: "linear",
            repeatType: "loop",
            repeatDelay: 0
          }}
          style={{
            willChange: "transform" // Performance optimization
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 w-24 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                width={70}
                height={25}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Fading effect on edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
    </div>
  );
}