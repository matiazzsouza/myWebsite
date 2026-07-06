import { Download, FileText } from 'lucide-react'
import { Reveal } from './reveal'

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card px-6 py-14 text-center">
            <span className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="size-7" />
            </span>
            <div>
              <p className="font-mono text-sm text-primary">04. Resume</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Want the full picture?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Download my CV for a detailed overview of my experience, projects and technical
                skills.
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <p className="font-mono text-xs text-muted-foreground">
              Upload your CV as <span className="text-foreground">public/resume.pdf</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
