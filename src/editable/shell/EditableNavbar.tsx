'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-white/95 text-black shadow-[0_1px_0_rgba(49,91,134,.22)] backdrop-blur">
      <div className="mx-auto grid min-h-[82px] max-w-[1300px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--editable-border)] lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="hidden border-l border-[var(--editable-border)] pl-4 text-xs font-bold leading-tight text-black/70 sm:block">
            <Link href="/create" className="text-[var(--slot4-blue-dark)]">Create</Link>
          </div>
        </div>

        <Link href="/" className="max-w-[54vw] truncate text-center text-2xl font-black uppercase tracking-[0.02em] text-[var(--slot4-blue-dark)] sm:text-3xl">
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt={SITE_CONFIG.name} className="h-8 w-8" />
            <span aria-hidden>{SITE_CONFIG.name}</span>
          </div>
        </Link>

        <div className="flex items-center justify-end gap-4">
          {session ? (
            <>
              <span className="hidden max-w-[150px] items-center gap-2 truncate text-xs font-black uppercase tracking-[.1em] text-[var(--slot4-blue-dark)] sm:inline-flex"><UserRound className="h-4 w-4" /> {session.name}</span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 text-xs font-black uppercase tracking-[.12em] sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-lg bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-blue-dark)] sm:px-6">
            {session ? 'Create' : 'Get Started'}
          </Link>
        </div>
      </div>

      <div className="bg-[var(--slot4-blue-dark)] text-white">
        <div className="mx-auto flex min-h-[52px] max-w-[1300px] items-center gap-7 px-4 sm:px-6 lg:px-8">
          <nav className="hidden flex-1 items-center gap-7 text-xs font-black uppercase tracking-[.12em] lg:flex">
            <Link href="/" className="text-[var(--slot4-accent)]">Home</Link>
            <Link href="/about" className="hover:text-[var(--slot4-accent)]">About</Link>
            <Link href="/media-distribution" className="hover:text-[var(--slot4-accent)]">Media Distribution</Link>
            <Link href="/search" className="hover:text-[var(--slot4-accent)]">Archive</Link>
            <Link href="/contact" className="hover:text-[var(--slot4-accent)]">Contact</Link>
          </nav>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center rounded-lg border border-white/20 bg-white/10 lg:max-w-[300px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/75" />
            <input name="q" type="search" placeholder="Search media archive" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-bold outline-none placeholder:text-white/55" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Media Distribution', href: '/media-distribution' }, { label: 'Archive', href: '/search' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: session.name, href: '/create' }, { label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-lg bg-[var(--slot4-gray)] px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-lg bg-[var(--slot4-blue-dark)] px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em] text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
