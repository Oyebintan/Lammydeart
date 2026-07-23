import React from "react"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "../motion"

const experience = [
  { years: "2023—24", role: "Senior Graphic Designer", company: "Folanimprint LTD" },
  { years: "2024—25", role: "Senior Graphic Designer", company: "TransactX" },
  { years: "2025", role: "Digital Marketing Intern", company: "Lance Trend LTD" },
  { years: "2025—Now", role: "Sub Community Manager / Design Lead", company: "OOU Tech Community (OTC)" },
]

const education = [
  { years: "2023—Now", degree: "B.Sc. Computer Science", school: "Olabisi Onabanjo University" },
]

const Timeline = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <motion.div variants={stagger(0.08)} className="flex flex-col gap-3.5">
        <div className="text-[12px] font-bold text-[rgba(219,234,254,0.4)] tracking-[0.08em] uppercase">
          Experience
        </div>
        {experience.map((e) => (
          <motion.div
            key={e.company}
            variants={fadeUp}
            whileHover={{ x: 4 }}
            className="flex gap-4 pb-3.5 border-b border-[rgba(255,255,255,0.08)]"
          >
            <div className="text-xs font-semibold text-[rgba(219,234,254,0.55)] flex-none w-[74px] pt-0.5">{e.years}</div>
            <div>
              <div className="text-[14.5px] font-bold text-[#F3F6FB]">{e.role}</div>
              <div className="text-[12.5px] text-[rgba(219,234,254,0.5)] mt-0.5">{e.company}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={stagger(0.08)} className="flex flex-col gap-3.5">
        <div className="text-[12px] font-bold text-[rgba(219,234,254,0.4)] tracking-[0.08em] uppercase">
          Education
        </div>
        {education.map((e) => (
          <motion.div
            key={e.degree}
            variants={fadeUp}
            whileHover={{ x: 4 }}
            className="flex gap-4 pb-3.5 border-b border-[rgba(255,255,255,0.08)]"
          >
            <div className="text-xs font-semibold text-[rgba(219,234,254,0.55)] flex-none w-[74px] pt-0.5">{e.years}</div>
            <div>
              <div className="text-[14.5px] font-bold text-[#F3F6FB]">{e.degree}</div>
              <div className="text-[12.5px] text-[rgba(219,234,254,0.5)] mt-0.5">{e.school}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Timeline
