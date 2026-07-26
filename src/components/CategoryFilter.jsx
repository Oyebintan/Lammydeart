import React from "react"
import { motion } from "framer-motion"

// Was duplicated verbatim in FeaturedWork and ProjectsPage, differing only by the
// layoutId. `layoutId` has to stay unique per mounted instance or framer-motion
// animates the pill between the two grids when both are on screen.
const CategoryFilter = ({ categories, value, onChange, layoutId }) => (
  <div className="flex gap-2 flex-wrap">
    {categories.map((c) => {
      const isActive = value === c
      return (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          aria-pressed={isActive}
          className="relative cursor-pointer py-2 px-[17px] rounded-full text-[12.5px] font-semibold border overflow-hidden transition-colors duration-300 border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.28)]"
        >
          {isActive && (
            <motion.div
              layoutId={layoutId}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="absolute inset-0 bg-white"
            />
          )}
          <span className={`relative z-10 ${isActive ? "text-[#03050a]" : "text-[rgba(219,234,254,0.6)]"}`}>
            {c}
          </span>
        </button>
      )
    })}
  </div>
)

export default CategoryFilter
