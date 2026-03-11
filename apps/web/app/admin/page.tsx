"use client";

import { useEffect, useMemo, useState } from "react";
import { getApiBaseUrl } from "@/lib/api";
import { Project } from "@/lib/types";

const apiBase = getApiBaseUrl();

type ProjectForm = Omit<Project, "id" | "createdAt">;

const emptyForm: ProjectForm = {
  title: "",
  description: "",
  techStack: [],
  githubUrl: "",
  liveUrl: "",
  imageUrl: "",
  featured: false
};

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState<ProjectForm>(emptyForm);
  const [editId, setEditId] = useState<number | null>(null);
  const isAuthed = useMemo(() => Boolean(token), [token]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_admin_token");
    if (saved) {
      setToken(saved);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const response = await fetch(`${apiBase}/api/projects`);
    if (!response.ok) return;
    const data = (await response.json()) as Project[];
    setProjects(data);
  }

  async function handleLogin() {
    const response = await fetch(`${apiBase}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      alert("Login failed");
      return;
    }

    const data = (await response.json()) as { token: string };
    setToken(data.token);
    localStorage.setItem("portfolio_admin_token", data.token);
  }

  async function handleSave() {
    const payload = {
      ...form,
      techStack: form.techStack.filter(Boolean)
    };

    const endpoint = editId
      ? `${apiBase}/api/projects/${editId}`
      : `${apiBase}/api/projects`;

    const response = await fetch(endpoint, {
      method: editId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      alert("Save failed");
      return;
    }

    setForm(emptyForm);
    setEditId(null);
    await fetchProjects();
  }

  async function handleDelete(id: number) {
    const response = await fetch(`${apiBase}/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      alert("Delete failed");
      return;
    }

    await fetchProjects();
  }

  function startEdit(project: Project) {
    setEditId(project.id);
    setForm({
      title: project.title,
      description: project.description,
      techStack: project.techStack,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      imageUrl: project.imageUrl,
      featured: project.featured
    });
  }

  if (!isAuthed) {
    return (
      <main className="section-container">
        <h1 className="text-3xl font-bold">Admin Login</h1>
        <div className="glass-card mt-8 max-w-lg space-y-4 p-6">
          <input
            aria-label="Email"
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Admin email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            aria-label="Password"
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            onClick={handleLogin}
            className="rounded-full bg-accent px-5 py-2 font-semibold text-slate-950"
          >
            Sign In
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="section-container">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="glass-card space-y-4 p-6">
          <h2 className="text-xl font-semibold">
            {editId ? "Edit Project" : "Add Project"}
          </h2>
          <input
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Title"
            value={form.title}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, title: event.target.value }))
            }
          />
          <textarea
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Description"
            rows={4}
            value={form.description}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, description: event.target.value }))
            }
          />
          <input
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Tech stack (comma separated)"
            value={form.techStack.join(", ")}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                techStack: event.target.value
                  .split(",")
                  .map((entry) => entry.trim())
              }))
            }
          />
          <input
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="GitHub URL"
            value={form.githubUrl}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, githubUrl: event.target.value }))
            }
          />
          <input
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Live URL"
            value={form.liveUrl}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, liveUrl: event.target.value }))
            }
          />
          <input
            className="w-full rounded-lg bg-slate-800 p-3"
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, imageUrl: event.target.value }))
            }
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, featured: event.target.checked }))
              }
            />
            Featured project
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-full bg-accent px-5 py-2 font-semibold text-slate-950"
            >
              {editId ? "Update" : "Create"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setForm(emptyForm);
                }}
                className="rounded-full border border-slate-600 px-5 py-2"
              >
                Cancel
              </button>
            )}
          </div>
        </section>
        <section className="glass-card p-6">
          <h2 className="text-xl font-semibold">Existing Projects</h2>
          <div className="mt-4 space-y-4">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-slate-700 p-4"
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <div className="mt-3 flex gap-3 text-sm">
                  <button
                    type="button"
                    onClick={() => startEdit(project)}
                    className="text-accent"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(project.id)}
                    className="text-rose-300"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
