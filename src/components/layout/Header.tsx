import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { rememberScrollSection, scrollToSection } from '../../lib/scrollToSection'

const brandInitials = ['J', 'S']

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale, setLocale } = useLocale()
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'expertise', label: t.nav.expertise },
    { id: 'ventures', label: t.nav.ventures },
    { id: 'timeline', label: t.nav.timeline },
    { id: 'contact', label: t.nav.contact }
  ]

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'contact') {
      navigate('/contact')
      setMenuOpen(false)
      return
    }

    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      rememberScrollSection(sectionId)
      navigate('/')
    }

    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-subtle)] bg-[rgba(6,60,107,0.82)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleNavigate('home')}
          className="font-display flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent-sand)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-default)] bg-[rgba(17,77,138,0.72)] text-xs text-[var(--accent-sand)] shadow-[var(--shadow-inset)]">
            {brandInitials.join('·')}
          </span>
          José M. Salcido
        </button>

        <nav className="hidden items-center gap-8 text-sm text-[var(--text-secondary)] md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center rounded-full border border-[var(--border-default)] bg-[rgba(17,77,138,0.76)] text-xs font-semibold uppercase tracking-[0.14em] shadow-[var(--shadow-inset)]">
            {(['en', 'es'] as const).map((option, index) => {
              const isActive = locale === option
              return (
                <button
                  key={option}
                  onClick={() => setLocale(option)}
                  className={`px-3 py-1 transition-colors first:rounded-l-full last:rounded-r-full ${
                    isActive
                      ? 'bg-[var(--primary)] text-[var(--text-main)]'
                      : 'text-[var(--text-secondary)] hover:bg-[rgba(111,163,194,0.14)] hover:text-[var(--text-primary)]'
                  }`}
                  style={
                    index === 1
                      ? { borderLeft: '1px solid var(--border-subtle)' }
                      : { borderRight: '1px solid var(--border-subtle)' }
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
          className="rounded-sm p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={`h-0.5 w-6 origin-center bg-[var(--text-primary)] transition-transform ${
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
        <div className="border-t border-[var(--border-subtle)] bg-[rgba(6,60,107,0.96)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-left transition-colors hover:text-[var(--text-primary)]"
              >
                {item.label}
              </button>
            ))}
            <div className="inline-flex w-max items-center rounded-full border border-[var(--border-default)] bg-[rgba(17,77,138,0.76)] text-xs font-semibold uppercase tracking-[0.14em]">
              {(['en', 'es'] as const).map((option, index) => {
                const isActive = locale === option
                return (
                  <button
                    key={option}
                    onClick={() => setLocale(option)}
                    className={`px-3 py-1 transition-colors first:rounded-l-full last:rounded-r-full ${
                      isActive
                        ? 'bg-[var(--primary)] text-[var(--text-main)]'
                        : 'text-[var(--text-secondary)] hover:bg-[rgba(111,163,194,0.14)] hover:text-[var(--text-primary)]'
                    }`}
                    style={
                      index === 1
                        ? { borderLeft: '1px solid var(--border-subtle)' }
                        : { borderRight: '1px solid var(--border-subtle)' }
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
