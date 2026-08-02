import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, -100, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-15%] h-[650px] w-[650px] rounded-full bg-violet-500/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 70, -90, 0],
          scale: [1.1, 1, 1.25, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-15%] top-[20%] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, 90, -70, 0],
          y: [0, -40, 90, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[25%] h-[550px] w-[550px] rounded-full bg-fuchsia-500/10 blur-[180px]"
      />
    </div>
  );
}