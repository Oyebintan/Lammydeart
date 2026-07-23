import React from "react"
import { motion } from "framer-motion"
import { FaXTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6"
import { fadeUp, stagger, viewportOnce } from "../motion"
import { gridBg } from "../decor"
import CornerMarks from "./decor/CornerMarks"

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/lammyde.art", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/oyebintan?s=21", label: "Twitter" },
  { icon: FaWhatsapp, href: "http://Wa.me/2347015848547", label: "WhatsApp" },
]

const HomeContact = () => {
  return (
    <motion.section
      id="contact"
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative overflow-hidden px-6 lg:px-14 py-12 bg-[#03050a]"
    >
      <CornerMarks />
      <motion.div
        variants={fadeUp}
        className={`relative max-w-7xl mx-auto rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[#05080f] p-8 lg:p-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center ${gridBg}`}
      >
        <div>
          <div className="flex items-center gap-2 text-[11.5px] font-bold tracking-[0.16em] text-[rgba(219,234,254,0.4)] uppercase mb-2">
            <span>( 04 )</span>
            <span>Contact</span>
          </div>
          <h2 className="font-display font-bold text-[28px] text-[#F3F6FB] mb-3">Let's build something exceptional</h2>
          <p className="text-sm leading-relaxed text-[rgba(219,234,254,0.6)] mb-5">
            Have a project in mind? Tell me about it — I usually reply within a day.
          </p>
          <div className="flex flex-col gap-2.5">
            <a href="mailto:lammydeart@gmail.com" className="text-[13.5px] text-[rgba(219,234,254,0.75)] hover:text-white transition-colors duration-300">
              lammydeart@gmail.com
            </a>
            <div className="text-[13.5px] text-[rgba(219,234,254,0.75)]">Lagos, Nigeria — Remote</div>
            <div className="flex gap-3 mt-1.5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="w-[34px] h-[34px] rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[rgba(255,255,255,0.4)]"
                >
                  <s.icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5">
          <motion.a
            href="mailto:lammydeart@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white text-sm font-semibold"
          >
            <FaEnvelope /> Send an email
          </motion.a>
          <motion.a
            href="http://Wa.me/2347015848547"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-[rgba(255,255,255,0.16)] text-[#F3F6FB] text-sm font-semibold"
          >
            <FaWhatsapp /> WhatsApp me
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HomeContact
