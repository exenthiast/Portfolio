"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// CUSTOMIZE YOUR LINKS HERE
const GITHUB_URL = "https://github.com/exenthiast"; 
const LINKEDIN_URL = "https://www.linkedin.com/in/alfiz-desta-0a0318326/";
const CV_URL = "/CV_ALFIZ.pdf"; // Updated to match your uploaded CV file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isCVOpen, setIsCVOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to detect current visible section
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-5 bg-background/70 backdrop-blur-lg border-b border-white/10"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-300">
            <span className="text-gradient">Destaz.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 glass-panel py-2.5 px-4 rounded-full relative">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredIndex === index;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`text-sm font-semibold transition-colors py-2 px-5 rounded-full relative z-10 ${
                      isActive || isHovered ? "text-white" : "text-foreground/50"
                    }`}
                  >
                    {/* Active or Hover Background Pill */}
                    {(isHovered || (isActive && hoveredIndex === null)) && (
                      <motion.span
                        layoutId="navbar-active-hover"
                        className={`absolute inset-0 rounded-full -z-10 ${
                          isHovered ? "bg-white/10" : "bg-white/5 border border-white/10"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>

          {/* Socials & CV Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/5 border border-white/5 py-1 px-2 rounded-full">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-white/5 transition-all text-foreground/80 hover:text-white"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-white/5 transition-all text-foreground/80 hover:text-white"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

              {/* CV Button */}
              <button
                onClick={() => setIsCVOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-violet-500/10 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Lihat CV</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t-0 py-8 px-8 flex flex-col gap-5 animate-fade-in backdrop-blur-xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold transition-colors ${
                    isActive ? "text-violet-400" : "text-foreground/75 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <hr className="border-white/10 my-1" />
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 text-foreground/80 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 text-foreground/80 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsCVOpen(true);
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-bold px-6 py-2.5 rounded-full cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Lihat CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* PDF View Modal Overlay */}
      <AnimatePresence>
        {isCVOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCVOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] glass-panel rounded-3xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2 text-white">
                  <FileText className="w-5 h-5 text-violet-400" />
                  <span className="font-bold text-base">Curriculum Vitae — Alfiz Desta</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CV_URL}
                    download
                    className="p-2 rounded-full hover:bg-white/5 text-foreground/80 hover:text-white transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setIsCVOpen(false)}
                    className="p-2 rounded-full hover:bg-white/5 text-foreground/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Container Frame */}
              <div className="flex-grow bg-zinc-900/40 p-2">
                <iframe
                  src={`${CV_URL}#toolbar=0`}
                  className="w-full h-full rounded-2xl border-0"
                  title="Destaz CV"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
