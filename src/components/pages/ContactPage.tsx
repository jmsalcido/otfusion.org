import { useEffect } from 'react'
import { Contact } from '../sections/Contact'
import { useLocale } from '../../i18n/LocaleContext'
import { applySeo } from '../../lib/seo'
import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

const CONTACT_IMAGE_URL =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-100'

export const ContactPage = () => {
  const { locale } = useLocale()

  useEffect(() => {
    applySeo({
      title: 'Contact | José M. Salcido',
      description:
        'Start a focused conversation with José M. Salcido about advisory, engineering leadership, ventures, or speaking.',
      url: 'https://www.otfusion.org/contact',
      image: CONTACT_IMAGE_URL,
      type: 'website',
      lang: locale
    })
  }, [locale])

  return (
    <div className="page-shell min-h-screen">
      <Header />
      <main className="flex min-h-screen items-center pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
