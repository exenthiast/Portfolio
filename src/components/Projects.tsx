"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "Creative", "Mobile"];

  const projects = [
    {
      title: "Zenith Dashboard",
      desc: "A stunning analytics dashboard featuring full glassmorphic interfaces, real-time widgets, and dark mode optimizations.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Recharts"],
      category: "Web App",
      link: "https://github.com",
      demo: "https://github.com",
      gradient: "from-purple-500/20 via-indigo-500/20 to-cyan-500/20",
    },
    {
      title: "Aura Creative Studio",
      desc: "An immersive marketing site for a design agency featuring canvas animations, customized SVG shapes, and liquid transitions.",
      tech: ["HTML5", "CSS Grid", "Framer Motion", "Vite"],
      category: "Creative",
      link: "https://github.com",
      demo: "https://github.com",
      gradient: "from-rose-500/20 via-pink-500/20 to-violet-500/20",
    },
    {
      title: "Nova Tasks App",
      desc: "A responsive productivity and tasks app featuring complex drag-and-drop mechanics, offline support, and state synchronization.",
      tech: ["React Native", "Expo", "Redux Toolkit", "SQLite"],
      category: "Mobile",
      link: "https://github.com",
      demo: "https://github.com",
      gradient: "from-cyan-500/20 via-teal-500/20 to-emerald-500/20",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      {/* Title */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <FolderGit2 className="w-8 h-8 text-cyan-400" />
          <span>My Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-rose-500 rounded-full" />
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        <div className="flex items-center gap-1.5 glass-panel p-1 rounded-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                filter === cat
                  ? "bg-white text-black shadow-md"
                  : "text-foreground/70 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col h-full group"
          >
            {/* Visual Header/Placeholder using CSS Gradient */}
            <div className={`h-48 w-full bg-gradient-to-tr ${project.gradient} relative flex items-center justify-center p-6 border-b border-white/5`}>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="glass-panel p-4 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">
                <FolderGit2 className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/75 font-light leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-foreground/70 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-foreground/70 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
