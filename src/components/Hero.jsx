import React from "react"
import { motion } from "framer-motion"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { SiCoreldraw, SiAdobephotoshop } from "react-icons/si"
import { ArrowRight, ArrowDown } from "lucide-react"
import { useTypewriter } from "../hooks/useTypewriter"
import { gridBg } from "../decor"
import CornerMarks from "./decor/CornerMarks"
import LineBox from "./decor/LineBox"
import zookImg from "../assets/images/projects/zook-fabrics/preview.jpg"
import rexonaImg from "../assets/images/projects/rexona-giveaway-campaign/preview.jpg"
import festivalImg from "../assets/images/projects/cultural-festival-poster/preview.jpg"

// The hero collage: one tall flagship frame beside two stacked smaller ones.
// Swap the `img` values to feature different work — each `label` shows in the
// tinted strip at the bottom of its own frame.
const heroFrames = {
  tall: {
    img: zookImg,
    category: "Branding",
    title: "ZOOK Fabrics",
    accent: "29,78,216", // brand blue, matches the ZOOK board
  },
  topSmall: {
    img: rexonaImg,
    category: "Social Ads",
    title: "Rexona Giveaway",
    accent: "16,122,90",
  },
  bottomSmall: {
    img: festivalImg,
    category: "Social Ads",
    title: "Cultural Festival",
    accent: "168,64,20",
  },
}

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

