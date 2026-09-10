export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export const educationData: Education = {
  degree: "Bachelor of Science in Computer Science & Engineering",
  institution: "Daffodil International University",
  period: "2022 - 2026",
  cgpa: "3.60 / 4.00",
  highlights: [
    "Core coursework: Algorithms, Data Structures, Operating Systems, Database Management Systems, Software Engineering, OOP",
    "Focus on full-stack web applications, systems programming, and distributed architectures",
    "Hands-on project development bridging theoretical computer science and production-grade software"
  ]
};
