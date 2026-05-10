import { useTheme } from '../context/ThemeContext'
import { socialLinks } from '../data/portfolio'
import { Heart } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer
      className={cn(
        'relative z-10 border-t py-8',
        theme === 'dark'
          ? 'bg-surface-darker/80 border-hacker-400/20 text-gray-500'
          : 'bg-gray-50/80 border-hacker-600/20 text-gray-500'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <p className="font-mono text-sm flex items-center gap-1">
            <span className={theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'}>$</span>
            Built with{' '}
            <Heart className="w-4 h-4 text-red-500 inline" /> &amp; React
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
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
                    'p-2 rounded-lg transition-colors',
                    theme === 'dark'
                      ? 'hover:text-hacker-400 hover:bg-hacker-400/10'
                      : 'hover:text-hacker-600 hover:bg-hacker-600/10'
                  )}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Right */}
          <p className="font-mono text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className={theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'}>
              Corbin Langfeldt
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
