import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import { GraduationCap, Target, Users, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Us',
    description: 'Learn about EduRomania -- our story, mission and the team behind your journey.',
  }
}

const valueKeys = ['mission', 'approach', 'experience', 'commitment']
const valueIcons = [Target, Users, Globe, GraduationCap]

const teamKeys = ['founder', 'advisor', 'local']
const teamInitials = ['ZA', 'SA', 'LS']

export default async function AboutPage() {
  const t = await getTranslations('about')
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

      {/* Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">{t('ourStory')}</h2>
          <p className="text-gray-500 leading-relaxed text-lg">{t('ourStoryBody')}</p>

          {/* Values */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i]
              return (
                <div key={key} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="font-bold text-navy-900">{t(`values.${key}.title`)}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(`values.${key}.body`)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">{t('membersTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamKeys.map((key, i) => (
              <div key={key} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-navy-900 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {teamInitials[i]}
                </div>
                <h3 className="font-bold text-navy-900 mb-1">{t(`team.${key}.name`)}</h3>
                <p className="text-sm text-gold-600 font-medium mb-4">{t(`team.${key}.role`)}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`team.${key}.bio`)}</p>
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
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors"
            >
              {t('ctaStart')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-gray-200 hover:border-gray-400 transition-colors"
            >
              {t('ctaContact')}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
