import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "../motion"
import { projects, projectCategories } from "../data/projects"
import ProjectCard from "./ProjectCard"

const HeroPrj = ({ times = 6 }) => {
  const [filter, setFilter] = useState("All")

  const filtered = (filter === "All" ? projects : projects.filter((p) => p.category === filter)).slice(0, times)

  return (
    <motion.section
      id="projects"
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="px-6 lg:px-14 py-12 bg-[#03050a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-2">
              Recent Works
            </div>
            <h2 className="font-display font-bold text-[28px] text-[#F3F6FB]">Selected projects</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {projectCategories.map((f) => {
              const isActive = filter === f
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="relative cursor-pointer py-2 px-[17px] rounded-full text-[12.5px] font-semibold border overflow-hidden transition-colors duration-300 border-[rgba(147,197,253,0.15)] hover:border-[rgba(147,197,253,0.3)]"
                >
                  {isActive && (
                    <motion.div
                      layoutId="filter-active-bg-home"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA]"
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-white" : "text-[rgba(219,234,254,0.6)]"}`}>
                    {f}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          layout
          variants={fadeUp}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center mt-8">
          <motion.a
            href="/project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 border border-[rgba(147,197,253,0.2)] hover:border-[#60A5FA] text-[#F3F6FB] text-sm font-semibold px-6 py-2.5 rounded-full"
          >
            View all projects <span>&#8594;</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroPrj
