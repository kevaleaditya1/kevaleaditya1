import { Award, Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { ACHIEVEMENTS } from "../data/portfolioData";

export function Achievements() {
  return <section id="achievements" className="profile-lower-section">
    <div className="lower-content-width"><Reveal><SectionHeading index="06" title="Highlights" description="Milestones and recognition from competitions, research, and community work." /></Reveal>
      <div className="achievement-grid">{ACHIEVEMENTS.map((achievement, index) => <Reveal key={achievement.title} delay={index * 70}><article className="achievement-card"><div className="achievement-medal"><Trophy className="h-5 w-5" /></div><div><span>{achievement.badge}</span><h3>{achievement.title}</h3><p>{achievement.event}</p><small><Award className="h-3.5 w-3.5" /> {achievement.location}</small></div></article></Reveal>)}</div>
    </div>
  </section>;
}
