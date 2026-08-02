export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Toyota ERP Platform",
    description:
      "Enterprise Resource Planning platform featuring inventory, suppliers, purchasing, sales, authentication and reporting. Built as a scalable full-stack system to learn industry software engineering practices.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/isfak1537",
    live: "",
    featured: true,
    status: "In Progress",
  },

  {
    id: 2,
    title: "Small Business Inventory Lite",
    description:
      "Cross-platform inventory management application with offline-first architecture, Hive NoSQL storage and real-time business metrics dashboard.",
    technologies: [
      "Flutter",
      "Dart",
      "Hive",
      "Material 3",
    ],
    github: "https://github.com/isfak1537",
    live: "",
    featured: true,
    status: "Completed",
  },

  {
    id: 3,
    title: "UTSHOBKORI",
    description:
      "Event management platform connecting users with venues, catering and decoration service providers using a responsive web application.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/isfak1537",
    live: "",
    featured: false,
    status: "Completed",
  },

  {
    id: 4,
    title: "Survival Game with Adaptive AI",
    description:
      "2D survival game with reinforcement learning enemies using Q-Learning that adapt to player strategies in real time.",
    technologies: [
      "Python",
      "Pygame",
      "Q-Learning",
      "AI",
    ],
    github: "https://github.com/isfak1537",
    live: "",
    featured: true,
    status: "Completed",
  },

  {
    id: 5,
    title: "DriveX Transportation",
    description:
      "Ride-calling web application with location-based services, responsive UI and scalable architecture.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/isfak1537",
    live: "",
    featured: false,
    status: "Completed",
  },

  {
    id: 6,
    title: "Cinematic Harbor Defense Simulation",
    description:
      "Advanced C++ game simulation demonstrating memory management, systems programming and performance optimization.",
    technologies: [
      "C++",
      "OOP",
      "Game Development",
      "Systems Programming",
    ],
    github: "https://github.com/isfak1537",
    live: "",
    featured: true,
    status: "Completed",
  },

  {
    id: 7,
    title: "Portfolio Website & Knowledge Vault",
    description:
      "Modern portfolio website showcasing projects, developer journey and technical skills with a built-in knowledge management section.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Vite",
    ],
    github: "https://github.com/isfak1537",
    live: "",
    featured: true,
    status: "In Progress",
  },
];