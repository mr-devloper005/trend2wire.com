'use client'

import { FileText, Mail, MapPin, Megaphone, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release intake', body: 'Submit announcements, corrections, campaign context, and supporting distribution notes.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss syndication, amplification, newsroom collaborations, and recurring campaigns.' },
  { icon: Mail, title: 'Publishing support', body: 'Reach the team for account, publishing, archive, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#101112] text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-50 [background:linear-gradient(120deg,#101112_0%,#315b86_60%,#101112_100%)]" />
          <div className="relative mx-auto max-w-[1300px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.contact.title}</h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1300px] gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="editable-rise">
            <p className="mb-5 text-sm font-bold text-white/75">Please fill the form below:</p>
            <EditableContactLeadForm />
          </div>
          <aside className="grid content-start gap-6">
            <p className="max-w-xl text-base leading-8 text-white/70">{pagesContent.contact.description}</p>
            
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {desks.map((desk, index) => (
                <div key={desk.title} className="editable-card bg-white/10 p-5">
                  <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                  <h2 className="mt-5 text-2xl font-black">{desk.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/65">{desk.body}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
