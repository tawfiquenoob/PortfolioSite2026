import dotenv from "dotenv";

dotenv.config();

function requireEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const config = {
  port: Number(process.env.API_PORT ?? 4000),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
  databaseUrl: requireEnv("DATABASE_URL"),
  jwtSecret: requireEnv("JWT_SECRET", "change-me"),
  adminEmail: requireEnv("ADMIN_EMAIL", "admin@portfolio.dev"),
  adminPassword: requireEnv("ADMIN_PASSWORD", "supersecurepassword"),
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  contactNotificationEmail:
    process.env.CONTACT_NOTIFICATION_EMAIL ?? "admin@portfolio.dev",
  contactFromEmail:
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>"
};
