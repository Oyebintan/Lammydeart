import { useEffect, useState } from "react"

export function useTypewriter(
  words,
  { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1500, loop = true, startDelay = 0 } = {}
) {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [started, setStarted] = useState(startDelay === 0)

  useEffect(() => {
    if (startDelay === 0) return
    const delay = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(delay)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    const current = words[index % words.length]
    const isLastWord = index === words.length - 1
    const finishedOnce = !loop && isLastWord && !deleting && text === current

    if (finishedOnce) return

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1))
          } else if (loop || !isLastWord) {
            setDeleting(true)
          }
        } else if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      },
      deleting ? deletingSpeed : text.length === current.length ? pauseTime : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, index, started, words, loop, typingSpeed, deletingSpeed, pauseTime])

  return text
}
