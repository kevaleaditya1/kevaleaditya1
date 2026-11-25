import { useState } from "react";
import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Link as LinkIcon,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Search,
  Star,
  Trophy,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { ACHIEVEMENTS, PERSONAL_INFO, PROJECTS } from "../data/portfolioData";

const contributionCells = Array.from({ length: 154 }, (_, index) => {
  const wave = (index * 17 + Math.floor(index / 7) * 11) % 10;
  return wave < 4 ? 0 : wave < 6 ? 1 : wave < 8 ? 2 : wave < 9 ? 3 : 4;
});

const pinnedProjects = PROJECTS.slice(0, 6);

function repoLanguage(project: (typeof PROJECTS)[number]) {
  if (project.tags.includes("TypeScript")) return "TypeScript";
  if (project.tags.includes("Python")) return "Python";
  if (project.tags.includes("Solidity")) return "Solidity";
  return project.tags[0] ?? "Project";
}

export function ProfileDashboard() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div className="profile-shell">
      <header className="profile-topbar">
        <div className="profile-topbar-inner">
          <button
            className="profile-icon-button mobile-only"
            aria-label="Open navigation menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <a href="#top" className="profile-github-mark" aria-label="Home">
            <Github className="h-7 w-7" />
          </a>
          <a href="#top" className="profile-username">
            kevaleaditya1
          </a>
          <div className="profile-search">
            <Search className="h-4 w-4" />
            <span>Type / to search</span>
            <kbd>/</kbd>
          </div>
          <nav className="profile-utility-nav" aria-label="Quick links">
            <a href="#projects">Repositories</a>
            <a href="#experience">Experience</a>
            <a href={PERSONAL_INFO.resumePdf} target="_blank" rel="noreferrer">
              Resume
            </a>
          </nav>
          <a className="profile-avatar profile-avatar-small" href="#top" aria-label="About Aditya">
            <img src="/adityaa.jpg" alt="Aditya Kevale" />
          </a>
        </div>
      </header>

      {/* Mobile Navigation Sheet */}
      {mobileNavOpen && (
        <div className="mobile-nav-backdrop" onClick={closeMobileNav}>
          <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <div className="flex items-center gap-2">
                <Github className="h-6 w-6 text-f0f6fc" />
                <span className="font-semibold text-white">kevaleaditya1</span>
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
              <a href="#top" onClick={closeMobileNav} className="mobile-nav-link">
                <BookOpen className="h-4 w-4 text-copper" /> Overview
              </a>
              <a href="#projects" onClick={closeMobileNav} className="mobile-nav-link">
                <BriefcaseBusiness className="h-4 w-4 text-copper" /> Repositories
              </a>
              <a href="#tech-stack" onClick={closeMobileNav} className="mobile-nav-link">
                <Wrench className="h-4 w-4 text-copper" /> Tech Stack
              </a>
              <a href="#experience" onClick={closeMobileNav} className="mobile-nav-link">
                <CalendarDays className="h-4 w-4 text-copper" /> Experience
              </a>
              <a href="#education" onClick={closeMobileNav} className="mobile-nav-link">
                <GraduationCap className="h-4 w-4 text-copper" /> Education
              </a>
              <a href="#achievements" onClick={closeMobileNav} className="mobile-nav-link">
                <Trophy className="h-4 w-4 text-copper" /> Highlights
              </a>
              <a href="#contact" onClick={closeMobileNav} className="mobile-nav-link">
                <Mail className="h-4 w-4 text-copper" /> Contact
              </a>

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

      <div className="profile-tabbar">
        <div className="profile-content-width profile-tabs">
          <a className="profile-tab active" href="#top">
            <BookOpen className="h-4 w-4" /> Overview
          </a>
          <a className="profile-tab" href="#projects">
            <BriefcaseBusiness className="h-4 w-4" /> Repositories <span>6</span>
          </a>
          <a className="profile-tab" href="#tech-stack">
            <Wrench className="h-4 w-4" /> Tech Stack
          </a>
          <a className="profile-tab" href="#experience">
            <CalendarDays className="h-4 w-4" /> Experience
          </a>
          <a className="profile-tab" href="#education">
            <GraduationCap className="h-4 w-4" /> Education
          </a>
          <a className="profile-tab" href="#achievements">
            <Trophy className="h-4 w-4" /> Highlights
          </a>
          <a className="profile-tab" href="#contact">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </div>

      <main className="profile-content-width profile-main" id="top">
        <aside className="profile-sidebar">
          <div className="profile-avatar profile-avatar-large">
            <img src="/adityaa.jpg" alt="Aditya Kevale" />
          </div>
          <h1>{PERSONAL_INFO.name}</h1>
          <p className="profile-handle">kevaleaditya1 · he/him</p>
          <p className="profile-bio">{PERSONAL_INFO.summary}</p>
          <a className="profile-edit-button" href={`mailto:${PERSONAL_INFO.email}`}>
            Contact me
          </a>
          <div className="profile-meta-list">
            <span><MapPin className="h-4 w-4" /> {PERSONAL_INFO.location}</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
              <LinkIcon className="h-4 w-4" /> github.com/kevaleaditya1
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
              <Users className="h-4 w-4" /> linkedin.com/in/kevaleaditya1
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <Mail className="h-4 w-4" /> {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="profile-sidebar-highlights">
            <div className="profile-sidebar-heading">
              <h2>Highlights</h2>
              <span>Recognition</span>
            </div>
            <div className="profile-highlight-list">
              {ACHIEVEMENTS.map((achievement) => (
                <article className="profile-highlight-row" key={achievement.title}>
                  <span className="profile-highlight-badge"><Trophy className="h-4 w-4" /></span>
                  <div>
                    <strong>{achievement.title}</strong>
                    <span>{achievement.event}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>

        <div className="profile-feed">
          <section className="profile-readme profile-panel">
            <div className="profile-panel-heading">
              <span>kevaleaditya1 / README.md</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="Open GitHub">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="profile-readme-body">
              <p className="profile-kicker">Hi there <span aria-hidden="true">👋</span></p>
              <h2>Hello, I am Aditya Kevale <span aria-hidden="true">👋</span></h2>
              <p className="profile-readme-lede">{PERSONAL_INFO.tagline}</p>
              <p className="profile-readme-copy">{PERSONAL_INFO.summary}</p>
              <p className="profile-readme-copy">
                I enjoy turning complex ideas into useful products — from computer vision models and decentralized credentials to reliable full-stack applications.
              </p>
              <div className="profile-readme-facts">
                <span>🌱 Currently learning distributed systems</span>
                <span>🎯 Open to software and Java developer roles</span>
                <span>📍 Based in {PERSONAL_INFO.location}</span>
              </div>
              <div className="profile-readme-actions">
                <a href="#projects">View projects</a>
                <a href={PERSONAL_INFO.resumePdf} target="_blank" rel="noreferrer">View resume</a>
              </div>
            </div>
          </section>

          <section className="profile-section">
            <div className="profile-section-title">
              <h2>Pinned</h2>
              <a href="#projects">View all</a>
            </div>
            <div className="profile-repo-grid">
              {pinnedProjects.map((project) => (
                <a className="profile-repo-card" href={project.repoUrl ?? "#projects"} target="_blank" rel="noreferrer" key={project.id}>
                  <div className="profile-repo-title">
                    <BookOpen className="h-4 w-4" />
                    <strong>{project.title}</strong>
                    <span className="profile-public">Public</span>
                  </div>
                  <p>{project.subtitle}</p>
                  <div className="profile-repo-meta">
                    <span><i className={`language-dot language-${repoLanguage(project).toLowerCase()}`} />{repoLanguage(project)}</span>
                    <span><Star className="h-3.5 w-3.5" /> {project.featured ? "Featured" : "1"}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="profile-panel contribution-panel">
            <div className="profile-section-title">
              <h2>Contribution activity</h2>
              <span className="profile-muted">Last year</span>
            </div>
            <div className="contribution-summary">
              <strong>164 contributions</strong> in the last year
            </div>
            <div className="contribution-chart">
              <div className="contribution-chart-inner">
                <div className="contribution-months">
                  {["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
                <div className="contribution-grid" aria-label="Contribution activity graph">
                  {contributionCells.map((level, index) => (
                    <span className={`contribution-cell level-${level}`} key={index} />
                  ))}
                </div>
                <div className="contribution-legend">
                  <span>Learn how we count contributions</span>
                  <span>Less <i className="contribution-cell level-0" /><i className="contribution-cell level-2" /><i className="contribution-cell level-4" /> More</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
