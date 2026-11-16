import { useState } from "react";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { PROJECTS } from "../data/portfolioData";

const categories = ["all", "ai", "fullstack", "blockchain"] as const;
const labels = { all: "All repositories", ai: "AI / ML", fullstack: "Full-stack", blockchain: "Blockchain" };

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("all");
  const projects = filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);
  return <section id="projects" className="profile-lower-section">
    <div className="lower-content-width">
      <Reveal><SectionHeading index="03" title="Projects" description="Selected repositories and products I have designed, built, and shipped." /></Reveal>
      <div className="repo-toolbar"><span className="repo-count">{projects.length} repositories</span><div>{categories.map((category) => <button key={category} className={`repo-filter ${filter === category ? "selected" : ""}`} onClick={() => setFilter(category)}>{labels[category]}</button>)}</div></div>
      <div className="portfolio-repo-grid">
        {projects.map((project, index) => <Reveal key={project.id} delay={index * 50}><article className="portfolio-repo">
          <div className="portfolio-repo-head"><GitBranch className="h-4 w-4" /><a href={project.repoUrl ?? "#"} target="_blank" rel="noreferrer">{project.title}</a><span>Public</span></div>
          <p className="repo-subtitle">{project.subtitle}</p>
          <p className="repo-summary">{project.summary}</p>
          <div className="repo-tags">{project.tags.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="portfolio-repo-footer"><span><i className={`repo-language ${project.category}`} />{project.category === "ai" ? "Python" : project.category === "blockchain" ? "Solidity" : "TypeScript"}</span><span><Star className="h-3.5 w-3.5" /> Featured</span><a href={project.liveUrl ?? project.repoUrl ?? "#"} target="_blank" rel="noreferrer"><ExternalLink className="h-3.5 w-3.5" /> Open</a></div>
        </article></Reveal>)}
      </div>
    </div>
  </section>;
}
