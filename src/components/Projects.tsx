import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { Reveal, SectionHeading, Tag } from "./ui";
import { PROJECTS } from "../data/portfolioData";

const CATEGORY_META: Record<string, { label: string; accent: "copper" | "teal" }> = {
  ai: { label: "AI / ML", accent: "teal" },
  fullstack: { label: "Full-Stack", accent: "copper" },
  blockchain: { label: "Blockchain", accent: "copper" },
};

const ALL_CATEGORIES: Array<"all" | "ai" | "fullstack" | "blockchain"> = [
  "all",
  "ai",
  "fullstack",
  "blockchain",
];

export function Projects() {
  const [filter, setFilter] =
    useState<"all" | "ai" | "fullstack" | "blockchain">("all");
  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            index="02"
            title="Projects"
            description="A selection of work spanning deep learning, blockchain, and full-stack systems."
          />
        </Reveal>

        <Reveal delay={80} className="flex flex-wrap items-center gap-2 mb-10">
          {ALL_CATEGORIES.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={active ? "pill-active" : "pill-idle"}
              >
                {cat === "all" ? "All" : CATEGORY_META[cat].label}
              </button>
            );
          })}
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          {visible.map((project, i) => {
            const meta = CATEGORY_META[project.category];
            const dot =
              meta.accent === "copper" ? "bg-copper" : "bg-teal";
            const label =
              meta.accent === "copper" ? "text-copper" : "text-teal";
            return (
              <Reveal key={project.id} delay={i * 60} className="h-full">
                <article
                  className={`bg-ink p-7 sm:p-8 h-full flex flex-col ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <span className={`text-[11px] font-mono tabular ${label}`}>
                        {meta.label}
                      </span>
                      <h3 className="text-display-md text-ink-fg mt-1">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 text-xs font-mono text-ink-fg-faint tabular">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-ink-fg-soft text-sm sm:text-base leading-relaxed mb-5">
                    {project.subtitle}
                  </p>

                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {project.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm text-ink-fg-soft leading-relaxed">
                        <span className={`w-1 h-1 mt-2 rounded-full shrink-0 ${dot}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-ink-line mt-auto">
                    <span className="text-xs font-mono text-ink-fg-faint tabular">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-5">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="link-ink inline-flex items-center gap-1.5 text-sm"
                        >
                          <FolderGit2 className="w-4 h-4" /> Source
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="link-ink inline-flex items-center gap-1.5 text-sm"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-20 text-ink-fg-faint">
            No projects match this filter yet.
          </div>
        )}
      </div>
    </section>
  );
}