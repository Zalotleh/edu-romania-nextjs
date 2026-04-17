import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cities in Romania',
    description: "Explore Romania's top student cities.",
  }
}

const cityEntries = [
  { key: 'bucharest',  population: '2.1M', students: '300K+', universities: 8,  rent: '€250-450/mo', image: 'photo-1558618666-fcd25c85cd64' },
  { key: 'clujNapoca', population: '340K',  students: '100K+', universities: 6,  rent: '€200-380/mo', image: 'photo-1570129477492-45c003edd2be' },
  { key: 'timisoara',  population: '325K',  students: '50K+',  universities: 4,  rent: '€180-350/mo', image: 'photo-1541888946425-d81bb19240f5' },
  { key: 'iasi',       population: '290K',  students: '60K+',  universities: 5,  rent: '€150-280/mo', image: 'photo-1519922639192-e73293ca430e' },
  { key: 'targuMures', population: '134K',  students: '20K+',  universities: 2,  rent: '€130-250/mo', image: 'photo-1510798831971-661eb04b3739' },
]

export default async function CitiesPage() {
  const t = await getTranslations('cities')
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

      {/* Cities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {cityEntries.map((c, i) => (
            <div key={c.key} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}>
              {/* City photo */}
              <div className="relative lg:w-2/5 min-h-75 overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/${c.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={t(`cities.${c.key}.name`)}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-1">{t(`cities.${c.key}.name`)}</h2>
                  <p className="text-white/80 text-sm mb-4">{t(`cities.${c.key}.tagline`)}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      [t('population'), c.population],
                      [t('students'), c.students],
                      [t('universities'), String(c.universities)],
                      [t('avgRent'), c.rent],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="text-white/60 text-xs">{label}</p>
                        <p className="text-white font-semibold text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-10 lg:w-3/5">
                <p className="text-gray-500 leading-relaxed mb-6">{t(`cities.${c.key}.body`)}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {(t.raw(`cities.${c.key}.highlights`) as string[]).map((h: string) => (
                    <li key={h} className={`flex items-start gap-2 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-gold-500 mt-0.5">✓</span>{h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-1 text-sm text-navy-700 font-medium hover:text-navy-900 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('ctaStart')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          ))}
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
            {t('ctaStart')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
