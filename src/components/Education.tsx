import { ExternalLink, GraduationCap, MapPin, ScrollText } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { EDUCATION_DATA, PUBLICATIONS } from "../data/portfolioData";

export function Education() {
  return <section id="education" className="profile-lower-section">
    <div className="lower-content-width"><Reveal><SectionHeading index="05" title="Education & research" description="The academic foundation behind my engineering work." /></Reveal>
      <div className="education-grid"><div className="education-panel"><div className="lower-panel-header"><span><GraduationCap className="h-4 w-4" /> Education</span></div>{EDUCATION_DATA.map((education, index) => <Reveal key={education.institution} delay={index * 70}><article className="education-card"><span className="education-period">{education.period}</span><h3>{education.institution}</h3><p>{education.degree}</p><small><MapPin className="h-3.5 w-3.5" /> {education.location}</small>{education.details && <div className="education-detail">{education.details}</div>}</article></Reveal>)}</div>
        <div className="education-panel"><div className="lower-panel-header"><span><ScrollText className="h-4 w-4" /> Publications</span></div>{PUBLICATIONS.map((publication, index) => <Reveal key={publication.title} delay={index * 70}><a className="publication-card" href={publication.link} target="_blank" rel="noreferrer"><span>{publication.journal}</span><h3>{publication.title}</h3><p>{publication.description}</p><ExternalLink className="h-4 w-4" /></a></Reveal>)}</div></div>
    </div>
  </section>;
}
