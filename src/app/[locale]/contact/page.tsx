import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import PageLayout from '@/components/PageLayout'
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact')
  return {
    title: t('badge'),
    description: t('desc'),
  }
}

export default async function ContactPage() {
  const t = await getTranslations('contact')
  const locale = await getLocale()
  const isRTL = locale === 'ar'

  const channels = [
    { icon: Mail, label: t('email'), value: 'info@edu-romania.com', href: 'mailto:info@edu-romania.com' },
    { icon: Phone, label: t('phoneWhatsapp'), value: '+40 000 000 000', href: 'tel:+40000000000' },
    { icon: MessageSquare, label: t('whatsapp'), value: t('sendMessage'), href: 'https://wa.me/40000000000' },
  ]

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-navy-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-sm font-medium border border-gold-500/30">
            {t('badge')}
          </span>
          <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('desc')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 ${isRTL ? 'direction-rtl' : ''}`}>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className={`text-2xl font-bold text-navy-900 mb-2 ${isRTL ? 'text-right' : ''}`}>
                  {t('detailsTitle')}
                </h2>
                <p className={`text-gray-500 ${isRTL ? 'text-right' : ''}`}>{t('detailsDesc')}</p>
              </div>

              {channels.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className={`flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-navy-200 hover:shadow-sm transition-all group ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-100 transition-colors">
                      <Icon className="h-5 w-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{c.label}</p>
                      <p className="font-medium text-navy-900">{c.value}</p>
                    </div>
                  </a>
                )
              })}

              <div className={`flex items-start gap-4 p-4 rounded-xl bg-gray-50 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{t('responseTime')}</p>
                  <p className="font-medium text-navy-900">{t('within24')}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t('monSat')}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className={`text-2xl font-bold text-navy-900 mb-6 ${isRTL ? 'text-right' : ''}`}>
                {t('formTitle')}
              </h2>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first_name" className={`block text-sm font-medium text-gray-700 mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                      {t('firstName')}
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition"
                      placeholder={t('firstNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className={`block text-sm font-medium text-gray-700 mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                      {t('lastName')}
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition"
                      placeholder={t('lastNamePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                    {t('email2')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    dir="ltr"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium text-gray-700 mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    dir="ltr"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium text-gray-700 mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                    {t('subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition"
                    placeholder={t('subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium text-gray-700 mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-navy-900 text-white font-semibold hover:bg-navy-700 transition-colors text-sm"
                >
                  {t('submit')}
                </button>

                <p className={`text-xs text-gray-400 text-center ${isRTL ? 'direction-rtl' : ''}`}>
                  {t('privacy')}{' '}
                  <a href="/privacy" className="underline hover:text-navy-700">{t('privacyPolicy')}</a>
                  {' '}{t('and')}{' '}
                  <a href="/terms" className="underline hover:text-navy-700">{t('terms')}</a>
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}
