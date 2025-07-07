import { useState, useEffect } from 'react'
import { Header, Footer, Hero, Services, About, Contact } from '../components'

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1">
        <Hero isVisible={isVisible} />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 