'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { LinkedinIcon } from './icons'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'someone'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const fieldClass =
    'w-full rounded-md border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary'

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">05. Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h2>
          <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            I&apos;m currently looking for internship opportunities. Have a question or just want to
            say hi? Send a message and I&apos;ll get back to you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_320px]">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity…"
                  className={`${fieldClass} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send className="size-4" />
                Send message
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">Email</span>
                  <span className="block truncate text-sm text-muted-foreground group-hover:text-primary">
                    {profile.email}
                  </span>
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <LinkedinIcon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">LinkedIn</span>
                  <span className="block truncate text-sm text-muted-foreground group-hover:text-primary">
                    Connect with me
                  </span>
                </span>
              </a>

              <p className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                Based in <span className="text-foreground">{profile.location}</span>. Open to remote
                and on-site internship opportunities.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
