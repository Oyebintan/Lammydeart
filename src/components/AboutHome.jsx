import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Code2, Gem, Zap } from "lucide-react"
import { fadeUp, stagger, viewportOnce } from "../motion"
import Timeline from "./Timeline"
import Skills from "./Skills"

const highlights = [
  { icon: Palette, text: "Graphic & Brand Designer" },
  { icon: Code2, text: "Frontend Developer" },
  { icon: Gem, text: "Focused on Quality & Detail" },
  { icon: Zap, text: "Fast, Reliable & Easy to Work With" },
]

const AboutHome = () => {
  return (
    <motion.section
      id="about"
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="px-6 lg:px-14 py-12 bg-gradient-to-b from-[#05080f] to-[#0a1120]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="flex items-center gap-2 text-[11.5px] font-bold tracking-[0.16em] text-[rgba(219,234,254,0.4)] uppercase mb-2">
          <span>( 02 )</span>
          <span>About Me</span>
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-display font-bold text-[28px] text-[#F3F6FB] mb-8">
          The person behind the pixels
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="flex flex-col gap-5">
            <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.65)]">
              I'm Lammy — a graphic designer and frontend developer who loves turning a blank
              canvas into something that actually works for the brand behind it. I care as much
              about how a design feels as how it performs.
            </motion.p>

            <motion.div variants={stagger(0.08)} className="flex flex-col gap-2.5">
              {highlights.map((h) => (
                <motion.div key={h.text} variants={fadeUp} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center flex-none">
                    <h.icon size={14} className="text-[rgba(219,234,254,0.8)]" />
                  </div>
                  <span className="text-[13.5px] font-medium text-[rgba(219,234,254,0.8)]">{h.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="/about"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3F6FB] mt-1 group"
            >
              More about me
              <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-9">
            <Skills />
            <Timeline />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutHome
