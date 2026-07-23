import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { fadeUp, stagger, viewportOnce } from "../motion"

const reviews = [
  {
    id: 1,
    name: "Becky B.",
    initials: "BB",
    role: "Beauty brand Founder",
    rating: 4.5,
    message:
      "Choosing Olamide for my flyer project was a game-changer. He captured the message perfectly and delivered a bold, eye-catching design that brought the vision to life.",
  },
  {
    id: 2,
    name: "Funbi O.",
    initials: "FO",
    role: "E-commerce Merchant",
    rating: 4.5,
    message:
      "Olamide transformed my product with thoughtful, intuitive UI/UX design. He grasped my goals quickly and crafted an experience that feels effortless and on-brand.",
  },
  {
    id: 3,
    name: "Bola A.",
    initials: "BA",
    role: "Real Estate Founder",
    rating: 5,
    message:
      "Working with Olamide on my logo was the best decision I made for my brand. He immediately understood my vision and created a mark that truly represents my identity.",
  },
]

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5 text-[#F3F6FB] mb-4">
    {[1, 2, 3, 4, 5].map((n) => (
      <Star key={n} size={15} fill={n <= rating ? "currentColor" : "none"} strokeWidth={1.5} />
    ))}
  </div>
)

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }),
}

const AUTOPLAY_MS = 6000

const Testimonial = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = useCallback((dir) => {
    setDirection(dir)
    setIndex((i) => (i + dir + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, go])

  const active = reviews[index]

  return (
    <motion.section
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="px-6 lg:px-14 py-12 bg-gradient-to-b from-[#05080f] to-[#0a1120]"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeUp} className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-[11.5px] font-bold tracking-[0.16em] text-[rgba(219,234,254,0.4)] uppercase mb-2">
              <span>( 03 )</span>
              <span>What Clients Say</span>
            </div>
            <h2 className="font-display font-bold text-[28px] text-[#F3F6FB]">Kind words from clients</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[rgba(255,255,255,0.4)] transition-colors duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[rgba(255,255,255,0.4)] transition-colors duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-7 lg:p-9 min-h-[240px] overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <StarRating rating={active.rating} />
              <p className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.8)] mb-6">&ldquo;{active.message}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[13px] font-bold text-white">
                  {active.initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-[#F3F6FB]">{active.name}</div>
                  <div className="text-[12px] text-[rgba(219,234,254,0.45)]">{active.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile arrow controls */}
          <div className="flex sm:hidden items-center justify-between mt-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)]"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(219,234,254,0.7)]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mt-5">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#F3F6FB]" : "w-1.5 bg-[rgba(255,255,255,0.2)]"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Testimonial
