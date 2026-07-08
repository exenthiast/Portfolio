"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Mocking response
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-violet-400" />
          <span>Get In Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Info Card */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl" />

          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Let&apos;s talk about your project</h3>
            <p className="text-foreground/70 text-sm font-light leading-relaxed mb-8">
              I am open to freelance work, full-time positions, or just having a chat about tech. Feel free to shoot me a message!
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-foreground/50 block font-mono">EMAIL ME</span>
                  <a href="mailto:alfizdestaap@gmail.com" className="text-sm font-semibold hover:underline">
                    alfizdestaap@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl text-violet-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-foreground/50 block font-mono">LOCATION</span>
                  <span className="text-sm font-semibold text-foreground">Yogyakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/5 text-[11px] text-foreground/45 font-mono">
            © {new Date().getFullYear()} DESTAZ. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-foreground/60">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-foreground/60">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-foreground/60">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:bg-black/10 dark:focus:bg-white/10 transition-colors resize-none"
                placeholder="Hi, I want to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 font-semibold py-3.5 rounded-2xl text-white transition-all hover:shadow-lg disabled:opacity-50"
            >
              <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
              <Send className="w-4 h-4" />
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-400 text-center font-semibold animate-pulse">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
