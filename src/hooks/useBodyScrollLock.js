import { useEffect } from "react"

// One scroll lock for every overlay on the site.
//
// There used to be two implementations that disagreed. The lightbox saved the
// previous `overflow` and put it back; the navbar wrote `""` unconditionally.
// So opening and closing the mobile menu while a lightbox was open cleared the
// lightbox's lock and let the page scroll behind an open dialog.
//
// Save-and-restore is the version that composes: whichever overlay closes last
// hands back whatever it found, so nested or overlapping overlays can't clear
// each other's lock.
export function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previous
    }
  }, [active])
}
