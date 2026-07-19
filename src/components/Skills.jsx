import React from "react"
import { motion } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "../motion"

const skills = [
  { name: "Corel Draw", pct: 95 },
  { name: "Adobe Photoshop", pct: 70 },
  { name: "Adobe Illustrator", pct: 60 },
]

const Skills = () => {
  return (
    <motion.section
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="px-6 lg:px-14 py-10 bg-[#03050a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-4.5">
          Skills
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {skills.map((s) => (
            <motion.div key={s.name} variants={fadeUp}>
              <div className="flex justify-between text-[13px] mb-2">
                <span className="text-[#F3F6FB] font-semibold">{s.name}</span>
                <span className="text-[#93C5FD] font-bold">{s.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[rgba(147,197,253,0.12)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#7DD3FC]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
