"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2025 - Present",
    title: "Senior Full-Stack Engineer",
    description:
      "Leading full lifecycle delivery for customer-facing SaaS platforms and internal developer tooling."
  },
  {
    year: "2023 - 2025",
    title: "Full-Stack Engineer",
    description:
      "Built scalable APIs, modern frontend systems, and release automation for high-growth teams."
  },
  {
    year: "2021 - 2023",
    title: "Frontend Engineer",
    description:
      "Delivered motion-rich, performance-optimized interfaces with strong accessibility standards."
  }
];

export function TimelineSection() {
  return (
    <section id="experience" className="section-container">
      <h2 className="text-3xl font-bold md:text-4xl">Experience Timeline</h2>
      <div className="relative mt-10 space-y-8 border-l border-slate-700 pl-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1 size-3 rounded-full bg-accent" />
            <p className="text-sm uppercase tracking-wider text-accent">{item.year}</p>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
