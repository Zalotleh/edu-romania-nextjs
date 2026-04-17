import Link from 'next/link'
import { GraduationCap, Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-navy-950 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg mb-3">
              <GraduationCap className="h-5 w-5 text-gold-500" />
              <span>Edu<span className="text-gold-500">Romania</span></span>
            </Link>
            <p className="text-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('explore')}</h3>
            <ul className="space-y-2 text-sm">
              {[
                [t('links.whyRomania'), '/why-romania'],
                [t('links.universities'), '/universities'],
                [t('links.cities'), '/cities'],
                [t('links.life'), '/life-in-romania'],
                [t('links.blog'), '/blog'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('services')}</h3>
            <ul className="space-y-2 text-sm">
              {[
                [t('links.ourServices'), '/services'],
                [t('links.pricing'), '/pricing'],
                [t('links.about'), '/about'],
                [t('links.contactUs'), '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                <a href="mailto:info@edu-romania.com" className="hover:text-white transition-colors">
                  info@edu-romania.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-500 shrink-0" />
                <span>+40 000 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} EduRomania. {t('allRights')}</p>
          <p>Built with ❤️ to help students reach their potential.</p>
        </div>
      </div>
    </footer>
  )
}
