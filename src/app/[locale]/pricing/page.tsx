import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import { CheckCircle2, XCircle, ArrowRight, Zap, Shield, Star } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pricing',
    description: 'Transparent pricing plans for our Romania study abroad consulting services.',
  }
}

const planKeys  = ['essential', 'fullService', 'complete']
const planPrices = ['€299', '€699', '€999']
const planIcons  = [Shield, Star, Zap]
const highlighted = [false, true, false]

export default async function PricingPage() {
  const t = await getTranslations('pricing')
  const locale = await getLocale()
  const isRTL = locale === 'ar'

  const faqs = t.raw('faqs') as { q: string; a: string }[]

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

      {/* Plans */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planKeys.map((key, i) => {
              const Icon = planIcons[i]
              const isHighlighted = highlighted[i]
              const features    = t.raw(`plans.${key}.features`) as string[]
              const notIncluded = t.raw(`plans.${key}.notIncluded`) as string[]
              return (
                <div
                  key={key}
                  className={`rounded-2xl border p-8 flex flex-col ${isHighlighted ? 'border-navy-900 shadow-xl ring-2 ring-navy-900' : 'border-gray-200'}`}
                >
                  <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isHighlighted ? 'bg-navy-900 text-white' : 'bg-gray-100 text-navy-700'}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900">{t(`plans.${key}.name`)}</h3>
                      {isHighlighted && (
                        <span className="text-xs text-gold-600 font-medium">{t(`plans.${key}.cta`)}</span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-navy-900">{planPrices[i]}</span>
                    <span className="text-gray-400 text-sm ml-1">{t('oneTime')}</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-6">{t(`plans.${key}.description`)}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('included')}</p>
                    <ul className="space-y-2">
                      {features.map((f: string) => (
                        <li key={f} className={`flex items-start gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {notIncluded.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('notIncluded')}</p>
                      <ul className="space-y-2">
                        {notIncluded.map((f: string) => (
                          <li key={f} className={`flex items-start gap-2 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <XCircle className="h-4 w-4 text-gray-300 shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto pt-6">
                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors text-sm ${
                        isHighlighted
                          ? 'bg-navy-900 text-white hover:bg-navy-700'
                          : 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                      }`}
                    >
                      {t(`plans.${key}.cta`)} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">{t('faqTitle')}</h2>
          <div className="space-y-6">
            {faqs.map((faq: { q: string; a: string }) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">{t('ctaTitle')}</h2>
          <p className="text-gray-300 text-lg mb-10">{t('ctaDesc')}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors"
          >
            {t('ctaBook')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
