import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { fadeUp, stagger, viewportOnce } from "../../lib/motion"
import { projects, projectCategories } from "../../data/projects"
import ProjectCard from "../ProjectCard"
import ProjectLightbox from "../ProjectLightbox"
import CategoryFilter from "../CategoryFilter"

const MotionLink = motion.create(Link)

const FeaturedWork = ({ times = 6 }) => {
  const [filter, setFilter] = useState("All")
  const [openId, setOpenId] = useState(null)

  const filtered = (filter === "All" ? projects : projects.filter((p) => p.category === filter)).slice(0, times)

  // Derived from openId rather than storing the project itself, so the lightbox
  // can't hold a stale copy after the filter changes under it.
  const open = filtered.find((p) => p.id === openId) ?? null
  const step = (dir) => {
    const i = filtered.findIndex((p) => p.id === openId)
    if (i !== -1) setOpenId(filtered[(i + dir + filtered.length) % filtered.length].id)
  }

  return (
    <motion.section
      id="projects"
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative overflow-hidden px-6 lg:px-14 py-12 bg-[#000000]"
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[11.5px] font-bold tracking-[0.16em] text-[rgba(255,255,255,0.55)] uppercase mb-2">
              <span>( 02 )</span>
              <span>Featured Work</span>
            </div>
            <h2 className="font-display font-bold text-[28px] text-[#FAFAFA]">Work worth talking about</h2>
          </div>
          <CategoryFilter
            categories={projectCategories}
            value={filter}
            onChange={setFilter}
            layoutId="filter-active-bg-home"
          />
        </motion.div>

        <motion.div
          layout
          variants={fadeUp}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} featured={filter === "All" && p.id === 1} onOpen={(x) => setOpenId(x.id)} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center mt-8">
          <MotionLink
            to="/project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 border border-[rgba(255,255,255,0.14)] hover:border-[rgba(255,255,255,0.4)] text-[#FAFAFA] text-sm font-semibold px-6 py-2.5 rounded-full"
          >
            View all projects <ArrowRight size={15} strokeWidth={2.5} />
          </MotionLink>
        </motion.div>
      </div>

      <ProjectLightbox project={open} list={filtered} onClose={() => setOpenId(null)} onNavigate={step} />
    </motion.section>
  )
}

export default FeaturedWork
