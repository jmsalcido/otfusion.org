import { type FormEvent, useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const ghostEndpoint = (() => {
  const site = import.meta.env.VITE_GHOST_SITE
  if (!site) return null
  return `${site.replace(/\/$/, '')}/members/api/send-magic-link/`
})()

export const Newsletter = () => {
  const { t } = useLocale()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
    <section id="newsletter" className="px-4 py-20 sm:px-6 lg:px-0">
      <div className="card mx-auto max-w-4xl px-6 py-12 sm:px-10">
        <span className="rule-accent" aria-hidden="true" />
        <p className="label">{t.newsletter.label}</p>
        <h3 className="mt-4">{t.newsletter.title}</h3>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">{t.newsletter.description}</p>
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
        <p className="label mt-3">{t.newsletter.note}</p>
      </div>
    </section>
  )
}
