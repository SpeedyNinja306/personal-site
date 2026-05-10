import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Terminal,
  Cpu,
  Layers,
} from 'lucide-react'

/* ── Personal Info ────────────────────────────────────────── */
export const personalInfo = {
  name: 'Corbin Langfeldt',
  title: 'Full Stack Developer',
  subtitle: 'Software Engineering Student',
  tagline: 'Building elegant solutions with clean code',
  email: 'cslangfeldt1@gmail.com',
  location: 'Milwaukee, WI',
  bio: `Passionate Software Engineering student at MSOE and Full Stack Developer
with a love for building modern web applications. I enjoy turning complex
problems into simple, beautiful, and intuitive solutions. When I'm not
coding, you'll find me exploring new technologies, contributing to open
source, or diving into cybersecurity challenges.`,
  resumeUrl: '/Corbin-Langfeldt-Resume.pdf',
}

/* ── Social Links ─────────────────────────────────────────── */
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/SpeedyNinja306', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/corbin-langfeldt', icon: Linkedin },
]

/* ── Navigation ───────────────────────────────────────────── */
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
]

/* ── Experience / Timeline ─────────────────────────────────── */
export const experience = [
  {
    title: 'Software Engineering Student',
    company: 'Milwaukee School of Engineering (MSOE)',
    period: '2025 – Present',
    description:
      'Pursuing a B.S. in Software Engineering with coursework in algorithms, data structures, operating systems, and software engineering.',
    technologies: ['Java', 'Python', 'C++', 'SQL'],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 – Present',
    description:
      'Designed and developed custom websites and web applications for small businesses and startups.',
    technologies: ['React', 'TailwindCSS', 'Firebase', 'Stripe'],
  },
]

/* ── Projects ──────────────────────────────────────────────── */
export const projects = [
  {
    id: 1,
    slug: '2d-game',
    title: 'Escape from Epstein',
    shortDescription: 'A 2D top-down stealth escape game built in JavaFX.',
    context:
      'Escape from Epstein is a JavaFX game inspired by Pokemon-style movement and exploration. The player travels through a small-town setup into a high-stakes island escape scenario with seven increasingly difficult dungeon rooms.',
    problem:
      'I wanted to design a game loop that combines exploration, stealth, and progressive challenge without overwhelming the player early. The core challenge was balancing room difficulty, guard pressure, and key-based progression in a way that still feels fair and fun.',
    role:
      'I designed and implemented the project end-to-end, including core gameplay logic, map/room flow, guard and obstacle interactions, and progression mechanics. I also handled project structure, iteration, and testing during development.',
    process:
      'I started by defining the game concept and flow, then built the playable foundation in Java and JavaFX. From there, I iterated on dungeon rooms and stealth mechanics, tuned challenge progression across seven rooms, and refined the run experience based on repeated playtesting.',
    outcome:
      'The project is currently in active development with a playable foundation and a clear progression structure. It demonstrates my ability to build interactive systems, manage game-state complexity, and iterate on user experience through testing.',
    technologies: ['Java', 'JavaFX', 'IntelliJ IDEA'],
    githubUrl: 'https://github.com/SpeedyNinja306/Escape_From_Epstein',
    liveUrl: null,
    featured: false,
    category: 'frontend',
  },
  {
    id: 2,
    slug: 'domain-recon',
    title: 'domain-recon',
    shortDescription:
      'A Python CLI reconnaissance tool that pulls domain intel and outputs terminal, JSON, or HTML reports.',
    context:
      'I built domain-recon as a practical cybersecurity project to streamline early recon work on a target domain. Instead of manually running multiple tools and copying results around, this script collects key signals in one run and produces a clean report I can review later.',
    problem:
      'When I was learning recon workflows, I kept running into the same issue: good information was spread across different commands and formats, which made it hard to quickly understand the full security picture. I wanted a single tool that could gather the basics fast and still be readable.',
    role:
      'This is a solo project. I designed the scope, wrote the Python implementation, defined the vulnerability-matching rules, and built the reporting flow from data collection to final output formatting.',
    process:
      'I broke the scanner into independent modules for WHOIS, DNS, HTTP security headers, port scanning with service/version extraction, and SSL certificate checks. Then I added a lightweight CVE/risky-port matcher using a local JSON dataset, and iterated on CLI ergonomics so reports could be exported as terminal text, JSON, or styled HTML.',
    outcome:
      'The result is a working recon utility that gives me quick, structured visibility into a domain and has been a strong hands-on exercise in networking, secure coding awareness, and tool design. It is usable now, and I plan to keep improving the vulnerability feed and detection depth over time.',
    technologies: ['Python', 'requests', 'dnspython', 'python-whois', 'ThreadPoolExecutor'],
    githubUrl: 'https://github.com/SpeedyNinja306/domain-recon',
    liveUrl: null,
    featured: false,
    category: 'backend',
  },
]

/* ── Skills ────────────────────────────────────────────────── */
export const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Frontend',
    icon: Globe,
    skills: ['React', 'Next.js', 'TailwindCSS', 'Redux', 'Vite', 'Responsive Design'],
  },
  {
    name: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'DevOps & Tools',
    icon: Terminal,
    skills: ['Git', 'Docker', 'Linux', 'CI/CD', 'AWS', 'Firebase'],
  },
  {
    name: 'CS Fundamentals',
    icon: Cpu,
    skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Networking'],
  },
  {
    name: 'Other',
    icon: Layers,
    skills: ['Agile / Scrum', 'Technical Writing', 'UI/UX Design', 'Testing', 'Security'],
  },
]
