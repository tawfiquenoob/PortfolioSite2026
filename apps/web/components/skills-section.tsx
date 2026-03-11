"use client";

import { motion } from "framer-motion";

const skillBadges = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma ORM",
  "Docker",
  "GitHub Actions",
  "AWS ECS/EC2"
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>
      <div className="mt-8 flex flex-wrap gap-4">
        {skillBadges.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.06 }}
            className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
