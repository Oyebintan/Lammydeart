import { motion, AnimatePresence } from "framer-motion"
import PageBackdrop, { pageShell } from "../components/decor/PageBackdrop"
import { usePageTitle } from "../hooks/usePageTitle"
import { fadeUp, stagger, viewportOnce } from "../lib/motion"
import { projectCategories } from "../data/projects"
import { useProjectGallery } from "../hooks/useProjectGallery"
import ProjectCard from "../components/ProjectCard"
import ProjectLightbox from "../components/ProjectLightbox"
import CategoryFilter from "../components/CategoryFilter"
import { pillClass } from "../components/ui/Pill"

const ProjectsPage = () => {
  usePageTitle("Projects")
  const { filter, setFilter, filtered, open, openProject, closeProject, step } = useProjectGallery()

  return (
    <div className={`${pageShell}`}>
      <PageBackdrop lineBox={{ className: "hidden lg:block top-28 right-[6%]", size: 150, duration: 24, reverse: true }} />

      <motion.section
        variants={stagger()}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 lg:px-14 pt-[calc(7rem+env(safe-area-inset-top,0px))] pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            className={`${pillClass} mb-4`}
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
