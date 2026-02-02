import { type FormEvent, useEffect, useState } from 'react'
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
    title: 'Carta Stoica | OTFusion',
    description: 'Ensayos breves sobre liderazgo, sistemas y paciencia.'
  }

  useEffect(() => {
    applySeo({
      title: seo.title,
      description: seo.description,
      url: 'https://otfusion.org/carta-stoica',
      image: 'https://otfusion.org/og-image.jpg',
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
    <div className="min-h-screen bg-[#f5f5f2] text-[#0f1c2e]">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-xs uppercase tracking-[0.35em] text-[#536072] transition hover:text-[#0f1c2e]"
          >
            {t.newsletterLanding.backLink}
          </a>
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
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#6b7a90]">
              {t.newsletterLanding.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.newsletterLanding.title}
            </h1>
            <p className="mt-4 text-base text-[#324155] sm:text-lg">
              {t.newsletterLanding.subtitle}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#324155]">
              {t.newsletterLanding.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0b1f3a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 rounded-3xl border border-[#d2d7df] bg-white/70 px-6 py-6 text-sm text-[#0f1c2e] shadow-sm">
              <p className="text-base font-medium leading-relaxed">
                “{t.newsletterLanding.quote}”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-[#6b7a90]">
                {t.newsletterLanding.quoteAuthor}
              </footer>
            </blockquote>
          </div>

          <div className="rounded-3xl border border-[#1d2b3f] bg-[#0b1f3a] px-6 py-10 text-white shadow-xl sm:px-10">
            <p className="text-xs uppercase tracking-[0.4em] text-[#8f9fb6]">
              {t.newsletter.label}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {t.newsletterLanding.formTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-200">
              {t.newsletterLanding.formDescription}
            </p>
            {status === 'success' ? (
              <p className="mt-6 text-sm text-emerald-300">{t.newsletter.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.newsletter.placeholder}
                  className="flex-1 rounded-full border border-white/30 bg-transparent px-4 py-3 text-sm placeholder:text-[#b0bccd] focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0b1f3a] transition hover:bg-[#f0f2f7] disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : t.newsletter.button}
                </button>
              </form>
            )}
            {status === 'error' && errorMessage && (
              <p className="mt-4 text-sm text-red-200">{errorMessage}</p>
            )}
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#8f9fb6]">
              {t.newsletter.note}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
