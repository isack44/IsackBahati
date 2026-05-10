import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { MdWeb, MdBuild, MdOutlineRocketLaunch } from "react-icons/md";

function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          About
        </h1>
        <div className="h-[3px] w-10 bg-purple-500 rounded-full mb-4"></div>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-4xl">
        Hello! I'm a dedicated and enthusiastic self-taught Front-End Developer
        with a solid foundation in creating modern, user-friendly web
        applications. My journey into web development is fueled by a genuine
        passion for problem-solving and a commitment to continuous learning. I
        specialize in building dynamic interfaces using React, HTML, JavaScript,
        and Tailwind CSS, focusing on delivering clean, efficient, and
        responsive code.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
          Skills & Tools
        </h3>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-gray-800 p-3">
            <MdWeb className="mt-0.5 text-lg text-purple-500 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Languages</p>
              <p className="mt-1 inline-flex items-center gap-1.5">
                <FaHtml5 title="HTML" style={{ color: "#e34c26" }} />
                <FaCss3Alt title="CSS" style={{ color: "#2965f1" }} />
                <FaJs title="JavaScript" style={{ color: "#f7df1e" }} />
                <SiTypescript title="TypeScript" style={{ color: "#3178c6" }} />
                <span>HTML, CSS, JavaScript (ES6+), TypeScript</span>
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-gray-800 p-3">
            <span className="inline-flex items-center gap-1 mt-0.5 text-lg shrink-0">
              <FaReact style={{ color: "#61dafb" }} />
              <SiTailwindcss style={{ color: "#38bdf8" }} />
            </span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Frameworks/Libraries</p>
              <p className="mt-1">React, Tailwind CSS</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-gray-800 p-3">
            <MdBuild className="mt-0.5 text-lg text-purple-500 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Tools/Platforms</p>
              <p className="mt-1 inline-flex items-center gap-1.5">
                <FaGitAlt style={{ color: "#f34f29" }} />
                <FaGithub style={{ color: "#333" }} />
                <span>Git, GitHub</span>
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-gray-800 p-3">
            <FaWordpress className="mt-0.5 text-lg shrink-0" style={{ color: "#21759b" }} />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Content Management</p>
              <p className="mt-1">WordPress</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-gray-800 p-3">
            <MdOutlineRocketLaunch className="mt-0.5 text-lg text-purple-500 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Future Focus</p>
              <p className="mt-1">Full-Stack Development</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
          Experience
        </h3>

        <div className="rounded-lg border border-gray-100 dark:border-gray-800 p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Devlit</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Front-End Developer
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
              Apr 2026 - Present
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I worked at Devlit as a Front-End Developer, helping build a platform
            that supports teenagers in creating projects to enhance and develop
            their programming skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
