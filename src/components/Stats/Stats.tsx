import { motion } from "framer-motion";

const stats = [
  {
    value: "8+",
    title: "Projects Built",
  },
  {
    value: "4",
    title: "Domains",
  },
  {
    value: "20+",
    title: "Technologies",
  },
  {
    value: "3.6",
    title: "CGPA",
  },
  {
    value: "2026",
    title: "Graduate",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-black"
        >
          Live Stats
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-5">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="gradient-text text-5xl font-black">
                {item.value}
              </h3>

              <p className="mt-4 text-zinc-400">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}