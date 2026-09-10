import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  Wrench,
  ShieldCheck,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: Code2,
    title: "Build for Maintainability",
    description:
      "Write clean, modular code with well-defined interfaces. Software spends most of its lifecycle being maintained, not written.",
  },
  {
    icon: Cpu,
    title: "Understand Systems, Not Just Frameworks",
    description:
      "Frameworks evolve; core fundamentals remain. Deep knowledge of runtime lifecycles, memory, and protocols makes resilient engineers.",
  },
  {
    icon: Wrench,
    title: "Automate Repetitive Work",
    description:
      "Standardize environments with Docker, enforce quality with linting and CI/CD, and eliminate manual toil through scripting.",
  },
  {
    icon: Layers,
    title: "Design Before Scaling",
    description:
      "Model normalized data schemas and plan state flows before introducing premature abstractions. Clarity precedes performance.",
  },
  {
    icon: ShieldCheck,
    title: "Test What Matters",
    description:
      "Understand edge cases and failure modes. Robust software is engineered to fail gracefully and recover predictably.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Modern engineering requires curiosity. Continuously adopting cloud-native workflows, modern tooling, and best practices.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative px-5 lg:px-24 py-20 mx-auto max-w-7xl"
    >
      <div className="text-center">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50 block mb-2">
          Engineering Mindset
        </span>
        <h2 className="text-2xl lg:text-3xl font-light text-black">
          Engineering <span className="font-semibold">Philosophy</span>
        </h2>
      </div>

      {/* Editorial Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mt-12 max-w-3xl rounded-3xl border-2 border-black bg-white p-8 sm:p-10 text-center shadow-[6px_6px_0px_#000]"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50">
          Core Belief
        </span>

        <blockquote className="mt-4 text-xl sm:text-2xl font-medium leading-relaxed text-black">
          &ldquo;I believe understanding how to break software makes me a better builder, and understanding how to build software makes me a better tester.&rdquo;
        </blockquote>

        <p className="mt-4 text-xs font-mono uppercase tracking-widest text-[#71717A]">
          — Muhammad Isfak
        </p>
      </motion.div>

      {/* 6 Principles Grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-black/15 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:border-black hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/15 bg-black/5 text-black">
                <Icon size={20} />
              </div>

              <h3 className="mt-4 text-base font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#71717A] font-light">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
