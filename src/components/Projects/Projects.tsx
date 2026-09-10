import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbExternalLink, TbX } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import { projects, type Project } from "../../data/projects";

interface CardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

function ProjectCard({ project, onSelect }: CardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[310px] sm:w-[360px] lg:w-[390px] cursor-pointer group"
      onClick={() => onSelect(project)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1200}
        scale={1.01}
        transitionSpeed={800}
        className="h-full"
      >
        <div className="h-full rounded-2xl border border-black/15 p-6 relative transition-all duration-300 hover:shadow-2xl hover:border-black/30 bg-white/95 backdrop-blur-md">
          {/* Faint Background Watermark Number matching Image 3 */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-[100px] font-light text-black/[0.04] select-none pointer-events-none">
            {String(project.id).padStart(2, "0")}
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-medium tracking-widest uppercase text-black/50">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-black/30">
                  {String(project.id).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mt-3 text-black">
                {project.title}
              </h3>

              <p className="text-black/60 text-sm mt-3 line-clamp-3 font-light leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-light bg-black/[0.05] rounded-md text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 flex justify-between items-center">
              <span className="text-black/50 group-hover:text-black text-sm font-medium transition-colors duration-300 flex items-center gap-1">
                View Details →
              </span>

              <div className="flex gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full bg-black text-white transition-transform duration-200 hover:scale-110 shadow-sm"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <TbExternalLink size={15} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full border border-black/30 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  aria-label={`Source code of ${project.title}`}
                >
                  <BsGithub size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 24 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative border border-black/15 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all duration-300"
          aria-label="Close modal"
        >
          <TbX size={18} />
        </button>

        <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50">
          {project.category}
        </span>
        <h2 className="text-2xl font-bold mt-2 mb-3 text-black">
          {project.title}
        </h2>
        <p className="text-black/70 text-sm mb-6 font-light leading-relaxed">
          {project.description}
        </p>

        <h4 className="text-[11px] font-semibold tracking-widest uppercase text-black/50 mb-3">
          Architecture & Highlights
        </h4>
        <div className="space-y-2 mb-6">
          {project.architectureHighlights.map((h) => (
            <div
              key={h}
              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-black/[0.03] text-xs sm:text-sm text-black/70 font-light"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <h4 className="text-[11px] font-semibold tracking-widest uppercase text-black/50 mb-3">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-xs bg-black text-white rounded-md font-medium shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-black hover:bg-black/80 text-white text-sm font-semibold shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TbExternalLink size={16} /> Live Demo
            </motion.a>
          )}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <BsGithub size={16} /> View Code
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
  }, [selected]);

  return (
    <>
      <section
        className="py-16 lg:py-24"
        id="projects"
        aria-label="Projects showcase"
      >
        <div className="px-5 lg:px-24 mb-8 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50 block mb-2">
                Selected Work
              </span>
              <h2 className="text-2xl lg:text-4xl font-semibold text-black">
                Projects
              </h2>
            </div>
            <p className="text-black/50 text-sm max-w-xs font-light">
              Swipe to explore my work.
            </p>
          </div>
        </div>

        <div className="px-5 lg:px-24 mx-auto max-w-7xl">
          <div className="overflow-x-auto scrollbar-hide py-3">
            <div className="flex gap-5 lg:gap-6 pb-6 pr-6">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} onSelect={setSelected} />
              ))}

              {/* More on GitHub Card matching Image 3 */}
              <motion.a
                href="https://github.com/isfak1537"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[160px] flex flex-col items-center justify-center gap-3 text-black/40 hover:text-black group transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                aria-label="View more projects on GitHub"
              >
                <div className="w-14 h-14 rounded-full border-2 border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                  <BsGithub size={24} />
                </div>
                <span className="text-xs text-center font-medium">
                  More on
                  <br />
                  GitHub
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}