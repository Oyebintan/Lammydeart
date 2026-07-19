import React, { useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const ProjectCard = ({ p }) => {
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
      className="group relative rounded-2xl lg:rounded-[20px] overflow-hidden border border-[rgba(147,197,253,0.14)] aspect-square lg:aspect-[4/3] block"
    >
      <motion.img
        src={p.img}
        alt={p.title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-2.5 lg:p-4.5 bg-gradient-to-b from-transparent from-40% to-[rgba(2,4,10,0.85)]">
        <div className="text-[8.5px] lg:text-[11px] font-semibold tracking-[0.1em] uppercase text-[#93C5FD] mb-0.5 lg:mb-1">
          {p.category}
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="font-display text-[13px] lg:text-lg font-bold text-white leading-tight">{p.title}</div>
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center text-white text-[11px] lg:text-[15px] flex-none">
            &#8599;
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
        View Project <span>&#8599;</span>
      </motion.div>
    </motion.a>
  )
}

export default ProjectCard
