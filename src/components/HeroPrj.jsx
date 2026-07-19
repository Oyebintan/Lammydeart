import React, { useState } from "react"
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

const HeroPrj = ({ times = 6 }) => {
  const [filter, setFilter] = useState("All")

  const filtered = (filter === "All" ? projects : projects.filter((p) => p.category === filter)).slice(0, times)

  return (
    <section id="projects" className="px-6 lg:px-14 py-12 bg-[#03050a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
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
                  className={`cursor-pointer py-2 px-[17px] rounded-full text-[12.5px] font-semibold border transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white border-transparent"
                      : "bg-[rgba(147,197,253,0.05)] text-[rgba(219,234,254,0.6)] border-[rgba(147,197,253,0.15)] hover:border-[rgba(147,197,253,0.3)]"
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <a
              key={p.id}
              href="/project"
              className="group relative rounded-[20px] overflow-hidden border border-[rgba(147,197,253,0.14)] aspect-[4/3] block"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4.5 bg-gradient-to-b from-transparent from-40% to-[rgba(2,4,10,0.85)]">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#93C5FD] mb-1">
                  {p.category}
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg font-bold text-white">{p.title}</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center text-white text-[15px]">
                    &#8599;
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/project"
            className="flex items-center gap-2 border border-[rgba(147,197,253,0.2)] hover:border-[#60A5FA] text-[#F3F6FB] text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-300"
          >
            View all projects <span>&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroPrj
