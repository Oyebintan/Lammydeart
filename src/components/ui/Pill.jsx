// The small uppercase badge used above page headings and beside the hero copy.
//
// The 13-class string below was copied character-for-character into six files
// (Hero twice, AboutPage, ContactPage, ProjectsPage, NotFoundPage), with only a
// trailing margin differing. One of them drifted anyway: the hero's "Open for
// freelance work" pill had a hover tint the others lacked.
export const pillClass =
  "inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.14)] text-[11px] font-semibold tracking-[0.14em] text-[rgba(255,255,255,0.86)] uppercase w-fit"

// `dot` takes "blue" (default, a static accent mark) or "green" (availability,
// which pulses). Passing nothing renders no dot.
const DOT = {
  blue: "bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]",
  green: "bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse",
}

const Pill = ({ dot, className = "", children }) => (
  <span className={`${pillClass} ${className}`}>
    {dot && <span className={`w-1.5 h-1.5 rounded-full flex-none ${DOT[dot]}`} />}
    {children}
  </span>
)

export default Pill
