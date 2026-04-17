import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { getTranslations, getLocale } from 'next-intl/server'
import {
  FileText, Stamp, BookOpen, Plane, Home, UserCheck,
  GraduationCap, Globe, Star, ArrowRight, CheckCircle2,
} from 'lucide-react'

const stats = [
  { value: '49+',  labelKey: 'publicUnis' },
  { value: '8+',   labelKey: 'privateUnis' },
  { value: '100+', labelKey: 'accredited' },
  { value: '#3',   labelKey: 'internet' },
]

const serviceIcons = [
  FileText, Stamp, BookOpen, Globe, Plane, Home, UserCheck, GraduationCap,
]
const serviceKeys = [
  'translation', 'consular', 'admission', 'visa', 'travel', 'accommodation', 'residency', 'support',
]

const reasonKeys = ['euDegrees', 'affordable', 'languages', 'internet', 'culture', 'safe']
const reasonEmojis = ['🎓', '💰', '🌍', '⚡', '🏔️', '🔒']

const uniEntries = [
  { key: 'universityOfBucharest', founded: 1864 },
  { key: 'babesBolyai',           founded: 1919 },
  { key: 'alexandruCuza',         founded: 1860 },
  { key: 'westTimisoara',         founded: 1962 },
  { key: 'iuliuHatieganu',        founded: 1919 },
  { key: 'polytehnicaTimisoara',  founded: 1920 },
]

export default async function HomePage() {
  const t  = await getTranslations('home')
  const tu = await getTranslations('universities')
  const locale = await getLocale()
  const isRTL = locale === 'ar'

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className={`max-w-3xl ${isRTL ? 'ml-auto text-right' : ''}`}>
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-sm font-medium border border-gold-500/30">
              {t('badge')}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-balance">
              {isRTL ? (
                <>ادرس في <span className="text-gold-400">رومانيا</span>.<br />ابنِ مستقبلك.</>
              ) : (
                <>Study in <span className="text-gold-400">Romania</span>.<br />Build your future.</>
              )}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              {t('heroDesc')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors text-base"
              >
                {t('ctaStart')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                href="/universities"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-600 text-gray-200 hover:border-gray-400 hover:text-white transition-colors text-base"
              >
                {t('ctaUniversities')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.labelKey} className="text-center">
                <p className="text-4xl font-bold text-navy-900">{s.value}</p>
                <p className="mt-1 text-sm text-gray-500">{t(`stats.${s.labelKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Romania ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('whyTitle')}</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('whyDesc')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonKeys.map((key, i) => (
              <div key={key} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{reasonEmojis[i]}</div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{t(`reasons.${key}.title`)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`reasons.${key}.body`)}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/why-romania" className={`inline-flex items-center gap-1 text-navy-700 font-medium hover:text-navy-900 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t('learnMore')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services overview ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('servicesTitle')}</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('servicesDesc')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceKeys.map((key, i) => {
              const Icon = serviceIcons[i]
              return (
                <div key={key} className="group p-6 rounded-2xl border border-gray-100 hover:border-navy-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
                    <Icon className="h-5 w-5 text-navy-700" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-1">{t(`services.${key}.title`)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(`services.${key}.desc`)}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-navy-900 text-navy-900 font-semibold hover:bg-navy-900 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('ctaLearnMore')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Universities ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-3">{t('universitiesTitle')}</h2>
              <p className="text-gray-500">{t('universitiesDesc')}</p>
            </div>
            <Link href="/universities" className={`inline-flex items-center gap-1 text-navy-700 font-medium hover:text-navy-900 whitespace-nowrap ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t('viewAll')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniEntries.map((u) => (
              <Link
                key={u.key}
                href="/universities"
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-navy-200 transition-all"
              >
                <div className={`flex items-start justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div>
                    <h3 className="font-semibold text-navy-900 group-hover:text-navy-700 transition-colors">
                      {tu(`unis.${u.key}.name`)}
                    </h3>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {tu(`unis.${u.key}.city`)} · {t('founded')} {u.founded}
                    </p>
                  </div>
                  <span className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                    <Star className="inline h-3 w-3 mr-1" />Ranked
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{tu(`unis.${u.key}.highlight`)}</p>
                <div className={`mt-4 flex items-center gap-1 text-sm text-navy-700 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('learnMore')} <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">{t('ctaTitle')}</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">{t('ctaDesc')}</p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors text-base"
            >
              {t('ctaBook')} <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-gray-200 hover:border-gray-400 transition-colors text-base"
            >
              {t('ctaLearnMore')}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
