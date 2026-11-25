import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  MapPin,
  Menu,
  MoveUpRight,
  Trophy,
  X,
} from "lucide-react";
import { useState } from "react";
import HoloMosaic from "./HoloMosaic";
import ScrollReveal from "./ScrollReveal";
import SplitText from "./SplitText";
import { Button, buttonVariants } from "./ui/button";

const CAL_URL = "https://cal.com/kevaleaditya1";
const RESUME_URL = "https://docs.google.com/document/d/1pBJOiTTBqoHpfr-kifk8l8pzE5u2-Uq_k5bYKnDI1PY/edit?usp=sharing";

const projects = [
  {
    number: "01",
    name: "CredVerify",
    type: "Team project · Deployed",
    title: "Academic credentials, verified with confidence.",
    description:
      "A blockchain-based platform for issuing and verifying academic credentials. Built as a full-stack team project and deployed for real-world access.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Ethers.js", "Solidity", "IPFS", "PostgreSQL"],
    //href: "https://credverify.tech",
    github: "https://github.com/kevaleaditya1/CredVerify",
    accent: "project-coral",
  },
  {
    number: "02",
    name: "Aana",
    type: "Independent project · Deployed",
    title: "A home for thoughtful technology stories.",
    description:
      "A technology publication covering gadgets, smartphones, and AI. Designed and developed independently, from the application through deployment.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
    href: "https://aanaa.blog",
    github: "https://github.com/kevaleaditya1/Aana-Blogging-Platform",
    accent: "project-lilac",
  },
  {
    number: "03",
    name: "Expense Tracker",
    type: "Personal project",
    title: "A practical full-stack application for everyday expenses.",
    description:
      "An expense-management application with a Spring Boot REST API and Angular client. Includes expense CRUD, account registration and login, and Elasticsearch persistence.",
    technologies: ["Java", "Spring Boot", "Angular", "Elasticsearch", "JWT", "Swagger"],
    href: undefined,
    github: undefined,
    accent: "project-sage",
  },
];

