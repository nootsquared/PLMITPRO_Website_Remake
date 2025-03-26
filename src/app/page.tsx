"use client";

import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


import { IconHome, IconInfoCircle, IconBriefcase, IconUsers, IconMail } from "@tabler/icons-react"; // Example icons

const items = [
  { title: "Home", icon: <IconHome />, href: "/" },
  { title: "About Us", icon: <IconInfoCircle />, href: "/about" },
  { title: "Services", icon: <IconBriefcase />, href: "/services" },
  { title: "Careers", icon: <IconUsers />, href: "/careers" },
  { title: "Contact Us", icon: <IconMail />, href: "/contact" },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Navbar className="top-2" />
      
      <div className="absolute top-0 left-0 w-full bg-[#162F62] z-0" style={{height: "80vh"}}></div>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10 relative">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl sm:text-9xl font-bold w-full mt-[-250px] text-center text-white">PLMITPro</h1>
          <p className="text-3xl font-bold text-indigo-200 dark:text-indigo-200 mt-4 text-center w-full">
            Empowering your Enterprise through<br/>
            Seamless Software Implementation
          </p>

          <Button className="mt-12 text-lg px-10 py-7 mx-auto bg-white text-indigo-900 hover:bg-indigo-100" variant="outline">
            View Our Services
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </main>

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 w-fit mx-auto left-1/2 -translate-x-1/2 z-50", className)}
    >
      <Menu 
        setActive={setActive} 
        className="rounded-[15px]"
      >
        <MenuItem setActive={setActive} active={active} item="Services" className="px-6">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products" className="px-6">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            {/* ProductItem components commented out */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing" className="px-6">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}