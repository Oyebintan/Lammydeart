import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// The site's one easing curve. It was hand-typed at twelve call sites across
// nine files; a single mistyped digit there would have been invisible.
export const easeOut = [0.16, 1, 0.3, 1]

// The press/hover spring, previously written out fourteen times.
export const springTap = { type: "spring", stiffness: 400, damping: 18 }
export const springPress = { type: "spring", stiffness: 400, damping: 20 }

// Router-aware motion anchor. motion.create() was called in four separate
// files, each producing its own wrapped component.
export const MotionLink = motion.create(Link)

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

// Same shape, entering from above — the mobile menu's links.
export const fadeDown = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: easeOut } },
}

export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

export const viewportOnce = { once: true, amount: 0.2 }
