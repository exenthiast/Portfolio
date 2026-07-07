"use client";

import React from "react";
import { User, Code2, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const experiences = [
    {
      role: "Lead Frontend Engineer",
      company: "InnovateTech",
      period: "2024 - Present",
      desc: "Architected modern React/Next.js platforms, improving user engagement by 40%.",
    },
    {
      role: "Software Developer",
      company: "WebCraft Solutions",
      period: "2022 - 2024",
      desc: "Developed responsive web applications with TypeScript, Tailwind, and custom APIs.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <User className="w-8 h-8 text-violet-400" />
          <span>About Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Story Intro */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl" />
          <h3 className="text-2xl font-bold mb-4 text-violet-300">My Story</h3>
          <p className="text-foreground/80 leading-relaxed mb-6 font-light">
            I am a passionate software developer who loves bridging the gap between elegant design and complex backend systems. I specialize in the modern Javascript ecosystem, writing beautiful frontend components and robust API integrations.
          </p>
          <p className="text-foreground/80 leading-relaxed font-light">
            When I&apos;m not coding, I study modern user interface patterns, contribute to open-source initiatives, or write tech guides for other developers. My goal is to build applications that are clean, performant, and incredibly delightful to use.
          </p>
        </div>

        {/* Timeline/Experience */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-cyan-300">
              <Briefcase className="w-5 h-5" />
              <span>Experience</span>
            </h3>

            <div className="flex flex-col gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l border-white/10 group">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
                  <span className="text-xs text-foreground/50 font-mono">{exp.period}</span>
                  <h4 className="font-bold text-base mt-1 text-white group-hover:text-violet-300 transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-xs text-cyan-400 block mb-2">{exp.company}</span>
                  <p className="text-xs text-foreground/70 font-light leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl flex items-center gap-4">
            <div className="p-3 bg-violet-500/10 rounded-2xl text-violet-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Software Engineering Technology Degree</h4>
              <p className="text-xs text-foreground/60">University of Gadjah Mada • Class of 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
