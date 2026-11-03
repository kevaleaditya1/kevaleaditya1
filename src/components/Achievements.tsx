import { Reveal, SectionHeading } from "./ui";
import { ACHIEVEMENTS } from "../data/portfolioData";

const ICONS = ["01", "02", "03", "04"];

function cleanBadge(badge: string) {
  return badge.replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "").trim();
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            index="05"
            title="Highlights"
            description="Recognition earned through competitions, hackathons, and project work."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          {ACHIEVEMENTS.map((ach, i) => (
            <Reveal key={ach.title} delay={i * 80}>
              <article className="bg-ink p-7 sm:p-8">
                <div className="flex items-start gap-5">
                  <span className="font-mono text-sm text-copper tabular shrink-0 mt-0.5">
                    {ICONS[i]}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-ink-fg-faint tabular">
                      {cleanBadge(ach.badge)}
                    </span>
                    <h4 className="text-ink-fg font-medium leading-snug mt-1">
                      {ach.title}
                    </h4>
                    <p className="text-sm text-ink-fg-soft mt-1">
                      {ach.event}
                    </p>
                    <p className="text-xs font-mono text-ink-fg-faint mt-2">
                      {ach.location}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}