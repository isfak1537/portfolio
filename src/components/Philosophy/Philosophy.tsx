import { motion } from "framer-motion";
import { Code2, Cpu, Cloud, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "I build maintainable systems with scalable architecture instead of quick fixes.",
  },
  {
    icon: Cpu,
    title: "Problem Solving",
    description:
      "Every feature starts with understanding the problem before writing code.",
  },
  {
    icon: Cloud,
    title: "Cloud Mindset",
    description:
      "Modern applications should be reliable, automated and deployment-ready.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Technology evolves every day. Learning is part of engineering, not an optional task.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative px-6 py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-cyan-400 uppercase tracking-[0.3em]">
            Engineering Philosophy
          </p>

          <h2 className="text-5xl font-black leading-tight">
            I don't just build applications.
            <span className="gradient-text block">
              I engineer systems.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            My goal is to create software that is scalable, maintainable,
            and delivers real business value. Every project is an opportunity
            to improve architecture, performance, and user experience.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8"
              >
                <Icon
                  size={32}
                  className="mb-5 text-cyan-400"
                />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
