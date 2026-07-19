import React from "react"
import { motion } from "framer-motion"
import { Palette, Layout, Lightbulb, Sparkles } from "lucide-react"
import { usePageTitle } from "../hooks/usePageTitle"
import { fadeUp, stagger, viewportOnce } from "../motion"
import img from "../assets/hero2.JPG"

const highlights = [
  { icon: Palette, text: "3+ Years Experience" },
  { icon: Layout, text: "User-Centered Design" },
  { icon: Lightbulb, text: "Creative Solutions" },
]

const tools = ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Corel Draw"]

const skills = [
  "Branding",
  "Social Media Design",
  "Flyer Design",
  "Print Design",
  "Product Design",
  "UI & UX Design",
]

const AboutPage = () => {
  usePageTitle("About")

  return (
    <div className="relative overflow-hidden bg-[#03050a] min-h-screen">
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.3),transparent_70%)] blur-2xl pointer-events-none"
      />
      <div className="absolute top-96 right-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.14),transparent_70%)] blur-2xl pointer-events-none" />

      <motion.section
        variants={stagger()}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 lg:px-14 pt-28 pb-12 grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto"
      >
        <div className="flex flex-col gap-5">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(59,130,246,0.08)] border border-[rgba(96,165,250,0.25)] text-[11px] font-semibold tracking-[0.14em] text-[#93C5FD] uppercase w-fit"
          >
            <Sparkles size={12} /> About Me
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl lg:text-5xl text-[#F3F6FB]">
            Olamide
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-[rgba(219,234,254,0.6)]">
            Graphic Designer & Product Designer
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-center gap-2.5 bg-[rgba(147,197,253,0.04)] border border-[rgba(147,197,253,0.14)] rounded-xl px-3.5 py-3"
              >
                <h.icon size={16} className="text-[#60A5FA] flex-none" />
                <span className="text-[12.5px] font-medium text-[#F3F6FB]">{h.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.6)]">
            I'm a graphic and UI/UX designer with over 3 years of experience creating clean,
            high-performing visuals that help brands stand out and connect with their audience. I
            believe every design should tell a story and solve real problems.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px] aspect-[4/3] rounded-[26px] bg-gradient-to-br from-[#0b1526] to-[#050a14] border border-[rgba(147,197,253,0.18)] p-2 shadow-[0_30px_60px_-24px_rgba(0,0,30,0.7)]">
            <div className="w-full h-full rounded-[20px] overflow-hidden">
              <img src={img} alt="Olamide" className="w-full h-full object-cover object-[50%_12%]" loading="lazy" />
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 py-1.5 px-2.5 rounded-2xl bg-[rgba(11,21,38,0.85)] backdrop-blur-md border border-[rgba(147,197,253,0.2)]">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <span className="text-[10px] font-bold text-[#F3F6FB]">Available</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 px-6 lg:px-14 pb-10 max-w-7xl mx-auto"
      >
        <div className="rounded-[20px] border border-[rgba(147,197,253,0.15)] bg-gradient-to-br from-[rgba(29,78,216,0.08)] to-[rgba(96,165,250,0.03)] p-7 lg:p-9">
          <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-2">
            My Approach
          </div>
          <p className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.7)] max-w-2xl">
            Rooted in curiosity and a strong belief in user-centered design, I balance aesthetic
            appeal with functional clarity — solving one design challenge at a time while staying
            ahead of the trends and technologies that shape the digital experience.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 px-6 lg:px-14 pb-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-6"
      >
        <motion.div variants={fadeUp}>
          <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-4">
            Design Tools
          </div>
          <div className="grid grid-cols-2 gap-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-[rgba(147,197,253,0.14)] bg-[rgba(147,197,253,0.04)] px-4 py-3 text-center"
              >
                <span className="text-[13px] font-semibold text-[#F3F6FB]">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-4">
            Skills & Services
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-[rgba(147,197,253,0.15)] bg-[rgba(147,197,253,0.04)] px-4 py-2 text-[12.5px] text-[rgba(219,234,254,0.75)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default AboutPage
