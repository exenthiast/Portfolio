"use client";

import React from "react";
import { User, GraduationCap, Award, BrainCircuit, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-violet-400" />,
      title: "Problem Solver",
      desc: "Translating complex challenges into clean, structured, and efficient code solutions.",
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: "Quality Focused",
      desc: "Committed to clean design, high performance, and standard-compliant interfaces.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: "Lifelong Learner",
      desc: "Constantly exploring new tech stacks to build robust modern web applications.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <User className="w-8 h-8 text-violet-400" />
            <span>About Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Story Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl" />
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-violet-300">My Story</h3>
            <p className="text-foreground/80 leading-relaxed mb-6 font-light">
              I am a passionate software developer who loves bridging the gap between elegant design and complex backend systems. I specialize in the modern Javascript ecosystem, writing beautiful frontend components and robust API integrations.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light mb-8">
              When I&apos;m not coding, I study modern user interface patterns, contribute to open-source initiatives, or write tech guides for other developers. My goal is to build applications that are clean, performant, and incredibly delightful to use.
            </p>
          </div>

          {/* Education Info */}
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 bg-white/5 border border-white/10">
            <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Software Engineering Technology</h4>
              <p className="text-xs text-foreground/60">University of Gadjah Mada • Class of 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Core Values / Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-6 rounded-3xl flex gap-5 items-start relative overflow-hidden"
            >
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1.5">{item.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
