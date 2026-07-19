import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Megaphone, PenTool, LayoutGrid } from "lucide-react"
import { fadeUp, stagger, viewportOnce } from "../motion"

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
    <motion.section
      id="services"
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="px-6 lg:px-14 py-12 bg-gradient-to-b from-[#05080f] to-[#0a1120]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="flex items-end justify-between gap-6 flex-wrap mb-6">
          <div>
            <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-2">
              Quality Services
            </div>
            <h2 className="font-display font-bold text-[28px] text-[#F3F6FB]">What I can do for you</h2>
          </div>
          <p className="max-w-[300px] text-[13.5px] text-[rgba(219,234,254,0.55)]">
            From first sketch to shipped product — a full design-driven process.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="grid lg:grid-cols-[1fr_1.3fr] gap-5">
          <div className="flex flex-col gap-2.5">
            {services.map((s, i) => {
              const Icon = s.icon
              const isActive = i === active
              return (
                <motion.button
                  key={s.name}
                  onClick={() => setActive(i)}
                  whileHover={{ x: isActive ? 0 : 3 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative cursor-pointer flex items-center gap-4 py-[15px] px-[18px] rounded-2xl border text-left overflow-hidden border-[rgba(147,197,253,0.12)]"
                >
                  {isActive && (
                    <motion.div
                      layoutId="service-active-bg"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                      className="absolute inset-0 border border-[rgba(96,165,250,0.45)] rounded-2xl bg-gradient-to-r from-[rgba(29,78,216,0.14)] to-[rgba(96,165,250,0.05)]"
                    />
                  )}
                  <div
                    className={`relative z-10 w-[38px] h-[38px] rounded-[11px] flex items-center justify-center flex-none text-white transition-colors duration-300 ${
                      isActive ? "bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA]" : "bg-[rgba(147,197,253,0.08)]"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="relative z-10 flex-1 text-[14.5px] font-bold text-[#F3F6FB]">{s.name}</div>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="relative z-10 text-[17px] text-[rgba(147,197,253,0.5)]"
                    >
                      &#8594;
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </div>

          <div className="rounded-[20px] border border-[rgba(147,197,253,0.15)] bg-gradient-to-br from-[rgba(29,78,216,0.1)] to-[rgba(96,165,250,0.03)] p-8 flex flex-col justify-center overflow-hidden relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-[46px] h-[46px] rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center mb-4 text-white">
                  <activeService.icon className="w-[22px] h-[22px]" />
                </div>
                <h3 className="font-display text-[22px] font-bold text-[#F3F6FB] mb-2.5">{activeService.name}</h3>
                <p className="text-sm leading-relaxed text-[rgba(219,234,254,0.6)]">{activeService.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Service
