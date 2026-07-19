import { useEffect } from "react"

export function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title
    document.title = title ? `${title} — Lammydeart` : "Lammydeart"
    return () => {
      document.title = previous
    }
  }, [title])
}
