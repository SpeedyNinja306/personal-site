import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/portfolio'
import {
  FolderGit2,
  Github,
  Star,
} from 'lucide-react'
import { cn } from '../lib/utils'
import SectionHeading from './SectionHeading'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
]

export default function ProjectsSection() {
  const { theme } = useTheme()
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const githubUrlIsReady = (url) => {
    if (!url || typeof url !== 'string') return false
    return !url.trim().toLowerCase().startsWith('todo')
  }

  return (
    <section id="projects" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={FolderGit2} title="Projects" command="ls ~/projects" />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={cn(
                'px-4 py-2 rounded-lg font-mono text-sm transition-all',
                filter === cat.key
                  ? theme === 'dark'
                    ? 'bg-hacker-400 text-surface-dark font-medium'
                    : 'bg-hacker-600 text-white font-medium'
                  : theme === 'dark'
                  ? 'bg-surface-card border border-gray-800 text-gray-400 hover:border-hacker-400/40 hover:text-hacker-400'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-hacker-600/40 hover:text-hacker-600 shadow-sm'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        {filtered.length === 0 ? (
          <div
            className={cn(
              'rounded-2xl p-8 border text-center',
              theme === 'dark'
                ? 'bg-surface-card/60 border-gray-800'
                : 'bg-white/80 border-gray-200 shadow-sm'
            )}
          >
            <p className={cn(theme === 'dark' ? 'text-gray-300' : 'text-gray-700', 'font-mono')}>
              No projects in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const githubReady = githubUrlIsReady(project.githubUrl)

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className={cn(
                    'group rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:-translate-y-1',
                    theme === 'dark'
                      ? 'bg-surface-card/60 border-gray-800 hover:border-hacker-400/40 hover:box-glow'
                      : 'bg-white/80 border-gray-200 hover:border-hacker-600/40 shadow-sm hover:shadow-md'
                  )}
                >
              {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <FolderGit2
                      className={cn(
                        'w-10 h-10 transition-colors',
                        theme === 'dark'
                          ? 'text-gray-600 group-hover:text-hacker-400'
                          : 'text-gray-400 group-hover:text-hacker-600'
                      )}
                    />
                    {project.featured && (
                      <span
                        className={cn(
                          'flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded-full',
                          theme === 'dark'
                            ? 'bg-hacker-400/10 text-hacker-400'
                            : 'bg-hacker-600/10 text-hacker-600'
                        )}
                      >
                        <Star className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  <h3
                    className={cn(
                      'font-mono font-semibold text-lg mb-2 transition-colors',
                      theme === 'dark'
                        ? 'text-white group-hover:text-hacker-400'
                        : 'text-gray-900 group-hover:text-hacker-600'
                    )}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={cn(
                      'text-sm mb-4 line-clamp-2',
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}
                  >
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className={cn(
                          'font-mono text-xs px-2 py-0.5 rounded',
                          theme === 'dark'
                            ? 'bg-hacker-400/10 text-hacker-300'
                            : 'bg-hacker-600/10 text-hacker-700'
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {githubReady && (
                      <span
                        role="link"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
                        }}
                        onKeyDown={(e) => {
                          if (e.key !== 'Enter' && e.key !== ' ') return
                          e.preventDefault()
                          e.stopPropagation()
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
                        }}
                        className={cn(
                          'inline-flex items-center justify-center transition-colors',
                          theme === 'dark'
                            ? 'text-gray-500 hover:text-hacker-400'
                            : 'text-gray-400 hover:text-hacker-600'
                        )}
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
