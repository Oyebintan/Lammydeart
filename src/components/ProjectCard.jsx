import React, { useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight, Sparkle } from "lucide-react"

const ProjectCard = ({ p, featured = false }) => {
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 28 })
  const springY = useSpring(y, { stiffness: 300, damping: 28 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.a
      layout
      href="/project"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl lg:rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.1)] aspect-square lg:aspect-[4/3] block"
    >
      <motion.img
        src={p.img}
        alt={p.title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {featured && (
        <div className="absolute top-2.5 left-2.5 lg:top-3.5 lg:left-3.5 flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(3,5,10,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.18)] z-10">
          <Sparkle size={10} className="text-[#60A5FA]" />
          <span className="text-[9.5px] lg:text-[10.5px] font-bold uppercase tracking-[0.08em] text-white">Featured</span>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-2.5 lg:p-4.5 bg-gradient-to-b from-transparent from-40% to-[rgba(2,4,10,0.88)]">
        <div className="text-[8.5px] lg:text-[11px] font-semibold tracking-[0.1em] uppercase text-[rgba(219,234,254,0.6)] mb-0.5 lg:mb-1">
          {p.category}
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="font-display text-[13px] lg:text-lg font-bold text-white leading-tight">{p.title}</div>
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center text-[#03050a] flex-none">
            <ArrowUpRight size={14} className="lg:hidden" strokeWidth={2.5} />
            <ArrowUpRight size={17} className="hidden lg:block" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Cursor-follow hint (pointer devices only) */}
      <motion.div
        style={{ left: springX, top: springY }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.15 }}
        className="hidden lg:flex absolute -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 py-2 px-4 rounded-full bg-white text-[#03050a] text-xs font-bold pointer-events-none z-20 whitespace-nowrap"
      >
        View Project <ArrowUpRight size={14} strokeWidth={2.5} />
      </motion.div>
    </motion.a>
  )
}

export default ProjectCard
