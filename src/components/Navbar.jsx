import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../data/portfolio'
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (path) => {
    setOpen(false)
    if (path.startsWith('/#')) {
      const hash = path.replace('/', '')
      if (location.pathname !== '/') {
        navigate('/' + hash)
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(path)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? theme === 'dark'
            ? 'bg-surface-dark/90 backdrop-blur-md border-b border-hacker-400/20'
            : 'bg-white/90 backdrop-blur-md border-b border-hacker-600/20 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'flex items-center gap-2 font-mono font-bold text-lg',
              theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
            )}
          >
            <Terminal className="w-5 h-5" />
            <span className="text-glow">~/corbin</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleClick(link.path)}
                className={cn(
                  'font-mono text-sm transition-colors hover:text-hacker-400',
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600 hover:text-hacker-600'
                )}
              >
                <span className="text-hacker-400 mr-1">{'>'}</span>
                {link.name}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-lg transition-colors',
                theme === 'dark'
                  ? 'text-hacker-400 hover:bg-hacker-400/10'
                  : 'text-hacker-600 hover:bg-hacker-600/10'
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-lg',
                theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                'p-2 rounded-lg',
                theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
              )}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          open ? 'max-h-80' : 'max-h-0',
          theme === 'dark' ? 'bg-surface-dark/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
        )}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.path)}
              className={cn(
                'block w-full text-left font-mono text-sm py-2 px-3 rounded-lg transition-colors',
                theme === 'dark'
                  ? 'text-gray-400 hover:text-hacker-400 hover:bg-hacker-400/5'
                  : 'text-gray-600 hover:text-hacker-600 hover:bg-hacker-600/5'
              )}
            >
              <span className="text-hacker-400 mr-2">$</span>
              {link.name.toLowerCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
