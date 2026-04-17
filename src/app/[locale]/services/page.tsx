import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import {
  FileText, Stamp, BookOpen, Globe, Plane, Home,
  UserCheck, GraduationCap, ArrowRight, CheckCircle2,
} from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services',
    description: 'End-to-end services for studying in Romania.',
  }
}

const serviceIcons = [
  FileText, Stamp, BookOpen, Globe, Plane, Home, UserCheck, GraduationCap,
]
const serviceKeys = [
  'translation', 'consular', 'admission', 'visa', 'travel', 'accommodation', 'residency', 'support',
]

export default async function ServicesPage() {
  const t = await getTranslations('services')
  const locale = await getLocale()
  const isRTL = locale === 'ar'

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

      {/* Services list */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i]
            const steps = t.raw(`services.${key}.steps`) as string[]
            return (
              <div key={key} className="flex flex-col sm:flex-row gap-6 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center ${isRTL ? 'order-last sm:order-first' : ''}`}>
                  <Icon className="h-6 w-6 text-navy-700" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-navy-900 mb-2">{t(`services.${key}.title`)}</h2>
                  <p className="text-gray-500 leading-relaxed mb-5">{t(`services.${key}.desc`)}</p>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('stepsLabel')}</p>
                    <div className={`flex flex-wrap gap-2 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {steps.map((step: string, j: number) => (
                        <span key={j} className={`flex items-center gap-1.5 text-xs ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className="w-5 h-5 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center font-bold shrink-0">{j + 1}</span>
                          <span className="text-gray-600">{step}</span>
                          {j < steps.length - 1 && <span className={`text-gray-300 ${isRTL ? 'rotate-180' : ''}`}>→</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">{t('ctaTitle')}</h2>
          <p className="text-gray-300 text-lg mb-10">{t('ctaDesc')}</p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors"
            >
              {t('ctaBook')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-gray-200 hover:border-gray-400 transition-colors"
            >
              {t('ctaLearnPricing')}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
