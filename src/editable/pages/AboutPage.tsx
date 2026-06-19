import Link from 'next/link'
import { BarChart3, Globe2, ShieldCheck, Truck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const capabilities = [
  { icon: Truck, title: 'Release routing', body: 'Organize media distribution posts into clear campaign lanes.' },
  { icon: BarChart3, title: 'Coverage visibility', body: 'Make announcements, updates, and resources easy to scan.' },
  { icon: ShieldCheck, title: 'Review-friendly structure', body: 'Keep summaries, bodies, categories, and links consistent.' },
  { icon: Globe2, title: 'Connected archive', body: 'Help audiences move between releases, visuals, listings, and resources.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f6f8] text-[#101418]">
        <section className="bg-white">
          <div className="mx-auto max-w-[1300px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-blue-dark)]">{pagesContent.about.badge}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.about.title}</h1>
            <div className="editable-card mt-10 overflow-hidden bg-[var(--slot4-blue-dark)] p-8 text-white lg:p-12">
              <p className="max-w-4xl text-2xl font-bold leading-snug">{pagesContent.about.description}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {pagesContent.about.values.map((value, index) => (
                  <div key={value.title} className="rounded-lg bg-white/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                    <h2 className="mt-4 text-2xl font-black">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-white/68">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1300px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <article>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight">A practical operating surface for distribution teams.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link href="/media-distribution" className="mt-8 inline-flex rounded-lg bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white">Explore posts</Link>
          </article>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title} className="editable-card bg-white p-6 transition hover:-translate-y-1">
                <item.icon className="h-8 w-8 text-[var(--slot4-accent)]" />
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
