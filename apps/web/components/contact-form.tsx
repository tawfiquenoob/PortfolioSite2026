"use client";

import { FormEvent, useState } from "react";
import { getApiBaseUrl } from "@/lib/api";

const projectTypes = [
  "Landing Page",
  "SaaS Dashboard",
  "E-commerce",
  "Portfolio",
  "Internal Tool",
  "Other"
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message
        })
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setName("");
      setEmail("");
      setProjectType(projectTypes[0]);
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass-card mt-8 max-w-3xl space-y-4 p-8">
      <h2 className="text-2xl font-bold">Start a Project</h2>
      <p className="text-sm text-muted">
        Send your project details. Submissions are stored in the portfolio admin
        inbox, and email notifications are sent when Resend is configured.
      </p>
      <input
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="w-full rounded-lg bg-slate-800 p-3"
        placeholder="Your Name"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full rounded-lg bg-slate-800 p-3"
        placeholder="Your Email"
      />
      <select
        value={projectType}
        onChange={(event) => setProjectType(event.target.value)}
        className="w-full rounded-lg bg-slate-800 p-3"
      >
        {projectTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <textarea
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="w-full rounded-lg bg-slate-800 p-3"
        rows={6}
        placeholder="Tell me about your goals, timeline, and expectations."
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-300">
          Message sent successfully. I will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-300">
          Could not send your message. Please try again.
        </p>
      )}
    </form>
  );
}
