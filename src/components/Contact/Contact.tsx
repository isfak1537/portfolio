import { motion } from "framer-motion";
import {
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaRegCopy,
  FaFilePdf,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [toast, setToast] = useState("");

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setToast(`${label} copied!`);

    setTimeout(() => {
      setToast("");
    }, 1800);
  };

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "isfaksikder2001@gmail.com",
      href: "mailto:isfaksikder2001@gmail.com",
      copy: true,
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+8801650288670",
      href: "tel:+8801650288670",
      copy: true,
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/isfak1537",
      href: "https://github.com/isfak1537",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/isfak-sikder-0680ab336",
      href: "https://www.linkedin.com/in/isfak-sikder-0680ab336/",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    },
    {
      icon: <FaFilePdf />,
      title: "Resume",
      value: "Download CV",
      href: "/resume/Muhammad_Isfak_CV.pdf",
    },
  ];

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      {toast && (
        <div
          className="
          fixed
          right-6
          top-6
          z-50
          rounded-xl
          bg-cyan-500
          px-5
          py-3
          font-semibold
          text-black
          shadow-xl
        "
        >
          {toast}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="uppercase tracking-[6px] text-cyan-400">
          CONTACT
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Let's Build Something Amazing
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          Interested in collaborating, discussing a project,
          or hiring me? Feel free to reach out through any
          platform below.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {contacts.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-cyan-400/40
            hover:shadow-[0_20px_80px_rgba(6,182,212,.25)]
            "
          >

            <div
              className="
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              bg-cyan-500/10
              blur-3xl
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
            "
            />

            <div className="relative z-10">

              <div
                className="
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-500/10
                text-2xl
                text-cyan-400
                transition
                group-hover:scale-110
              "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 break-all text-gray-400">
                {item.value}
              </p>

              <div className="mt-8 flex gap-3">

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  rounded-xl
                  bg-cyan-500
                  px-5
                  py-3
                  font-semibold
                  text-black
                  transition
                  hover:scale-105
                "
                >
                  Open
                </a>

                {item.copy && (
                  <button
                    onClick={() =>
                      copy(item.value, item.title)
                    }
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-5
                    py-3
                    transition
                    hover:bg-white/20
                    "
                  >
                    <FaRegCopy />
                    Copy
                  </button>
                )}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}