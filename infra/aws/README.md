# AWS Deployment Guide

This monorepo is containerized and ready for ECS Fargate or EC2 Docker deployment.

## Option 1: ECS Fargate (recommended)

1. Push container images to Amazon ECR:
   - `portfolio-web`
   - `portfolio-api`
2. Use Amazon RDS (PostgreSQL) for production database.
3. Create ECS cluster and task definitions for web and api services.
4. Configure environment variables in task definitions:
   - API task:
     - `DATABASE_URL`
     - `JWT_SECRET`
     - `ADMIN_EMAIL`
     - `ADMIN_PASSWORD`
     - `CORS_ORIGIN`
   - Web task:
     - `NEXT_PUBLIC_API_BASE_URL`
     - `NEXT_PUBLIC_SITE_URL`
5. Place the web service behind an Application Load Balancer.
6. Put API behind private networking or another ALB route target.
7. Enable CloudWatch logs and task auto scaling.

## Option 2: EC2 + Docker Compose

1. Provision EC2 instance and install Docker + Compose.
2. Copy repository and `.env` values.
3. Run `docker compose pull` (if using prebuilt images) or `docker compose build`.
4. Run `docker compose up -d`.
5. Use Nginx/ALB for TLS termination and domain routing.

## Production recommendations

- Store secrets in AWS Secrets Manager or SSM Parameter Store.
- Use IAM roles for ECS tasks.
- Enable HTTPS and HSTS.
- Keep database off public internet.
- Use CI pipeline to build and push versioned images.
