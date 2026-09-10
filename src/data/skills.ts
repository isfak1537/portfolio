export interface SkillItem {
  name: string;
  category: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  id: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    id: "frontend",
    description: "Building responsive, modern, and accessible web interfaces with clean component architectures.",
    skills: [
      { name: "React", category: "frontend", highlight: true },
      { name: "TypeScript", category: "frontend", highlight: true },
      { name: "JavaScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend", highlight: true },
      { name: "HTML5 / CSS3", category: "frontend" },
      { name: "Vite", category: "frontend" }
    ]
  },
  {
    title: "Backend Engineering",
    id: "backend",
    description: "Designing RESTful APIs, business logic controllers, and service layers for client applications.",
    skills: [
      { name: "Node.js", category: "backend", highlight: true },
      { name: "Express.js", category: "backend", highlight: true }
    ]
  },
  {
    title: "Databases & Storage",
    id: "database",
    description: "Data modeling, schema design, relational integrity, and offline-first client storage.",
    skills: [
      { name: "PostgreSQL", category: "database", highlight: true },
      { name: "MySQL", category: "database" },
      { name: "Hive (NoSQL)", category: "database", highlight: true }
    ]
  },
  {
    title: "DevOps & Infrastructure",
    id: "devops",
    description: "Containerization, reproducible deployment environments, version control, and cloud hosting.",
    skills: [
      { name: "Docker", category: "devops", highlight: true },
      { name: "Linux", category: "devops", highlight: true },
      { name: "Git", category: "devops" },
      { name: "GitHub", category: "devops" },
      { name: "Vercel", category: "devops" }
    ]
  },
  {
    title: "Programming Languages",
    id: "programming",
    description: "Core algorithms, data structures, systems programming, and cross-platform app logic.",
    skills: [
      { name: "C++", category: "programming", highlight: true },
      { name: "Python", category: "programming", highlight: true },
      { name: "Dart", category: "programming" },
      { name: "TypeScript", category: "programming" },
      { name: "JavaScript", category: "programming" }
    ]
  },
  {
    title: "AI & Machine Learning",
    id: "ai",
    description: "Reinforcement learning implementations and intelligent decision-making game agents.",
    skills: [
      { name: "Q-Learning", category: "ai", highlight: true },
      { name: "Machine Learning", category: "ai" }
    ]
  }
];

export const allSkillsList: SkillItem[] = skillCategories.flatMap((cat) => cat.skills);
