"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define types for our data structures
type TabId = "frontend" | "backend" | "database" | "devops" | "cloud" | "security";

interface TechItem {
  name: string;
  icon: string;
}

interface TechStackData {
  frontend: TechItem[];
  backend: TechItem[];
  database: TechItem[];
  devops: TechItem[];
  cloud: TechItem[];
  security: TechItem[];
}

const tabs = [
  { id: "frontend" as TabId, label: "Front-End" },
  { id: "backend" as TabId, label: "Back-End" },
  { id: "database" as TabId, label: "Database" },
  { id: "devops" as TabId, label: "DevOps" },
  { id: "cloud" as TabId, label: "Cloud" },
  { id: "security" as TabId, label: "Security" },
];

const techStack: TechStackData = {
  frontend: [
    { name: "React", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Vue.js", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Angular", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Express.js", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Django", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
  ],
  database: [
    { name: "PostgreSQL", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
  ],
  devops: [
    { name: "Docker", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Kubernetes", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Jenkins", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
  ],
  cloud: [
    { name: "AWS", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Azure", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "Google Cloud", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
  ],
  security: [
    { name: "OAuth", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "JWT", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
    { name: "SSL/TLS", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png" },
  ],
};

export const TabularTechStack = () => {
  const [activeTab, setActiveTab] = useState<TabId>("frontend");

  return (
    <div className="max-w-5xl mx-auto bg-gray-300 rounded-lg shadow-lg p-8">
      {/* Centered container for tabs and icons */}
      <div className="flex flex-col items-center space-y-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-bold ${
                activeTab === tab.id ? "bg-[#162F62] text-white" : "bg-gray-100 text-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-3/4 h-px bg-gray-400 mx-auto" />

        {/* Icons Panel - Fixed width container to center cards properly */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[400px] md:max-w-[600px] mx-auto">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center"
            >
              {techStack[activeTab].map((tech: TechItem, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-2 w-full max-w-[120px]"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-800 text-center">{tech.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};