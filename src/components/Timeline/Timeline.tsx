import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import { timelineMilestones } from "../../data/timeline";

export default function Timeline() {
  return (
    <section id="journey" className="relative px-5 lg:px-24 py-20 mx-auto max-w-6xl">
      <div className="text-center">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50 block mb-2">
          Milestones
        </span>
        <h2 className="text-2xl lg:text-3xl font-light text-black">
          Developer <span className="font-semibold">Journey</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#71717A] font-light">
          A progression highlighting computer science education, systems engineering, and full-stack software development.
        </p>
      </div>

      <div className="relative mt-16">
        {/* Continuous Center Track (Desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-4 bottom-4 hidden -translate-x-1/2 w-0.5 bg-black/15 md:block"
        />

        {/* Continuous Left Track (Mobile) */}
        <div
          aria-hidden="true"
          className="absolute left-4 top-4 bottom-4 w-0.5 bg-black/15 md:hidden"
        />

        <div className="flex flex-col gap-10 md:gap-14">
          {timelineMilestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Spacer Column (45%) */}
                <div className="hidden md:block md:w-[45%]" />

                {/* Center Node (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white shadow-md">
                  <div className="h-2.5 w-2.5 rounded-full bg-black" />
                </div>

                {/* Mobile Left Node */}
                <div className="md:hidden absolute left-4 -translate-x-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-white">
                  <div className="h-2 w-2 rounded-full bg-black" />
                </div>

                {/* Card Container */}
                <div className="w-full pl-10 md:pl-0 md:w-[45%]">
                  <div className="rounded-2xl border border-black/15 bg-white/95 p-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-black/35 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-black">
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </span>

                      <span className="rounded-full border border-black/10 bg-black/5 px-3 py-0.5 font-mono text-[10px] text-black/70">
                        {item.roleOrTag}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#71717A] font-light">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-black/10 pt-3.5">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-md bg-black/[0.04] px-2.5 py-1 text-[11px] text-black/70 font-light"
                        >
                          <CheckCircle2 size={11} className="text-black" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}