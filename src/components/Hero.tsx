import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Mark } from "./Mark";
import HoloMosaic from "./HoloMosaic";
import SplitText from "./SplitText";
import { useGitHubStats, timeAgo } from "../hooks/useGitHubStats";
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
  const gh = useGitHubStats();

  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <HoloMosaic
          color="#0d1117"
          metalColor="#f85149"
          spectrum="warm"
          tileSize={0.8}
          gap={0.08}
          roundness={0.15}
          bevel={0.35}
          rotation={0}
          scatter={0.3}
          tilt={0.35}
          swirl={1}
          ripple={0.6}
          bands={1.3}
          softness={0.5}
          intensity={1.25}
          saturation={0.1}
          glitter={0.3}
          sheen={0.8}
          grain={0.08}
          speed={0.3}
          opacity={0.6}
          intro={true}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.3}
          flipOnClick={false}
          lightMode={false}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-fg-soft hover:text-ink-fg transition-colors mb-8"
            >
              <ArrowDown className="w-4 h-4" />
              Download resume
            </a>

            <h1 className="text-display-xl text-ink-fg mb-6">
              <SplitText
                text="Aditya"
                tag="span"
                className="text-ink-fg"
                splitType="chars"
                effect="rise"
                duration={1.2}
                delay={50}
                staggerFrom="start"
              />
              <br />
              <SplitText
                text="Kevale"
                tag="span"
                className="text-copper"
                splitType="chars"
                effect="rise"
                duration={1.2}
                delay={50}
                staggerFrom="start"
              />
            </h1>

            <p className="text-ink-fg-soft text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
              <SplitText
                text="I build things with cameras, contracts, and care systems. Right now that means computer vision models, a credential platform that won a national hackathon, and a full-stack blogging app with a real database under it."
                tag="p"
                splitType="words"
                effect="fade"
                duration={1.0}
                delay={30}
                staggerFrom="start"
              />
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-copper text-ink hover:opacity-90 transition-opacity"
              >
                Download resume
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 text-sm text-ink-fg-soft hover:text-ink-fg transition-colors">
                View projects
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-ink-fg-soft">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink-fg transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink-fg transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-2 hover:text-ink-fg transition-colors">
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

            <div className="mt-8 grid grid-cols-2 gap-px bg-ink-line border border-ink-line">
              <div className="bg-ink-soft px-5 py-5">
                <dt className="text-xs font-mono text-ink-fg-faint tabular">repos</dt>
                <dd className="font-display text-copper tabular text-3xl mt-1" data-gh-repos>
                  {gh.repos}
                </dd>
              </div>
              <div className="bg-ink-soft px-5 py-5">
                <dt className="text-xs font-mono text-ink-fg-faint tabular">stars</dt>
                <dd className="font-display text-copper tabular text-3xl mt-1" data-gh-stars>
                  {gh.stars}
                </dd>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-ink-fg-faint">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              {istTime} IST · {PERSONAL_INFO.location}
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-ink-fg-faint">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              last push {timeAgo(gh.lastCommit)}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}