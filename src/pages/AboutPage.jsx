import { motion } from "framer-motion"
import PageBackdrop, { pageShell } from "../components/decor/PageBackdrop"
import { Palette, Layout, Lightbulb, Sparkles } from "lucide-react"
import { usePageTitle } from "../hooks/usePageTitle"
import { fadeUp, stagger, viewportOnce } from "../lib/motion"
import { boxTint } from "../lib/decor"
import img from "../assets/images/profile/preview.jpg"
import { pillClass } from "../components/ui/Pill"

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
    <div className={`${pageShell}`}>
      <PageBackdrop lineBox={{ className: "hidden lg:block top-24 right-[8%]", size: 160, duration: 26 }} glowY="top-96" />

      <motion.section
        variants={stagger()}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 lg:px-14 pt-[calc(7rem+env(safe-area-inset-top,0px))] pb-12 grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto"
      >
        <div className="flex flex-col gap-5">
          <motion.div
            variants={fadeUp}
            className={pillClass}
          >
            <Sparkles size={12} /> About Me
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl lg:text-5xl text-[#FAFAFA]">
            Olamide
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-[rgba(255,255,255,0.70)]">
            Graphic Designer & Product Designer
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div
                key={h.text}
                className={`flex items-center gap-2.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-3 ${boxTint}`}
              >
                <h.icon size={16} className="text-[rgba(255,255,255,0.86)] flex-none" />
                <span className="text-[12.5px] font-medium text-[#FAFAFA]">{h.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[rgba(255,255,255,0.70)]">
            I'm a graphic and UI/UX designer with over 3 years of experience creating clean,
            high-performing visuals that help brands stand out and connect with their audience. I
            believe every design should tell a story and solve real problems.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="relative flex justify-center lg:justify-end">
          <div
            style={{ rotate: "-3deg" }}
            // 4:5 to match the illustration's own ratio, so it isn't cropped
            className="relative w-full max-w-[300px] aspect-[4/5] rounded-[26px] bg-gradient-to-br from-[#0D0E0F] to-[#050506] border border-[rgba(255,255,255,0.12)] p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.75)]"
          >
            <div className="w-full h-full rounded-[20px] overflow-hidden">
              <img src={img} alt="Olamide" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 py-1.5 px-2.5 rounded-2xl bg-[rgba(5,8,15,0.85)] backdrop-blur-md border border-[rgba(255,255,255,0.14)]">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <span className="text-[10px] font-bold text-[#FAFAFA]">Available</span>
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
        <div className="rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[#050506] p-7 lg:p-9">
          <h2 className="text-[11.5px] font-bold tracking-[0.16em] text-[rgba(255,255,255,0.55)] uppercase mb-2">
            My Approach
          </h2>
          <p className="text-[15px] leading-relaxed text-[rgba(255,255,255,0.78)] max-w-2xl">
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
          <h2 className="text-[11.5px] font-bold tracking-[0.16em] text-[rgba(255,255,255,0.55)] uppercase mb-4">
            Design Tools
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className={`rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-center ${boxTint}`}
              >
                <span className="text-[13px] font-semibold text-[#FAFAFA]">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-[11.5px] font-bold tracking-[0.16em] text-[rgba(255,255,255,0.55)] uppercase mb-4">
            Skills & Services
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <div
                key={skill}
                className={`rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[12.5px] text-[rgba(255,255,255,0.82)] ${boxTint}`}
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
