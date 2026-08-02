import { motion } from "framer-motion";

const technologies = [
  { name: "Frontend", x: "50%", y: "12%", color: "bg-cyan-400" },
  { name: "Backend", x: "82%", y: "30%", color: "bg-violet-400" },
  { name: "DevOps", x: "84%", y: "72%", color: "bg-green-400" },
  { name: "Cloud", x: "50%", y: "90%", color: "bg-blue-400" },
  { name: "Database", x: "16%", y: "72%", color: "bg-orange-400" },
  { name: "AI", x: "18%", y: "30%", color: "bg-pink-400" },
  { name: "Systems", x: "50%", y: "50%", color: "bg-yellow-400" },
];

export default function Radar() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-black"
        >
          Technology Radar
        </motion.h2>

        <div className="flex justify-center">

          <div className="relative h-[550px] w-[550px] rounded-full border border-cyan-500/20">

            <div className="absolute inset-12 rounded-full border border-white/10" />
            <div className="absolute inset-24 rounded-full border border-white/10" />
            <div className="absolute inset-36 rounded-full border border-white/10" />

            <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-white/10 -translate-y-1/2" />

            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.2 }}
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute"
                style={{
                  left: tech.x,
                  top: tech.y,
                  transform: "translate(-50%,-50%)",
                }}
              >
                <div
                  className={`${tech.color} h-5 w-5 rounded-full shadow-lg shadow-cyan-400/50`}
                />

                <p className="mt-3 whitespace-nowrap text-sm text-zinc-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}