import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { useTypewriter } from "../hooks/useTypewriter"
import heroImage from "../assets/hero2.JPG"

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "10+", label: "Happy Clients" },
]

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/lammyde.art", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/oyebintan?s=21", label: "Twitter" },
  { icon: FaWhatsapp, href: "http://Wa.me/2347015848547", label: "WhatsApp" },
]

const roles = ["a Graphic Designer.", "a Web Designer.", "a UI/UX Designer."]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 1, 0, 0] }}
    transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    className="inline-block w-[2px] h-[0.85em] bg-current ml-0.5 align-middle"
  />
)

const Hero = () => {
  const greeting = useTypewriter(["Hi, I'm Lammy"], { loop: false, typingSpeed: 55 })
  const role = useTypewriter(roles, {
    loop: true,
    typingSpeed: 65,
    deletingSpeed: 32,
    pauseTime: 1600,
    startDelay: 1300,
  })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 16 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 16 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section className="relative overflow-hidden bg-[#03050a] pt-20 pb-6 lg:pt-24 lg:pb-8 px-6 lg:px-14">
      {/* Ambient glows */}
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.3),transparent_70%)] blur-2xl pointer-events-none"
      />
      <div className="absolute bottom-[-200px] right-[10%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.14),transparent_70%)] blur-2xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="lg:col-start-1 lg:row-start-1 inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(59,130,246,0.08)] border border-[rgba(96,165,250,0.25)] text-[11px] font-semibold tracking-[0.14em] text-[#93C5FD] uppercase w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]" />
          Graphic Designer + Web Designer
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="lg:col-start-1 lg:row-start-2 font-display font-bold text-[32px] lg:text-5xl leading-[1.15] tracking-[-0.01em] text-[#F3F6FB] lg:min-h-[3.7em]"
        >
          <span>
            {greeting}
            <Cursor />
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#1D4ED8] via-[#60A5FA] to-[#BAE6FD] bg-clip-text text-transparent">
            {role}
            <Cursor />
          </span>
        </motion.h1>

        {/* Visual: photo card */}
        <motion.div
          variants={item}
          className="lg:col-start-2 lg:row-start-1 relative w-full flex justify-center lg:justify-start"
        >
          <motion.div
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-4 lg:right-0 w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.28),rgba(29,78,216,0.1)_60%,transparent_75%)] blur-sm pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            className="relative w-full max-w-[280px] lg:max-w-md aspect-[4/3] rounded-[26px] bg-gradient-to-br from-[#0b1526] to-[#050a14] border border-[rgba(147,197,253,0.18)] p-2 shadow-[0_30px_60px_-24px_rgba(0,0,30,0.7)] z-[2]"
          >
            <div className="w-full h-full rounded-[20px] overflow-hidden">
              <img
                src={heroImage}
                alt="Olamidé"
                className="w-full h-full object-cover object-[50%_12%]"
                loading="lazy"
              />
            </div>

            {/* Floating badge: rating */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-3 -right-3 lg:-right-3.5 flex items-center gap-1.5 py-1.5 px-2.5 lg:py-2 lg:px-3 rounded-2xl bg-[rgba(11,21,38,0.85)] backdrop-blur-md border border-[rgba(147,197,253,0.2)] shadow-[0_10px_24px_-10px_rgba(0,0,20,0.6)]"
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center text-[10px] lg:text-[11px] text-white">
                &#9733;
              </div>
              <div className="text-[10px] lg:text-[11px] font-bold text-[#F3F6FB] whitespace-nowrap">4.9 rating</div>
            </motion.div>

            {/* Floating badge: availability */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-3 -left-3 lg:bottom-4 lg:-left-4 flex items-center gap-1.5 py-1.5 px-2.5 lg:py-2 lg:px-3 rounded-2xl bg-[rgba(11,21,38,0.85)] backdrop-blur-md border border-[rgba(147,197,253,0.2)] shadow-[0_10px_24px_-10px_rgba(0,0,20,0.6)]"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <div className="text-[10px] lg:text-[11px] font-bold text-[#F3F6FB] whitespace-nowrap">Available</div>
            </motion.div>

            {/* Floating decorative shape cluster */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -left-4 lg:-top-5 lg:-left-5 w-10 h-10 lg:w-12 lg:h-12 pointer-events-none"
            >
              <div className="absolute inset-0 rounded-xl border border-[rgba(125,211,252,0.4)]" />
              <div className="absolute top-1.5 left-1.5 lg:top-2 lg:left-2 w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-gradient-to-br from-[#1D4ED8] to-[#7DD3FC] rotate-12 shadow-[0_6px_16px_-6px_rgba(29,78,216,0.7)]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          variants={item}
          className="lg:col-start-1 lg:row-start-3 text-[15px] leading-relaxed text-[rgba(219,234,254,0.6)] max-w-md"
        >
          Crafting bold visual identities and clean, functional websites — one project at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="lg:col-start-1 lg:row-start-4 flex items-center gap-3 flex-wrap">
          <motion.a
            href="/project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 px-[22px] py-[10px] rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white text-sm font-semibold shadow-[0_8px_26px_-8px_rgba(37,99,235,0.65)]"
          >
            View my work <span>&#8594;</span>
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, borderColor: "#60A5FA" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 px-[22px] py-[10px] rounded-full border border-[rgba(147,197,253,0.25)] text-[#F3F6FB] text-sm font-semibold"
          >
            Let's talk
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="lg:col-start-1 lg:row-start-5 flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-[30px] h-[30px] rounded-full border border-[rgba(147,197,253,0.2)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[#60A5FA]"
            >
              <social.icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="lg:col-start-1 lg:row-start-6 flex gap-7 pt-3 border-t border-[rgba(147,197,253,0.12)]">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="font-display text-xl font-bold text-[#F3F6FB]"
              >
                {stat.value}
              </motion.div>
              <div className="text-[11px] text-[rgba(219,234,254,0.5)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mini info cards */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
          }}
          initial="hidden"
          animate="show"
          className="lg:col-start-2 lg:row-start-2 grid grid-cols-3 gap-3 max-w-[280px] lg:max-w-md mx-auto lg:mx-0 w-full mt-1"
        >
          <motion.div
            variants={item}
            whileHover={{ y: -3 }}
            className="rounded-[18px] bg-[rgba(147,197,253,0.04)] border border-[rgba(147,197,253,0.14)] p-2.5 lg:p-3.5 flex flex-col justify-between gap-2"
          >
            <div className="text-[9px] lg:text-[10.5px] font-bold tracking-[0.08em] uppercase text-[rgba(219,234,254,0.5)]">
              Palette
            </div>
            <div className="flex gap-1.5">
              <span className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 rounded-md bg-[#0b1526]" />
              <span className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 rounded-md bg-[#1D4ED8]" />
              <span className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 rounded-md bg-[#60A5FA]" />
              <span className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 rounded-md bg-[#BAE6FD]" />
            </div>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={{ y: -3 }}
            className="rounded-[18px] bg-gradient-to-br from-[rgba(29,78,216,0.14)] to-[rgba(96,165,250,0.05)] border border-[rgba(147,197,253,0.14)] p-2.5 lg:p-3.5 flex flex-col justify-between items-start gap-2"
          >
            <div className="text-[9px] lg:text-[10.5px] font-bold tracking-[0.08em] uppercase text-[rgba(219,234,254,0.5)]">
              Mark
            </div>
            <div className="font-display text-[20px] lg:text-[26px] font-bold bg-gradient-to-br from-[#1D4ED8] to-[#7DD3FC] bg-clip-text text-transparent">
              L.
            </div>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={{ y: -3 }}
            className="relative rounded-[18px] bg-[rgba(147,197,253,0.04)] border border-[rgba(147,197,253,0.14)] p-2.5 lg:p-3.5 flex flex-col justify-between gap-2 overflow-hidden"
          >
            <div className="absolute -top-2.5 -right-2.5 w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] opacity-50" />
            <div className="text-[9px] lg:text-[10.5px] font-bold tracking-[0.08em] uppercase text-[rgba(219,234,254,0.5)]">
              In progress
            </div>
            <div>
              <div className="text-[10px] lg:text-[11.5px] font-bold text-[#F3F6FB] mb-1.5">Ad Campaign</div>
              <div className="h-1 rounded-full bg-[rgba(147,197,253,0.15)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#7DD3FC]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
