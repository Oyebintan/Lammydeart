import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MotionLink, fadeUp, springPress, stagger, viewportOnce } from "../../lib/motion"
import { projectCategories } from "../../data/projects"
import { useProjectGallery } from "../../hooks/useProjectGallery"
import ProjectCard from "../ProjectCard"
import ProjectLightbox from "../ProjectLightbox"
import CategoryFilter from "../CategoryFilter"


const FeaturedWork = ({ limit = 6 }) => {
  const { filter, setFilter, filtered, open, openProject, closeProject, step } =
    useProjectGallery({ limit })

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
          className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} featured={filter === "All" && p.featured} onOpen={openProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Matches the projects page — an empty category used to render a
            silent blank space here */}
        {filtered.length === 0 && (
          <p className="text-[14px] text-[rgba(255,255,255,0.55)] py-10 text-center">
            Nothing in {filter} yet — try another category.
          </p>
        )}

        <motion.div variants={fadeUp} className="flex justify-center mt-8">
          <MotionLink
            to="/project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={springPress}
            className="flex items-center gap-2 border border-[rgba(255,255,255,0.14)] hover:border-[rgba(255,255,255,0.4)] text-[#FAFAFA] text-sm font-semibold px-6 py-2.5 rounded-full"
          >
            View all projects <ArrowRight size={15} strokeWidth={2.5} />
          </MotionLink>
        </motion.div>
      </div>

      <ProjectLightbox project={open} list={filtered} onClose={closeProject} onNavigate={step} />
    </motion.section>
  )
}

export default FeaturedWork
