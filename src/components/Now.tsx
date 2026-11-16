import { useEffect } from "react";
import { Reveal, SectionHeading } from "./ui";
import { useGitHubStats, timeAgo } from "../hooks/useGitHubStats";

// A small "now" section — the kind of thing that makes a site feel alive.
// No analytics, no tracking, just a snapshot.
export function Now() {
  const gh = useGitHubStats();

  useEffect(() => {
    const fill = (sel: string, v: string) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = v;
    };
    fill("[data-gh-repos]", String(gh.repos));
    fill("[data-gh-stars]", String(gh.stars));
    fill("[data-gh-followers]", String(gh.followers));
    fill("[data-gh-commit]", timeAgo(gh.lastCommit));
  }, [gh]);
  return (
    <section id="now" className="relative py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            index="00"
            title="Now"
            description="What I'm up to at the moment. This is what I'd tell you if we bumped into each other."
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-px bg-ink-line border border-ink-line">
          <Reveal delay={80} className="bg-ink-soft p-7 sm:p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-xs text-copper tabular shrink-0 mt-0.5">
                  01
                </span>
                <div>
                  <p className="text-ink-fg font-medium">Finishing my degree</p>
                  <p className="text-sm text-ink-fg-soft mt-1 leading-relaxed">
                    Bachelor's in Computer Engineering at A.G. Patil Institute of
                    Technology, expected July 2026. Mostly deep learning, distributed
                    systems, and the occasional Java refactor.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-copper tabular shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <p className="text-ink-fg font-medium">Shipping CredVerify</p>
                  <p className="text-sm text-ink-fg-soft mt-1 leading-relaxed">
                    Turning the hackathon-winning credential platform into something
                    a registrar would actually run. Solidity, IPFS, the whole audit
                    trail.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-copper tabular shrink-0 mt-0.5">
                  03
                </span>
                <div>
                  <p className="text-ink-fg font-medium">Looking for work</p>
                  <p className="text-sm text-ink-fg-soft mt-1 leading-relaxed">
                    Software / Java Developer roles in Pune. Immediate joiner. If
                    you're building something with cameras, contracts, or care
                    systems, I'd genuinely like to talk.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={160} className="bg-ink-soft p-7 sm:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs text-teal tabular">
                00 — live
              </span>
              <span className="h-px flex-1 bg-ink-line" />
            </div>
            <div className="space-y-px flex-1">
              <div className="flex items-center justify-between py-4 border-b border-ink-line">
                <span className="text-sm text-ink-fg-soft">GitHub repos</span>
                <span className="font-mono tabular text-ink-fg" data-gh-repos>
                  —
                </span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-ink-line">
                <span className="text-sm text-ink-fg-soft">Total stars</span>
                <span className="font-mono tabular text-ink-fg" data-gh-stars>
                  —
                </span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-ink-line">
                <span className="text-sm text-ink-fg-soft">Followers</span>
                <span className="font-mono tabular text-ink-fg" data-gh-followers>
                  —
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-ink-fg-soft">Last commit</span>
                <span className="font-mono tabular text-ink-fg-faint" data-gh-commit>
                  —
                </span>
              </div>
            </div>
            <a
              href="https://github.com/kevaleaditya1"
              target="_blank"
              rel="noreferrer"
              className="mt-6 link-ink inline-flex items-center gap-1.5 text-sm"
            >
              kevaleaditya1 on GitHub
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}