import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold"
      >
        Featured Projects
      </motion.h2>

      <div className="flex justify-center mb-16 mt-6">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor="#00ffff"
              glarePosition="all"
              transitionSpeed={1500}
              scale={1.02}
              className="h-full"
            >
              <div
                className="
                group
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  {project.featured && (
                    <span className="mb-5 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                      ★ Featured
                    </span>
                  )}

                  <h3 className="mb-4 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm transition hover:bg-cyan-500/20 hover:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 transition hover:bg-white/20"
                    >
                      <FaGithub size={18} />
                      Code
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}