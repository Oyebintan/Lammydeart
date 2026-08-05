import { motion } from "framer-motion"
import { springTap } from "../../lib/motion"

// The circular bordered icon control — social links, carousel arrows, the
// footer's back-to-top.
//
// There were eleven near-identical copies. Sizes drifted with no rule behind
// it (w-8, w-9, w-11, w-[34px], w-[38px]), and more importantly the 44px
// touch-target patch was on only seven of them: the nav's social icons, two in
// the hero and the lightbox arrows all shipped below the minimum. Routing them
// through one component makes that impossible to get wrong again.
//
// `size` is the visual diameter. The hit area is always at least 44px on
// touch-sized viewports regardless, which is the point.
const IconButton = ({
  as = "button",
  size = 38,
  className = "",
  children,
  ...props
}) => {
  const Component = as === "a" ? motion.a : motion.button
  const isLink = as === "a"

  return (
    <Component
      {...(isLink ? { target: "_blank", rel: "noopener noreferrer" } : { type: "button" })}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={springTap}
      style={{ width: size, height: size }}
      className={`min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 rounded-full border border-[rgba(255,255,255,0.14)] flex items-center justify-center text-[rgba(255,255,255,0.78)] hover:text-white hover:border-[rgba(255,255,255,0.4)] transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default IconButton
