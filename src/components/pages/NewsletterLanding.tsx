import { type FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { applySeo } from '../../lib/seo'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const ghostEndpoint = (() => {
  const site = import.meta.env.VITE_GHOST_SITE
  if (!site) return null
  return `${site.replace(/\/$/, '')}/members/api/send-magic-link/`
})()

export const NewsletterLanding = () => {
  const { t, locale, setLocale } = useLocale()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const seo = {
    title: 'Carta Estoica | Pensar claro en tiempos difíciles',
    description:
      'Una carta semanal sobre claridad, criterio y calma. Inspirada en estoicismo, escrita para la vida real.'
  }

  useEffect(() => {
    applySeo({
      title: seo.title,
      description: seo.description,
      url: 'https://www.otfusion.org/carta-stoica',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-100',
      type: 'article',
      lang: locale
    })
  }, [locale, seo.description, seo.title])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElement = event.currentTarget
    if (!ghostEndpoint) {
      setStatus('error')
      setErrorMessage('Missing Ghost site URL. Please configure VITE_GHOST_SITE.')
      return
    }

    const formData = new FormData(formElement)
    const email = formData.get('email')?.toString().trim()
    if (!email) {
      setStatus('error')
      setErrorMessage('Email is required.')
      return
    }

    setStatus('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch(ghostEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          emailType: 'subscribe'
        })
      })

      if (!response.ok) {
        throw new Error('Ghost subscription failed')
      }

      setStatus('success')
      formElement.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again shortly.')
    }
  }

  return (
    <div className="page-shell min-h-screen">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="label transition hover:text-[var(--text-primary)]"
          >
            {t.newsletterLanding.backLink}
          </Link>
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
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="rule-accent" aria-hidden="true" />
            <p className="label">
              {t.newsletterLanding.eyebrow}
            </p>
            <h1 className="mt-4">
              {t.newsletterLanding.title}
            </h1>
            <p className="lead mt-4">
              {t.newsletterLanding.subtitle}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
              {t.newsletterLanding.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="card mt-8 px-6 py-6 text-sm">
              <p className="text-base font-medium leading-relaxed text-[var(--text-primary)]">
                “{t.newsletterLanding.quote}”
              </p>
              <footer className="label mt-4">
                {t.newsletterLanding.quoteAuthor}
              </footer>
            </blockquote>
          </div>

          <div className="card px-6 py-10 sm:px-10">
            <span className="rule-accent" aria-hidden="true" />
            <p className="label">
              {t.newsletter.label}
            </p>
            <h2 className="mt-4">
              {t.newsletterLanding.formTitle}
            </h2>
            <p className="caption mt-3">
              {t.newsletterLanding.formDescription}
            </p>
            {status === 'success' ? (
              <p className="mt-6 text-sm text-[var(--accent-sand)]">{t.newsletter.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.newsletter.placeholder}
                  className="field flex-1 px-4 py-3 text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : t.newsletter.button}
                </button>
              </form>
            )}
            {status === 'error' && errorMessage && (
              <p className="mt-4 text-sm text-[var(--accent-sand)]">{errorMessage}</p>
            )}
            <p className="label mt-4">
              {t.newsletter.note}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
