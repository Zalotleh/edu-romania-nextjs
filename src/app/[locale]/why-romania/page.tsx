import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Why Romania',
    description: "Discover why Romania is one of Europe's best destinations for international students.",
  }
}

const reasonNumbers = ['01','02','03','04','05','06','07','08']

export default async function WhyRomaniaPage() {
  const t = await getTranslations('whyRomania')
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

      {/* Reasons */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {reasonNumbers.map((num) => (
              <div key={num} className={`flex flex-col sm:flex-row gap-6 sm:gap-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <div className="shrink-0 text-5xl font-bold text-gray-100 select-none">{num}</div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">{t(`reasons.${num}.title`)}</h2>
                  <p className="text-gray-500 leading-relaxed">{t(`reasons.${num}.body`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">{t('ctaTitle')}</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">{t('ctaDesc')}</p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors text-base"
            >
              {t('ctaStart')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-gray-200 hover:border-gray-400 transition-colors text-base"
            >
              {t('ctaContact')}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
