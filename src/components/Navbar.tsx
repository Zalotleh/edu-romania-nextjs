'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, GraduationCap, Globe } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const isRTL = locale === 'ar'

  const navLinks = [
    { label: t('home'),          href: '/' },
    { label: t('whyRomania'),    href: '/why-romania' },
    { label: t('universities'),  href: '/universities' },
    { label: t('cities'),        href: '/cities' },
    { label: t('lifeInRomania'), href: '/life-in-romania' },
    { label: t('services'),      href: '/services' },
    { label: t('pricing'),       href: '/pricing' },
    { label: t('blog'),          href: '/blog' },
    { label: t('about'),         href: '/about' },
  ]

  // Switch locale while staying on the same path
  function switchLocale(newLocale: string) {
    let path = pathname
    if (path.startsWith('/en')) {
      path = path.slice(3) || '/'
    }
    if (newLocale === 'ar') {
      router.push(path)
    } else {
      router.push(`/${newLocale}${path === '/' ? '' : path}`)
    }
  }

  const otherLocale = locale === 'ar' ? 'en' : 'ar'
  const otherLocaleLabel = locale === 'ar' ? 'English' : 'العربية'

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-navy-900 text-lg">
            <GraduationCap className="h-6 w-6 text-gold-500" />
            <span>Edu<span className="text-gold-500">Romania</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className={`hidden lg:flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 hover:text-navy-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Language switcher */}
          <div className={`hidden lg:flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => switchLocale(otherLocale)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-navy-300 hover:text-navy-900 transition-colors text-sm"
              aria-label={`Switch to ${otherLocaleLabel}`}
            >
              <Globe className="h-4 w-4" />
              {otherLocaleLabel}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-full bg-navy-900 text-white text-sm font-medium hover:bg-navy-700 transition-colors"
            >
              {t('getStarted')}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-navy-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-gray-700 hover:text-navy-900 font-medium ${isRTL ? 'text-right' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-navy-900 text-white text-sm font-medium"
              >
                {t('getStarted')}
              </Link>
              <button
                onClick={() => { switchLocale(otherLocale); setOpen(false) }}
                className="inline-flex justify-center items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-medium"
              >
                <Globe className="h-4 w-4" />
                {otherLocaleLabel}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
