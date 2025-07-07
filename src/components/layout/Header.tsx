import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    closeMenu()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-3">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="currentColor" className="text-gray-900 dark:text-white"
                      d="M262.97 19.438c-3.533.036-7.074.17-10.595.375 37.426 5.91 74.12 23.423 102.188 49.624-55.762-26.124-129.46-27.253-186.875-3.5 10.37-9.73 21.777-17.51 33.875-23.343C48.768 80.06-6.44 197.116 56.72 343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23 74.055 32.02 134.952 102.47 197.406.06.063.124.126.186.188 12.107 12.125 24.238 22.045 32.875 27.03 64.588 37.292 121.345-63.365 57.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654 16.82-11.594 34.836-14.844 53.375 76.21-134.99 312.3-129.124 324.124 72.063-10.722-61.622-53.708-113.837-121.03-135.344 56.69 23.942 96.28 79.752 96.28 145.25 0 94.252-72.826 148.403-154.594 165.625 42.582 2.34 94.684-13.826 125.438-36.314-23.357 39.58-72.146 67.082-123.25 81.594 72.736-2.804 136.515-41.146 175.406-97.375-10.316 11.652-22.718 22.04-36.78 30.97 46.54-55.267 70.795-137.97 61.31-210.25 8.428 16.284 13.583 33.51 15.782 51.374C485.26 97.63 372.46 18.3 262.97 19.437z"/>
              </svg>
            </div>
            <Link to="/" onClick={scrollToTop} className="text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              OTFusion
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
              <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</Link>
              <a href="https://blog.otfusion.org" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
          >
            Contact
          </button>
          <Link 
            to="/projects" 
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Projects
          </Link>
          <a 
            href="https://blog.otfusion.org" 
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  )
} 