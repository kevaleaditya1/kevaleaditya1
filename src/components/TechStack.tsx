import { BrainCircuit, Code2, Database, Wrench } from "lucide-react";
import { Reveal } from "./ui";
import { SKILL_GROUPS } from "../data/portfolioData";
import ScrollReveal from "./ScrollReveal";

const GROUP_ICONS = [Code2, BrainCircuit, Database, Wrench];
const LOGO_SLUGS: Record<string, string> = {
  Python: "python", Java: "openjdk", JavaScript: "javascript", TypeScript: "typescript",
  React: "react", "Node.js": "nodedotjs", "Spring Boot": "springboot",
  PostgreSQL: "postgresql", MySQL: "mysql", Solidity: "solidity", Git: "git",
  GitHub: "github", Vite: "vite", OpenCV: "opencv", Hono: "hono",
  "Tailwind CSS": "tailwindcss", "REST APIs": "fastapi",
};

function TechLogo({ name }: { name: string }) {
  const slug = LOGO_SLUGS[name];
  return slug ? (
    <img
      className="tech-logo-image"
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  ) : (
    <span className="tech-logo-fallback">{name.slice(0, 2).toUpperCase()}</span>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="profile-lower-section">
      <div className="lower-content-width">
        <ScrollReveal
          splitBy="chars"
          effect="rise"
          duration={1.2}
          stagger={0.05}
          containerClassName="tech-stack-panel"
        >
          Tech stack
        </ScrollReveal>
        <Reveal className="tech-stack-panel">
          <div className="lower-panel-header">
            <div><span className="panel-eyebrow">01 — toolbox</span></div>
            <span className="panel-muted">tools I use to build and ship</span>
          </div>
          <div className="tech-groups">
            {SKILL_GROUPS.map((group, index) => {
              const Icon = GROUP_ICONS[index] ?? Wrench;
              return <div className="tech-group" key={group.category}>
                <div className="tech-group-title"><Icon className="h-4 w-4" /><span>{group.category}</span></div>
                <div className="tech-logo-grid">
                  {group.items.map((item) => <div className="tech-logo-card" key={item}><TechLogo name={item} /><span>{item}</span></div>)}
                </div>
              </div>;
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
