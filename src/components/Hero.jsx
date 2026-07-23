import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { ArrowRight, Sparkle } from "lucide-react"
import { useTypewriter } from "../hooks/useTypewriter"
import { projects } from "../data/projects"

const flagshipProject = projects.find((p) => p.id === 4) ?? projects[0]

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

// Self-contained so it can render once in the mobile flow (right after the
// headline) and once in the desktop column, without the two instances
// fighting over shared grid rows.
const HeroVisual = () => {
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
    <div className="relative w-full flex flex-col items-center lg:items-start gap-4">
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 right-6 lg:right-0 w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.24),rgba(29,78,216,0.08)_60%,transparent_75%)] blur-sm pointer-events-none"
      />

      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-[300px] mx-auto lg:max-w-md lg:mx-0"
      >
        <motion.a
          href="/project"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          className="relative block w-full aspect-[4/3] rounded-[26px] bg-gradient-to-br from-[#0b1526] to-[#050a14] border border-[rgba(255,255,255,0.12)] p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.75)] z-[2] cursor-pointer"
        >
          <div className="w-full h-full rounded-[20px] overflow-hidden">
            <img
              src={flagshipProject.img}
              alt={flagshipProject.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Floating badge: category (inset, inside the frame) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-3 right-3 flex items-center gap-1.5 py-1.5 px-2.5 rounded-2xl bg-[rgba(5,8,15,0.85)] backdrop-blur-md border border-[rgba(255,255,255,0.14)] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
            <div className="text-[10px] font-bold text-[#F3F6FB] whitespace-nowrap">{flagshipProject.category}</div>
          </motion.div>

          {/* Floating badge: featured tag (inset, inside the frame) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute bottom-3 left-3 flex items-center gap-1.5 py-1.5 px-2.5 rounded-2xl bg-[rgba(5,8,15,0.85)] backdrop-blur-md border border-[rgba(255,255,255,0.14)] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)]"
          >
            <Sparkle size={11} className="text-[#F3F6FB]" />
            <div className="text-[10px] font-bold text-[#F3F6FB] whitespace-nowrap">Featured Work</div>
          </motion.div>

          {/* Floating decorative shape cluster */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -top-3 -left-3 w-9 h-9 pointer-events-none"
          >
            <div className="absolute inset-0 rounded-xl border border-[rgba(255,255,255,0.25)]" />
            <div className="absolute top-1.5 left-1.5 w-4.5 h-4.5 rounded-lg bg-gradient-to-br from-[#F3F6FB] to-[rgba(219,234,254,0.6)] rotate-12 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  )
}

const Hero = () => {
  const greeting = useTypewriter(["Hi, I'm Lammy"], { loop: false, typingSpeed: 55 })
  const role = useTypewriter(roles, {
    loop: true,
    typingSpeed: 65,
    deletingSpeed: 32,
    pauseTime: 1600,
    startDelay: 1300,
  })

  return (
    <section className="relative overflow-hidden bg-[#03050a] pt-20 pb-8 lg:pt-24 lg:pb-10 px-6 lg:px-14">
      {/* Ambient glows */}
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.24),transparent_70%)] blur-2xl pointer-events-none"
      />
      <div className="absolute bottom-[-200px] right-[10%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] blur-2xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center"
      >
        {/* Text column */}
        <div className="flex flex-col gap-6">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(219,234,254,0.8)] uppercase w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]" />
            Graphic Designer + Web Designer
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-[32px] lg:text-5xl leading-[1.15] tracking-[-0.01em] text-[#F3F6FB] lg:min-h-[3.7em]"
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

          {/* Flagship project shows right here on mobile, between the headline and the copy */}
          <div className="lg:hidden">
            <HeroVisual />
          </div>

          {/* Matches the visual's width/centering on mobile so everything below it
              lines up with its edges instead of spanning the full column */}
          <div className="w-full max-w-[300px] mx-auto lg:max-w-none lg:mx-0 lg:contents flex flex-col gap-6">
            <motion.p variants={item} className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.6)] lg:max-w-md">
              Crafting bold visual identities and clean, functional websites — one project at a time.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-3 flex-wrap">
              <motion.a
                href="/project"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-2 px-[22px] py-[10px] rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white text-sm font-semibold shadow-[0_8px_26px_-8px_rgba(37,99,235,0.65)]"
              >
                View my work <ArrowRight size={15} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-2 px-[22px] py-[10px] rounded-full border border-[rgba(255,255,255,0.16)] text-[#F3F6FB] text-sm font-semibold"
              >
                Let's talk
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="flex items-center justify-between w-full lg:max-w-[170px]">
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
                  className="w-[30px] h-[30px] rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[rgba(255,255,255,0.4)]"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex gap-7 pt-3 border-t border-[rgba(255,255,255,0.1)]">
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
          </div>
        </div>

        {/* Flagship project column — desktop only */}
        <div className="hidden lg:block">
          <HeroVisual />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
