"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Simulate progress load
    const duration = 2000; // 2 seconds total loading animation
    const intervalTime = 20; // update every 20ms
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        // Add a slight delay before hiding loading screen for ultra-smooth transition
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 300);
      }
    }, intervalTime);

    // Backup: in case window load event is faster or slower, keep it aligned
    const handleLoad = () => {
      // If fully loaded, we can speed up or just let the animation run its aesthetic course.
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b]"
        >
          {/* Ambient Background Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-[20%] right-[30%] w-[300px] h-[300px] rounded-full bg-cyan-600/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: "-2s" }} />
          </div>

          <div className="relative flex flex-col items-center z-10">
            {/* Logo Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8"
            >
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                Destaz.
              </span>
            </motion.div>

            {/* Circular Progress Loader */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer ring glow */}
              <div className="absolute inset-0 rounded-full border border-violet-500/10 animate-ping opacity-30" />
              
              {/* Circular SVG Progress */}
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  className="stroke-white/5"
                  strokeWidth="3"
                  fill="transparent"
                />
                {/* Foreground circle with animation */}
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  className="stroke-[url(#loading-gradient)]"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={251.2} // 2 * pi * r (2 * 3.14159 * 40 = 251.2)
                  animate={{
                    strokeDashoffset: 251.2 - (251.2 * progress) / 100,
                  }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                  strokeLinecap="round"
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="loading-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Percentage text */}
              <div className="absolute text-sm font-semibold tracking-wider text-white/80 font-mono">
                {progress}%
              </div>
            </div>

            {/* Subtitle / Status bar */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-xs uppercase tracking-[0.2em] text-white/60 font-medium"
            >
              {progress < 100 ? "Initializing Portfolio" : "Welcome"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
