export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold">
          Portfolio<span className="text-accent">.</span>
        </a>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
