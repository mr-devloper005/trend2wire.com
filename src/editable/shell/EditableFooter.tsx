'use client'

import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[#101112] text-white">
      <section className="bg-[var(--slot4-blue-dark)]">
        <div className="mx-auto grid max-w-[1300px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div className="editable-rise">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/75">Newsletter</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight">Stay informed with {SITE_CONFIG.name} updates</h2>
            <form action="/signup" className="mt-7 flex max-w-xl gap-4">
              <input name="email" type="email" placeholder="Email" className="min-w-0 flex-1 rounded-lg border border-white/25 bg-white px-4 py-4 text-sm font-bold text-black outline-none placeholder:text-black/45" />
              <button className="rounded-lg bg-[var(--slot4-accent)] px-8 text-xs font-black uppercase tracking-[.14em] transition hover:-translate-y-0.5 hover:bg-white hover:text-black">Subscribe</button>
            </form>
          </div>
          <div className="editable-card editable-float bg-white/10 p-6">
            <h3 className="text-2xl font-black">Get best media reach now</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">Send a release brief and let the distribution desk prepare the next publishing lane.</p>
            <Link href="/contact" className="mt-5 inline-flex rounded-lg bg-[var(--slot4-accent)] px-5 py-3 text-xs font-black uppercase tracking-[0.14em]">Contact Us</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1300px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr_.9fr]">
          <div>
            <Link href="/" className="text-3xl font-black uppercase tracking-[0.02em] text-white">{SITE_CONFIG.name}</Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-xl font-black">Quick Access</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/media-distribution" className="group inline-flex items-center justify-between text-sm font-bold hover:text-[var(--slot4-accent)]">Media Distribution<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-bold hover:text-[var(--slot4-accent)]">Archive<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/create" className="group inline-flex items-center justify-between text-sm font-bold hover:text-[var(--slot4-accent)]">Create<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-xl font-black">Services</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-bold hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm font-bold hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <>
                  <Link href="/create" className="text-sm font-bold hover:text-[var(--slot4-accent)]">Publish</Link>
                  <button onClick={logout} className="text-left text-sm font-bold hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-bold hover:text-[var(--slot4-accent)]">Log in</Link>
                  <Link href="/signup" className="text-sm font-bold hover:text-[var(--slot4-accent)]">Get Started</Link>
                </>
              )}
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-xl font-black">Get in Touch</h3>
            <div className="mt-5 grid gap-4 text-sm font-bold">
              
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--slot4-accent)]" /> 67 Freight City, Media District</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-5 text-center text-xs font-bold text-white/55">Copyright © {year}, {SITE_CONFIG.name} Media Distribution Service.</div>
    </footer>
  )
}
