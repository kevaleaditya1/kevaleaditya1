export interface TimelineItem {
  initial: string;
  title: string;
  role: string;
  period: string;
  description: string;
  link?: { label: string; url: string };
  accent: "amber" | "teal";
}

export interface Project {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; url: string }[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export interface Achievement {
  text: string;
}

export const SOCIALS = {
  email: "kevaleaditya1@gmail.com",
  github: "https://github.com/kevaleaditya1",
  linkedin: "https://www.linkedin.com/in/aditya-kevale",
  phone: "+91 73850 55199",
};

export const ABOUT = `I build full-stack systems the way I'd want them handed to me in production: typed at the edges, tested in the middle, and boring where boring means reliable. My background runs through a Diploma-to-B.Tech path at A.G. Patil Institute of Technology, Solapur — six years of computer engineering that taught me to read a stack trace before I trust a framework.

Most of what I ship sits on Java and Spring Boot on the backend, React on the front, and PostgreSQL underneath. CredVerify, my flagship project, moved academic-credential verification onto Ethereum and IPFS and cut manual verification time by roughly 70% — it placed 1st Runner-Up at the SYMBIoT national hackathon and became a published paper. I'm an immediate joiner, currently interviewing for Software / Java Developer roles with startups and mid-size teams around Pune.`;

export const EXPERIENCE: TimelineItem[] = [
  {
    initial: "CS",
    title: "Cyber Success",
    role: "Intern",
    period: "Oct 2024 — Oct 2025",
    description:
      "Went from HTML/CSS/JS fundamentals to full Java + Spring Boot development in a year, then applied both sides on real projects to pressure-test what I'd learned — frontend interfaces backed by Spring services.",
    accent: "amber",
  },
  {
    initial: "CC",
    title: "Code Club AGPIT",
    role: "Member & Volunteer",
    period: "Oct 2024 — Oct 2025",
    description:
      "Supported coding workshops and peer learning sessions, then helped run a 24-hour national-level hackathon end to end — coordinating participants, mentors, and logistics under a hard clock.",
    accent: "teal",
  },
  {
    initial: "CE",
    title: "CESA Committee",
    role: "Event Coordinator",
    period: "Oct 2024 — Oct 2025",
    description:
      "Planned and ran a Bug Bounty competition from registrations through evaluation, and took on planning and on-ground logistics for AG Tech Fest 2025, coordinating faculty, sponsors, and volunteers.",
    accent: "teal",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "CredVerify — Decentralised Academic Credential Verification",
    period: "Sep 2024 — Nov 2025",
    summary:
      "Tamper-proof academic credential verification built on Ethereum smart contracts and IPFS, replacing manual document checks with automated, on-chain logic.",
    bullets: [
      "Integrated IPFS with smart contracts to store and manage academic records immutably.",
      "Built a React interface with a backend API for document upload and verification workflows.",
      "Cut credential verification time by ~70% versus manual checks.",
      "1st Runner-Up, SYMBIoT National Hackathon at VVCE Mysore; work published as a research paper.",
    ],
    tags: ["Solidity", "Ethereum", "IPFS", "React", "ERC-721"],
    links: [
      { label: "Live", url: "https://credverify.tech" },
      { label: "GitHub", url: "https://github.com/kevaleaditya1/CredVerify" },
    ],
  },
  {
    title: "Aana — Blogging Platform",
    period: "2025",
    summary:
      "Full-stack blogging platform for tech and emerging-trends content, with an admin-driven publishing system on a type-safe backend.",
    bullets: [
      "Built and deployed the platform end-to-end using TypeScript and Hono with RESTful APIs.",
      "Designed the schema in PostgreSQL with Prisma ORM for type-safe data handling.",
      "Implemented an admin-driven content publishing system on a modular backend.",
      "Optimized queries and backend performance for fast content delivery.",
    ],
    tags: ["TypeScript", "Hono", "PostgreSQL", "Prisma"],
    links: [
      { label: "Live", url: "https://aana-tech.vercel.app" },
      { label: "GitHub", url: "https://github.com/kevaleaditya1/Aana" },
    ],
  },
  {
    title: "Log File Analyzer",
    period: "Nov 2025 — Feb 2026",
    summary:
      "Java tool for parsing large web server logs to surface traffic patterns, HTTP errors, and suspicious client activity.",
    bullets: [
      "Processed large logs using Java 8 Streams, Collections, lambdas, and regex.",
      "Used Streams and Collectors for filtering, sorting, grouping, and aggregation into traffic and status-code reports.",
      "Added multithreading via ExecutorService and NIO-based File I/O with full exception handling.",
      "Exported analytical reports to CSV for monitoring and follow-up analysis.",
    ],
    tags: ["Java 8", "Streams API", "Multithreading", "NIO"],
  },
  {
    title: "Expense Tracker",
    period: "Apr 2026 — Jul 2026",
    summary:
      "Console-based personal finance manager for recording, categorizing, and reporting on daily expenses.",
    bullets: [
      "Built expense categorization, budgeting, and monthly reporting on OOP principles and Collections.",
      "Automated category-wise spending reports with Streams, lambdas, Collectors, and Comparator.",
      "Added File I/O and serialization for persistent storage, with validation for data integrity.",
      "Used the Java Time API to manage transaction dates and monthly summaries.",
    ],
    tags: ["Java 8", "OOP", "Serialization", "Java Time API"],
  },
  {
    title: "Detectify — Pneumonia Detection from Chest X-Rays",
    period: "Dec 2023 — Mar 2024",
    summary:
      "CNN model trained to flag pneumonia from chest X-rays, built to support faster diagnosis.",
    bullets: [
      "Preprocessed and augmented medical images to improve robustness and generalization.",
      "Implemented real-time classification with OpenCV for faster diagnosis support.",
      "Visualized training metrics to fine-tune performance and reduce overfitting.",
    ],
    tags: ["CNN", "OpenCV", "Computer Vision"],
    links: [{ label: "GitHub", url: "https://github.com/kevaleaditya1/pneumonia-detection" }],
  },
  {
    title: "Musify — Emotion-Based Music Recommendation",
    period: "Nov 2022 — Apr 2023",
    summary:
      "AI system that recommends music by reading facial emotion in real time from a webcam feed.",
    bullets: [
      "Trained a CNN to classify emotions — happy, sad, angry, neutral — from facial expressions.",
      "Integrated OpenCV for live webcam emotion recognition and Tkinter for the interface.",
      "Automated personalized recommendations based on detected emotion.",
    ],
    tags: ["CNN", "OpenCV", "Tkinter"],
    links: [{ label: "GitHub", url: "https://github.com/kevaleaditya1/Musify" }],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: "A.G. Patil Institute of Technology",
    degree: "Bachelor's of Technology, Computer Engineering",
    period: "Aug 2023 — May 2026",
  },
  {
    school: "A.G. Patil Polytechnic Institute",
    degree: "Diploma, Computer Engineering",
    period: "July 2020 — July 2023",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { text: "1st Runner-Up, SYMBIoT National-Level Hackathon, VVCE Mysore" },
  { text: "3rd Prize, MSBTE Project Competition, Anantrao Pawar College of Engineering, Pune" },
  { text: "Selected for the internal round of Smart India Hackathon (SIH)" },
  { text: "Winner, Science Day Competition, AGPIT Solapur" },
];

export const SKILLS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "JavaScript"] },
  { label: "Frontend", items: ["HTML", "CSS", "React.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Spring Boot", "Spring", "Hibernate", "JPA", "REST APIs"] },
  { label: "Data", items: ["PostgreSQL", "MySQL", "Prisma", "IPFS"] },
  { label: "Tools", items: ["Git", "GitHub"] },
];
