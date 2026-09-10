import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.15 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setIsFinePointer(mediaQuery.matches);
    updatePointer();

    mediaQuery.addEventListener("change", updatePointer);
    return () => mediaQuery.removeEventListener("change", updatePointer);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isFinePointer, isVisible, cursorX, cursorY]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: isHovered ? 44 : 26,
          height: isHovered ? 44 : 26,
          borderColor: isHovered ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.3)",
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.04)" : "transparent",
        }}
        transition={{ duration: 0.18 }}
        className="flex items-center justify-center rounded-full border border-black/30"
      >
        <div className="h-1 w-1 rounded-full bg-black" />
      </motion.div>
    </motion.div>
  );
}
