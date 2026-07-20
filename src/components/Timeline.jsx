import React from "react"
import { motion } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "../motion"

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
    <motion.section
      id="experience"
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="px-6 lg:px-14 py-12 bg-gradient-to-b from-[#05080f] to-[#0a1120]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="mb-6">
          <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-2">
            Background
          </div>
          <h2 className="font-display font-bold text-[28px] text-[#F3F6FB]">Experience & Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-9">
          <motion.div variants={stagger(0.08)} className="flex flex-col gap-4">
            <div className="text-[12.5px] font-bold text-[rgba(219,234,254,0.45)] tracking-[0.08em] uppercase">
              Experience
            </div>
            {experience.map((e) => (
              <motion.div
                key={e.company}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex gap-4 pb-3.5 border-b border-[rgba(147,197,253,0.1)]"
              >
                <div className="text-xs font-semibold text-[#93C5FD] flex-none w-[74px] pt-0.5">{e.years}</div>
                <div>
                  <div className="text-[14.5px] font-bold text-[#F3F6FB]">{e.role}</div>
                  <div className="text-[12.5px] text-[rgba(219,234,254,0.5)] mt-0.5">{e.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={stagger(0.08)} className="flex flex-col gap-4">
            <div className="text-[12.5px] font-bold text-[rgba(219,234,254,0.45)] tracking-[0.08em] uppercase">
              Education
            </div>
            {education.map((e) => (
              <motion.div
                key={e.degree}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex gap-4 pb-3.5 border-b border-[rgba(147,197,253,0.1)]"
              >
                <div className="text-xs font-semibold text-[#93C5FD] flex-none w-[74px] pt-0.5">{e.years}</div>
                <div>
                  <div className="text-[14.5px] font-bold text-[#F3F6FB]">{e.degree}</div>
                  <div className="text-[12.5px] text-[rgba(219,234,254,0.5)] mt-0.5">{e.school}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Timeline
