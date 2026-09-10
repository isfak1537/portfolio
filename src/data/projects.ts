export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  live?: string;
  status: "Completed" | "In Progress" | "In Progress / Active";
  featured: boolean;
  hasLiveDemo: boolean;
  architectureHighlights: string[];
  keyFeatures: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Small Business Inventory Lite",
    description:
      "Cross-platform inventory management application with offline-first architecture, Hive local storage, stock management, sales entry, low-stock monitoring, and business metrics.",
    category: "Cross-Platform Application",
    technologies: ["Flutter", "Dart", "Provider", "Hive", "Material 3"],
    github: "https://github.com/isfak1537/small-business-inventory-lite",
    live: "https://small-business-inventory-lite-verce.vercel.app/",
    status: "Completed",
    featured: true,
    hasLiveDemo: true,
    architectureHighlights: [
      "Offline-first local persistence utilizing Hive NoSQL for instant sub-millisecond lookups",
      "Centralized state management with Provider ensuring unidirectional data flow",
      "Automated stock threshold listeners alerting managers on low-stock items in real time"
    ],
    keyFeatures: [
      "Multi-category stock management and SKU tracking",
      "Offline sales record entry and automatic inventory reduction",
      "Executive metrics dashboard with daily, weekly, and monthly summaries",
      "Cross-platform responsive design supporting mobile and desktop screens"
    ]
  },
  {
    id: 2,
    title: "DriveX Transportation",
    description:
      "Ride-calling transportation web application featuring location-oriented workflows, user dashboards, ride-related interfaces, payment flow and responsive frontend experiences.",
    category: "Transportation Platform",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    github: "https://github.com/isfak1537/drive-x",
    live: "https://drivex-main.vercel.app/",
    status: "Completed",
    featured: true,
    hasLiveDemo: true,
    architectureHighlights: [
      "Client-side location mapping and distance calculation interfaces",
      "RESTful API architecture handling ride dispatching and passenger state transitions",
      "Modular responsive UI designed for mobile viewport optimization"
    ],
    keyFeatures: [
      "Interactive ride request and pickup estimation workflows",
      "Passenger and driver status dashboard with trip histories",
      "Integrated checkout and simulated payment confirmation interface",
      "Dynamic driver availability and fare calculation module"
    ]
  },
  {
    id: 3,
    title: "UTSHOBKORI",
    description:
      "Event management platform connecting users with venues, catering and decoration service providers through a responsive web application.",
    category: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/isfak1537/utshabkori",
    live: "https://utshabkori-main.vercel.app/",
    status: "Completed",
    featured: true,
    hasLiveDemo: true,
    architectureHighlights: [
      "Multi-vendor service categorization layout with dynamic DOM filtering",
      "Lightweight Vanilla JS client architecture with minimal script overhead",
      "Mobile-first responsive grids accommodating varied vendor media galleries"
    ],
    keyFeatures: [
      "Comprehensive vendor search and service package exploration",
      "Direct quote calculation and event booking inquiry forms",
      "Curated service reviews, pricing transparency, and location filters",
      "Fast client-side navigation without external framework dependencies"
    ]
  },
  {
    id: 4,
    title: "Cinematic Harbor Defense Simulation",
    description:
      "C++ systems/game simulation with a deployable WebAssembly/Web build, demonstrating systems programming, memory management, game logic and performance-oriented engineering.",
    category: "Systems / Game Simulation",
    technologies: ["C++", "WebAssembly", "Game Development", "OOP", "Systems Programming"],
    github: "https://github.com/isfak1537/Cinematic-Harbor-Defense-Simulation",
    live: "https://cinematic-harbor-defense-simulation-six.vercel.app/",
    status: "Completed",
    featured: true,
    hasLiveDemo: true,
    architectureHighlights: [
      "Performance-critical game simulation loop programmed natively in C++",
      "WebAssembly compilation allowing high-throughput low-level code in modern browsers",
      "Strict memory lifecycle management avoiding dynamic heap allocations in hot loops"
    ],
    keyFeatures: [
      "Real-time projectile trajectory physics and collision resolution",
      "Wave defense tactical state machine with escalating difficulty",
      "Deployable interactive browser build accessible worldwide on Vercel",
      "Zero-latency input processing with deterministic simulation steps"
    ]
  },
  {
    id: 5,
    title: "Toyota ERP Platform",
    description:
      "Enterprise Resource Planning platform featuring inventory, suppliers, purchasing, sales, authentication and reporting.",
    category: "Enterprise Software",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/isfak1537",
    status: "In Progress",
    featured: true,
    hasLiveDemo: false,
    architectureHighlights: [
      "Normalized relational schema in PostgreSQL ensuring transaction isolation and ACID compliance",
      "Containerized development and deployment environment structured with Docker Compose",
      "Role-based access control (RBAC) separating supplier, warehouse, and administrative actors"
    ],
    keyFeatures: [
      "Enterprise supply chain workflow management from PO issuance to receipt",
      "Automated stock level adjustments linked directly to sales order entries",
      "Comprehensive financial and inventory reporting with export capabilities",
      "Auditable action log tracking critical ledger modifications"
    ]
  },
  {
    id: 6,
    title: "Survival Game with Adaptive AI",
    description:
      "2D survival game featuring reinforcement-learning enemies using Q-Learning to adapt to player strategies.",
    category: "AI / Game Development",
    technologies: ["Python", "Pygame", "Q-Learning", "AI"],
    github: "https://github.com/isfak1537",
    status: "Completed",
    featured: true,
    hasLiveDemo: false,
    architectureHighlights: [
      "Tabular Q-Learning reinforcement learning algorithm implemented from scratch",
      "Custom reward functions incentivizing tactical encirclement and player avoidance",
      "Continuous state discretization mapped to real-time 2D spatial coordinates"
    ],
    keyFeatures: [
      "Autonomous enemy agents that learn player attack rhythms dynamically",
      "Adaptive difficulty curve driven by AI policy convergence",
      "Real-time reward telemetry visualization during gameplay loops",
      "Optimized Pygame rendering engine sustaining consistent 60 FPS"
    ]
  }
];