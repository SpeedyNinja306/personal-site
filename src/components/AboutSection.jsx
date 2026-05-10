import { useTheme } from '../context/ThemeContext'
import { personalInfo, experience } from '../data/portfolio'
import { User, Briefcase, Calendar, MapPin } from 'lucide-react'
import { cn } from '../lib/utils'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  const { theme } = useTheme()

  return (
    <section id="about" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={User} title="About Me" command="cat about.md" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Bio card */}
          <div
            className={cn(
              'rounded-2xl p-8 border backdrop-blur-sm',
              theme === 'dark'
                ? 'bg-surface-card/60 border-hacker-400/10'
                : 'bg-white/80 border-hacker-600/10 shadow-lg'
            )}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span
                className={cn(
                  'ml-2 font-mono text-xs',
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                )}
              >
                about.md
              </span>
            </div>

            <p
              className={cn(
                'leading-relaxed mb-6',
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              )}
            >
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <span
                className={cn(
                  'inline-flex items-center gap-1 font-mono text-sm',
                  theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
                )}
              >
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Experience timeline */}
          <div className="space-y-6">
            <h3
              className={cn(
                'font-mono text-lg font-semibold flex items-center gap-2 mb-4',
                theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
              )}
            >
              <Briefcase className="w-5 h-5" />
              Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div
                className={cn(
                  'absolute left-[7px] top-2 bottom-2 w-px',
                  theme === 'dark' ? 'bg-hacker-400/20' : 'bg-hacker-600/20'
                )}
              />

              <div className="space-y-8">
                {experience.map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Dot */}
                    <div
                      className={cn(
                        'absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2',
                        theme === 'dark'
                          ? 'bg-surface-dark border-hacker-400'
                          : 'bg-white border-hacker-600'
                      )}
                    />

                    <div
                      className={cn(
                        'rounded-xl p-5 border transition-all duration-300 hover:-translate-y-0.5',
                        theme === 'dark'
                          ? 'bg-surface-card/60 border-gray-800 hover:border-hacker-400/30'
                          : 'bg-white/80 border-gray-200 hover:border-hacker-600/30 shadow-sm'
                      )}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4
                          className={cn(
                            'font-semibold',
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          )}
                        >
                          {item.title}
                        </h4>
                        <span
                          className={cn(
                            'font-mono text-xs flex items-center gap-1',
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                          )}
                        >
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                      </div>
                      <p
                        className={cn(
                          'font-mono text-sm mb-2',
                          theme === 'dark' ? 'text-hacker-400' : 'text-hacker-600'
                        )}
                      >
                        {item.company}
                      </p>
                      <p
                        className={cn(
                          'text-sm mb-3',
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        )}
                      >
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={cn(
                              'font-mono text-xs px-2 py-0.5 rounded',
                              theme === 'dark'
                                ? 'bg-hacker-400/10 text-hacker-400'
                                : 'bg-hacker-600/10 text-hacker-600'
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
