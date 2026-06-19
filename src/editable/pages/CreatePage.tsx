'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, Megaphone, PlusCircle, Send, Sparkles, UploadCloud } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
}

const fieldClass = 'rounded-lg border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-bold text-[var(--editable-page-text,#101418)] outline-none transition placeholder:text-current/35 focus:border-[var(--slot4-accent)]'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task, setTask] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="min-h-screen bg-[#f4f6f8] px-4 py-16 text-[#101418] sm:px-6 lg:px-8">
          <section className="editable-card mx-auto grid max-w-6xl overflow-hidden bg-white md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex min-h-96 flex-col justify-end bg-[var(--slot4-blue-dark)] p-8 text-white lg:p-12">
              <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_25%_20%,rgba(245,130,42,.65),transparent_28%),linear-gradient(135deg,#24476d,#101112)]" />
              <div className="relative">
                <Lock className="h-14 w-14 text-[var(--slot4-accent)]" />
                <h2 className="mt-8 text-4xl font-black leading-tight">Creator access keeps distribution posts organized.</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">Login first, then prepare release details, campaign summaries, source links, and media assets in the publishing workspace.</p>
              </div>
            </div>
            <div className="self-center p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-blue-dark)]">{pagesContent.create.locked.badge}</p>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-8 opacity-70">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-lg bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-white">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-lg border border-[var(--editable-border)] bg-white px-6 py-3 text-sm font-black">Sign up</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#f4f6f8] text-[#101418]">
        <section className="bg-[var(--slot4-blue-dark)] text-white">
          <div className="mx-auto grid max-w-[1300px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8 lg:py-20">
            <div className="editable-rise">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.create.hero.badge}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.create.hero.title}</h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/72">{pagesContent.create.hero.description}</p>
            </div>
            <div className="editable-card bg-white/10 p-6">
              <UploadCloud className="h-10 w-10 text-[var(--slot4-accent)]" />
              <h2 className="mt-5 text-2xl font-black">Publishing checklist</h2>
              <div className="mt-5 grid gap-3 text-sm font-bold text-white/75">
                {['Choose the content lane', 'Add source and category', 'Write release summary', 'Submit the campaign draft'].map((item) => (
                  <p key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--slot4-accent)]" /> {item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="editable-card bg-white p-6 lg:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-blue-dark)]">Distribution lanes</p>
              <h2 className="mt-4 text-3xl font-black leading-tight">Select where this media post belongs.</h2>
              <p className="mt-4 text-sm leading-7 text-black/60">The active lane controls how the post is stored locally and how your draft is framed for the publishing team.</p>
              <div className="mt-7 grid gap-3">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`grid grid-cols-[44px_1fr] gap-4 rounded-lg border p-4 text-left transition ${active ? 'border-current bg-[var(--slot4-blue-dark)] text-white' : 'border-[var(--editable-border)] bg-[#f4f6f8] hover:-translate-y-0.5 hover:bg-white'}`}>
                      <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${active ? 'bg-white/10' : 'bg-white'}`}><Icon className="h-5 w-5 text-[var(--slot4-accent)]" /></span>
                      <span>
                        <span className="block text-sm font-black">{item.label}</span>
                        <span className="mt-1 block text-xs font-semibold opacity-65">{item.description}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
              <div className="mt-6 rounded-lg bg-[var(--slot4-accent-soft)] p-5">
                <Megaphone className="h-6 w-6 text-[var(--slot4-accent)]" />
                <p className="mt-3 text-sm font-bold leading-6">Tip: keep the title specific, add a short summary, and use a source URL when the release is already live.</p>
              </div>
            </aside>

            <form onSubmit={submit} className="editable-card border border-[var(--editable-border)] bg-white p-5 sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-blue-dark)]">Create {activeTask?.label || 'post'}</p>
                  <h2 className="mt-2 text-3xl font-black">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="rounded-lg bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-blue-dark)]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                  <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Website or source URL" />
                </div>
                <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
                <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short summary" required />
                <textarea className={`${fieldClass} min-h-48`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Main content, details, notes, or description" required />
              </div>

              {created ? (
                <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--slot4-accent)] px-6 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-blue-dark)]">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
