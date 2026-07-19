import React, { useState } from "react"
import { Palette, Megaphone, PenTool, LayoutGrid } from "lucide-react"

const services = [
  {
    name: "Branding",
    icon: Palette,
    desc: "Distinct visual identities — logo systems, color, type, and brand guidelines that make a business instantly recognizable.",
  },
  {
    name: "Social Ads",
    icon: Megaphone,
    desc: "Scroll-stopping ad creatives and social kits sized and paced for every platform, built to convert.",
  },
  {
    name: "Logo Design",
    icon: PenTool,
    desc: "Sharp, distinctive marks — from concept sketches to a full logo suite ready for any application.",
  },
  {
    name: "UI Design",
    icon: LayoutGrid,
    desc: "Clean, pixel-perfect interfaces and design systems that balance usability with a strong visual point of view.",
  },
]

const Service = () => {
  const [active, setActive] = useState(0)
  const activeService = services[active]

  return (
    <section id="services" className="px-6 lg:px-14 py-12 bg-gradient-to-b from-[#05080f] to-[#0a1120]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
          <div>
            <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-2">
              Quality Services
            </div>
            <h2 className="font-display font-bold text-[28px] text-[#F3F6FB]">What I can do for you</h2>
          </div>
          <p className="max-w-[300px] text-[13.5px] text-[rgba(219,234,254,0.55)]">
            From first sketch to shipped product — a full design-driven process.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-5">
          <div className="flex flex-col gap-2.5">
            {services.map((s, i) => {
              const Icon = s.icon
              const isActive = i === active
              return (
                <button
                  key={s.name}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer flex items-center gap-4 py-[15px] px-[18px] rounded-2xl border text-left transition-colors duration-300 ${
                    isActive
                      ? "border-[rgba(96,165,250,0.45)] bg-gradient-to-r from-[rgba(29,78,216,0.14)] to-[rgba(96,165,250,0.05)]"
                      : "border-[rgba(147,197,253,0.12)] bg-[rgba(147,197,253,0.02)] hover:border-[rgba(147,197,253,0.25)]"
                  }`}
                >
                  <div
                    className={`w-[38px] h-[38px] rounded-[11px] flex items-center justify-center flex-none text-white ${
                      isActive ? "bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA]" : "bg-[rgba(147,197,253,0.08)]"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="flex-1 text-[14.5px] font-bold text-[#F3F6FB]">{s.name}</div>
                  {isActive && <div className="text-[17px] text-[rgba(147,197,253,0.5)]">&#8594;</div>}
                </button>
              )
            })}
          </div>

          <div className="rounded-[20px] border border-[rgba(147,197,253,0.15)] bg-gradient-to-br from-[rgba(29,78,216,0.1)] to-[rgba(96,165,250,0.03)] p-8 flex flex-col justify-center">
            <div className="w-[46px] h-[46px] rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center mb-4 text-white">
              <activeService.icon className="w-[22px] h-[22px]" />
            </div>
            <h3 className="font-display text-[22px] font-bold text-[#F3F6FB] mb-2.5">{activeService.name}</h3>
            <p className="text-sm leading-relaxed text-[rgba(219,234,254,0.6)]">{activeService.desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
