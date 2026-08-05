import { motion } from "framer-motion"
import { gridBg } from "../../lib/decor"
import CornerMarks from "./CornerMarks"
import LineBox from "./LineBox"

// The ambient layer every page opens with: corner marks, a drifting line box
// and two soft glows over the grid texture.
//
// This was pasted into five files. The blue glow was byte-for-byte identical in
// Hero, AboutPage, ContactPage, ProjectsPage and NotFoundPage — same
// 90-character className, same motion config — and the white glow appeared four
// times, differing only in its vertical offset. Around 25 duplicated lines.
//
// The glows also gain aria-hidden here, which they never had. They are pure
// decoration; the sibling decorations in Hero and Navbar were already marked.
const PageBackdrop = ({ lineBox, glowY = "top-40" }) => (
  <>
    <CornerMarks />
    {lineBox && <LineBox {...lineBox} />}

    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.5, 0.85, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.15),transparent_70%)] blur-2xl pointer-events-none"
    />

    {/* 404 is the one page without the second glow */}
    {glowY && (
      <div
        aria-hidden="true"
        className={`absolute ${glowY} right-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.035),transparent_70%)] blur-2xl pointer-events-none`}
      />
    )}
  </>
)

// The page shell those four share: full-height black page carrying the texture.
export const pageShell = `relative overflow-hidden bg-[#000000] min-h-screen ${gridBg}`

// Standard header padding — clears the floating nav and the iOS safe area.
export const pageHeaderPad =
  "relative z-10 px-6 lg:px-14 pt-[calc(7rem+env(safe-area-inset-top,0px))]"

export default PageBackdrop
