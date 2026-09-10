import { motion } from "framer-motion";
import { useMemo } from "react";

interface ParticleItem {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  size: number;
}

export default function Particles() {
  const particles = useMemo<ParticleItem[]>(() => {
    return Array.from({ length: 18 }, (_, index) => {
      const seed = (index * 9301 + 49297) % 233280;
      const rnd1 = seed / 233280;
      const rnd2 = ((seed * 9301 + 49297) % 233280) / 233280;
      const rnd3 = ((seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;

      return {
        id: index,
        left: `${(rnd1 * 96 + 2).toFixed(2)}%`,
        top: `${(rnd2 * 96 + 2).toFixed(2)}%`,
        duration: 9 + rnd3 * 6,
        delay: rnd2 * 4,
        size: index % 3 === 0 ? 2 : 1.5,
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-black/15"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.1, 0.45, 0.1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}