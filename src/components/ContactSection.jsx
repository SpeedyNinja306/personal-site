import { useTheme } from '../context/ThemeContext'
import { personalInfo, socialLinks } from '../data/portfolio'
import { Send, Copy, Check } from 'lucide-react'
import { cn } from '../lib/utils'
import SectionHeading from './SectionHeading'
import { useState } from 'react'

export default function ContactSection() {
  const { theme } = useTheme()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative z-10 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading icon={Send} title="Get In Touch" command="echo 'Hello!'" />

        <div
          className={cn(
            'mt-12 rounded-2xl p-8 md:p-12 border text-center backdrop-blur-sm',
            theme === 'dark'
              ? 'bg-surface-card/60 border-hacker-400/10'
              : 'bg-white/80 border-hacker-600/10 shadow-lg'
          )}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span
              className={cn(
                'ml-2 font-mono text-xs',
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              )}
            >
              contact.sh
            </span>
          </div>

          <h3
            className={cn(
              'text-2xl sm:text-3xl font-bold font-mono mb-4',
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}
          >
            Let&apos;s Build Something{' '}
            <span className={theme === 'dark' ? 'text-hacker-400 text-glow' : 'text-hacker-600'}>
              Together
            </span>
          </h3>

          <p
            className={cn(
              'max-w-lg mx-auto mb-8',
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Copy email button */}
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={copyEmail}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all',
                theme === 'dark'
                  ? 'bg-hacker-400 text-surface-dark hover:bg-hacker-300 box-glow'
                  : 'bg-hacker-600 text-white hover:bg-hacker-500'
              )}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Copied {personalInfo.email}!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy Email
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className={cn(
                'flex-1 h-px',
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              )}
            />
            <span
              className={cn(
                'font-mono text-xs',
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              )}
            >
              or find me on
            </span>
            <div
              className={cn(
                'flex-1 h-px',
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              )}
            />
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center gap-2 px-5 py-2.5 rounded-xl border font-mono text-sm transition-all duration-300',
                    theme === 'dark'
                      ? 'border-gray-800 text-gray-400 hover:text-hacker-400 hover:border-hacker-400/40 hover:bg-hacker-400/5'
                      : 'border-gray-200 text-gray-600 hover:text-hacker-600 hover:border-hacker-600/40 hover:bg-hacker-600/5'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
