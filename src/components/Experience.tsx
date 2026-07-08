"use client";

import React from "react";
import { Briefcase, Calendar, FolderGit2, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  year: string;
  title: string;
  projectType: string;
  description: string;
  technologies?: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      year: "2024 - Present",
      title: "Lead Frontend Engineer",
      projectType: "Enterprise Web Application",
      description: "Developed and maintained the core frontend architecture of an enterprise-level SaaS platform. Improved load performance by 40% using Next.js Server Components and advanced caching strategy.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      year: "2023 - 2024",
      title: "Fullstack Developer",
      projectType: "E-Commerce System & Logistics",
      description: "Designed scalable APIs and responsive user interfaces. Automated inventory synchronization across multiple marketplaces, reducing inventory errors by 95%.",
      technologies: ["Node.js", "Express", "React", "PostgreSQL", "Prisma", "Docker"]
    },
    {
      year: "2022 - 2023",
      title: "Junior Web Developer",
      projectType: "Company Profile & CMS Websites",
      description: "Built SEO-friendly and highly interactive client websites. Implemented headless CMS solutions, allowing content creators to publish updates effortlessly.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "WordPress API"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Title Header */}
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-violet-400" />
            <span>Professional Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
        </motion.div>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[350px]"
          >
            {/* Glowing Accent Blur in Card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-2xl group-hover:bg-violet-600/10 transition-colors" />

            <div>
              {/* Year & Project Type Headers */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-1.5 text-xs text-violet-400 font-mono bg-violet-500/10 px-3 py-1.5 rounded-full font-medium border border-violet-500/20">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.year}
                </span>
                
                <span className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-mono bg-cyan-500/10 px-3 py-1.5 rounded-full font-medium border border-cyan-500/20">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  {exp.projectType}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide mt-2">
                {exp.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/75 leading-relaxed mb-6 font-light">
                {exp.description}
              </p>
            </div>

            {/* Technologies list */}
            {exp.technologies && (
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
