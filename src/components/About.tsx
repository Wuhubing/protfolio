import { aboutData } from '../data/content';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section
 
       >

  

      <div className="space-y-4">
        <h1 className="text-xl font-semibold">About Me</h1>
        <p className="text-muted-foreground">{aboutData.openToWork}</p>
      </div>
    </section>
  );
};

export default About;
