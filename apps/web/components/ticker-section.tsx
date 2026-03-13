"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "CI/CD",
  "AWS",
  "GitHub Actions"
];

export function TickerSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "none"
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden border-y border-slate-800 py-6">
      <div ref={trackRef} className="flex w-[200%] gap-8 whitespace-nowrap text-lg">
        {[...skills, ...skills].map((skill, index) => (
          <span key={`${skill}-${index}`} className="text-slate-300">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
