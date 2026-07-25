import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { usePageTitle } from "../hooks/usePageTitle"
import { fadeUp, stagger } from "../motion"
import { gridBg } from "../decor"
import CornerMarks from "../components/decor/CornerMarks"
import LineBox from "../components/decor/LineBox"

const NotFoundPage = () => {
  usePageTitle("Page not found")

  return (
    <div className={`relative overflow-hidden bg-[#03050a] min-h-screen flex items-center ${gridBg}`}>
      <CornerMarks />
      <LineBox className="hidden lg:block top-24 right-[10%]" size={160} duration={26} />
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.24),transparent_70%)] blur-2xl pointer-events-none"
      />

      <motion.section
        variants={stagger()}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 lg:px-14 py-24 max-w-7xl mx-auto w-full"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(219,234,254,0.8)] uppercase w-fit mb-5"
        >
          <span>( 404 )</span>
          <span>Page not found</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-4xl lg:text-5xl text-[#F3F6FB] mb-4 max-w-xl leading-[1.15]"
        >
          This page doesn't exist
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.6)] max-w-md mb-8"
        >
          The link may be out of date or slightly off. The work is all still here — pick up from
          one of these instead.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap">
          <Link
            to="/project"
            className="flex items-center gap-2 px-[22px] py-[11px] rounded-full animate-gradient bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] text-white text-sm font-semibold shadow-[0_8px_26px_-8px_rgba(37,99,235,0.65)] hover:scale-[1.03] active:scale-95 transition-transform duration-300"
          >
            See the work <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-[22px] py-[11px] rounded-full border border-[rgba(255,255,255,0.16)] hover:border-[rgba(255,255,255,0.4)] text-[#F3F6FB] text-sm font-semibold transition-colors duration-300"
          >
            <ArrowLeft size={15} strokeWidth={2.5} /> Back home
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default NotFoundPage
