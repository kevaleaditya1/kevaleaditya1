import { Reveal, SectionHeading, Tag } from "./ui";
import { EDUCATION_DATA, PUBLICATIONS } from "../data/portfolioData";

export function Education() {
  return (
    <section id="education" className="relative py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            index="04"
            title="Education &amp; Research"
            description="Academic background and published research work."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          <div className="bg-ink p-7 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs text-teal tabular">01 — academics</span>
              <span className="h-px flex-1 bg-ink-line" />
            </div>
            <div className="space-y-px">
              {EDUCATION_DATA.map((ed, i) => (
                <Reveal key={ed.institution} delay={i * 80}>
                  <div className="py-5 border-t border-ink-line first:border-t-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-ink-fg font-medium leading-snug">
                        {ed.institution}
                      </h4>
                      <span className="shrink-0 text-xs font-mono text-ink-fg-faint tabular">
                        {ed.period}
                      </span>
                    </div>
                    <p className="text-sm text-ink-fg-soft mb-1">{ed.degree}</p>
                    <p className="text-xs font-mono text-ink-fg-faint mb-2">
                      {ed.location}
                    </p>
                    {ed.details && (
                      <p className="text-sm text-ink-fg-soft leading-relaxed">
                        {ed.details}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="bg-ink p-7 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs text-copper tabular">02 — papers</span>
              <span className="h-px flex-1 bg-ink-line" />
            </div>
            <div className="space-y-px">
              {PUBLICATIONS.map((pub, i) => (
                <Reveal key={pub.title} delay={i * 80}>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-5 border-t border-ink-line first:border-t-0 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className="text-[11px] font-mono text-copper tabular">
                          {pub.journal}
                        </span>
                        <h4 className="text-ink-fg group-hover:text-copper transition-colors leading-snug mt-1">
                          {pub.title}
                        </h4>
                        <p className="text-sm text-ink-fg-soft mt-2 leading-relaxed">
                          {pub.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-ink-fg-faint group-hover:text-copper transition-colors">
                        ↗
                      </span>
                      <span className="sr-only">(opens in new tab)</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}