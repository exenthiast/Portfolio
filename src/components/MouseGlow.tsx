"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement with spring physics
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of the glow diameter (150px) to center it on cursor
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden mix-blend-screen hidden md:block"
    >
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-violet-600/15 via-cyan-500/10 to-rose-500/10 blur-[80px]"
      />
    </motion.div>
  );
}
