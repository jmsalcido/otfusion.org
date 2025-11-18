import { useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'
import { scrollToSection } from '../../lib/scrollToSection'

const brandInitials = ['J', 'S']

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale, setLocale } = useLocale()

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'expertise', label: t.nav.expertise },
    { id: 'ventures', label: t.nav.ventures },
    { id: 'timeline', label: t.nav.timeline },
    { id: 'contact', label: t.nav.contact }
  ]

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8d7d2] bg-[#f8f8f5]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.3em] text-[#0f1c2e]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#cfd2d5] text-xs text-[#0b1f3a]">
            {brandInitials.join('·')}
          </span>
          José M. Salcido
        </button>

        <nav className="hidden items-center gap-8 text-sm text-[#4b5563] md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="transition-colors hover:text-[#0f1c2e]"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center rounded-full border border-[#cfd2d5] bg-white text-xs font-semibold uppercase tracking-[0.3em]">
            {(['en', 'es'] as const).map((option, index) => {
              const isActive = locale === option
              return (
                <button
                  key={option}
                  onClick={() => setLocale(option)}
                  className={`px-3 py-1 transition-colors first:rounded-l-full last:rounded-r-full ${
                    isActive
                      ? 'bg-[#0b1f3a] text-white'
                      : 'text-[#0b1f3a] hover:bg-[#f0f2f6] hover:text-[#0f1c2e]'
                  }`}
                  style={
                    index === 1
                      ? { borderLeft: '1px solid rgba(15, 28, 46, 0.1)' }
                      : { borderRight: '1px solid rgba(15, 28, 46, 0.1)' }
                  }
                >
                  {option.toUpperCase()}
                </button>
              )
            })}
          </div>
        </nav>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={`h-0.5 w-6 origin-center bg-[#0f1c2e] transition-transform ${
                  menuOpen && index === 0 ? 'translate-y-2 rotate-45' : ''
                } ${menuOpen && index === 1 ? 'opacity-0' : ''} ${
                  menuOpen && index === 2 ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            ))}
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-[#d8d7d2] bg-[#f8f8f5]/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-[#4b5563]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="inline-flex w-max items-center rounded-full border border-[#cfd2d5] bg-white text-xs font-semibold uppercase tracking-[0.3em]">
              {(['en', 'es'] as const).map((option, index) => {
                const isActive = locale === option
                return (
                  <button
                    key={option}
                    onClick={() => setLocale(option)}
                    className={`px-3 py-1 transition-colors first:rounded-l-full last:rounded-r-full ${
                      isActive
                        ? 'bg-[#0b1f3a] text-white'
                        : 'text-[#0b1f3a] hover:bg-[#f0f2f6] hover:text-[#0f1c2e]'
                    }`}
                    style={
                      index === 1
                        ? { borderLeft: '1px solid rgba(15, 28, 46, 0.1)' }
                        : { borderRight: '1px solid rgba(15, 28, 46, 0.1)' }
                    }
                  >
                    {option.toUpperCase()}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
