import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { contactInfo } from "../../data/social";
import { PERSONAL_INFO } from "../../utils/constants";

const socials = [
  { Icon: BiLogoGmail, link: `mailto:${contactInfo.email}`, label: "Email" },
  { Icon: IoLogoLinkedin, link: contactInfo.linkedin, label: "LinkedIn" },
  { Icon: BsGithub, link: contactInfo.github, label: "GitHub" },
  { Icon: FaPhone, link: `tel:${contactInfo.phone}`, label: "Phone" },
];

const footerNav = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-12 px-5 lg:px-24 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Subtitle & Nav */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold text-black tracking-wider">
            {PERSONAL_INFO.fullName}
          </h3>
          <p className="text-xs text-[#71717A] mt-1 font-light">
            Software Developer • Full Stack • Cloud
          </p>

          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mt-4 text-xs text-black/60 font-medium">
            {footerNav.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-black transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons & Copyright matching Image 1 */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-x-3">
            {socials.map(({ Icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2.5 rounded-lg border border-black/80 bg-white transition-all duration-300 hover:bg-black hover:text-white"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          <p className="text-xs text-[#71717A] font-light">
            © 2026 {PERSONAL_INFO.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}