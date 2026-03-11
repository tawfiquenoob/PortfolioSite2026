# Full-Stack Portfolio Platform

Production-grade full-stack portfolio built as a professional monorepo using:

- Next.js (App Router) + TypeScript
- Node.js + Express API + TypeScript
- PostgreSQL + Prisma ORM
- Docker + Docker Compose
- GitHub Actions CI
- AWS-ready container deployment architecture

## Project Structure

```text
.
├── apps
│   ├── web   # Next.js frontend
│   └── api   # Express + Prisma backend
├── infra
│   ├── postgres
│   └── aws
├── docker-compose.yml
└── .github/workflows/ci.yml
```

## Features

- Animated premium portfolio UI with Framer Motion + GSAP
- Dynamic projects from PostgreSQL (not hardcoded)
- REST API with layered architecture (controllers, services, middleware)
- Admin dashboard with JWT login and project CRUD
- SEO metadata, sitemap, robots, image optimization, lazy loading
- Dockerized local and production-like setup
- CI pipeline for type checks, lint, build, and Docker image builds

## Quick Start

1. Copy environment template:
   - `cp .env.example .env`
2. Start stack:
   - `docker compose up --build`
3. Open:
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:4000`

> Note: the `seed` service seeds sample projects on startup.

## Local Development Without Docker

From repository root:

1. Install dependencies:
   - `npm ci`
2. API setup:
   - `cp apps/api/.env.example apps/api/.env`
   - Configure `DATABASE_URL` to your local Postgres
   - `npm run prisma:generate -w apps/api`
   - `npm run prisma:migrate -w apps/api`
   - `npm run seed -w apps/api`
3. Web setup:
   - `cp apps/web/.env.example apps/web/.env.local`
4. Start dev servers:
   - `npm run dev`

## API Endpoints

- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects` (JWT protected)
- `PUT /api/projects/:id` (JWT protected)
- `DELETE /api/projects/:id` (JWT protected)
- `POST /api/auth/login`

## Admin Credentials

Set via environment variables:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

Use `/admin` route in the web app to manage projects.

## CI/CD Workflow

GitHub Actions workflow at `.github/workflows/ci.yml`:

1. Install dependencies
2. Generate Prisma client and run migrations
3. Seed DB for pipeline checks
4. Run TypeScript checks
5. Run lint
6. Build applications
7. Build Docker images

## AWS Deployment

See `infra/aws/README.md` for ECS/EC2 deployment instructions.
