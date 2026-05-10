import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/utils'

export default function SectionHeading({ icon: Icon, title, command }) {
  const { theme } = useTheme()

  return (
    <div className="text-center mb-4">
      {/* Terminal command */}
      <div
        className={cn(
          'inline-flex items-center gap-2 font-mono text-sm mb-3',
          theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
        )}
      >
        <span className={theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'}>$</span>
        {command}
      </div>

      <h2
        className={cn(
          'text-3xl sm:text-4xl font-bold font-mono flex items-center justify-center gap-3',
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}
      >
        {Icon && (
          <Icon
            className={cn(
              'w-8 h-8',
              theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
            )}
          />
        )}
        {title}
      </h2>

      {/* Decorative line */}
      <div className="mt-4 flex items-center justify-center gap-1">
        <div
          className={cn(
            'h-px w-12',
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          )}
        />
        <div
          className={cn(
            'h-1 w-8 rounded',
            theme === 'dark' ? 'bg-hacker-400' : 'bg-hacker-600'
          )}
        />
        <div
          className={cn(
            'h-px w-12',
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          )}
        />
      </div>
    </div>
  )
}
