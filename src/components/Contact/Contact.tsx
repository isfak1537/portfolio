import { useState } from "react";
import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { contactInfo } from "../../data/social";

const socials = [
  { Icon: BiLogoGmail, link: `mailto:${contactInfo.email}`, label: "Email" },
  { Icon: IoLogoLinkedin, link: contactInfo.linkedin, label: "LinkedIn" },
  { Icon: BsGithub, link: contactInfo.github, label: "GitHub" },
  { Icon: FaPhone, link: `tel:${contactInfo.phone}`, label: "Phone" },
];

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Create mailto fallback or simulated success
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      setResult("Message draft opened in your email client! Thank you.");
      setIsSubmitting(false);
      form.reset();
      setTimeout(() => setResult(""), 6000);
    }, 600);
  };

  return (
    <section
      className="my-14 lg:my-24 px-5 lg:px-24 mx-auto max-w-7xl relative"
      id="contact"
      aria-label="Contact section"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl lg:text-3xl text-center font-light text-black"
      >
        Contact <span className="font-semibold">Me</span>
      </motion.h2>

      <div className="flex justify-between items-start mt-10 lg:mt-16 flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column: Form matching Image 1 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[45%]"
        >
          <form onSubmit={handleSubmit} className="w-full space-y-4 lg:space-y-5">
            <input
              name="name"
              className="border px-5 py-3 border-black/80 rounded-lg placeholder:text-[#71717A] text-sm w-full font-light bg-white transition-all duration-300 focus:border-black focus:shadow-sm outline-none"
              type="text"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              className="border px-5 py-3 border-black/80 rounded-lg placeholder:text-[#71717A] text-sm w-full font-light bg-white transition-all duration-300 focus:border-black focus:shadow-sm outline-none"
              type="email"
              placeholder="Email"
              required
            />
            <input
              name="website"
              className="border px-5 py-3 border-black/80 rounded-lg placeholder:text-[#71717A] text-sm w-full font-light bg-white transition-all duration-300 focus:border-black focus:shadow-sm outline-none"
              type="text"
              placeholder="Your website (If exists)"
            />
            <textarea
              name="message"
              className="resize-none border px-5 py-3 h-32 border-black/80 placeholder:text-[#71717A] rounded-lg text-sm w-full font-light bg-white transition-all duration-300 focus:border-black focus:shadow-sm outline-none"
              placeholder="How can I help?*"
              required
            />

            {result && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-700 font-medium"
              >
                {result}
              </motion.p>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
              <motion.button
                whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center font-medium w-full sm:w-auto hover:bg-black/90 shadow-md transition-all duration-300 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Get In Touch"}
              </motion.button>

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
            </div>
          </form>
        </motion.div>

        {/* Right Column: Editorial Contact Copy matching Image 1 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[48%]"
        >
          <div className="font-medium text-2xl sm:text-3xl lg:text-4xl space-y-1 lg:space-y-2 text-black">
            <h2>
              Let's{" "}
              <span
                className="text-white font-semibold"
                style={{ WebkitTextStroke: "1.5px black" }}
              >
                talk
              </span>{" "}
              for
            </h2>
            <h2>Something special</h2>
          </div>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-4 font-light leading-relaxed">
            I seek to push the limits of creativity and engineering to build
            scalable, high-performance systems and memorable user experiences.
          </p>

          <div className="font-normal text-sm lg:text-base flex flex-col mt-8 gap-4 text-black">
            <motion.a
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 group transition-all duration-300"
              href={`mailto:${contactInfo.email}`}
            >
              <span className="border transition-all duration-300 border-black/20 group-hover:border-black rounded-full p-2">
                <IoMdMail className="w-4 h-4" />
              </span>
              <span className="font-mono text-xs sm:text-sm">{contactInfo.email}</span>
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 group transition-all duration-300"
              href={`tel:${contactInfo.phone}`}
            >
              <span className="border transition-all duration-300 border-black/20 group-hover:border-black rounded-full p-2">
                <FaPhone className="w-3.5 h-3.5" />
              </span>
              <span className="font-mono text-xs sm:text-sm">{contactInfo.phone}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}