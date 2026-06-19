import Link from 'next/link'
import { ArrowRight, CheckCircle2, RadioTower, Search, Send, ShieldCheck, Truck, Warehouse } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

const stats = [
  ['4.8K+', 'Releases Routed'],
  ['160+', 'Media Lanes'],
  ['24/7', 'Desk Coverage'],
]

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="relative overflow-hidden bg-[#121416] text-white">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_75%_20%,rgba(245,130,42,.55),transparent_30%),linear-gradient(120deg,#101112_0%,#315b86_55%,#101112_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#101112] to-transparent" />
      <div className={`${dc.shell.section} relative grid min-h-[720px] items-center gap-10 py-16 lg:grid-cols-[1fr_420px]`}>
        <div className="editable-rise max-w-4xl">
          <div className="flex flex-wrap gap-6 text-sm font-bold">
            {['Fast', 'Reliable', 'Media-ready'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--slot4-accent)]" /> {item}</span>
            ))}
          </div>
          <p className="mt-14 text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-0 sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black">Talk to desk</Link>
          </div>
        </div>

        <aside className="editable-rise-delay editable-card border border-white/30 bg-white/10 p-6 backdrop-blur">
          <div className="grid gap-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/20 bg-white/10 p-5">
                <p className="text-4xl font-black">{value}</p>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
          <form action="/search" className="mt-6 rounded-lg bg-white p-4 text-black">
            <p className="text-sm font-bold">Track media coverage quickly</p>
            <div className="mt-4 flex gap-3">
              <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 border border-black/25 px-4 py-3 text-sm outline-none" />
              <button className="rounded-lg bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase text-white">Search</button>
            </div>
          </form>
        </aside>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div className="editable-rise">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-blue-dark)]">Latest distribution posts</p>
            <h2 className="mt-3 text-5xl font-black leading-tight">Coverage updates built for quick scanning</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-black/65">The homepage cards intentionally stay text-only here, helping visitors compare headlines, summaries, categories, and distribution context without heavy visual clutter.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ posts }: HomeSectionProps) {
  const sample = posts.slice(6, 10)
  return (
    <section className="bg-[#f4f6f8]">
      <div className={`${dc.shell.section} grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:items-center`}>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-blue-dark)]">Why choose us</p>
          <h2 className="mt-3 text-4xl font-black leading-tight">Media distribution that keeps teams aligned.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-black/65">From release intake to syndication notes, the layout gives every campaign a clear place to live and a predictable path to discovery.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              [Truck, 'Fast routing', 'Move new releases into visible archive lanes quickly.'],
              [RadioTower, 'Real-time discovery', 'Help visitors search campaigns, topics, and categories.'],
              [ShieldCheck, 'Reliable handling', 'Keep content structured and ready for publication review.'],
              [Warehouse, 'Central archive', 'Maintain one hub for releases, visuals, listings, and resources.'],
            ].map(([Icon, title, body]) => (
              <div key={String(title)} className="editable-card bg-white p-5 transition hover:-translate-y-1">
                <Icon className="h-7 w-7 text-[var(--slot4-accent)]" />
                <h3 className="mt-4 text-xl font-black">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="editable-card bg-[var(--slot4-blue-dark)] p-7 text-white">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/60">Performance desk</p>
          <h3 className="mt-4 text-3xl font-black">Current distribution signals</h3>
          <div className="mt-7 grid gap-5">
            {[
              ['Release readiness', '72%'],
              ['Archive coverage', '58%'],
              ['Campaign visibility', '69%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="flex items-center justify-between text-sm font-black"><span>{label}</span><span>{value}</span></div>
                <div className="mt-2 h-1.5 rounded-full bg-white/25"><div className="h-1.5 rounded-full bg-[var(--slot4-accent)]" style={{ width: value }} /></div>
              </div>
            ))}
          </div>
          {sample[0] ? <p className="mt-7 text-sm leading-7 text-white/70">Featured queue: {getEditableExcerpt(sample[0], 130)}</p> : null}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const briefs = source.slice(0, 6)
  if (!briefs.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-blue-dark)]">The briefing</p>
            <h2 className="mt-3 text-5xl font-black leading-tight">More from the distribution desk</h2>
          </div>
          <Link href={primaryRoute} className={dc.button.secondary}>All {taskLabel(primaryTask)} <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="grid gap-4 md:grid-cols-2">
            {briefs.map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
          <form action="/search" className="editable-card bg-[var(--slot4-blue-dark)] p-6 text-white">
            <Search className="h-8 w-8 text-[var(--slot4-accent)]" />
            <h3 className="mt-5 text-3xl font-black">Search the full archive</h3>
            <p className="mt-3 text-sm leading-7 text-white/68">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
            <input name="q" placeholder="Search media posts" className="mt-5 w-full rounded-lg bg-white px-4 py-3 text-sm font-bold text-black outline-none" />
            <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--slot4-accent)] px-5 py-3 text-xs font-black uppercase tracking-[0.14em]">Search <Send className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#f4f6f8]">
      <div className={`${dc.shell.section} grid gap-8 py-16 lg:grid-cols-[1fr_1fr] lg:items-center`}>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-blue-dark)]">Media distribution FAQ</p>
          <h2 className="mt-3 text-5xl font-black leading-tight">Common questions about our media distribution services</h2>
        </div>
        <div className="grid gap-3">
          {['What types of releases can be distributed?', 'How do I schedule a campaign post?', 'Can I search by category or campaign?', 'Where do published posts appear?'].map((question, index) => (
            <details key={question} className="rounded-lg bg-white p-5 shadow-sm" open={index === 0}>
              <summary className="cursor-pointer text-lg font-black">{question}</summary>
              <p className="mt-3 text-sm leading-7 text-black/65">Published content appears through the live site feed, archive, search, and task detail pages using the same real post data.</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
