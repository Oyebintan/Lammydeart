import React, { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "../motion"
import p1 from "../assets/projects/p1.jpg"
import p2 from "../assets/projects/p2.jpg"
import p3 from "../assets/projects/p3.jpg"
import p4 from "../assets/projects/p4.jpg"
import p6 from "../assets/projects/p6.jpg"
import p9 from "../assets/projects/p9.jpg"

const projects = [
  { id: 1, title: "Brand Identity Design", category: "Logo Design", img: p1 },
  { id: 2, title: "Event Promotion", category: "Flyer Design", img: p2 },
  { id: 3, title: "Corporate Branding", category: "Logo Design", img: p3 },
  { id: 4, title: "Social Media Campaign", category: "Poster Design", img: p4 },
  { id: 6, title: "Startup Branding", category: "Logo Design", img: p6 },
  { id: 9, title: "Tech Company Branding", category: "Logo Design", img: p9 },
]

const filterList = ["All", "Logo Design", "Flyer Design", "Poster Design"]

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
            {filterList.map((f) => {
              const isActive = filter === f
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="relative cursor-pointer py-2 px-[17px] rounded-full text-[12.5px] font-semibold border overflow-hidden transition-colors duration-300 border-[rgba(147,197,253,0.15)] hover:border-[rgba(147,197,253,0.3)]"
                >
                  {isActive && (
                    <motion.div
                      layoutId="filter-active-bg"
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
