import React from "react"
import { motion } from "framer-motion"

// A large, faint rotated line-box floating in a section's ambient space —
// a quiet geometric accent, not decoration that competes with content.
const LineBox = ({ className, size = 220, duration = 26, reverse = false }) => (
  <motion.div
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
    style={{ width: size, height: size }}
    className={`absolute border border-[rgba(255,255,255,0.035)] rounded-[28px] pointer-events-none ${className}`}
  />
)

export default LineBox
