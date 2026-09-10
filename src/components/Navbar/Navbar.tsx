import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { PERSONAL_INFO } from "../../utils/constants";

const navLinks = [
  { label: "About", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function ResumeBtn({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href={PERSONAL_INFO.resumePath}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block px-4 py-2 text-sm font-medium group ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Download Resume"
    >
      <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0" />
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black transition-colors duration-300 group-hover:bg-black" />
      <span className="relative text-black group-hover:text-white flex items-center gap-x-2 transition-colors duration-300">
        Resume <TbDownload size={16} />
      </span>
    </motion.a>
  );
}

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 15);

      const sectionIds = ["home", "skills", "projects", "journey", "contact"];
      const scrollPos = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasShadow
          ? "glassmorphism shadow-sm border-b border-black/5 py-3.5 px-5 lg:px-24"
          : "bg-transparent py-6 px-5 lg:px-24"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand Logo */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <a
            href="#home"
            className="text-2xl font-bold tracking-wider text-black"
          >
            Muhammad<span className="text-[#71717A]">Isfak</span>
          </a>
        </motion.div>

        {/* Center Nav Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-x-8 font-normal text-sm">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <motion.li
                key={label}
                className="relative"
                whileHover={{ y: -1.5 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {label}
                </a>

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* Right CTA: Signature Resume Button */}
        <div className="hidden lg:block">
          <ResumeBtn />
        </div>

        {/* Mobile Menu Hamburger Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.92 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-2xl p-1 text-black cursor-pointer"
        >
          {isOpen ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden absolute top-full left-0 w-full glassmorphism shadow-md border-b border-black/10"
          >
            <ul className="flex flex-col items-center gap-y-4 font-normal py-6 px-5">
              {navLinks.map(({ label, href }) => (
                <li key={label} className="w-full text-center">
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 text-base transition-colors ${
                      activeSection === href.replace("#", "")
                        ? "text-black font-bold"
                        : "text-black/60"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <ResumeBtn />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}