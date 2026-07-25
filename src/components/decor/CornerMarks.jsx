import React from "react"

const Mark = ({ className }) => (
  <div className={`absolute w-3 h-3 pointer-events-none ${className}`}>
    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[rgba(255,255,255,0.18)]" />
    <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[rgba(255,255,255,0.18)]" />
  </div>
)

// Tiny crosshair marks pinned to the corners of a `relative` section —
// a quiet, technical/blueprint accent so backgrounds aren't just flat gradient.
const CornerMarks = () => (
  <>
    <Mark className="top-4 left-4 lg:top-6 lg:left-6" />
    <Mark className="top-4 right-4 lg:top-6 lg:right-6" />
    <Mark className="bottom-4 left-4 lg:bottom-6 lg:left-6" />
    <Mark className="bottom-4 right-4 lg:bottom-6 lg:right-6" />
  </>
)

export default CornerMarks
