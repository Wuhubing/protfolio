import { Link } from "react-scroll";
import { aboutData } from '../src/data/content';
import React from 'react';
const Sidebar = () => {
  const PhoneStyles = {
    marginTop: "15px",
    marginBottom: "10px",
  };

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              {aboutData.name}
            </Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-700 sm:text-xl">
            {aboutData.title}
          </h2>
          <i className="text-gray-600">{aboutData.location}</i>
          <p className="mt-2 lg:max-w-sm leading-relaxed text-justify text-gray-800">
            {aboutData.introduction}
          </p>

          <div className="mt-3 max-w-xs flex">
            <a
              className="flex items-center rounded uppercase bg-orange-400 px-4 py-2 text-xs text-white hover:bg-orange-500 mr-2 font-medium"
              href={aboutData.links.cpBlog}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-flame mr-2 h-4 w-4"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
              My CP Blog
            </a>
            <a
              className="flex items-center rounded uppercase bg-orange-400 px-4 py-2 text-xs text-white hover:bg-orange-500 font-medium"
              aria-label="View Full Resume"
              // href={aboutData.links.resume}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-download mr-2 h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>{" "}
              Resume
            </a>
          </div>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-12 w-max">
              {aboutData.navItems.map((item) => (
                <li key={item}>
                  <Link
                    activeClass="active"
                    to={item}
                    className="group flex items-center py-3 cursor-pointer"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={200}
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ul
          className="ml-1 m-0 flex items-center"
          style={PhoneStyles}
          aria-label="Social media"
        >
          {Object.entries(aboutData.links).map(([key, value]) => (
            <li key={key} className="mr-5 text-xs">
              <a
                className="block text-gray-600 hover:text-orange-500"
                href={value}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                {/* 这里你需要为每个社交媒体添加相应的SVG图标 */}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Sidebar;
