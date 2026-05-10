import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { skillCategories } from '../data/portfolio'
import { Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'
import SectionHeading from './SectionHeading'

export default function SkillsSection() {
  const { theme } = useTheme()
  const [active, setActive] = useState(null) // null = show all

  const visibleCategories =
    active === null
      ? skillCategories
      : skillCategories.filter((c) => c.name === active)

  return (
    <section id="skills" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={Sparkles} title="Skills" command="cat skills.json" />

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-10">
          <button
            onClick={() => setActive(null)}
            className={cn(
              'px-4 py-2 rounded-lg font-mono text-sm transition-all',
              active === null
                ? theme === 'dark'
                  ? 'bg-hacker-400 text-surface-dark font-medium'
                  : 'bg-hacker-600 text-white font-medium'
                : theme === 'dark'
                ? 'bg-surface-card border border-gray-800 text-gray-400 hover:border-hacker-400/40 hover:text-hacker-400'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-hacker-600/40 hover:text-hacker-600 shadow-sm'
            )}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={cn(
                'px-4 py-2 rounded-lg font-mono text-sm transition-all',
                active === cat.name
                  ? theme === 'dark'
                    ? 'bg-hacker-400 text-surface-dark font-medium'
                    : 'bg-hacker-600 text-white font-medium'
                  : theme === 'dark'
                  ? 'bg-surface-card border border-gray-800 text-gray-400 hover:border-hacker-400/40 hover:text-hacker-400'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-hacker-600/40 hover:text-hacker-600 shadow-sm'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.name}
                className={cn(
                  'rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1',
                  theme === 'dark'
                    ? 'bg-surface-card/60 border-gray-800 hover:border-hacker-400/30 hover:box-glow'
                    : 'bg-white/80 border-gray-200 hover:border-hacker-600/30 shadow-sm hover:shadow-md'
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={cn(
                      'p-2.5 rounded-xl',
                      theme === 'dark'
                        ? 'bg-hacker-400/10 text-hacker-400'
                        : 'bg-hacker-600/10 text-hacker-600'
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className={cn(
                      'font-mono font-semibold text-lg',
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    )}
                  >
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        'font-mono text-sm px-3 py-1.5 rounded-lg transition-colors cursor-default',
                        theme === 'dark'
                          ? 'bg-hacker-400/5 text-gray-300 border border-gray-800 hover:border-hacker-400/40 hover:text-hacker-400'
                          : 'bg-hacker-600/5 text-gray-700 border border-gray-200 hover:border-hacker-600/40 hover:text-hacker-600'
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
