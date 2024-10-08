"use client";

import React, { useState } from 'react';
import { experienceData } from '../data/content';
import Image from 'next/image';
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
  company: string;
  position: string;
  period: string;
  logoUrl: string;
  description: string;
  technologies?: string[];
  link?: string;
}

interface ExperienceItemProps {
  exp: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <div 
        className="flex items-center py-4 px-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-shrink-0 w-12 h-12 mr-4">
          <Image 
            src={exp.logoUrl} 
            alt={exp.company} 
            width={48} 
            height={48} 
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex-grow flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.position}</p>
          </div>
          <div className="flex items-center ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-right mr-2">{exp.period}</p>
            <ChevronRightIcon
              className={cn(
                "size-4 transform transition-transform duration-200",
                isExpanded ? "rotate-90" : "rotate-0"
              )}
            />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
          {exp.technologies && (
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
          {exp.link && (
            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600 hover:underline">
              Learn more
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 max-w-2xl mx-auto"
      aria-label="Work Experience"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">Work Experience</h2>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;