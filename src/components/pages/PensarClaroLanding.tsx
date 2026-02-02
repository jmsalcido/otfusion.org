import { type FormEvent, useEffect, useRef, useState } from 'react'
import { usePostHog } from 'posthog-js/react'
import { useLocale } from '../../i18n/LocaleContext'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type TrackingContext = Record<string, string>

const PAGE_ID = 'pensar-claro'
const OG_IMAGE_URL = 'https://otfusion.org/og-image.jpg'

const ghostEndpoint = (() => {
  const site = import.meta.env.VITE_GHOST_SITE
  if (!site) return null
  return `${site.replace(/\/$/, '')}/members/api/send-magic-link/`
})()

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

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
  const [trackingContext, setTrackingContext] = useState<TrackingContext>({})
  const viewTrackedRef = useRef(false)
  const defaultLocaleSetRef = useRef(false)

  const copy = t.pensarClaroLanding
  const seo =
    locale === 'es'
      ? {
          title: 'Pensar claro cuando el negocio pesa | OTFusion',
          description:
            'Newsletter para founders sobre dinero, energía y decisiones reales. Un correo a la vez.'
        }
      : {
          title: 'Think clearly when the business weighs heavy | OTFusion',
          description:
            'Newsletter for founders about money, energy, and real decisions. One email at a time.'
        }

  useEffect(() => {
    if (defaultLocaleSetRef.current) return
    defaultLocaleSetRef.current = true
    if (locale !== 'es') {
      setLocale('es')
    }
  }, [locale, setLocale])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    const utms = buildTrackingContext()
    if (Object.keys(utms).length > 0) {
      try {
        localStorage.setItem('otfusion_utms', JSON.stringify(utms))
      } catch (error) {
        console.warn('Unable to store UTM params', error)
      }
      setTrackingContext(utms)
      return
    }

    try {
      const stored = localStorage.getItem('otfusion_utms')
      if (stored) {
        const parsed = JSON.parse(stored) as TrackingContext
        setTrackingContext(parsed)
      }
    } catch (error) {
      console.warn('Unable to read UTM params', error)
    }
  }, [])

  useEffect(() => {
    if (viewTrackedRef.current) return
    if (typeof window === 'undefined') return
    const payload = { page: PAGE_ID, ...trackingContext }
    if (posthog) {
      posthog.capture('signup_view', payload)
    } else {
      console.log('TODO: analytics signup_view', payload)
    }
    viewTrackedRef.current = true
  }, [posthog, trackingContext])

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:image', OG_IMAGE_URL)
    upsertMeta('property', 'og:url', `https://otfusion.org/${PAGE_ID}`)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'twitter:title', seo.title)
    upsertMeta('property', 'twitter:description', seo.description)
    upsertMeta('property', 'twitter:image', OG_IMAGE_URL)
    upsertMeta('property', 'twitter:card', 'summary_large_image')
  }, [seo.title, seo.description])

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

      const payload = { page: PAGE_ID, ...trackingContext }
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
    <div className="min-h-screen bg-[#f5f5f2] text-[#0f1c2e]">
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex items-center justify-end">
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#6b7a90]">{copy.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{copy.title}</h1>
            <p className="mt-4 text-base text-[#324155] sm:text-lg">{copy.subtitle}</p>

            <ul className="mt-6 space-y-3 text-sm text-[#324155]">
              {copy.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0b1f3a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#6b7a90]">
              {copy.subtleLine}
            </p>
          </div>

          <div className="rounded-3xl border border-[#1d2b3f] bg-[#0b1f3a] px-6 py-10 text-white shadow-xl sm:px-10">
            <p className="text-xs uppercase tracking-[0.4em] text-[#8f9fb6]">
              {copy.ctaEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{copy.formTitle}</h2>
            <p className="mt-3 text-sm text-slate-200">{copy.formDescription}</p>
            {status === 'success' ? (
              <p className="mt-6 text-sm text-emerald-300">{t.newsletter.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={copy.formPlaceholder}
                  className="flex-1 rounded-full border border-white/30 bg-transparent px-4 py-3 text-sm placeholder:text-[#b0bccd] focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0b1f3a] transition hover:bg-[#f0f2f7] disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : copy.formButton}
                </button>
              </form>
            )}
            {status === 'error' && errorMessage && (
              <p className="mt-4 text-sm text-red-200">{errorMessage}</p>
            )}
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#8f9fb6]">
              {copy.formFootnote}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
