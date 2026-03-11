import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: "3D Product Landing Page",
        description:
          "Immersive product storytelling with smooth 3D interactions and motion-driven conversion-focused layouts.",
        techStack: ["Next.js", "TypeScript", "Three.js", "GSAP"],
        githubUrl: "https://github.com/example/3d-product-landing",
        liveUrl: "https://3d-product.example.com",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        featured: true
      },
      {
        title: "AI SaaS Dashboard",
        description:
          "Multi-tenant analytics dashboard with role-based access, billing workflows, and AI-generated insights.",
        techStack: ["React", "Node.js", "PostgreSQL", "Prisma"],
        githubUrl: "https://github.com/example/ai-saas-dashboard",
        liveUrl: "https://ai-dashboard.example.com",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        featured: true
      },
      {
        title: "Interactive WebGL Experience",
        description:
          "High-performance WebGL microsite built for marketing campaigns with cinematic transitions and storytelling.",
        techStack: ["WebGL", "TypeScript", "GSAP", "Vite"],
        githubUrl: "https://github.com/example/webgl-experience",
        liveUrl: "https://webgl-experience.example.com",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        featured: false
      },
      {
        title: "Animated Marketing Site",
        description:
          "Fast, SEO-optimized corporate marketing site with animation system, CMS integration, and design consistency.",
        techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Node.js"],
        githubUrl: "https://github.com/example/animated-marketing-site",
        liveUrl: "https://animated-marketing.example.com",
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        featured: false
      }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seed error", error);
    await prisma.$disconnect();
    process.exit(1);
  });
