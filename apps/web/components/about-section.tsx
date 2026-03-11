"use client";

import { useGsapReveal } from "@/hooks/useGsapReveal";

export function AboutSection() {
  const revealRef = useGsapReveal();

  return (
    <section id="about" className="section-container">
      <div ref={revealRef} className="glass-card p-10">
        <h2 className="text-3xl font-bold md:text-4xl">About</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          I design and ship resilient full-stack systems from concept to cloud.
          My focus is a clean architecture: strong typing across the stack,
          reliable API boundaries, thoughtful UX motion, observability-ready
          backends, and delivery pipelines that let teams move quickly with
          confidence.
        </p>
      </div>
    </section>
  );
}
