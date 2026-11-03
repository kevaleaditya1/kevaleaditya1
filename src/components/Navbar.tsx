import { useEffect, useState } from "react";
import { Menu, X, FileText, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "./ui";
import { PERSONAL_INFO } from "../data/portfolioData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/90 border-b border-ink-line"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-copper font-semibold text-lg tracking-tight">
          {"<AK />"}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-ink-fg-soft hover:text-ink-fg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium border border-ink-line text-ink-fg hover:border-copper-line transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
          <div className="flex items-center gap-1 text-ink-fg-faint">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:text-ink-fg rounded-sm hover:bg-ink-soft transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:text-ink-fg rounded-sm hover:bg-ink-soft transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" className="p-2 hover:text-ink-fg rounded-sm hover:bg-ink-soft transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-ink-fg-soft hover:text-ink-fg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-ink-line px-5 pb-5 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 text-ink-fg-soft hover:text-ink-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-sm text-sm font-medium border border-ink-line text-ink-fg"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </a>
        </div>
      )}
    </header>
  );
}