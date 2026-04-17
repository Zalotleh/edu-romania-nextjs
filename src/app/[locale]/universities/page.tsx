import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import { ArrowRight, MapPin, Building2 } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Universities in Romania',
    description: 'Browse top Romanian universities for international students.',
  }
}

const uniEntries = [
  {
    key: 'universityOfBucharest',
    founded: 1864, type: 'public',
    image: 'photo-1541339907198-e08756dedf3f',
    languages: ['Romanian', 'English', 'French'],
    programs: ['Humanities', 'Social Sciences', 'Natural Sciences', 'Law', 'Mathematics', 'Computer Science'],
  },
  {
    key: 'babesBolyai',
    founded: 1919, type: 'public',
    image: 'photo-1562774053-701939374585',
    languages: ['Romanian', 'English', 'German', 'Hungarian', 'French'],
    programs: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Law', 'Economics', 'Computer Science', 'History'],
  },
  {
    key: 'iuliuHatieganu',
    founded: 1919, type: 'public',
    image: 'photo-1551076805-e1869033e561',
    languages: ['Romanian', 'English', 'French'],
    programs: ['Medicine', 'Pharmacy', 'Dentistry'],
  },
  {
    key: 'alexandruCuza',
    founded: 1860, type: 'public',
    image: 'photo-1523050854058-8df90110c9f1',
    languages: ['Romanian', 'English', 'French'],
    programs: ['Law', 'Letters', 'History', 'Geography', 'Economics', 'Computer Science'],
  },
  {
    key: 'westTimisoara',
    founded: 1962, type: 'public',
    image: 'photo-1607237138185-eedd9c632b0b',
    languages: ['Romanian', 'English', 'German'],
    programs: ['Arts & Design', 'Economics', 'Law', 'Computer Science', 'Political Science', 'Sociology'],
  },
  {
    key: 'polytehnicaTimisoara',
    founded: 1920, type: 'public',
    image: 'photo-1581092160607-ee22621dd758',
    languages: ['Romanian', 'English', 'German'],
    programs: ['Civil Engineering', 'Chemical Engineering', 'Electronic Engineering', 'Mechanical Engineering'],
  },
]

export default async function UniversitiesPage() {
  const t = await getTranslations('universities')
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

      {/* Universities list */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {uniEntries.map((u, i) => (
            <div key={u.key} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}>
              {/* University photo */}
              <div className="relative lg:w-2/5 min-h-80 overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/${u.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={t(`unis.${u.key}.name`)}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/80" />
                <div className="relative z-10 h-full p-10 flex flex-col justify-between text-white">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{t(`unis.${u.key}.name`)}</h2>
                    <div className={`flex items-center gap-2 text-gray-300 text-sm mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <MapPin className="h-4 w-4 text-gold-400" />
                      {t(`unis.${u.key}.city`)}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                        {t('founded')} {u.founded}
                      </span>
                      <span className="text-xs bg-gold-500/20 text-gold-300 px-2 py-1 rounded-full border border-gold-500/30">
                        {t(u.type === 'public' ? 'public' : 'private')}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{t(`unis.${u.key}.highlight`)}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white p-10 lg:w-3/5">
                <p className="text-gray-500 leading-relaxed mb-6">{t(`unis.${u.key}.fullDesc`)}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('languages')}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {u.languages.map((lang) => (
                        <span key={lang} className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-full">{lang}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('programs')}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {u.programs.slice(0, 4).map((prog) => (
                        <span key={prog} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{prog}</span>
                      ))}
                      {u.programs.length > 4 && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">+{u.programs.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`mt-6 flex items-center gap-1 text-sm text-navy-700 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Link href="/contact" className={`inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('ctaStart')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors text-base"
          >
            {t('ctaStart')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
