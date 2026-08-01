import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import { SiCoreldraw, SiAdobephotoshop } from "react-icons/si"
import { ArrowRight, ArrowDown } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"
import { gridBg, boxTint } from "../../lib/decor"
import CornerMarks from "../decor/CornerMarks"
import LineBox from "../decor/LineBox"
import { projects } from "../../data/projects"
import zookImg from "../../assets/images/projects/zook-fabrics/preview.jpg"

// Router-aware anchors. Raw <a href="/..."> triggered a full document reload on
// every in-app link, throwing away the SPA and re-downloading the bundle.
const MotionLink = motion.create(Link)

// Pulls title/category straight from data/projects.js instead of duplicating
// them here. Those two used to be hardcoded per frame, so swapping which image
// a frame shows (as happened more than once) left the OLD title and category
// sitting over the NEW artwork — that mismatch was the bug. Now a frame can
// only ever describe the image it's actually showing.
const featuredProject = (slug) => {
  const p = projects.find((proj) => proj.slug === slug)
  return {
    img: p.img,
    category: p.category,
    // The tile is narrow, so the long "Name — subtitle" project titles are
    // shortened to just the name; the full title still shows in the grid and
    // the lightbox.
    title: p.title.split(" — ")[0],
  }
}

// The hero collage: one large flagship frame beside two stacked smaller ones.
// Every frame is 4:5, matching the artwork, so designs fit without cropping.
// ZOOK is the flagship brand board — a dedicated asset, not part of the
// projects catalog — so it's the one frame still set by hand. Change which
// project fills the other two frames by changing the slug passed here.
const heroFrames = {
  tall: {
    img: zookImg,
    category: "Branding",
    title: "ZOOK Fabrics",
    accent: "29,78,216", // brand blue, matches the ZOOK board
  },
  topSmall: {
    ...featuredProject("relish-locals-opening"),
    accent: "192,57,43", // brick red, matches the Relish Locals logo
  },
  bottomSmall: {
    ...featuredProject("transactx-sub-accounts"),
    accent: "0,0,0", // black, per direct request — reads as a clean fade to
                     // the frame's own near-black mat rather than a colour tint
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

// Module-level so the reference is stable. Inline array literals made
// useTypewriter's effect tear down and restart its timer on every render.
const greetingWords = ["Hi, I'm Lammy"]
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

// One frame of the hero collage. The frame is 4:5 like the artwork, so
// object-contain fills it edge to edge with nothing cropped, and the category
// sits in a tinted band overlaid across the bottom of the design.
// Memoised, and that is load-bearing rather than an optimisation. The role
// typewriter re-renders Hero roughly every 50ms; each re-render handed framer a
// fresh `animate` array and restarted the float and pulse from their current
// value. Measured: the float managed 0.98px of its 5-7px travel, and the two
// frames carrying a start delay never moved at all, because every restart
// re-applied the delay. Props here are module-level constants and literals, so
// this bails out of every re-render and the loops run uninterrupted.
const HeroFrame = React.memo(({ frame, className, delay = 0, float = 6, phase = 0, priority = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    <MotionLink
      to="/project"
      // `phase` offsets the first iteration, which permanently staggers the
      // loop — without it all three frames rose and fell together (measured:
      // two frames sat at an identical top offset) and the collage read as one
      // mechanical object rather than three floating pieces.
      animate={{ y: [0, -float, 0] }}
      transition={{ duration: 6.5 + delay, repeat: Infinity, ease: "easeInOut", delay: phase }}
      whileHover={{ scale: 1.025 }}
      className="group relative block w-full h-full overflow-hidden rounded-[18px] lg:rounded-[22px] border border-[rgba(255,255,255,0.12)] shadow-[0_24px_50px_-18px_rgba(0,0,0,0.85)]"
      style={{
        // Shows only where a design isn't exactly 4:5, as a thin mount
        background: `linear-gradient(160deg, rgba(${frame.accent},0.28), rgba(6,10,18,0.96) 70%)`,
      }}
    >
      {/* Eager, not lazy: these sit at the top of the page, so they ARE the
          largest contentful paint. loading="lazy" made the browser defer the
          hero artwork until after layout, which is the opposite of what is
          wanted. `priority` marks the big frame as the one to fetch first. */}
      <img
        src={frame.img}
        alt={`${frame.category} — ${frame.title}`}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        loading="eager"
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />

      {/* Attention motion, kept deliberately faint so it reads as light moving
          across a printed piece rather than as a flashing element. Each frame
          gets its own delay so the three sweep in sequence, not in unison. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-sheen absolute inset-y-0 -left-1/4 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
          style={{ animationDelay: `${1.2 + phase}s` }}
        />
      </div>

      {/* Accent edge that breathes — ties each frame to its category colour */}
      <motion.div
        animate={{ opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: phase }}
        className="absolute inset-0 rounded-[18px] lg:rounded-[22px] pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px rgba(${frame.accent},0.55)` }}
      />

      <div
        className="absolute inset-x-0 bottom-0 px-3 pt-8 pb-2.5 lg:px-4 lg:pb-3 pointer-events-none"
        style={{
          background: `linear-gradient(to top, rgba(${frame.accent},0.94) 0%, rgba(${frame.accent},0.6) 45%, transparent 100%)`,
        }}
      >
        <div className="text-[8.5px] lg:text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/75 leading-none mb-1">
          {frame.category}
        </div>
        {/* Wraps rather than truncating — the narrow frames are only ~110px wide
            on a phone, where a single line clipped most of the title */}
        <div className="font-display text-[10.5px] lg:text-[14px] font-bold text-white leading-[1.2]">
          {frame.title}
        </div>
      </div>
    </MotionLink>
  </motion.div>
))
HeroFrame.displayName = "HeroFrame"

// Self-contained so it can render once in the mobile flow (right after the
// headline) and once in the desktop column, without the two instances
// fighting over shared grid rows.
const HeroVisual = React.memo(() => (
  <div className="relative w-full">
    <motion.div
      animate={{ opacity: [0.5, 0.85, 0.5] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-8 -right-6 w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.16),rgba(29,78,216,0.05)_60%,transparent_75%)] blur-sm pointer-events-none"
    />

    {/* The two small frames are 4:5 and set the row heights; ZOOK spans both
        rows, and the 1:2.056 column ratio is what makes its resulting box 4:5
        as well (a full-height frame needs ~2x the width of a half-height one at
        that aspect, plus a share of the gap). So all three are 4:5, flush top
        and bottom, with no fixed pixel heights to break at other widths. */}
    <div className="relative grid grid-cols-[1fr_2.056fr] gap-2.5 lg:gap-3.5">
      <HeroFrame
        frame={heroFrames.topSmall}
        className="col-start-1 row-start-1 aspect-[4/5]"
        delay={0.35}
        float={5}
        phase={1.5}
      />
      <HeroFrame
        frame={heroFrames.bottomSmall}
        className="col-start-1 row-start-2 aspect-[4/5]"
        delay={0.5}
        float={7}
        phase={3}
      />
      <HeroFrame
        frame={heroFrames.tall}
        className="col-start-2 row-start-1 row-span-2"
        delay={0.2}
        float={6}
        phase={0}
        priority
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
))
HeroVisual.displayName = "HeroVisual"

const Hero = () => {
  const greeting = useTypewriter(greetingWords, { loop: false, typingSpeed: 55 })
  const role = useTypewriter(roles, {
    loop: true,
    typingSpeed: 65,
    deletingSpeed: 32,
    pauseTime: 1600,
    startDelay: 1300,
  })

  return (
    <section className="relative overflow-hidden bg-[#000000] pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-8 lg:pt-[calc(6rem+env(safe-area-inset-top,0px))] lg:pb-12 px-6 lg:px-14">
      {/* Texture lives on its own masked layer rather than on the section, so it
          can fade to nothing well before the section ends — everything from the
          stats row down is plain colour, matching the rest of the page. The
          mask has to sit here and not on the section itself, since masking the
          section would fade its content too. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_38%,transparent_72%)] ${gridBg}`}
      />
      <CornerMarks bottom={false} />
      <LineBox className="hidden lg:block -top-16 right-[28%]" size={180} duration={30} />

      {/* Ambient glows */}
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.15),transparent_70%)] blur-2xl pointer-events-none"
      />
      <div className="absolute bottom-[-200px] right-[10%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.035),transparent_70%)] blur-2xl pointer-events-none" />

      {/* The grid texture stops with the hero now — everything below it is flat
          colour — so fade the lines out before the boundary instead of letting
          them end on a hard horizontal cut */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent,#000000)] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        // Collage column gets slightly more than half and the gap is tighter, so
        // the two halves sit close instead of leaving a void down the middle.
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.06fr] gap-10 lg:gap-9 lg:items-center"
      >
        {/* Text column */}
        <div className="flex flex-col gap-6">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(255,255,255,0.86)] uppercase w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]" />
            Graphic Designer + Web Designer
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-[32px] lg:text-[52px] xl:text-[58px] leading-[1.12] tracking-[-0.015em] text-[#FAFAFA] min-h-[2.4em]"
          >
            <span>
              {greeting}
              <Cursor />
            </span>
            <br />
            <span className="animate-gradient bg-gradient-to-r from-[#1D4ED8] via-[#60A5FA] to-[#BAE6FD] bg-clip-text text-transparent">
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
            <motion.p variants={item} className="text-[15px] lg:text-base leading-relaxed text-[rgba(255,255,255,0.70)] lg:max-w-[34rem]">
              Crafting bold visual identities and clean, functional websites — one project at a time.
            </motion.p>

            {/* Two equal columns rather than auto-width pills, so the button
                shapes themselves start at the collage's left edge and end at its
                right edge instead of trailing off mid-row */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-3 w-full lg:max-w-[34rem]"
            >
              <MotionLink
                to="/project"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="animate-gradient flex items-center justify-center gap-2 px-5 py-[11px] rounded-full bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] text-white text-sm font-semibold shadow-[0_8px_26px_-8px_rgba(37,99,235,0.65)]"
              >
                View my work <ArrowRight size={15} strokeWidth={2.5} />
              </MotionLink>
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center justify-center gap-2 px-5 py-[11px] rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.03)] text-[#FAFAFA] text-sm font-semibold"
              >
                Let's talk
              </MotionLink>
            </motion.div>

            {/* Each qualifier is its own chip on a 2-column grid, the third
                spanning both. Chips give "Open for freelance work" the small
                background you asked for, and the grid is what makes the row of
                shapes start and end exactly where the collage does — as plain
                ragged text these lines left the right-hand side empty. */}
            <motion.div variants={item} className="w-full lg:max-w-[34rem] flex flex-col gap-3">
              {/* Same pill treatment as the badge above the headline, so the two
                  read as one system */}
              <span
                className={`inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(255,255,255,0.86)] uppercase w-fit ${boxTint}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] flex-none" />
                Open for freelance work
              </span>

              {/* Bullet-separated on one line rather than stacked rows. 12px is
                  what lets all three fit without wrapping at 390px. */}
              <div className="flex items-center gap-2 flex-wrap text-[12px] text-[rgba(255,255,255,0.62)]">
                <span>Lagos, Nigeria</span>
                <span className="text-[rgba(255,255,255,0.5)]">•</span>
                <span>Working remote</span>
                <span className="text-[rgba(255,255,255,0.5)]">•</span>
                <span>Fast response</span>
              </div>
            </motion.div>

            {/* Three even columns rather than three small circles bunched at the
                left, so the first shape sits on the collage's left edge and the
                last on its right edge */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-2 w-full lg:flex lg:w-auto lg:gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className={`h-11 lg:w-11 rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-[rgba(255,255,255,0.78)] hover:text-white ${boxTint}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Even thirds rather than a fixed gap, so the three read as one
                measured row instead of clustering at the left edge */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-[rgba(255,255,255,0.1)]"
            >
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    className="font-display text-[22px] lg:text-2xl font-bold text-[#FAFAFA] leading-none"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[11px] lg:text-[11.5px] text-[rgba(255,255,255,0.62)] mt-1.5">
                    {stat.label}
                  </div>
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

      {/* Bottom strip — scroll cue and section transition. Availability lives in
          the meta line under the CTAs now, so it isn't repeated here. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="hidden lg:flex relative z-10 max-w-7xl mx-auto mt-10 items-center gap-6"
      >
        <a
          href="#services"
          className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] uppercase text-[rgba(255,255,255,0.58)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-300"
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
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[rgba(255,255,255,0.55)]">
          Selected work below
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
