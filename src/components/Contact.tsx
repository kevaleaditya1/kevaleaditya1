import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { PERSONAL_INFO } from "../data/portfolioData";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            index="06"
            title="Get in touch"
            description="Open to Software / Java Developer roles — Pune-based startups and mid-size teams. Immediate joiner."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          <Reveal delay={80}>
            <div className="bg-ink p-7 sm:p-8">
              <p className="text-ink-fg-soft text-base leading-relaxed mb-8 max-w-md">
                Whether it's a full-stack system, an AI/ML product, or a research
                collaboration, I'd love to hear about your work and explore how I can
                contribute.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium bg-copper text-ink hover:bg-copper/90 transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="bg-ink p-7 sm:p-8">
              <ul className="divide-y divide-ink-line">
                <li>
                  <a
                    href={PERSONAL_INFO.resumePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-ink-fg">
                      <Download className="w-4 h-4 text-copper" />
                      Download resume
                    </span>
                    <span className="text-ink-fg-faint group-hover:text-copper transition-colors">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-ink-fg">
                      <Github className="w-4 h-4" /> GitHub
                    </span>
                    <span className="text-ink-fg-faint group-hover:text-copper transition-colors">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-ink-fg">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </span>
                    <span className="text-ink-fg-faint group-hover:text-copper transition-colors">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <span className="inline-flex items-center gap-2.5 text-ink-fg">
                      <Phone className="w-4 h-4" /> Phone
                    </span>
                    <span className="text-ink-fg tabular">{PERSONAL_INFO.phone}</span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}