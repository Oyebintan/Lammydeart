import { useCallback, useMemo, useState } from "react"
import { projects } from "../data/projects"

// The filter + lightbox controller behind both project grids.
//
// FeaturedWork and ProjectsPage carried the same eleven lines of state, the
// same derived-open pattern and a character-identical `step`, differing only by
// the home page's item cap. They had already drifted once (only one of them
// handles an empty category), which is the usual fate of copied logic.
//
// Every returned callback is memoised. That is not a micro-optimisation:
// ProjectLightbox takes onClose/onNavigate as effect dependencies, and inline
// arrows in the parents made that effect re-run on every render.
export function useProjectGallery({ limit } = {}) {
  const [filter, setFilter] = useState("All")
  const [openId, setOpenId] = useState(null)

  const filtered = useMemo(() => {
    const byCategory = filter === "All" ? projects : projects.filter((p) => p.category === filter)
    return limit ? byCategory.slice(0, limit) : byCategory
  }, [filter, limit])

  // Derived from the id rather than storing the project, so changing the filter
  // while the lightbox is open resolves to null instead of leaving a stale card
  // on screen that is no longer in the grid.
  const open = filtered.find((p) => p.id === openId) ?? null

  const openProject = useCallback((project) => setOpenId(project.id), [])
  const closeProject = useCallback(() => setOpenId(null), [])

  const step = useCallback(
    (dir) => {
      setOpenId((current) => {
        const i = filtered.findIndex((p) => p.id === current)
        if (i === -1) return current
        return filtered[(i + dir + filtered.length) % filtered.length].id
      })
    },
    [filtered]
  )

  return { filter, setFilter, filtered, open, openProject, closeProject, step }
}
