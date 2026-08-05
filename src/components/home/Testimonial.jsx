import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { fadeUp, stagger, viewportOnce } from "../../lib/motion"

// IMPORTANT: the names and roles here are real clients, but the quote wording is
// still placeholder copy carried over from the previous entries — it was written
// to fit each client's line of work, not transcribed from anything they said.
// Replace each `message` with the client's actual words (or wording they have
// agreed to) before treating this section as published, since these read as
// direct quotes from named people and a named company.
const reviews = [
  {
    id: 1,
    name: "Miss Teniola",
    initials: "MT",
    role: "PR & Broadcast Consultant",
    rating: 4.5,
    message:
      "Choosing Olamide for my campaign flyers was a game-changer. He captured the message perfectly and delivered bold, eye-catching designs that read clearly the moment people see them.",
  },
  {
    id: 2,
    name: "DomStack",
    initials: "DS",
    role: "Full-Stack Development Company",
    rating: 4.5,
    message:
      "Olamide brought thoughtful, intuitive UI/UX design to our product. He grasped our goals quickly and crafted an interface that feels effortless to use and consistent throughout.",
  },
  {
    id: 3,
    name: "Zook Fabrics",
    initials: "ZF",
    role: "Clothing Brand",
    rating: 5,
    message:
      "Working with Olamide on our brand identity was the best decision we made. He understood the vision immediately and built a logo and system that genuinely represents who we are.",
  },
]

// A 4.5 used to render as four stars — `n <= rating` is false for n=5, so the
// half was silently dropped and the rating shown was lower than the one given.
const StarRating = ({ rating }) => (
  <div
    className="flex items-center gap-0.5 text-[#FAFAFA] mb-4"
    role="img"
    aria-label={`${rating} out of 5 stars`}
  >
    {[1, 2, 3, 4, 5].map((n) => {
      const full = n <= Math.floor(rating)
      const half = !full && n === Math.ceil(rating)
      return (
        <span key={n} className="relative flex">
          <Star size={15} fill={full ? "currentColor" : "none"} strokeWidth={1.5} />
          {half && (
            <span className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={15} fill="currentColor" strokeWidth={1.5} />
            </span>
          )}
        </span>
      )
    })}
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
    // Auto-advancing content is exactly what prefers-reduced-motion is for, and
    // MotionConfig only governs framer transitions, not this interval.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
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
      className="relative overflow-hidden px-6 lg:px-14 py-12 bg-gradient-to-b from-[#050506] to-[#090A0B]"
    >
      <div className="relative max-w-3xl mx-auto">
        <motion.div variants={fadeUp} className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-[11.5px] font-bold tracking-[0.16em] text-[rgba(255,255,255,0.55)] uppercase mb-2">
              <span>( 04 )</span>
              <span>What Clients Say</span>
            </div>
            <h2 className="font-display font-bold text-[28px] text-[#FAFAFA]">Kind words from clients</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-9 h-9 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(255,255,255,0.78)] hover:text-white hover:border-[rgba(255,255,255,0.4)] transition-colors duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-9 h-9 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(255,255,255,0.78)] hover:text-white hover:border-[rgba(255,255,255,0.4)] transition-colors duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
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
              <p className="text-[15px] leading-relaxed text-[rgba(255,255,255,0.86)] mb-6">&ldquo;{active.message}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[13px] font-bold text-white">
                  {active.initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-[#FAFAFA]">{active.name}</div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.58)]">{active.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile arrow controls */}
          <div className="flex sm:hidden items-center justify-between mt-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-9 h-9 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(255,255,255,0.78)]"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-9 h-9 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(255,255,255,0.78)]"
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
              aria-current={i === index}
              /* The dot itself stays 6px; the button around it carries a 24px
                 hit area. It was 6x6, under the 24x24 minimum. */
              className="py-2.5 px-2.5 flex items-center group/dot"
            >
              <span
                className={`h-1.5 rounded-full block transition-all duration-300 ${
                  i === index ? "w-6 bg-[#FAFAFA]" : "w-1.5 bg-[rgba(255,255,255,0.2)] group-hover/dot:bg-[rgba(255,255,255,0.45)]"
                }`}
              />
            </button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Testimonial
