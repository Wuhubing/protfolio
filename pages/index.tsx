import Head from "next/head";
import React from 'react';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import Project from '../src/components/Project';
import Certifications from '../src/components/Certifications';
import Education from '../src/components/Education';
import Skills from '../src/components/Skills'; // 新增这行

export default function Home() {
  const skills = [
    "python", "pytorch", "tensorflow", "scikitlearn", "opencv", "jupyter",
    "pandas", "numpy", "matplotlib", "docker", "kubernetes", "anaconda",
    "googlecolab", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
    "git", "jira", "gitlab", "visualstudiocode", "tableau", "powerbi"
  ];

  return (
    <>
      <div>
        <Head>
          <title>Ce Guo&apos;s Portfolio</title>
          <meta
            property="og:description"
            content="Ce Guo is a data analyst who leverages data to drive insights and solve complex problems."
          />
          <meta property="og:image" content="/images/Thumbnail.jpeg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content="Summary Image" />
          <meta property="og:title" content="Ce Guo" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Ce Guo&apos;s Portfolio" />
          <meta name="twitter:image:alt" content="Data Analyst" />
          <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />
          <link
            rel="favicon-16x16"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="favicon-32x32"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="android-chrome-192x192"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.png"
          />
          <link
            rel="android-chrome-512x512"
            sizes="512x512"
            href="/favicon/android-chrome-512x512.png"
          />
        </Head>
      </div>
      <main className="space-y-10 py-24"> {/* 增加垂直间距和上下内边距 */}
        <About />
        <Experience />
        <Skills skills={skills} />
        <Project />
        <Certifications />
        <Education />
      </main>
      <div className="mt-20 text-center text-sm text-gray-500"> {/* 居中对齐和调整颜色 */}
        A portfolio designed and coded in Visual Studio Code. Built
        with Next.js and Tailwind CSS, deployed with Netlify.
      </div>
    </>
  );
}
