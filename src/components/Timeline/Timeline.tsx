import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started Programming",
    description:
      "Began learning C, C++, problem solving and programming fundamentals.",
  },
  {
    year: "2023",
    title: "Web Development",
    description:
      "Built responsive websites using HTML, CSS, JavaScript and React.",
  },
  {
    year: "2024",
    title: "Mobile Development",
    description:
      "Developed Flutter applications with offline-first architecture.",
  },
  {
    year: "2025",
    title: "AI & Machine Learning",
    description:
      "Worked on reinforcement learning, Python and intelligent systems.",
  },
  {
    year: "2026",
    title: "DevOps & Cloud",
    description:
      "Learning Docker, Linux, CI/CD, Terraform and AWS while building scalable software.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center text-5xl font-black"
        >
          Developer Journey
        </motion.h2>

        <div className="relative">

          {/* Center Line */}

          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
              }}
              className={`relative mb-20 flex items-center ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div className="glass w-[430px] rounded-3xl p-8">

                <h3 className="gradient-text text-4xl font-black">
                  {item.year}
                </h3>

                <h4 className="mt-4 text-2xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-4 text-zinc-400">
                  {item.description}
                </p>

              </div>

              <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#09090B] bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}