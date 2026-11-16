import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Reveal, SectionHeading, Tag } from "./ui";
import { EXPERIENCES } from "../data/portfolioData";

export function Experience() {
  return <section id="experience" className="profile-lower-section">
    <div className="lower-content-width"><Reveal><SectionHeading index="04" title="Experience" description="Places where I have learned, contributed, and built with others." /></Reveal>
      <div className="timeline-panel">{EXPERIENCES.map((experience, index) => <Reveal key={experience.id} delay={index * 80}><article className="timeline-item">
        <div className="timeline-icon"><BriefcaseBusiness className="h-4 w-4" /></div>
        <div className="timeline-content"><div className="timeline-topline"><span className="timeline-type">{experience.type}</span><span>{experience.period}</span></div><h3>{experience.role}</h3><p className="timeline-company">{experience.organization}</p><p className="timeline-location"><MapPin className="h-3.5 w-3.5" /> {experience.location}</p><ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="repo-tags">{experience.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div></div>
      </article></Reveal>)}</div>
    </div>
  </section>;
}
