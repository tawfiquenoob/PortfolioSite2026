"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="section-container flex min-h-[85vh] flex-col justify-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm uppercase tracking-[0.2em] text-accent"
      >
        Full-Stack Engineer | DevOps Engineer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-5xl font-black leading-tight md:text-7xl"
      >
        Building scalable products with modern web and cloud infrastructure.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 max-w-2xl text-lg text-muted"
      >
        TypeScript-first architecture, production-ready APIs, optimized UX, and
        deployment pipelines built for real business outcomes.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 flex gap-4"
      >
        <Button href="#projects">View Projects</Button>
        <Button href="#contact" className="bg-slate-200 text-slate-900">
          Contact Me
        </Button>
      </motion.div>
    </section>
  );
}
