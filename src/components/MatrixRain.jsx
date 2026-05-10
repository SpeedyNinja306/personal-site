import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function MatrixRain() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Respect users who've opted out of motion.
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduceMotion) return

    const ctx = canvas.getContext('2d')

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const fontSize = 14
    let columns = Math.floor(width / fontSize)
    let drops = Array.from({ length: columns }, () =>
      Math.random() * -100
    )

    const chars =
      '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0110100101<>/{}[];='

    function draw() {
      // Semi-transparent overlay for trail effect
      ctx.fillStyle =
        theme === 'dark' ? 'rgba(10, 10, 10, 0.05)' : 'rgba(248, 249, 250, 0.1)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]

        // Leading character is brighter
        const brightness = Math.random()
        if (brightness > 0.95) {
          ctx.fillStyle = theme === 'dark' ? '#a7f3d0' : '#064e3b'
        } else if (brightness > 0.8) {
          ctx.fillStyle = theme === 'dark' ? '#34d399' : '#059669'
        } else {
          ctx.fillStyle =
            theme === 'dark'
              ? `rgba(16, 185, 129, ${0.3 + Math.random() * 0.4})`
              : `rgba(5, 150, 105, ${0.2 + Math.random() * 0.3})`
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Reset drop when it falls off screen
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 45)

    function handleResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const newColumns = Math.floor(width / fontSize)
      if (newColumns > columns) {
        // Add new drops for the extra columns on the right
        for (let i = columns; i < newColumns; i++) {
          drops.push(Math.random() * -100)
        }
      } else {
        // Trim excess drops if window got narrower
        drops.length = newColumns
      }
      columns = newColumns
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: theme === 'dark' ? 0.4 : 0.15 }}
    />
  )
}
