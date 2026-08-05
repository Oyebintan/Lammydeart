import { motion, AnimatePresence } from "framer-motion"
import { usePageTitle } from "../hooks/usePageTitle"
import { fadeUp, stagger, viewportOnce } from "../lib/motion"
import { gridBg } from "../lib/decor"
import CornerMarks from "../components/decor/CornerMarks"
import LineBox from "../components/decor/LineBox"
import { projectCategories } from "../data/projects"
import { useProjectGallery } from "../hooks/useProjectGallery"
import ProjectCard from "../components/ProjectCard"
import ProjectLightbox from "../components/ProjectLightbox"
import CategoryFilter from "../components/CategoryFilter"

const ProjectsPage = () => {
  usePageTitle("Projects")
  const { filter, setFilter, filtered, open, openProject, closeProject, step } = useProjectGallery()

  return (
    <div className={`relative overflow-hidden bg-[#000000] min-h-screen ${gridBg}`}>
      <CornerMarks />
      <LineBox className="hidden lg:block top-28 right-[6%]" size={150} duration={24} reverse />
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.15),transparent_70%)] blur-2xl pointer-events-none"
      />
      <div className="absolute top-40 right-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.035),transparent_70%)] blur-2xl pointer-events-none" />

      <motion.section
        variants={stagger()}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 lg:px-14 pt-[calc(7rem+env(safe-area-inset-top,0px))] pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(255,255,255,0.86)] uppercase w-fit mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]" />
            My Work
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl lg:text-5xl text-[#FAFAFA] mb-3">
            All Projects
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[rgba(255,255,255,0.70)] max-w-lg">
            A showcase of creative work that blends modern aesthetics with intuitive design — branding, flyers, posters, and social ads.
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
            <CategoryFilter
              categories={projectCategories}
              value={filter}
              onChange={setFilter}
              layoutId="filter-active-bg-projects"
            />
          </motion.div>

          <motion.div layout className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard key={p.id} p={p} onOpen={openProject} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Without this an empty category renders a silent blank space */}
          {filtered.length === 0 && (
            <p className="text-[14px] text-[rgba(255,255,255,0.55)] py-10 text-center">
              Nothing in {filter} yet — try another category.
            </p>
          )}
        </div>
      </section>

      <ProjectLightbox project={open} list={filtered} onClose={closeProject} onNavigate={step} />
    </div>
  )
}

export default ProjectsPage
