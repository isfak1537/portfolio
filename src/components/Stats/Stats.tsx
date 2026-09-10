import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Layers, GraduationCap, Globe, type LucideIcon } from "lucide-react";

interface StatItem {
  id: string;
  icon: LucideIcon;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  sublabel: string;
}

const statsData: StatItem[] = [
  {
    id: "projects",
    icon: Code,
    value: 6,
    suffix: "+",
    label: "Projects Engineered",
    sublabel: "4 live deployments on Vercel"
  },
  {
    id: "technologies",
    icon: Layers,
    value: 15,
    suffix: "+",
    label: "Technologies Mastered",
    sublabel: "React, Node, PostgreSQL, Docker, C++"
  },
  {
    id: "cgpa",
    icon: GraduationCap,
    value: 3.6,
    suffix: "",
    decimals: 2,
    label: "Academic Merit (CGPA)",
    sublabel: "B.Sc. in CSE • Daffodil Int. University"
  },
  {
    id: "focus",
    icon: Globe,
    value: 4,
    suffix: " Domains",
    label: "Engineering Pillars",
    sublabel: "Full Stack • Cloud • Systems • AI"
  }
];

function AnimatedCounter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(decimals > 0 ? "0.00" : "0");
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(spanRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1600;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = value * ease;

      setDisplayValue(current.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value.toFixed(decimals));
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, value, decimals]);

  return <span ref={spanRef}>{displayValue}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section ref={sectionRef} id="stats" className="relative px-5 lg:px-24 py-16 mx-auto max-w-7xl">
      <div className="text-center">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50 block mb-2">
          Track Record
        </span>
        <h2 className="text-2xl lg:text-3xl font-light text-black">
          Engineering <span className="font-semibold">Snapshot</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-black/15 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/15 bg-black/5 text-black">
                  <Icon size={18} />
                </span>
                <span className="font-mono text-xs text-black/30">0{index + 1}</span>
              </div>

              <div className="mt-6">
                <div className="font-mono text-4xl font-extrabold tracking-tight text-black">
                  <AnimatedCounter value={item.value} decimals={item.decimals ?? 0} />
                  <span className="text-black text-3xl">{item.suffix}</span>
                </div>

                <h3 className="mt-2 text-base font-semibold text-black">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs text-[#71717A] leading-relaxed font-light">
                  {item.sublabel}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}