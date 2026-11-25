import { useEffect, useState } from "react";
import { Menu, X, FileText, Github, Linkedin, Mail, BriefcaseBusiness, CalendarDays, GraduationCap, Trophy, Wrench, BookOpen } from "lucide-react";
import { cn } from "./ui";
import { Mark } from "./Mark";
import { PERSONAL_INFO } from "../data/portfolioData";

const NAV_LINKS = [
  { label: "Overview", href: "#top", icon: BookOpen },
  { label: "Projects", href: "#projects", icon: BriefcaseBusiness },
  { label: "Tech Stack", href: "#tech-stack", icon: Wrench },
  { label: "Experience", href: "#experience", icon: CalendarDays },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Highlights", href: "#achievements", icon: Trophy },
  { label: "Contact", href: "#contact", icon: Mail },
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

  const closeMobileNav = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 portfolio-nav",
          scrolled
            ? "bg-ink-raised/95 border-b border-ink-line"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#top"
            aria-label="Aditya Kevale — home"
            className="text-ink-fg hover:text-copper transition-colors"
          >
            <Mark className="w-8 h-8" />
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm text-ink-fg-soft hover:text-ink-fg transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              );
            })}
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
            onClick={() => setOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Sheet */}
      {open && (
        <div className="mobile-nav-backdrop" onClick={closeMobileNav}>
          <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <div className="flex items-center gap-2">
                <Mark className="w-6 h-6 text-ink-fg" />
                <span className="font-semibold text-white">Aditya Kevale</span>
              </div>
              <button
                className="mobile-nav-close"
                onClick={closeMobileNav}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mobile-nav-links">
              <span className="mobile-nav-section-title">Navigation</span>
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileNav}
                    className="mobile-nav-link"
                  >
                    <Icon className="h-4 w-4 text-copper" />
                    {link.label}
                  </a>
                );
              })}

              <div className="mobile-nav-divider" />

              <span className="mobile-nav-section-title">Links & Resume</span>
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileNav}
                className="mobile-nav-action-btn"
              >
                <FileText className="h-4 w-4" /> View Resume (PDF)
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileNav}
                className="mobile-nav-link"
              >
                <Github className="h-4 w-4" /> GitHub Profile
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileNav}
                className="mobile-nav-link"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={closeMobileNav}
                className="mobile-nav-link"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}