import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { PERSONAL_INFO } from "../data/portfolioData";

export function Contact() {
  const links = [{ label: "Email", value: PERSONAL_INFO.email, icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }, { label: "GitHub", value: "kevaleaditya1", icon: Github, href: PERSONAL_INFO.github }, { label: "LinkedIn", value: "kevaleaditya1", icon: Linkedin, href: PERSONAL_INFO.linkedin }, { label: "Phone", value: PERSONAL_INFO.phone, icon: Phone, href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}` }];
  return <section id="contact" className="profile-lower-section contact-section">
    <div className="lower-content-width"><Reveal><SectionHeading index="07" title="Get in touch" description="Have an idea, an opportunity, or just want to say hello? My inbox is open." /></Reveal>
      <div className="contact-panel"><div className="contact-hero"><span className="contact-prompt">$ ./start-a-conversation</span><h3>Let&apos;s build something useful.</h3><p>I&apos;m currently open to software, Java, and AI/ML opportunities. If you&apos;are working on a meaningful problem, I&apos;d love to hear about it.</p><a className="contact-primary" href={`mailto:${PERSONAL_INFO.email}`}><Mail className="h-4 w-4" /> Send me an email <ArrowUpRight className="h-4 w-4" /></a></div>
        <div className="contact-links">{links.map(({ label, value, icon: Icon, href }) => <a key={label} href={href} target={label === "Email" || label === "Phone" ? undefined : "_blank"} rel="noreferrer"><Icon className="h-5 w-5" /><span><small>{label}</small><strong>{value}</strong></span><ArrowUpRight className="h-4 w-4" /></a>)}<a href={PERSONAL_INFO.resumePdf} target="_blank" rel="noreferrer"><Download className="h-5 w-5" /><span><small>Resume</small><strong>Download my resume</strong></span><ArrowUpRight className="h-4 w-4" /></a></div>
      </div>
    </div>
  </section>;
}
