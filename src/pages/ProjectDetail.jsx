import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Github, ArrowLeft } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/portfolio'
import { cn } from '../lib/utils'
import SectionHeading from '../components/SectionHeading'
import { FolderGit2 } from 'lucide-react'

const githubUrlIsReady = (url) => {
  if (!url || typeof url !== 'string') return false
  return !url.trim().toLowerCase().startsWith('todo')
}

export default function ProjectDetail() {
  const { theme } = useTheme()
  const { slug } = useParams()

  const project = useMemo(() => {
    if (!slug) return null
    return projects.find((p) => p.slug === slug) || null
  }, [slug])

  if (!project) {
    return (
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className={cn(
              'rounded-2xl p-8 border text-center',
              theme === 'dark'
                ? 'bg-surface-card/60 border-gray-800'
                : 'bg-white/80 border-gray-200 shadow-sm'
            )}
          >
            <p
              className={cn(
                theme === 'dark' ? 'text-gray-200' : 'text-gray-900',
                'font-mono mb-4'
              )}
            >
              Project not found.
            </p>
            <Link
              to="/#projects"
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm transition-all',
                theme === 'dark'
                  ? 'bg-hacker-400/10 text-hacker-400 border border-hacker-400/20 hover:bg-hacker-400/20'
                  : 'bg-hacker-600/10 text-hacker-600 border border-hacker-600/20 hover:bg-hacker-600/20'
              )}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const githubReady = githubUrlIsReady(project.githubUrl)

  const sections = [
    { label: 'Problem', value: project.problem },
    { label: 'Role', value: project.role },
    { label: 'Process', value: project.process },
    { label: 'Outcome', value: project.outcome },
  ]

  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/#projects"
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all',
              theme === 'dark'
                ? 'text-gray-300 hover:text-hacker-400 hover:bg-hacker-400/10'
                : 'text-gray-600 hover:text-hacker-600 hover:bg-hacker-600/10'
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>

        <SectionHeading
          icon={FolderGit2}
          title={project.title}
          command="cat project.md"
        />

        <div
          className={cn(
            'rounded-2xl p-8 border',
            theme === 'dark'
              ? 'bg-surface-card/60 border-gray-800'
              : 'bg-white/80 border-gray-200 shadow-sm'
          )}
        >
          <p
            className={cn(
              'text-sm mb-4 leading-relaxed',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            )}
          >
            {project.shortDescription}
          </p>

          <p
            className={cn(
              'mb-8 leading-relaxed whitespace-pre-line',
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            {project.context}
          </p>

          {/* Tech */}
          <div className="mb-10">
            <h4
              className={cn(
                'font-mono text-sm font-semibold mb-3',
                theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
              )}
            >
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className={cn(
                    'font-mono text-sm px-3 py-1 rounded-lg',
                    theme === 'dark'
                      ? 'bg-hacker-400/10 text-hacker-300 border border-hacker-400/20'
                      : 'bg-hacker-600/10 text-hacker-700 border border-hacker-600/20'
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Case study sections */}
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.label}>
                <h4
                  className={cn(
                    'font-mono text-sm font-semibold mb-2',
                    theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
                  )}
                >
                  {s.label}
                </h4>
                <p
                  className={cn(
                    'leading-relaxed whitespace-pre-line',
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-10">
            {githubReady ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm transition-all',
                  theme === 'dark'
                    ? 'bg-hacker-400/10 text-hacker-400 border border-hacker-400/20 hover:bg-hacker-400/20'
                    : 'bg-hacker-600/10 text-hacker-600 border border-hacker-600/20 hover:bg-hacker-600/20'
                )}
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            ) : (
              <p
                className={cn(
                  'font-mono text-sm',
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                )}
              >
                GitHub repo link TBD.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