const capabilities = [
  { heading: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { heading: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT"] },
  { heading: "Data", items: ["MongoDB", "PostgreSQL", "MySQL", "Elasticsearch", "Prisma"] },
  { heading: "Workflow", items: ["Git & GitHub", "Postman", "Vercel", "VS Code", "Linux"] },
];

const experience = [
  {
    type: "Training · Ongoing",
    role: "Full-Stack Development",
    organization: "Cyber Success",
    date: "Jan 2026 — Present",
    place: "Pune, Maharashtra",
    description:
      "On-site, training-based program covering Core and Advanced Java, React, SQL/MySQL, Spring Boot, REST APIs, and full-stack development assignments.",
  },
  {
    type: "Community",
    role: "Club Member & Volunteer",
    organization: "Code Club AGPIT",
    date: "Feb 2024 — Jul 2025",
    place: "Solapur, Maharashtra",
    description:
      "Contributed to peer learning and helped organize a 24-hour national-level hackathon with more than 150 participants.",
  },
  {
    type: "Leadership",
    role: "Event Coordinator",
    organization: "CESA Committee",
    date: "Oct 2024 — Oct 2025",
    place: "Solapur, Maharashtra",
    description:
      "Helped coordinate student events, including a Bug Bounty competition and AG Tech Fest 2025.",
  },
];

const education = [
  {
    qualification: "Bachelor of Technology",
    subject: "Computer Engineering",
    school: "A.G. Patil Institute of Technology",
    date: "Aug 2023 — May 2026",
    result: "CGPA 7.53",
  },
  {
    qualification: "Diploma",
    subject: "Computer Engineering",
    school: "A.G. Patil Polytechnic Institute",
    date: "Jul 2020 — Jul 2023",
    result: "77.7%",
  },
];

const awards = [
  {
    title: "1st Runner-Up",
    event: "SYMBIoT National-Level Hackathon",
    location: "VVCE, Mysore",
  },
  {
    title: "3rd Prize",
    event: "MSBTE State-Level Project Competition",
    location: "Anantrao Pawar College of Engineering, Pune",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="portfolio-section-heading">
      <p className="portfolio-eyebrow">{eyebrow}</p>
      <ScrollReveal
        splitBy="words"
        effect="rise"
        mode="enter"
        duration={0.65}
        stagger={0.035}
        baseOpacity={0}
        baseRotation={0}
        enableBlur={false}
        containerClassName="portfolio-heading-reveal"
        textClassName="portfolio-heading-text"
      >
        {title}
      </ScrollReveal>
      <p className="portfolio-section-description">{description}</p>
    </div>
  );
}

export function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-root">
      <header className="portfolio-header">
        <nav className="portfolio-nav" aria-label="Main navigation">
          <a className="portfolio-wordmark" href="#home" aria-label="Aditya Kevale home">
            <img className="wordmark-mark" src="/portfolio-avatar.png" alt="" aria-hidden="true" />
            <span>Aditya Kevale<span className="wordmark-dot">.</span></span>
          </a>
          <div className={`portfolio-nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="/activity" onClick={closeMenu}>Activity</a>
            <a className="mobile-book-link" href={CAL_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Book a call <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="portfolio-nav-actions">
            <a className={buttonVariants({ variant: "accent", size: "sm" })} href={CAL_URL} target="_blank" rel="noreferrer">
              Book a call <ArrowUpRight size={15} />
            </a>
          </div>
          <Button
            type="button"
            variant="glass"
            size="icon"
            className="portfolio-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </nav>
      </header>

      <main>
        <section className="portfolio-hero" id="home">
          <div className="hero-mosaic" aria-hidden="true">
            <HoloMosaic
              color="#08090b"
              metalColor="#db8e70"
              spectrum="warm"
              tileSize={0.8}
              gap={0.1}
              roundness={0.12}
              bevel={0.28}
              scatter={0.18}
              tilt={0.2}
              swirl={0.4}
              ripple={0.35}
              bands={1}
              softness={0.5}
              intensity={0.72}
              saturation={0.08}
              glitter={0.08}
              sheen={0.55}
              grain={0.03}
              speed={0.08}
              opacity={0.3}
              intro={false}
              mouseInteraction={false}
              paused={false}
            />
          </div>
          <div className="hero-inner portfolio-container">
            <div className="hero-copy">
              <div className="hero-status">
                <span className="status-light" />
                Available for full-time roles
              </div>
              <p className="hero-overline">FULL-STACK WEB DEVELOPER <span>·</span> PUNE, INDIA</p>
              <h1 className="hero-title">
                <SplitText
                  text="Aditya"
                  tag="span"
                  className="hero-title-line"
                  splitType="words"
                  effect="rise"
                  duration={0.9}
                  delay={70}
                  staggerFrom="start"
                  textAlign="left"
                  trigger="load"
                  mask
                />
                {" "}
                <SplitText
                  text="Kevale"
                  tag="span"
                  className="hero-title-line hero-title-accent"
                  splitType="words"
                  effect="rise"
                  duration={0.9}
                  delay={70}
                  staggerFrom="start"
                  textAlign="left"
                  trigger="load"
                  mask
                />
              </h1>
              <p className="hero-role">Full-stack web developer</p>
              <p className="hero-intro">
                I’m a Computer Engineering graduate building web products from interface to API,
                data, and deployment.
              </p>
              <div className="hero-actions">
                <a className={buttonVariants({ size: "lg" })} href="#work">
                  Explore my work <ArrowDownRight size={16} />
                </a>
                <a className={buttonVariants({ variant: "glass", size: "lg" })} href={CAL_URL} target="_blank" rel="noreferrer">
                  Book a conversation <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="hero-socials">
                <a href="https://github.com/kevaleaditya1" target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub <ArrowUpRight size={13} />
                </a>
                <a href="https://www.linkedin.com/in/kevaleaditya1" target="_blank" rel="noreferrer">
                  <ExternalLink size={15} /> LinkedIn <ArrowUpRight size={13} />
                </a>
                <a href="mailto:kevaleaditya1@gmail.com">
                  Mail  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-photo-frame glass-surface">
                <img src="/adityaa.jpg" alt="Portrait of Aditya Kevale" />
                <div className="photo-caption">
                  <span className="photo-caption-index">01 / 01</span>
                  <span>Aditya Kevale <span>·</span> Developer</span>
                </div>
              </div>
              <div className="hero-note glass-surface">
                <span className="note-icon"><Code2 size={17} /></span>
                <div><small>Currently focused on</small><strong>Full-stack products</strong></div>
              </div>
              <div className="hero-location"><MapPin size={14} /> PUNE, INDIA</div>
              <div className="hero-index">PORTFOLIO <span>—</span> 2026</div>
            </div>
          </div>
          <a href="#work" className="hero-scroll-hint"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="work-section portfolio-section" id="work">
          <div className="portfolio-container">
            <SectionHeading
              eyebrow="01 / SELECTED WORK"
              title="A few things I’ve built."
              description="A mix of team and independent projects — made to solve practical problems and keep me learning."
            />
            <div className="work-grid">
              {projects.map((project) => (
                <article className={`work-card glass-surface ${project.accent}`} key={project.name}>
                  <div className="work-card-topline">
                    <span className="work-number">{project.number}</span>
                    <span className="work-type">{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="work-technologies">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <div className="work-links">
                    {project.href && <a href={project.href} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={15} /></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Source <ArrowUpRight size={13} /></a>}
                    {!project.href && !project.github && <span className="work-private"><Check size={14} /> Personal build</span>}
                  </div>
                  <div className="work-watermark">{project.number}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section portfolio-section" id="about">
          <div className="portfolio-container about-layout">
            <div className="about-main">
              <SectionHeading
                eyebrow="02 / A LITTLE ABOUT ME"
                title="Curious by nature. Practical by choice."
                description="I’m early in my career, and I care about building strong fundamentals through real projects, thoughtful collaboration, and consistent learning."
              />
              <div className="about-story glass-surface">
                <p>
                  My background is in Computer Engineering, and my focus is web development across the stack. I like connecting clean, responsive interfaces with reliable APIs and databases — understanding how the pieces fit together rather than treating them as separate checkboxes.
                </p>
                <p>
                  I’m currently building my experience with React and JavaScript-based web development, while continuing to strengthen my Java full-stack skills. I’m open to entry-level opportunities, internships, and teams that value curiosity, honest communication, and steady growth.
                </p>
                <a className="text-link" href={RESUME_URL} target="_blank" rel="noreferrer">
                  View resume <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <aside className="capabilities-panel glass-surface">
              <div className="capabilities-header">
                <div><span className="portfolio-eyebrow">MY TOOLKIT</span><h3>Tools I work with</h3></div>
                <Code2 size={18} />
              </div>
              <div className="capability-list">
                {capabilities.map((group) => (
                  <div className="capability-group" key={group.heading}>
                    <h4>{group.heading}</h4>
                    <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="experience-section portfolio-section" id="experience">
          <div className="portfolio-container">
            <SectionHeading
              eyebrow="03 / EXPERIENCE & COMMUNITY"
              title="Learning by doing."
              description="Training and community work that have shaped how I learn and contribute."
            />
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-row" key={item.organization}>
                  <div className="experience-index">0{index + 1}</div>
                  <div className="experience-role">
                    <span>{item.type}</span>
                    <h3>{item.role}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <p className="experience-description">{item.description}</p>
                  <div className="experience-meta"><span>{item.date}</span><span><MapPin size={13} /> {item.place}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section portfolio-section">
          <div className="portfolio-container education-layout">
            <div>
              <SectionHeading
                eyebrow="04 / EDUCATION"
                title="The foundations."
                description="Formal study in computer engineering, with a focus on understanding how software works from the ground up."
              />
            </div>
            <div className="education-cards">
              {education.map((item) => (
                <article className="education-card glass-surface" key={item.qualification}>
                  <div className="education-card-icon"><GraduationCap size={19} /></div>
                  <div className="education-card-content">
                    <span>{item.date}</span>
                    <h3>{item.qualification}</h3>
                    <h4>{item.subject}</h4>
                    <p>{item.school}</p>
                  </div>
                  <strong className="education-result">{item.result}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recognition-section portfolio-section" id="recognition">
          <div className="portfolio-container recognition-layout">
            <div>
              <SectionHeading
                eyebrow="05 / RECOGNITION"
                title="Small wins. Big lessons."
                description="Recognition earned through student competitions and collaborative problem-solving."
              />
            </div>
            <div className="recognition-content">
              <div className="award-list">
                {awards.map((award, index) => (
                  <article className="award-card glass-surface" key={award.event}>
                    <div className="award-icon">{index === 0 ? <Trophy size={18} /> : <Award size={18} />}</div>
                    <div><span>{award.location}</span><h3>{award.title}</h3><p>{award.event}</p></div>
                    <MoveUpRight size={16} className="award-arrow" />
                  </article>
                ))}
              </div>
              <article className="research-note">
                <span className="research-label"><BriefcaseBusiness size={14} /> RESEARCH</span>
                <h3>Emotion Based Music Recommendation System using AI and Deep Learning</h3>
                <p>Co-authored research published in the International Journal of Innovative Research in Computer and Communication Engineering.</p>
                <a href="http://ijircce.com/admin/main/storage/app/pdf/19z8eZ6fMsx5RQrEDZPTwxNrYG8GvTf7r7FhSNxB.pdf" target="_blank" rel="noreferrer">Link</a>
              </article>
              <article className="research-note">
                <h3>Musify : Emotion Based Music Recommendation System using AI and Deep Learning.</h3>
                <p>A research paper on real-time computer vision emotion recognition via CNNs coupled with automated audio stream selection.</p>
                <a href="http://ijircce.com/admin/main/storage/app/pdf/pVjonGUQQnRtR9BaWs1UmAfYAFigaGpvFND3bJq5.pdf" target="_blank" rel="noreferrer">Link</a>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section portfolio-section" id="contact">
          <div className="portfolio-container">
            <div className="contact-card glass-surface">
              <div className="contact-orb" aria-hidden="true" />
              <div className="contact-copy">
                <p className="portfolio-eyebrow">06 / LET’S CONNECT</p>
                <h2>Have a good problem to solve?</h2>
                <p>I’m looking for an opportunity to contribute, learn from a team, and grow into a dependable developer. Let’s talk.</p>
                <div className="contact-actions">
                  <a className={buttonVariants({ size: "lg" })} href={CAL_URL} target="_blank" rel="noreferrer">
                    Book a conversation <ArrowUpRight size={16} />
                  </a>
                  <a className="contact-email" href="mailto:kevaleaditya1@gmail.com">kevaleaditya1@gmail.com <ArrowRight size={15} /></a>
                </div>
              </div>
              <div className="contact-aside">
                <span className="contact-aside-icon"><MapPin size={17} /></span>
                <span>Based in Pune, India</span>
                <span className="contact-availability"><span /> Open to opportunities across India and remote</span>
                <a href={RESUME_URL} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
                <a href="https://www.linkedin.com/in/kevaleaditya1" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
              </div>
            </div>
            <footer className="portfolio-footer">
              <a className="portfolio-wordmark" href="#home"><img className="wordmark-mark" src="/portfolio-avatar.png" alt="" aria-hidden="true" /><span>Aditya Kevale<span className="wordmark-dot">.</span></span></a>
              <span>Designed with intention · Built with React</span>
              <a href="#home">Back to top <ArrowUpRight size={13} /></a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
