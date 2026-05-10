import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/utils'

export default function NotFound() {
  const { theme } = useTheme()

  return (
    <section className="relative z-10 py-32 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <div
          className={cn(
            'rounded-2xl p-8 md:p-12 border text-center backdrop-blur-sm',
            theme === 'dark'
              ? 'bg-surface-card/60 border-hacker-400/10'
              : 'bg-white/80 border-hacker-600/10 shadow-lg'
          )}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
            <span
              className={cn(
                'ml-2 font-mono text-xs',
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              )}
            >
              error.log
            </span>
          </div>

          <AlertTriangle
            className={cn(
              'w-12 h-12 mx-auto mb-4',
              theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
            )}
            aria-hidden="true"
          />

          <h1
            className={cn(
              'text-5xl sm:text-6xl font-bold font-mono mb-2',
              theme === 'dark' ? 'text-hacker-400 text-glow' : 'text-hacker-600'
            )}
          >
            404
          </h1>

          <p
            className={cn(
              'font-mono text-sm mb-2',
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            <span className={theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'}>$</span>{' '}
            cat /requested/page
          </p>
          <p
            className={cn(
              'mb-8',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            )}
          >
            No such file or directory.
          </p>

          <Link
            to="/"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm transition-all',
              theme === 'dark'
                ? 'bg-hacker-400/10 text-hacker-400 border border-hacker-400/20 hover:bg-hacker-400/20'
                : 'bg-hacker-600/10 text-hacker-600 border border-hacker-600/20 hover:bg-hacker-600/20'
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
