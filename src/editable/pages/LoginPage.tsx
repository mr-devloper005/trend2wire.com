import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, RadioTower, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f6f8] text-[#101418]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1300px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="editable-card flex flex-col justify-center bg-[var(--slot4-blue-dark)] p-8 text-white lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/75">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[CheckCircle2, RadioTower, ShieldCheck].map((Icon, index) => (
                <div key={index} className="rounded-lg bg-white/10 p-4"><Icon className="h-5 w-5 text-[var(--slot4-accent)]" /><p className="mt-3 text-xs font-bold text-white/70">Secure media workspace</p></div>
              ))}
            </div>
          </div>
          <div className="editable-card flex flex-col justify-center bg-white p-7 sm:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-blue-dark)]">Member access</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-[var(--editable-border)] pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
