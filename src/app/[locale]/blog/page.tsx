import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import { ArrowRight, ExternalLink } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog',
    description: 'Articles, guides and tips about studying in Romania.',
  }
}

const postSlugs = [
  'babes-bolyai-university-cluj-napoca',
  'politehnica-university-timisoara',
  'cost-of-living-in-romania',
  'iuliu-hatieganu-medical-university',
  'required-documents-for-romanian-universities',
  'student-visa-romania-guide',
  'student-accommodation-bucharest',
  'best-programs-for-international-students',
]

const postMeta: Record<string, { date: string; category: string; readTime: string }> = {
  'babes-bolyai-university-cluj-napoca':         { date: '2024-01-15', category: 'Universities',  readTime: '5' },
  'politehnica-university-timisoara':             { date: '2024-01-10', category: 'Universities',  readTime: '4' },
  'cost-of-living-in-romania':                    { date: '2024-01-05', category: 'StudentLife',   readTime: '6' },
  'iuliu-hatieganu-medical-university':           { date: '2023-12-20', category: 'Universities',  readTime: '5' },
  'required-documents-for-romanian-universities': { date: '2023-12-10', category: 'Admissions',   readTime: '7' },
  'student-visa-romania-guide':                   { date: '2023-11-28', category: 'Visa',          readTime: '8' },
  'student-accommodation-bucharest':              { date: '2023-11-15', category: 'StudentLife',   readTime: '5' },
  'best-programs-for-international-students':     { date: '2023-11-01', category: 'Admissions',   readTime: '6' },
}

export default async function BlogPage() {
  const t = await getTranslations('blog')
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

      {/* Posts grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postSlugs.map((slug) => {
              const meta = postMeta[slug]
              const categoryKey = meta.category
              return (
                <article key={slug} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow p-6 flex flex-col">
                  <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xs font-medium text-navy-700 bg-navy-50 px-2 py-1 rounded-full">
                      {t(`categories.${categoryKey}`)}
                    </span>
                    <span className="text-xs text-gray-400">{meta.date}</span>
                  </div>
                  <h2 className="text-base font-bold text-navy-900 mb-3 leading-snug flex-1">
                    {t(`posts.${slug}.title`)}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {t(`posts.${slug}.excerpt`)}
                  </p>
                  <div className={`flex items-center justify-between mt-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xs text-gray-400">{meta.readTime} {t('minRead')}</span>
                    <span className={`text-sm text-navy-700 font-medium inline-flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {t('readMore')} <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </article>
              )
            })}
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
            {t('ctaContact')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
