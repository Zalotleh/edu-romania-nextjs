import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import { ArrowRight, Sun, Utensils, Music, DollarSign, Heart, Book } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Life in Romania',
    description: 'Everything you need to know about student life in Romania.',
  }
}

const sectionIcons: Record<string, React.ElementType> = {
  welcome: Heart,
  climate: Sun,
  culture: Music,
  food: Utensils,
  costs: DollarSign,
  academics: Book,
}

const sectionKeys = ['welcome', 'climate', 'culture', 'food', 'costs', 'academics']
const sectionColors: Record<string, string> = {
  welcome: 'text-red-500',
  climate: 'text-amber-500',
  culture: 'text-purple-500',
  food: 'text-green-500',
  costs: 'text-blue-500',
  academics: 'text-navy-500',
}

const sectionImages: Record<string, string> = {
  welcome:   'photo-1529156069898-49953e39b3ac',
  climate:   'photo-1519681393784-d120267933ba',
  culture:   'photo-1533174072545-7a4b6ad7a6c3',
  food:      'photo-1504674900247-0877df9cc836',
  costs:     'photo-1477959858617-67f85cf4f1df',
  academics: 'photo-1507842217343-583bb7270b66',
}

export default async function LifeInRomaniaPage() {
  const t = await getTranslations('life')
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

      {/* Sections */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {sectionKeys.map((key, i) => {
            const Icon = sectionIcons[key]
            const imageRight = i % 2 === 0
            return (
              <div key={key} id={key} className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                {/* Text */}
                <div className={`lg:col-span-3 ${!imageRight ? 'lg:order-2' : ''}`}>
                  <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 ${sectionColors[key]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">{t(`sections.${key}.title`)}</h2>
                  </div>
                  <div>
                    {t(`sections.${key}.content`).split('\n\n').map((para, j) => (
                      <p key={j} className="text-gray-500 leading-relaxed mb-4 last:mb-0">{para}</p>
                    ))}
                  </div>
                </div>
                {/* Image */}
                <div className={`lg:col-span-2 relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md ${!imageRight ? 'lg:order-1' : ''}`}>
                  <Image
                    src={`https://images.unsplash.com/${sectionImages[key]}?auto=format&fit=crop&w=800&q=80`}
                    alt={t(`sections.${key}.title`)}
                    fill
                    className="object-cover"
                  />
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
              {t('ctaContact')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-gray-200 hover:border-gray-400 transition-colors"
            >
              {t('ctaServices')}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
