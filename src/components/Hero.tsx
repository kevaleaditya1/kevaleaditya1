import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

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

export function Hero() {
  const istTime = useISTClock();

  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="link-ink inline-flex items-center gap-2 text-sm mb-8"
            >
              <ArrowDown className="w-4 h-4" />
              Download resume
            </a>

            <h1 className="text-display-xl text-ink-fg mb-6">
              Aditya
              <br />
              <span className="text-copper">Kevale</span>
            </h1>

            <p className="text-ink-fg-soft text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
              Computer engineering student building computer vision models, smart
              contracts, and full-stack systems in Solapur.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium bg-copper text-ink hover:bg-copper/90 transition-colors"
              >
                Download resume
              </a>
              <a href="#projects" className="link-ink inline-flex items-center gap-2 text-sm">
                View projects
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-ink-fg-soft">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="link-ink inline-flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="link-ink inline-flex items-center gap-2">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="link-ink inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>

          <aside className="lg:pl-8 lg:border-l border-ink-line">
            <dl className="grid grid-cols-2 gap-px bg-ink-line border border-ink-line">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="bg-ink-soft px-6 py-7">
                  <dt className="font-display text-copper tabular text-4xl sm:text-5xl leading-none">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-xs text-ink-fg-faint leading-snug">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-ink-fg-faint">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              {istTime} IST · {PERSONAL_INFO.location}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}