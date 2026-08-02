import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-8 py-4 backdrop-blur-2xl">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-[0.28em] text-white transition hover:text-cyan-400"
        >
          ISFAK
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-sm font-medium text-zinc-300 transition hover:text-cyan-300"
            >
              {item.name}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* Resume Button */}<a
  href="/resume/Isfak_CV_MAIN.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    border
    border-cyan-400
    px-6
    py-2.5
    text-sm
    font-semibold
    text-cyan-300
    transition-all
    duration-300
    hover:bg-cyan-400
    hover:text-black
    hover:shadow-[0_0_20px_rgba(34,211,238,0.45)]
  "
>
  Resume
</a>

      </nav>
    </motion.header>
  );
}