// Floating "app icon" badge for a design tool — real brand mark, not a
// literal 3D render (no 3D asset source available), but the squircle shape +
// gradient + drop shadow + independent float reads as tactile depth.
const FloatingToolIcon = ({ icon, color, className, duration = 5.5, delay = 0, tilt = 0 }) => {
  const Icon = icon
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [tilt, tilt + 3, tilt] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-10 w-9 h-9 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center pointer-events-none border border-white/15 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}99)`,
        boxShadow: `0 18px 30px -12px ${color}66, 0 10px 20px -8px rgba(0,0,0,0.6)`,
      }}
    >
      <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
    </motion.div>
  )
}

const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 1, 0, 0] }}
    transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    className="inline-block w-[2px] h-[0.85em] bg-current ml-0.5 align-middle"
  />
)

// One frame of the hero collage. The category strip sits flush at the bottom
// over a tinted scrim: it reads clearly without hiding the artwork behind it.
const HeroFrame = ({ frame, className, objectPosition = "50% 50%", delay = 0, float = 7 }) => (
  <motion.a
    href="/project"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6 }}
    className={`group relative block overflow-hidden rounded-[18px] lg:rounded-[22px] border border-[rgba(255,255,255,0.12)] bg-[#0b1526] shadow-[0_24px_50px_-18px_rgba(0,0,0,0.85)] ${className}`}
  >
    <motion.div
      animate={{ y: [0, -float, 0] }}
      transition={{ duration: 6.5 + delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      <img
        src={frame.img}
        alt={`${frame.category} — ${frame.title}`}
        style={{ objectPosition }}
        className="w-full h-full object-cover scale-[1.06] transition-transform duration-500 group-hover:scale-[1.12]"
        loading="lazy"
      />
    </motion.div>

    {/* Tinted category strip — the accent colour carries the project's own
        palette, and the scrim only covers the bottom sliver of the frame */}
    <div
      className="absolute inset-x-0 bottom-0 px-3 pt-8 pb-2.5 lg:px-4 lg:pb-3"
      style={{
        background: `linear-gradient(to top, rgba(${frame.accent},0.92) 0%, rgba(${frame.accent},0.55) 45%, transparent 100%)`,
      }}
    >
      <div className="text-[8.5px] lg:text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/75 leading-none mb-1">
        {frame.category}
      </div>
      <div className="font-display text-[11.5px] lg:text-[14px] font-bold text-white leading-tight">
        {frame.title}
      </div>
    </div>
  </motion.a>
)

// Self-contained so it can render once in the mobile flow (right after the
// headline) and once in the desktop column, without the two instances
// fighting over shared grid rows.
const HeroVisual = () => (
  <div className="relative w-full">
    <motion.div
      animate={{ opacity: [0.5, 0.85, 0.5] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-8 -right-6 w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.22),rgba(29,78,216,0.08)_60%,transparent_75%)] blur-sm pointer-events-none"
    />

    {/* Two stacked frames beside one tall frame. Equal-height rows keep the
        stack's combined height exactly matching the tall frame, so all three
        line up flush top and bottom. */}
    <div className="relative grid grid-cols-2 grid-rows-2 gap-2.5 lg:gap-3.5 h-[330px] sm:h-[400px] lg:h-[460px]">
      <HeroFrame
        frame={heroFrames.topSmall}
        className="col-start-1 row-start-1"
        objectPosition="50% 30%"
        delay={0.35}
        float={6}
      />
      <HeroFrame
        frame={heroFrames.bottomSmall}
        className="col-start-1 row-start-2"
        objectPosition="50% 40%"
        delay={0.5}
        float={8}
      />
      <HeroFrame
        frame={heroFrames.tall}
        className="col-start-2 row-start-1 row-span-2"
        objectPosition="50% 22%"
        delay={0.2}
        float={7}
      />

      {/* Tool badges sit mostly outside the collage, straddling opposite outer
          corners — far enough out that they don't cover the artwork's own
          credit line or either category label */}
      <FloatingToolIcon
        icon={SiCoreldraw}
        color="#1AAB8A"
        className="-top-4 -left-4 lg:-top-7 lg:-left-7"
        duration={5.5}
        tilt={-6}
      />
      <FloatingToolIcon
        icon={SiAdobephotoshop}
        color="#31A8FF"
        className="-bottom-4 -right-4 lg:-bottom-7 lg:-right-7"
        duration={6.2}
        delay={0.8}
        tilt={5}
      />
    </div>
  </div>
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

  return (
    <section className={`relative overflow-hidden bg-[#03050a] pt-20 pb-8 lg:pt-24 lg:pb-12 px-6 lg:px-14 ${gridBg}`}>
      <CornerMarks />
      <LineBox className="hidden lg:block -top-16 right-[28%]" size={180} duration={30} />
      <LineBox className="hidden lg:block -bottom-20 -left-16" size={140} duration={24} reverse />

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
            className="font-display font-bold text-[32px] lg:text-5xl leading-[1.15] tracking-[-0.01em] text-[#F3F6FB] min-h-[2.4em]"
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

          {/* Collage shows right here on mobile, between the headline and the copy */}
          <div className="lg:hidden">
            <HeroVisual />
          </div>

          {/* The collage spans the full column now, so the copy below it does too —
              no width cap, everything shares one left edge */}
          <div className="w-full lg:contents flex flex-col gap-6">
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

            <motion.div variants={item} className="flex items-center gap-3.5">
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
                  className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[rgba(255,255,255,0.4)]"
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

      {/* Bottom strip — gives the clearance the tilted card needs a purpose
          (scroll cue + availability) instead of leaving it as dead space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="hidden lg:flex relative z-10 max-w-7xl mx-auto mt-10 items-center gap-6"
      >
        <a
          href="#services"
          className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] uppercase text-[rgba(219,234,254,0.45)] hover:text-[rgba(219,234,254,0.85)] transition-colors duration-300"
        >
          <span className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center group-hover:border-[rgba(255,255,255,0.35)] transition-colors duration-300">
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} strokeWidth={2.5} />
            </motion.span>
          </span>
          Scroll to explore
        </a>
        <span className="h-px flex-1 bg-gradient-to-r from-[rgba(255,255,255,0.12)] via-[rgba(255,255,255,0.06)] to-transparent" />
        <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[rgba(219,234,254,0.45)]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
          Available for work
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
