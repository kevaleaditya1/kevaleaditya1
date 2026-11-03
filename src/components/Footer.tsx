import { Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-sm text-ink-fg-faint">
          © {new Date().getFullYear()} Aditya Kevale. Built with React, TypeScript &amp; Tailwind.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 text-ink-fg-faint hover:text-ink-fg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-ink-fg-faint hover:text-ink-fg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}