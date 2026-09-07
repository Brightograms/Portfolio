export const profile = {
  name: "Bright Kalu",
  initials: "BK",
  role: "Junior Software Developer & CS Student",
  tagline: "Junior Software Developer who enjoys building things for the web.",
  location: "Lagos, Nigeria",
  email: "kalubright675@gmail.com",
  github: "https://github.com/Brightograms",
  linkedin: "https://www.linkedin.com/in/bright-kalu",
  twitter: "https://x.com/bright-kalu",
  resumeUrl: "#",
  Dp: "/profile.png",
};

export const about = {
  paragraphs: [
    "I am a Fullstack Developer and Computer Science student. I got into coding by building small projects, then harder projects and i have contributed to advanced real-world projects — every new project is a chance to learn something I couldn't do before.",
    "So far I've worked mostly with JavaScript and TypeScript on the web: React and Next.js on the front end, Node.js and Express.Js for APIs and backend basics, and MongoDB, Azure CosmosDB and PostgreSQL for the database. I'm comfortable with tools like Git, Payload CMS, Azure Cosmos DB, Shadcn/UI, Figma,testing fundamentals, and deploying apps. I am open and excited to learn about new technologies and frameworks in order to increase my repetoire of skills and I'm currently deepening my understanding of data structures, algorithms, and system design.",
    "Asides building things for the web, i am also interested in Artificial Intelligence and Machine learning. Its one thing knowing how to build a software, but its another thing knowing how to make it super intelligent and future-proof."
  ],
  stats: [
    { label: "Years coding", value: "1+" },
    { label: "Projects built", value: "5+" },
    { label: "Hackathons", value: "1" },
  ],
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "AutoMarket",
    description:
      "A full-stack web application for buying and selling cars. Users can create an account, List cars for sale, browse available listings, filter by what matters and make inquires about cars they are interested in by communicating with the seller directy through an email form in the app.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Shadcn/UI", "Tailwind CSS"],
    liveUrl: "https://automarket-gamma.vercel.app/",
    repoUrl: "https://github.com/Brightograms/AutoMarket",
  },
  {
    title: "Calendar App",
    description:
      "A calendar application built on Fuse react, allowing users to create, edit, and delete events and has an authentication system. It features a responsive design and connects to a database for persistent event storage. Users can view their events in a monthly, weekly, or daily format.",
    tech: ["React", "Next.Js", "Fuse React", "Tailwind CSS", "Material UI"],
    liveUrl: "https://fuse-react-v160.vercel.app/apps/calendar",
    repoUrl: "https://github.com/Brightograms",
  },
  {
    title: "Notes App",
    description:"An interactive note-taking application built on Fuse React, allowing users to create, edit, and delete notes. It features a responsive design and connects to a database for persistent note storage. Users can view their notes in a list or grid format. It also features a search functionality to quickly find specific notes based on keywords and users can set reminders for important notesand also archive irrelevant notes while being able to add labels to their notes.",
    tech: ["TypeScript", "React", "Next.Js", "Fuse React", "Tailwind CSS", "Material UI"],
    liveUrl: "https://fuse-react-v160.vercel.app/apps/notes",
    repoUrl: "https://github.com/Brightograms",
  },
  {
    title: "Credit-Scoring Model",
    description:
      "A machine learning model that predicts credit scoring based on customer demographics and financial history using Logistic Regression. it was built using Python and scikit-learn, and it was trained on a dataset of customer information. The model was evaluated using accuracy, precision, recall, and F1 score metrics, and it achieved an accuracy of 85%.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Logistic Regression"],
    liveUrl: "",
    repoUrl: "https://github.com/Brightograms/Credit-Score",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python",],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git & GitHub", "Vite", "Scikit-learn", "Payload CMS", "Shadcn/UI", "Testing fundamentals"],
  },
];

export const experience = [
 
  {
    role: "Full Stack Development Intern",
    company: "MarkLite",
    period: "Summer 2025",
    points: [
      "Built and maintained React components for the company's internal dashboard.",
      "Wrote my first unit tests and participated in daily standups and code reviews.",
      "Fixed 20+ UI bugs and improved mobile responsiveness across the site.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
