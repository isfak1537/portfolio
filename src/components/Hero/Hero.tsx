import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Brain } from "lucide-react";
import Tilt from "react-parallax-tilt";
import heroIllustration from "../../assets/hero-illustration.png";
import { contactInfo } from "../../data/social";

const socials = [
  { Icon: BiLogoGmail, link: `mailto:${contactInfo.email}`, label: "Email" },
  { Icon: IoLogoLinkedin, link: contactInfo.linkedin, label: "LinkedIn" },
  { Icon: BsGithub, link: contactInfo.github, label: "GitHub" },
  { Icon: FaPhoneAlt, link: `tel:${contactInfo.phone}`, label: "Phone" },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-[92svh] flex items-center pt-28 pb-12 px-5 lg:px-24 overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-8 lg:flex-row relative z-10">
        {/* Left Column: Editorial Headline */}
        <motion.div
          className="w-full lg:w-[45%]"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl flex flex-col gap-2 lg:gap-4 font-light text-[#18181b]"
          >
            <h1>
              Hello,{" "}
              <TypeAnimation
                sequence={["", 500, "I am Muhammad Isfak", 2000]}
                speed={15}
                deletionSpeed={50}
                style={{ fontWeight: 400 }}
                repeat={Infinity}
              />
            </h1>
            <h2>
              <span className="font-semibold text-black">Software</span>{" "}
              <span
                className="text-white font-semibold"
                style={{ WebkitTextStroke: "1.5px black" }}
              >
                Developer
              </span>
            </h2>
            <h2>
              Based In <span className="font-semibold text-black">Dhaka, Bangladesh.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-[#71717A] font-light"
          >
            Passionate about technology, I specialize in full-stack platforms,
            scalable systems, and cloud-native applications. I'm focused on
            building innovative engineering solutions and continuously expanding my skills.
          </motion.p>

          {/* Social Icons matching Image 4 */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-x-4 lg:gap-x-5"
          >
            {socials.map(({ Icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2.5 lg:p-3 rounded-lg border-2 border-black bg-white transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.94 }}
              >
                <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Developer Illustration matching Image */}
        <motion.div
          className="flex w-full lg:w-[55%] justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {/* Floating Brain Icon Badge matching the user's uploaded screenshot */}
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-2 left-4 sm:top-6 sm:left-10 z-20 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-[#18181b] text-white shadow-[2px_2px_0px_#000]"
          >
            <Brain size={18} />
          </motion.div>

          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1400}
            scale={1.02}
            transitionSpeed={1000}
            className="relative w-full flex items-center justify-center"
          >
            {/* Soft Ambient Depth Shadow */}
            <div
              aria-hidden="true"
              className="absolute bottom-2 h-10 w-3/4 rounded-full bg-black/10 blur-xl"
            />

            {/* Developer Illustration */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[620px] filter drop-shadow-sm overflow-hidden rounded-xl"
            >
              <img
                src={heroIllustration}
                alt="Muhammad Isfak — Software Developer Illustration"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </motion.div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}