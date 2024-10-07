import { aboutData } from '../data/content';
import IconCloud from './IconCloud';
import React from 'react';

const About = () => {
  const slugs = [
    "python", "pytorch", "tensorflow", "scikitlearn", "opencv", "jupyter",
    "pandas", "numpy", "matplotlib", "docker", "kubernetes", "anaconda",
    "googlecolab", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
    "git", "jira", "gitlab", "visualstudiocode", "tableau", "powerbi"
  ];

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-16"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-justify">{aboutData.introduction}</p>
        <p className="mb-4 text-justify">{aboutData.career}</p>
        <p className="mb-4">{aboutData.interests}</p>
        <p className="mb-4 text-justify">{aboutData.openToWork}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
          Skill Sets
        </h2>
        <div className="h-[600px] w-full"> {/* 将高度从 300px 增加到 400px */}
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default About;
