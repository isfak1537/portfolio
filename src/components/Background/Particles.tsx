
import { motion } from "framer-motion";
import { useState } from "react";

type Particle = {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  size: number;
};

function generateParticles(): Particle[] {
  return Array.from({ length: 35 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 5 + Math.random() * 6,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 3,
  }));
}

export default function Particles() {
  const [particles] = useState(generateParticles);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/70"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [0, -120, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}