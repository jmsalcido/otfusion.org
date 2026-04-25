import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { LocaleProvider, useLocale } from './i18n/LocaleContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Expertise } from './components/sections/Expertise'
import { Ventures } from './components/sections/Ventures'
import { Timeline } from './components/sections/Timeline'
import { Newsletter } from './components/sections/Newsletter'
import { Contact } from './components/sections/Contact'
import { NotFound } from './components/pages/NotFound'
import { NewsletterLanding } from './components/pages/NewsletterLanding'
import { PensarClaroLanding } from './components/pages/PensarClaroLanding'
import { ContactPage } from './components/pages/ContactPage'
import { applySeo } from './lib/seo'
import { consumeRememberedScrollSection, scrollToSection } from './lib/scrollToSection'

const HOME_IMAGE_URL =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-100'

const HomePage = () => {
  const { locale } = useLocale()
  const location = useLocation()

  useEffect(() => {
    applySeo({
      title: 'OTFusion',
      description: 'Escritura y criterio para pensar claro.',
      url: 'https://www.otfusion.org/',
      image: HOME_IMAGE_URL,
      type: 'website',
      lang: locale
    })
  }, [locale])

  useEffect(() => {
    const sectionId = consumeRememberedScrollSection() ?? location.hash.replace('#', '')
    if (!sectionId) return

    window.requestAnimationFrame(() => {
      scrollToSection(sectionId)
    })
  }, [location.hash])

  return (
    <div className="page-shell">
      <Header />
      <main className="pt-16">
        <Hero />
        <Expertise />
        <Ventures />
        <Timeline />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/carta-stoica" element={<NewsletterLanding />} />
          <Route path="/pensar-claro" element={<PensarClaroLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LocaleProvider>
    </BrowserRouter>
  )
}

export default App
