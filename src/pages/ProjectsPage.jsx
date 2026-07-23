import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePageTitle } from "../hooks/usePageTitle"
import { fadeUp, stagger, viewportOnce } from "../motion"
import { gridBg } from "../decor"
import CornerMarks from "../components/decor/CornerMarks"
import LineBox from "../components/decor/LineBox"
import { projects, projectCategories } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

const ProjectsPage = () => {
  usePageTitle("Projects")
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className={`relative overflow-hidden bg-[#03050a] min-h-screen ${gridBg}`}>
      <CornerMarks />
      <LineBox className="hidden lg:block top-28 right-[6%]" size={150} duration={24} reverse />
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
        className="relative z-10 px-6 lg:px-14 pt-28 pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(219,234,254,0.8)] uppercase w-fit mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]" />
            My Work
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl lg:text-5xl text-[#F3F6FB] mb-3">
            Featured Projects
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.6)] max-w-lg">
            A showcase of creative work that blends modern aesthetics with intuitive design — branding, flyers, and posters.
          </motion.p>
        </div>
      </motion.section>

      <section className="relative z-10 px-6 lg:px-14 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex gap-2 flex-wrap mb-6"
          >
            {projectCategories.map((f) => {
              const isActive = filter === f
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="relative cursor-pointer py-2 px-[17px] rounded-full text-[12.5px] font-semibold border overflow-hidden transition-colors duration-300 border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.28)]"
                >
                  {isActive && (
                    <motion.div
                      layoutId="filter-active-bg-projects"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-white"
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-[#03050a]" : "text-[rgba(219,234,254,0.6)]"}`}>
                    {f}
                  </span>
                </button>
              )
            })}
          </motion.div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
