import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { GithubIcon } from './icons'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">02. Work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex items-start justify-between">
                  <GithubIcon className="size-8 text-primary" />
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{project.subtitle}</p>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  View Project
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
