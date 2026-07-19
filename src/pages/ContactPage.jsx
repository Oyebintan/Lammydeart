import React from "react"
import { motion } from "framer-motion"
import {
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6"
import { usePageTitle } from "../hooks/usePageTitle"
import { fadeUp, stagger, viewportOnce } from "../motion"

const contactDetails = [
  { icon: FaEnvelope, label: "lammydeart@gmail.com", href: "mailto:lammydeart@gmail.com" },
  { icon: FaPhone, label: "+234 701 584 8547", href: "tel:+2347015848547" },
  { icon: FaLocationDot, label: "Lagos, Nigeria — Remote", href: null },
]

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/lammyde.art", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/oyebintan?s=21", label: "Twitter" },
  { icon: FaWhatsapp, href: "http://Wa.me/2347015848547", label: "WhatsApp" },
]

const ContactPage = () => {
  usePageTitle("Contact")

  return (
    <div className="relative overflow-hidden bg-[#03050a] min-h-screen">
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.3),transparent_70%)] blur-2xl pointer-events-none"
      />
      <div className="absolute top-40 right-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.14),transparent_70%)] blur-2xl pointer-events-none" />

      <motion.section
        variants={stagger()}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 lg:px-14 pt-28 pb-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(59,130,246,0.08)] border border-[rgba(96,165,250,0.25)] text-[11px] font-semibold tracking-[0.14em] text-[#93C5FD] uppercase w-fit mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
            Available for new projects
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl lg:text-5xl text-[#F3F6FB] mb-3">
            Let's Work Together
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.6)] max-w-lg">
            Have a project in mind? Tell me about it — I usually reply within a day.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 px-6 lg:px-14 pb-20"
      >
        <div className="max-w-7xl mx-auto rounded-[24px] border border-[rgba(147,197,253,0.15)] bg-gradient-to-br from-[rgba(29,78,216,0.08)] to-[rgba(96,165,250,0.03)] p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-4">
              Contact Details
            </div>
            <div className="flex flex-col gap-4 mb-6">
              {contactDetails.map((d) => {
                const Content = (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(147,197,253,0.08)] flex items-center justify-center flex-none">
                      <d.icon className="text-[#93C5FD]" size={16} />
                    </div>
                    <span className="text-[14px] text-[rgba(219,234,254,0.8)]">{d.label}</span>
                  </div>
                )
                return d.href ? (
                  <a key={d.label} href={d.href} className="hover:opacity-80 transition-opacity duration-300">
                    {Content}
                  </a>
                ) : (
                  <div key={d.label}>{Content}</div>
                )
              })}
            </div>
            <div className="flex gap-3">
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
                  className="w-[38px] h-[38px] rounded-full border border-[rgba(147,197,253,0.2)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[#60A5FA]"
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <motion.a
              href="mailto:lammydeart@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white text-sm font-semibold"
            >
              <FaEnvelope /> Send an email
            </motion.a>
            <motion.a
              href="http://Wa.me/2347015848547"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, borderColor: "#60A5FA" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-[rgba(147,197,253,0.25)] text-[#F3F6FB] text-sm font-semibold"
            >
              <FaWhatsapp /> WhatsApp me
            </motion.a>
            <div className="flex items-center justify-center gap-2 text-[12.5px] text-[rgba(219,234,254,0.45)] pt-2">
              Response time: <span className="text-[rgba(219,234,254,0.75)] font-semibold">within 24 hours</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage
