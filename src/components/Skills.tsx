import React from 'react';
import { Badge } from "@/components/ui/badge";
import IconCloud from './IconCloud';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
   
      <div className="h-[400px] w-full">
        <IconCloud iconSlugs={skills} />
      </div>
    </section>
  );
};

export default Skills;
