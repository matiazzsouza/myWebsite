import Image from 'next/image'
import { GraduationCap, Languages } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">01. About</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">About me</h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-[280px_1fr]">
          <Reveal className="mx-auto w-full max-w-[280px]">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src="/profile.png"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="size-5" />
                  <span className="text-sm font-semibold text-foreground">Education</span>
                </div>
                <p className="mt-3 font-medium text-foreground">{profile.education.degree}</p>
                <p className="text-sm text-muted-foreground">{profile.education.school}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {profile.education.period}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Languages className="size-5" />
                  <span className="text-sm font-semibold text-foreground">Languages</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {profile.language}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
