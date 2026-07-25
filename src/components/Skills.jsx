import React from "react"
import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "../motion"

const skills = [
  { name: "Corel Draw", pct: 95 },
  { name: "Adobe Photoshop", pct: 70 },
  { name: "Adobe Illustrator", pct: 60 },
]

const Skills = () => {
  return (
    <div className="flex flex-col gap-4.5">
      <div className="text-[12px] font-bold text-[rgba(219,234,254,0.4)] tracking-[0.08em] uppercase">
        Skills
      </div>
      {skills.map((s) => (
        <motion.div key={s.name} variants={fadeUp}>
          <div className="flex justify-between text-[13px] mb-1.5">
            <span className="text-[#F3F6FB] font-semibold">{s.name}</span>
            <span className="text-[rgba(219,234,254,0.5)] font-bold">{s.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
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
  )
}

export default Skills
