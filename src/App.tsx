import './App.css'
import { LocaleProvider } from './i18n/LocaleContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Expertise } from './components/sections/Expertise'
import { Ventures } from './components/sections/Ventures'
import { Timeline } from './components/sections/Timeline'
import { Newsletter } from './components/sections/Newsletter'
import { Contact } from './components/sections/Contact'
import { NotFound } from './components/pages/NotFound'

const isHomeRoute = () => {
  if (typeof window === 'undefined') return true
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return path === '/' || path === '/index.html'
}

function App() {
  const home = isHomeRoute()

  return (
    <LocaleProvider>
      {home ? (
        <div className="min-h-screen bg-[#f5f5f2] text-[#0f1c2e]">
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
      ) : (
        <NotFound />
      )}
    </LocaleProvider>
  )
}

export default App
