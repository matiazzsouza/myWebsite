import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './icons'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="animate-fade-in-up font-mono text-sm text-primary">
          {'> '}Hi, my name is
        </p>
        <h1 className="animate-fade-in-up mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="animate-fade-in-up mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xl font-medium text-muted-foreground sm:text-2xl">
          <span className="text-foreground">{profile.tagline}</span>
          {profile.stack.map((item) => (
            <span key={item} className="text-muted-foreground">
              <span className="text-primary">/</span> {item}
            </span>
          ))}
        </p>

        <p className="animate-fade-in-up mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {profile.intro}
        </p>

        <div className="animate-fade-in-up mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-primary" />
          {profile.location}
        </div>

        <div className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get in touch
          </a>
        </div>

        <div className="animate-fade-in-up mt-10 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="size-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="size-6" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-6" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
