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
import { gridBg } from "../decor"
import CornerMarks from "../components/decor/CornerMarks"
import LineBox from "../components/decor/LineBox"

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

// Quick answers to what clients ask before they get in touch. The two
// business-specific figures below (turnaround windows and revision count) are
// sensible defaults — adjust them to match how you actually work, since they
// read as commitments to anyone about to message you.
const quickAnswers = [
  {
    q: "Typical turnaround",
    a: "Flyers and posters usually take 2–4 days. A full brand identity runs closer to 1–2 weeks, depending on scope.",
  },
  {
    q: "What to include in your brief",
    a: "The business name, what the design is for, any copy that has to appear, sizes you need, and a couple of references you like.",
  },
  {
    q: "Revisions",
    a: "Two rounds of changes are included on every project, so we can refine the direction without extra cost.",
  },
  {
    q: "What you receive",
    a: "Print-ready PDF plus PNG and JPG versions sized for social. Editable source files on request.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Tell me about it",
    body: "Send over what you're building, who it's for, and any deadline you're working to. Rough ideas are fine — I'll ask the rest.",
  },
  {
    step: "02",
    title: "Scope and quote",
    body: "You get a clear plan: what I'll deliver, how long it takes, and what it costs. No surprises once we start.",
  },
  {
    step: "03",
    title: "Design and deliver",
    body: "I share progress as I go so you can steer it early, then hand over the final files in every format you need.",
  },
]

const ContactPage = () => {
  usePageTitle("Contact")

  return (
    <div className={`relative overflow-hidden bg-[#03050a] min-h-screen ${gridBg}`}>
      <CornerMarks />
      <LineBox className="hidden lg:block top-24 right-[8%]" size={150} duration={26} />
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.24),transparent_70%)] blur-2xl pointer-events-none"
      />
      <div className="absolute top-40 right-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] blur-2xl pointer-events-none" />

      <motion.section
        variants={stagger()}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 lg:px-14 pt-[calc(7rem+env(safe-area-inset-top))] pb-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(219,234,254,0.8)] uppercase w-fit mb-4"
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
        className="relative z-10 px-6 lg:px-14 pb-12"
      >
        <div className="max-w-7xl mx-auto rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[#05080f] p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[11.5px] font-bold tracking-[0.16em] text-[rgba(219,234,254,0.4)] uppercase mb-4">
              Contact Details
            </div>
            <div className="flex flex-col gap-4 mb-6">
              {contactDetails.map((d) => {
                const Content = (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-none">
                      <d.icon className="text-[rgba(219,234,254,0.8)]" size={16} />
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
                  className="w-[38px] h-[38px] rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[rgba(255,255,255,0.4)]"
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
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-[rgba(255,255,255,0.16)] text-[#F3F6FB] text-sm font-semibold"
            >
              <FaWhatsapp /> WhatsApp me
            </motion.a>
            <div className="flex items-center justify-center gap-2 text-[12.5px] text-[rgba(219,234,254,0.45)] pt-2">
              Response time: <span className="text-[rgba(219,234,254,0.75)] font-semibold">within 24 hours</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How it works — sets expectations for anyone deciding whether to reach
          out, and gives the page real content instead of a tall empty gap */}
      <motion.section
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 px-6 lg:px-14 pb-14 max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="text-[11.5px] font-bold tracking-[0.16em] text-[rgba(219,234,254,0.4)] uppercase mb-6"
        >
          How working together goes
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-4">
          {howItWorks.map((s) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-6"
            >
              <div className="font-display text-[13px] font-bold text-[rgba(219,234,254,0.35)] mb-3">
                {s.step}
              </div>
              <h3 className="font-display text-[17px] font-bold text-[#F3F6FB] mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-[rgba(219,234,254,0.6)]">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick answers — deliberately a compact list rather than more cards, so
          the page reads as one panel + steps + reference strip instead of a
          wall of similar-looking boxes */}
      <motion.section
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 px-6 lg:px-14 pb-24 max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="text-[11.5px] font-bold tracking-[0.16em] text-[rgba(219,234,254,0.4)] uppercase mb-6"
        >
          Good to know
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="rounded-[20px] border border-[rgba(255,255,255,0.1)] divide-y divide-[rgba(255,255,255,0.07)] overflow-hidden"
        >
          {quickAnswers.map((item) => (
            <div
              key={item.q}
              className="grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] gap-1.5 sm:gap-8 px-5 py-4 lg:px-7 lg:py-5 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.02)]"
            >
              <div className="text-[13.5px] font-semibold text-[#F3F6FB]">{item.q}</div>
              <p className="text-[13.5px] leading-relaxed text-[rgba(219,234,254,0.6)]">{item.a}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}

export default ContactPage
