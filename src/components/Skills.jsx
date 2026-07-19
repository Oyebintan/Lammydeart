import React from "react"

const skills = [
  { name: "Corel Draw", pct: 95 },
  { name: "Adobe Photoshop", pct: 70 },
  { name: "Adobe Illustrator", pct: 60 },
]

const Skills = () => {
  return (
    <section className="px-6 lg:px-14 py-10 bg-[#03050a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-4.5">
          Skills
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-[13px] mb-2">
                <span className="text-[#F3F6FB] font-semibold">{s.name}</span>
                <span className="text-[#93C5FD] font-bold">{s.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[rgba(147,197,253,0.12)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#7DD3FC]"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
