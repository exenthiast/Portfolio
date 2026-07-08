"use client";

import React from "react";
import { Cpu, CheckCircle } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      title: "Tools & Deployments",
      skills: ["Git & GitHub", "Docker", "Vercel", "AWS S3", "Figma", "Jest Testing"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-rose-400" />
          <span>Skills &amp; Tech Stack</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
            {/* Glowing Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-600/5 rounded-full blur-xl group-hover:bg-rose-600/10 transition-colors" />

            <h3 className="text-xl font-bold mb-6 text-foreground border-b border-black/5 dark:border-white/5 pb-4">
              {cat.title}
            </h3>

            <div className="flex flex-col gap-4">
              {cat.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-violet-500/15 text-violet-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-foreground/85 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
