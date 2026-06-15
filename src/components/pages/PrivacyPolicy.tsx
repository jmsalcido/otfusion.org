import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { applySeo } from '../../lib/seo'
import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

const PRIVACY_IMAGE_URL =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-100'

export const PrivacyPolicy = () => {
  const { t, locale } = useLocale()

  useEffect(() => {
    applySeo({
      title: `${t.privacyPolicy.title} | José M. Salcido`,
      description:
        'Privacy policy for OTFusion, including contact forms, newsletter subscriptions, analytics, and data choices.',
      url: 'https://www.otfusion.org/privacy-policy',
      image: PRIVACY_IMAGE_URL,
      type: 'website',
      lang: locale
    })
  }, [locale, t.privacyPolicy.title])

  return (
    <div className="page-shell min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <span className="rule-accent" aria-hidden="true" />
        <p className="label">{t.privacyPolicy.label}</p>
        <h1 className="mt-4">{t.privacyPolicy.title}</h1>
        <p className="caption mt-4">{t.privacyPolicy.lastUpdated}</p>
        <p className="lead mt-8">{t.privacyPolicy.intro}</p>

        <div className="mt-12 space-y-10">
          {t.privacyPolicy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="card mt-12 px-6 py-6">
          <h2 className="text-2xl">{t.privacyPolicy.contactTitle}</h2>
          <p className="mt-3">{t.privacyPolicy.contactBody}</p>
          <Link to="/contact" className="btn btn-secondary mt-6">
            {t.nav.contact}
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
