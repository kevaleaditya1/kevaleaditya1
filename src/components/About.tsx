import { Reveal, SectionHeading, Tag } from "./ui";
import { PERSONAL_INFO, SKILL_GROUPS } from "../data/portfolioData";

export function About() {
  return (
    <section id="about" className="relative py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            index="01"
            title="About"
            description="A brief snapshot of who I am, what I work on, and where I'm headed."
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          <Reveal delay={80}>
            <div className="max-w-2xl">
              {PERSONAL_INFO.summary.split("\n\n").map((para, i) => (
                <p key={i} className="text-ink-fg-soft text-base sm:text-lg leading-relaxed mb-5 last:mb-0">
                  {para}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-fg-faint">
                {PERSONAL_INFO.languages.map((lang) => (
                  <span key={lang.name} className="font-mono tabular">
                    {lang.name} <span className="text-ink-line">·</span> {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="border border-ink-line bg-ink-soft/40 p-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-xs text-teal tabular">00 — stack</span>
                <span className="h-px flex-1 bg-ink-line" />
              </div>
              <div className="space-y-6">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.category}>
                    <div className="text-xs font-mono text-ink-fg-faint mb-2.5">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}