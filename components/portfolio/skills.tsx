import { Braces, Code2, Database, Server, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Braces,
  Backend: Server,
  Frontend: Code2,
  Databases: Database,
  Tools: Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">03. Stack</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? Code2
            return (
              <Reveal key={group.category} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
