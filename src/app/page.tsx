"use client";

import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

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

const items = [
  { title: "Home", icon: <IconHome />, href: "/" },
  { title: "About Us", icon: <IconInfoCircle />, href: "/about" },
  { title: "Services", icon: <IconBriefcase />, href: "/services" },
  { title: "Careers", icon: <IconUsers />, href: "/careers" },
  { title: "Contact Us", icon: <IconMail />, href: "/contact" },
];

const images = [
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
];

export default function Home() {
  return (
    <div className="relative min-h-[200vh]">
      <Navbar className="top-2" />
      
      {/* Main content container */}
      <main className="relative z-10">
        {/* Hero section with parallax background */}
        <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Solid background color */}
          <div className="absolute inset-0 bg-[#162F62] z-0"></div>
          
          {/* Parallax Scroll Background with overlay */}
          <div className="absolute inset-0 z-[1]">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-indigo-900/30 z-[1] mix-blend-multiply"></div>
            
            {/* Parallax images that respond to document scroll */}
            <ParallaxScroll 
              images={images} 
              className="h-full filter blur-[1px] opacity-60 brightness-75 contrast-75"
            />
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
              
        {/* Add additional content sections to create more scrollable area */}
        <div className="w-full bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service cards */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-4 rounded-lg mb-4">
                  <IconBriefcase className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive enterprise solutions tailored to your business needs, ensuring seamless integration with your existing infrastructure.
                </p>
                <Button className="mt-auto" variant="outline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-4 rounded-lg mb-4">
                  <IconUsers className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consulting Services</h3>
                <p className="text-gray-600 mb-6">
                  Expert consulting to guide your digital transformation journey. Our team of professionals will help you navigate the complexities of modern IT.
                </p>
                <Button className="mt-auto" variant="outline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-4 rounded-lg mb-4">
                  <IconInfoCircle className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation Support</h3>
                <p className="text-gray-600 mb-6">
                  End-to-end implementation support ensuring your software solutions are deployed efficiently with minimal disruption to your operations.
                </p>
                <Button className="mt-auto" variant="outline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Another section for more scroll space */}
        <div className="w-full bg-indigo-50 py-32">
          <div className="max-w-7xl mx-auto px-4" >
            <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center">About PLMITPro</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
              We specialize in PLM Services, managed IT services and Mendix Services. Our commitment is to offer tailored solutions that precisely align with our clients' needs, ensuring top-notch quality, robust security, and cost-effective operations. We provide Managed Services and consulting services.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              By leveraging cutting-edge technologies and industry best practices, we empower businesses to thrive in today's competitive landscape. Our team is dedicated to crafting innovative solutions that streamline processes, enhance efficiency, and ultimately contribute to our clients' success.
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer section */}
      {/* Footer section */}
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