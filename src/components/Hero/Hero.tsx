import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[45%_55%]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20"
        >
          <span className="inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Software Engineer • Full Stack • DevOps
          </span>

          <h1 className="mt-8 leading-none">
            <span className="gradient-text block text-6xl font-black md:text-8xl">
              Muhammad
            </span>

            <span className="block text-6xl font-black text-white md:text-8xl">
              ISFAK
            </span>
          </h1>

          <div className="mt-8 h-16 text-2xl font-semibold text-white md:text-4xl">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1800,
                "Full Stack Developer",
                1800,
                "DevOps Enthusiast",
                1800,
                "Cloud Learner",
                1800,
              ]}
              speed={55}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            I build scalable software, enterprise applications,
            modern web platforms, automation workflows and continuously
            explore cloud-native architecture, DevOps and infrastructure.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-end justify-center"
        >
          {/* BIG GLOW */}

          <div
            className="
              absolute
              bottom-20
              h-[700px]
              w-[700px]
              rounded-full
              bg-cyan-500/20
              blur-[160px]
            "
          />

          {/* FLOOR SHADOW */}

          <div
            className="
              absolute
              bottom-4
              h-14
              w-72
              rounded-full
              bg-cyan-500/20
              blur-3xl
            "
          />

          <motion.img
            src={heroImage}
            alt="Muhammad Isfak"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              w-[500px]
              md:w-[720px]
              lg:w-[760px]
              object-contain
              drop-shadow-[0_30px_80px_rgba(6,182,212,.35)]
            "
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
        "
      >
        <ArrowDown
          size={38}
          className="text-cyan-400"
        />
      </motion.div>
    </section>
  );
}