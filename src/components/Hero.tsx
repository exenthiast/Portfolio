"use client";

import React from "react";
import { ArrowUpRight, ChevronDown, Award, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-24 overflow-hidden"
    >
      {/* Dynamic Background Circles */}
      <div className="absolute top-[30%] left-[15%] w-72 h-72 rounded-full bg-violet-600/10 blur-3xl animate-float" />
      <div className="absolute top-[40%] right-[15%] w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-4xl text-center z-10 flex flex-col items-center">
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-white/10 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for New Projects</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Designing Digital <br />
          <span className="text-gradient">Experiences That Matter</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-foreground/75 max-w-2xl mb-10 leading-relaxed font-light">
          Hi, I&apos;m Destaz, a Full-Stack Developer specializing in crafting modern, high-performance web applications using React, Next.js, and sleek glassmorphic designs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-white/5"
          >
            <span>View My Projects</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-panel glass-panel-hover font-semibold px-8 py-3.5 rounded-full hover:text-violet-300 transition-colors"
          >
            <span>Let&apos;s Connect</span>
          </a>
        </div>

        {/* Feature Cards Grid (Premium visual indicators) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="glass-panel py-5 px-6 rounded-2xl flex flex-col items-center gap-2">
            <Terminal className="w-6 h-6 text-violet-400" />
            <h3 className="font-semibold text-sm">Clean Architecture</h3>
            <p className="text-xs text-foreground/60 text-center">Robust, scalable, and fully type-safe codebases.</p>
          </div>
          <div className="glass-panel py-5 px-6 rounded-2xl flex flex-col items-center gap-2">
            <Award className="w-6 h-6 text-cyan-400" />
            <h3 className="font-semibold text-sm">Design Excellence</h3>
            <p className="text-xs text-foreground/60 text-center">Stunning pixel-perfect interfaces with smooth animations.</p>
          </div>
          <div className="glass-panel py-5 px-6 rounded-2xl flex flex-col items-center gap-2">
            <Sparkles className="w-6 h-6 text-rose-400" />
            <h3 className="font-semibold text-sm">Dynamic Interactions</h3>
            <p className="text-xs text-foreground/60 text-center">Engaging micro-interactions and smooth user experiences.</p>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
