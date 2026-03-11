export function ContactSection() {
  return (
    <section id="contact" className="section-container pb-28">
      <div className="glass-card p-10">
        <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Open to full-time and freelance opportunities involving modern
          full-stack architecture, platform engineering, and high-impact product
          development.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-accent">
          <a href="mailto:hello@portfolio.dev" className="hover:opacity-80">
            hello@portfolio.dev
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/example"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
