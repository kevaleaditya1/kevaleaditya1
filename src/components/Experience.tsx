import { Reveal, SectionHeading, Pill, Tag } from "./ui";
import { EXPERIENCES } from "../data/portfolioData";

const TYPE_META: Record<string, { label: string; accent: "copper" | "teal" }> = {
  Internship: { label: "Internship", accent: "copper" },
  Volunteer: { label: "Volunteer", accent: "teal" },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            index="03"
            title="Experience"
            description="A blend of professional internships and community volunteer work."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          {EXPERIENCES.map((exp, i) => {
            const meta = TYPE_META[exp.type];
            return (
              <Reveal key={exp.id} delay={i * 80} className="h-full">
                <article className="bg-ink p-7 sm:p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <Pill accent={meta.accent}>{meta.label}</Pill>
                      <h3 className="text-display-md text-ink-fg mt-3">
                        {exp.role}
                      </h3>
                      <div className="mt-1 text-sm text-ink-fg-soft">
                        {exp.organization}
                      </div>
                      <div className="mt-1 text-xs font-mono text-ink-fg-faint">
                        {exp.location}
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-mono text-ink-fg-faint tabular">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm text-ink-fg-soft leading-relaxed">
                        <span
                          className={`w-1 h-1 mt-2 rounded-full shrink-0 ${
                            meta.accent === "copper" ? "bg-copper" : "bg-teal"
                          }`}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-ink-line mt-auto">
                    {exp.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}