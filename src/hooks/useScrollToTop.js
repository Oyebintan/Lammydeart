import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

// Nothing reset scroll on navigation, so leaving the bottom of one page landed
// you part-way down the next.
//
// React Router's <ScrollRestoration /> is the usual answer, but it does not
// work here: `html { scroll-behavior: smooth }` in index.css turns its
// scrollTo into an animation, and the new page is shorter than the one being
// left, so the document shrinks mid-animation and the scroll is abandoned
// wherever it happened to be. Measured: it settled at 65px and stayed there.
//
// Flipping scroll-behavior to "auto" around the reset is what makes this
// reliable. `behavior: "instant"` on its own is not enough: an already-running
// smooth scroll survives it and keeps animating afterwards, dragging the page
// back down. That is reachable in practice — tap the footer's scroll-to-top
// button (which scrolls smoothly) and then a nav link before it finishes.
// Measured with the property left alone: the reset fired, scrollY read 0, and
// the leftover animation immediately moved it to 82px.
//
// The property is restored straight away, so in-page anchors (#services) and
// the footer button keep their smooth scrolling.
//
// useLayoutEffect, not useEffect, so the reset happens before paint — otherwise
// the new page shows at the old scroll offset for a frame.
export function useScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const root = document.documentElement

    const reset = () => {
      const previous = root.style.scrollBehavior
      root.style.scrollBehavior = "auto"
      window.scrollTo(0, 0)
      root.style.scrollBehavior = previous
    }

    reset()
    // A scroll started with an explicit `behavior: "smooth"` option is not
    // governed by the CSS property, so the first reset does not abort it — it
    // resumes on the next frame. Repeating once after the frame boundary
    // catches that. Measured without it: 32px instead of 0.
    const frame = requestAnimationFrame(reset)
    return () => cancelAnimationFrame(frame)
  }, [pathname])
}
