import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo, socialLinks } from '../data/portfolio'
import { ChevronDown, FileText } from 'lucide-react'
import { cn } from '../lib/utils'

const roles = [
  'Full Stack Developer',
  'Software Engineering Student',
  'Problem Solver',
  'Open Source Contributor',
]

export default function HeroSection() {
  const { theme } = useTheme()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(roles[0])
      return
    }

    const current = roles[roleIndex]
    let timeout

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        )
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          40
        )
      } else {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex, reduceMotion])

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-3xl mx-auto animate-fade-in">
        {/* Terminal prompt */}
        <div
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm mb-8',
            theme === 'dark'
              ? 'bg-hacker-400/10 text-hacker-400 border border-hacker-400/20'
              : 'bg-hacker-600/10 text-hacker-600 border border-hacker-600/20'
          )}
        >
          <span className="w-2 h-2 rounded-full bg-hacker-400 animate-pulse-glow" />
          System online — ready to deploy
        </div>

        {/* Name */}
        <h1
          className={cn(
            'text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-4',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}
        >
          Hi, I&apos;m{' '}
          <span
            className={cn(
              'text-glow-strong',
              theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
            )}
          >
            {personalInfo.name.split(' ')[0]}
          </span>
        </h1>

        {/* Typing role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span
            className={cn(
              'font-mono text-xl sm:text-2xl',
              theme === 'dark' ? 'text-hacker-300' : 'text-hacker-700'
            )}
          >
            {'> '}
            {displayed}
            <span
              className={cn(
                'inline-block w-[3px] h-6 ml-1 align-middle',
                theme === 'dark' ? 'bg-hacker-400' : 'bg-hacker-600',
                'animate-[blink-caret_0.75s_step-end_infinite]'
              )}
            />
          </span>
        </div>

        {/* Tagline */}
        <p
          className={cn(
            'text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed',
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all',
              theme === 'dark'
                ? 'bg-hacker-400 text-surface-dark hover:bg-hacker-300 box-glow'
                : 'bg-hacker-600 text-white hover:bg-hacker-500'
            )}
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium border transition-all',
              theme === 'dark'
                ? 'border-hacker-400/40 text-hacker-400 hover:bg-hacker-400/10'
                : 'border-hacker-600/40 text-hacker-600 hover:bg-hacker-600/10'
            )}
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={cn(
                  'p-3 rounded-xl border transition-all duration-300',
                  theme === 'dark'
                    ? 'border-gray-800 text-gray-500 hover:text-hacker-400 hover:border-hacker-400/40 hover:box-glow'
                    : 'border-gray-200 text-gray-500 hover:text-hacker-600 hover:border-hacker-600/40'
                )}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>

        {/* Scroll hint */}
        <a
          href="#about"
          className={cn(
            'inline-flex flex-col items-center gap-1 animate-float',
            theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
          )}
        >
          <span className="font-mono text-xs">scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
