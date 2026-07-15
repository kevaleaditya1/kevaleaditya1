import { useEffect, useState } from "react";
import {
  SOCIALS,
  ABOUT,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
  ACHIEVEMENTS,
  SKILLS,
} from "./data";
import "./index.css";

function useISTClock(): string {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ist = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      setTime(ist);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="section-label">
      <span className="section-label-index">// {index}</span>
      <span className="section-label-text">{label}</span>
    </div>
  );
}

function App() {
  const istTime = useISTClock();

  return (
    <div className="page">
      <header className="topbar">
        <span className="brand">AK</span>
        <nav className="topnav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="avatar">AK</div>
          <h1 className="name">Aditya Kevale</h1>
          <p className="tagline">
            Java &amp; Spring Boot developer building verifiable, full-stack systems —
            from smart contracts to server logs.
          </p>
          <div className="status-line">
            <span className="prompt">$</span> status: open_to_work — immediate joiner
            <span className="cursor" aria-hidden="true" />
          </div>
          <div className="hero-links">
            <a href={`mailto:${SOCIALS.email}`}>Email</a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-box">
            Download résumé ↓
          </a>
          <div className="ist-clock">{istTime} IST</div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <SectionLabel index="01" label="about" />
          <div className="about-text">
            {ABOUT.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skill-group" key={group.label}>
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <SectionLabel index="02" label="experience & involvement" />
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div className={`timeline-marker ${item.accent}`}>{item.initial}</div>
                <div className="timeline-content">
                  <div className="timeline-head">
                    <h3>{item.title}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <div className="role">{item.role}</div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <SectionLabel index="03" label={`projects (${PROJECTS.length})`} />
          <div className="projects">
            {PROJECTS.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span className="period">{project.period}</span>
                </div>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-bullets">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        key={link.label}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <SectionLabel index="04" label="education" />
          <div className="education-list">
            {EDUCATION.map((ed) => (
              <div className="education-item" key={ed.school}>
                <div className="education-head">
                  <h3>{ed.school}</h3>
                  <span className="period">{ed.period}</span>
                </div>
                <div className="role">{ed.degree}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section">
          <SectionLabel index="05" label="highlights" />
          <ul className="achievements">
            {ACHIEVEMENTS.map((a, i) => (
              <li key={i}>
                <span className="marker">✦</span>
                {a.text}
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <SectionLabel index="06" label="contact" />
          <p className="contact-line">
            Open to Software / Java Developer roles — Pune-based startups and mid-size
            teams. Immediate joiner.
          </p>
          <div className="contact-links">
            <a href={`mailto:${SOCIALS.email}`} className="btn-primary">
              {SOCIALS.email}
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
              Download résumé
            </a>
          </div>
          <div className="contact-socials">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className="dot">·</span>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="dot">·</span>
            <span>{SOCIALS.phone}</span>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Aditya Kevale. Built with React &amp; TypeScript.</footer>
    </div>
  );
}

export default App;
