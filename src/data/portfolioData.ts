export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  bullets: string[];
  category: "ai" | "fullstack" | "blockchain";
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: "Internship" | "Volunteer";
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string;
}

export interface Publication {
  title: string;
  journal: string;
  description: string;
  link?: string;
}

export interface Achievement {
  title: string;
  event: string;
  location: string;
  badge: string;
}

export const PERSONAL_INFO = {
  name: "Aditya Kevale",
  title: "Computer Engineering Student & AI/ML Developer",
  tagline: "Building intelligent computer vision models, secure REST APIs, and full-stack systems.",
  location: "Solapur, India",
  email: "kevaleaditya1@gmail.com",
  phone: "+91 73850 55199",
  github: "https://github.com/kevaleaditya1",
  linkedin: "https://www.linkedin.com/in/kevaleaditya1/",
  resumePdf: "https://docs.google.com/document/d/1pBJOiTTBqoHpfr-kifk8l8pzE5u2-Uq_k5bYKnDI1PY/edit?usp=sharing",
  summary:
    "AI/ML-focused Computer Engineering student with hands-on experience building deep learning and computer vision applications using Python, OpenCV, and machine learning techniques. Passionate about model development, data preprocessing, feature engineering, and applying AI to solve real-world problems. Experienced in software engineering, REST APIs, SQL databases, and collaborative project development.",
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Marathi", level: "Native" },
    { name: "French", level: "Beginner" },
  ],
  stats: [
    { value: "4+", label: "Key Major Projects" },
    { value: "2", label: "Research Papers Published" },
    { value: "1st", label: "Runner-Up SYMBIoT Hackathon" },
    { value: "10+", label: "Tech Stack Tools" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "detectify",
    title: "Detectify",
    subtitle: "Pneumonia Detection from Chest X-Rays using Deep Learning",
    period: "Dec 2023 — Mar 2024",
    summary:
      "Designed and trained a Convolutional Neural Network (CNN) model to accurately detect pneumonia from chest X-ray images to assist medical diagnostics.",
    bullets: [
      "Preprocessed and augmented medical image datasets to improve model robustness and generalization under varying image conditions.",
      "Implemented real-time X-ray image classification using OpenCV for faster diagnostic decision support.",
      "Analyzed and visualized training metrics (loss, accuracy curves) to fine-tune hyper-parameters and minimize overfitting.",
    ],
    category: "ai",
    tags: ["Python", "CNN", "Deep Learning", "OpenCV", "Computer Vision", "Medical AI"],
    repoUrl: "https://github.com/kevaleaditya1/pneumonia-detection",
    featured: true,
  },
  {
    id: "musify",
    title: "Musify",
    subtitle: "Emotion-Based Music Recommendation System Using AI",
    period: "Nov 2022 — Apr 2023",
    summary:
      "An AI-driven music recommendation engine that analyzes live facial expressions in real-time to suggest mood-matching music playlists.",
    bullets: [
      "Trained a CNN model to classify facial emotions (happy, sad, angry, neutral) with high confidence.",
      "Integrated OpenCV for real-time webcam video feed emotion recognition and built a Tkinter graphical user interface.",
      "Automated personalized music playback recommendations based on real-time detected emotional states.",
    ],
    category: "ai",
    tags: ["Python", "CNN", "OpenCV", "Tkinter", "Deep Learning", "Emotion Detection"],
    repoUrl: "https://github.com/kevaleaditya1/Musify",
    featured: true,
  },
  {
    id: "credverify",
    title: "CredVerify",
    subtitle: "Decentralized Academic Credential Verification on Blockchain",
    period: "Sep 2024 — Nov 2025",
    summary:
      "Tamper-proof academic credential verification platform using Ethereum smart contracts and IPFS to eliminate document fraud and speed up verification.",
    bullets: [
      "Integrated IPFS decentralized storage with Ethereum smart contracts to immutably store academic certificates.",
      "Developed an intuitive React user interface connected to a backend API to streamline document issuance and instant verification.",
      "Reduced credential verification time by ~70% by substituting manual institutional checks with automated smart contract logic.",
      "Awarded 1st Runner-Up at SYMBIoT National Hackathon and published as an academic research paper.",
    ],
    category: "blockchain",
    tags: ["Solidity", "Ethereum", "IPFS", "React", "Smart Contracts", "REST APIs"],
    repoUrl: "https://github.com/kevaleaditya1/CredVerify",
    featured: true,
  },
  {
    id: "aana",
    title: "Aana",
    subtitle: "Modern Full-Stack Tech & Emerging Trends Blogging Platform",
    period: "Recent",
    summary:
      "Full-stack web application for publishing articles on emerging technology trends, AI developments, and modern gadgets.",
    bullets: [
      "Engineered and deployed a type-safe full-stack platform using TypeScript and Hono with optimized RESTful APIs.",
      "Architected PostgreSQL database schemas with Prisma ORM for efficient, reliable data querying and type safety.",
      "Built an admin content publishing workflow with modular backend structure for high speed and maintainability.",
    ],
    category: "fullstack",
    tags: ["TypeScript", "Hono", "PostgreSQL", "Prisma ORM", "React", "REST API"],
    repoUrl: "https://github.com/kevaleaditya1/Aana",
    liveUrl: "https://aana-tech.vercel.app",
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "cyber-success",
    role: "Java Full Stack Developer Intern",
    organization: "Cyber Success Training Institute",
    type: "Internship",
    location: "In-person",
    period: "Jan 2026 — Oct 2026",
    bullets: [
      "Mastered frontend fundamentals (HTML, CSS, JavaScript, React) alongside backend Java full-stack technologies.",
      "Developed enterprise backend microservices using Spring Boot, Hibernate, and RESTful API architectures.",
      "Built full-stack applications integrating modern UI components with Java Spring backend services and SQL databases.",
    ],
    skills: ["Java", "Spring Boot", "React", "JavaScript", "SQL", "REST APIs"],
  },
  {
    id: "code-club",
    role: "Code Club Member & Event Volunteer",
    organization: "Code Club AGPIT",
    type: "Volunteer",
    location: "Solapur, India",
    period: "Oct 2024 — Oct 2025",
    bullets: [
      "Supported coding workshops, peer learning groups, and technical skill development sessions for students.",
      "Co-organized and managed a 24-hour national-level hackathon, coordinating participants, mentors, and technical judging logistics.",
    ],
    skills: ["Event Operations", "Peer Mentorship", "Technical Coordination"],
  },
  {
    id: "cesa-committee",
    role: "Event Coordinator",
    organization: "CESA Committee",
    type: "Volunteer",
    location: "Solapur, India",
    period: "Oct 2024 — Oct 2025",
    bullets: [
      "Planned, conducted, and coordinated a campus Bug Bounty competition including registration, problem formulation, and evaluation.",
      "Played a lead operational role for AG Tech Fest 2025, handling sponsor relations, logistics, faculty coordination, and volunteer teams.",
    ],
    skills: ["Project Management", "Bug Bounty Coordination", "Leadership"],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "A.G. Patil Institute of Technology",
    degree: "Bachelor's of Technology in Computer Engineering",
    location: "Solapur, India",
    period: "2023 — Expected July 2026",
    details: "Focused on AI/ML, Data Structures, Machine Learning, Deep Learning, and Distributed Systems.",
  },
  {
    institution: "A.G. Patil Polytechnic Institute",
    degree: "Diploma in Computer Engineering",
    location: "Solapur, India",
    period: "July 2020 — May 2023",
    details: "Foundational computer engineering, Java programming, database administration, and web engineering.",
  },
  {
    institution: "Saint Thomas English Medium School",
    degree: "Secondary Education (Class X)",
    location: "Solapur, India",
    period: "July 2019 — July 2020",
    details: "Completed secondary school education with distinction.",
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "CredVerify — Decentralised Academic Credential Verification Using Blockchain",
    journal: "Research Publication",
    description:
      "A published paper detailing an Ethereum and IPFS architecture for cryptographic validation of university degrees, eliminating manual forgery checks and reducing audit timelines by ~70%.",
    link: "https://github.com/kevaleaditya1/CredVerify",
  },
  {
    title: "Musify — Emotion Based Music Recommendation System using AI and Deep Learning",
    journal: "Research Publication",
    description:
      "A research paper on real-time computer vision emotion recognition via CNNs coupled with automated audio stream selection.",
    link: "https://github.com/kevaleaditya1/Musify",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Runner-Up",
    event: "SYMBIoT National-Level Hackathon",
    location: "VVCE Mysore",
    badge: "🏆 Hackathon Winner",
  },
  {
    title: "3rd Prize Winner",
    event: "MSBTE State-Level Project Competition",
    location: "Anantrao Pawar College of Engineering, Pune",
    badge: "🥇 State Competition",
  },
  {
    title: "SIH Internal Finalist",
    event: "Smart India Hackathon (SIH)",
    location: "AGPIT Solapur",
    badge: "⭐ National Innovation",
  },
  {
    title: "1st Place Winner",
    event: "Science Day Competition",
    location: "AGPIT Solapur",
    badge: "🔬 Science & Tech Award",
  },
];

export const SKILL_GROUPS = [
  {
    category: "Programming Languages",
    icon: "Code",
    items: ["Python", "Java", "JavaScript", "SQL", "Solidity", "TypeScript"],
  },
  {
    category: "AI, ML & Vision",
    icon: "Brain",
    items: ["Deep Learning", "CNN", "Computer Vision", "OpenCV", "Data Preprocessing", "Feature Engineering", "Model Evaluation"],
  },
  {
    category: "Web & Databases",
    icon: "Globe",
    items: ["React", "Spring Boot", "Node.js", "Hono", "PostgreSQL", "MySQL", "Prisma ORM", "IPFS", "HTML5/CSS3", "Tailwind CSS"],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    items: ["Git", "GitHub", "Vite", "REST APIs", "Linux", "Tkinter", "VS Code"],
  },
];
