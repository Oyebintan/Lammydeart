import React, { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Project cards used to link to /project — the listing page they already sit on
// — while a hover pill promised "View Project". There are no per-project routes,
// so the promise went nowhere. This shows the actual artwork full size instead,
// which is what someone clicking a design portfolio wants.
//
// Backdrop alpha is deliberately low (0.62) so the grid behind stays visible
// through the blur — the point is that the page reads as pushed back and out of
// focus with the artwork floating above it. At the 0.92 it started on, the
// backdrop-filter was doing nothing you could see.
const ProjectLightbox = ({ project, list = [], onClose, onNavigate }) => {
  const closeRef = useRef(null)
  const index = project ? list.findIndex((p) => p.id === project.id) : -1
  const hasSiblings = list.length > 1

  useEffect(() => {
    if (!project) return

    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      if (!hasSiblings) return
      if (e.key === "ArrowRight") onNavigate(1)
      if (e.key === "ArrowLeft") onNavigate(-1)
    }

    document.addEventListener("keydown", onKey)
    // Same lock the mobile drawer uses, so the page behind can't scroll away
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previous
    }
  }, [project, hasSiblings, onClose, onNavigate])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — ${project.category}`}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 lg:p-8 bg-[rgba(2,4,10,0.62)] backdrop-blur-xl"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(3,5,10,0.6)] backdrop-blur-md flex items-center justify-center text-[#F3F6FB] hover:bg-[rgba(255,255,255,0.14)] transition-colors duration-300"
          >
            <X size={15} strokeWidth={2.5} />
          </button>

          {hasSiblings && (
            <>
              <NavButton side="left" onClick={() => onNavigate(-1)} label="Previous project">
                <ChevronLeft size={20} strokeWidth={2.5} />
              </NavButton>
              <NavButton side="right" onClick={() => onNavigate(1)} label="Next project">
                <ChevronRight size={20} strokeWidth={2.5} />
              </NavButton>
            </>
          )}

          {/* Stop propagation so clicking the artwork itself doesn't dismiss */}
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-full flex flex-col gap-4 overflow-y-auto"
          >
            <img
              src={project.img}
              alt={project.title}
              // contain, not cover: the whole design has to be visible here
              className="w-full max-h-[65vh] object-contain rounded-2xl border border-[rgba(255,255,255,0.12)]"
            />
            <div className="text-center px-2 pb-2">
              <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[rgba(219,234,254,0.45)] mb-1.5">
                {project.category}
                {hasSiblings && ` — ${index + 1} of ${list.length}`}
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-[#F3F6FB] mb-2">
                {project.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-[rgba(219,234,254,0.6)] max-w-xl mx-auto">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const NavButton = ({ side, onClick, label, children }) => (
  <button
    type="button"
    aria-label={label}
    onClick={(e) => {
      e.stopPropagation()
      onClick()
    }}
    className={`absolute ${
      side === "left" ? "left-2 lg:left-6" : "right-2 lg:right-6"
    } top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#F3F6FB] hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-300`}
  >
    {children}
  </button>
)

export default ProjectLightbox
