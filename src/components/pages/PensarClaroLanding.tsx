import { type FormEvent, useEffect, useRef, useState } from 'react'
import { usePostHog } from 'posthog-js/react'
import { useLocale } from '../../i18n/LocaleContext'
import { applySeo } from '../../lib/seo'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type TrackingContext = Record<string, string>

const PAGE_ID = 'pensar-claro'
const OG_IMAGE_URL =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-100'

const ghostEndpoint = (() => {
  const site = import.meta.env.VITE_GHOST_SITE
  if (!site) return null
  return `${site.replace(/\/$/, '')}/members/api/send-magic-link/`
})()

const buildTrackingContext = () => {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utmEntries = Array.from(params.entries()).filter(([key]) => key.startsWith('utm_'))
  return Object.fromEntries(utmEntries)
}

export const PensarClaroLanding = () => {
  const { t, locale, setLocale } = useLocale()
  const posthog = usePostHog()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const trackingContextRef = useRef<TrackingContext>({})
  const viewTrackedRef = useRef(false)
  const defaultLocaleSetRef = useRef(false)

  const copy = t.pensarClaroLanding
  const seo = {
    title: 'Pensar claro cuando el negocio pesa',
    description:
      'Newsletter corta sobre dinero, energía y decisiones reales. Para pensar mejor cuando el ruido no te deja.'
  }

  useEffect(() => {
    if (defaultLocaleSetRef.current) return
    defaultLocaleSetRef.current = true
    if (locale !== 'es') {
      setLocale('es')
    }
  }, [locale, setLocale])

  useEffect(() => {
    const utms = buildTrackingContext()
    if (Object.keys(utms).length > 0) {
      try {
        localStorage.setItem('otfusion_utms', JSON.stringify(utms))
      } catch (error) {
        console.warn('Unable to store UTM params', error)
      }
      trackingContextRef.current = utms
      return
    }

    try {
      const stored = localStorage.getItem('otfusion_utms')
      if (stored) {
        const parsed = JSON.parse(stored) as TrackingContext
        trackingContextRef.current = parsed
      }
    } catch (error) {
      console.warn('Unable to read UTM params', error)
    }
  }, [])

  useEffect(() => {
    if (viewTrackedRef.current) return
    if (typeof window === 'undefined') return
    const payload = { page: PAGE_ID, ...trackingContextRef.current }
    if (posthog) {
      posthog.capture('signup_view', payload)
    } else {
      console.log('TODO: analytics signup_view', payload)
    }
    viewTrackedRef.current = true
  }, [posthog])

  useEffect(() => {
    if (typeof window === 'undefined') return
    applySeo({
      title: seo.title,
      description: seo.description,
      url: `https://www.otfusion.org/${PAGE_ID}`,
      image: OG_IMAGE_URL,
      type: 'website',
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

      const payload = { page: PAGE_ID, ...trackingContextRef.current }
      if (posthog) {
        posthog.capture('signup_submit', payload)
      } else {
        console.log('TODO: analytics signup_submit', payload)
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again shortly.')
    }
  }

  return (
    <div className="page-shell min-h-screen">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex items-center justify-end">
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
            <p className="label">{copy.eyebrow}</p>
            <h1 className="mt-4">{copy.title}</h1>
            <p className="lead mt-4">{copy.subtitle}</p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
              {copy.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="label mt-6 text-accent">
              {copy.subtleLine}
            </p>
          </div>

          <div className="card px-6 py-10 sm:px-10">
            <span className="rule-accent" aria-hidden="true" />
            <p className="label">
              {copy.ctaEyebrow}
            </p>
            <h2 className="mt-4">{copy.formTitle}</h2>
            <p className="caption mt-3">{copy.formDescription}</p>
            {status === 'success' ? (
              <p className="mt-6 text-sm text-[var(--accent-sand)]">{t.newsletter.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={copy.formPlaceholder}
                  className="field flex-1 px-4 py-3 text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : copy.formButton}
                </button>
              </form>
            )}
            {status === 'error' && errorMessage && (
              <p className="mt-4 text-sm text-[var(--accent-sand)]">{errorMessage}</p>
            )}
            <p className="label mt-4">
              {copy.formFootnote}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
