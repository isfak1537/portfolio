export interface TimelineMilestone {
  year: string;
  title: string;
  roleOrTag: string;
  description: string;
  highlights: string[];
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2022",
    title: "CS Foundations & Systems Programming",
    roleOrTag: "Academic & Core Engineering",
    description:
      "Commenced B.Sc. in Computer Science & Engineering at Daffodil International University. Mastered low-level memory concepts, data structures, algorithms, and object-oriented architecture in C and C++.",
    highlights: ["C & C++ Programming", "Data Structures & Algorithms", "OOP Fundamentals"]
  },
  {
    year: "2023",
    title: "Modern Web Platforms & Client-Server Systems",
    roleOrTag: "Full Stack Exploration",
    description:
      "Transitioned into modern full-stack engineering. Built responsive client applications and server-side endpoints using JavaScript, React, and Python/Flask, including the DriveX and UTSHOBKORI platforms.",
    highlights: ["React & Component Architecture", "REST APIs with Flask", "Modern Responsive CSS"]
  },
  {
    year: "2024",
    title: "Mobile Architecture & Offline-First Systems",
    roleOrTag: "Cross-Platform Engineering",
    description:
      "Engineered cross-platform applications with Flutter and Dart. Designed an offline-first storage architecture utilizing Hive NoSQL for instant local lookups and deterministic state transitions via Provider.",
    highlights: ["Flutter & Dart", "Hive NoSQL Storage", "Provider State Architecture"]
  },
  {
    year: "2025",
    title: "Intelligent Systems & Simulation Engineering",
    roleOrTag: "AI & Systems Development",
    description:
      "Explored reinforcement learning algorithms by developing a dynamic Q-Learning game agent in Python. Built a deterministic harbor defense simulation in C++ compiled to WebAssembly for browser deployment.",
    highlights: ["Q-Learning Reinforcement AI", "C++ Game Engine & WebAssembly", "Performance Profiling"]
  },
  {
    year: "2026",
    title: "Cloud-Native Infrastructure & Enterprise Platforms",
    roleOrTag: "Graduating Software Engineer",
    description:
      "Graduating with B.Sc. in CSE (CGPA: 3.60). Architecting enterprise ERP solutions using React, Node.js, PostgreSQL, and Docker. Deepening practical knowledge of CI/CD automation and cloud-native practices.",
    highlights: ["PostgreSQL & Relational Design", "Docker Containerization", "Full-Stack Enterprise ERP"]
  }
];
