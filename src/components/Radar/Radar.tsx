import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiDart,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "C", icon: <SiC size={36} /> },
  { name: "C++", icon: <SiCplusplus size={36} /> },
  { name: "Python", icon: <SiPython size={36} /> },
  { name: "Dart", icon: <SiDart size={36} /> },
  { name: "Flutter", icon: <SiFlutter size={36} /> },
  { name: "JavaScript", icon: <SiJavascript size={36} /> },
  { name: "TypeScript", icon: <SiTypescript size={36} /> },
  { name: "React", icon: <SiReact size={36} /> },
  { name: "Vite", icon: <SiVite size={36} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={36} /> },
  { name: "Node.js", icon: <SiNodedotjs size={36} /> },
  { name: "Express", icon: <SiExpress size={36} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={36} /> },
  { name: "MySQL", icon: <SiMysql size={36} /> },
  { name: "Hive NoSQL", icon: <FaDatabase size={36} /> },
  { name: "Docker", icon: <SiDocker size={36} /> },
  { name: "Linux", icon: <SiLinux size={36} /> },
  { name: "Git", icon: <SiGit size={36} /> },
  { name: "GitHub", icon: <SiGithub size={36} /> },
  { name: "Vercel", icon: <SiVercel size={36} /> },
];

export default function Radar() {
  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="mt-6 lg:mt-16 pb-14 lg:pb-20 px-5 lg:px-24 mx-auto max-w-7xl relative"
    >
      <motion.h2
        className="text-2xl lg:text-3xl text-center font-light text-black"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        My <span className="font-semibold">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-5 text-sm lg:text-base font-normal mt-8 lg:mt-14 justify-center place-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.03,
            }}
            viewport={{ once: true, margin: "-30px" }}
            className="w-full flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={18}
              tiltMaxAngleY={18}
              perspective={900}
              scale={1.05}
              transitionSpeed={800}
              className="w-full flex justify-center"
            >
              <div className="group border border-black/80 rounded-xl p-3 h-28 w-28 lg:h-36 lg:w-36 flex flex-col items-center justify-center gap-2 lg:gap-3 cursor-pointer transition-all duration-300 bg-white/90 hover:bg-black hover:text-white hover:shadow-xl hover:border-black">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium tracking-tight text-center">
                  {skill.name}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}