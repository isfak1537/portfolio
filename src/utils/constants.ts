export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const PERSONAL_INFO = {
  firstName: "Muhammad",
  lastName: "ISFAK",
  fullName: "Muhammad Isfak",
  brand: "ISFAK",
  tagline: "Building scalable software, enterprise applications and cloud-native systems.",
  animatedRoles: [
    "Software Engineer",
    "Full Stack Developer",
    "DevOps Enthusiast",
    "Cloud Learner"
  ],
  bio: "A software engineer focused on building scalable software, enterprise applications, modern web platforms, automation workflows, and cloud-native systems.",
  resumePath: "/resume/Isfak_CV_MAIN.pdf"
};
