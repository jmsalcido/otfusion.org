import { type FormEvent, useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeader } from '../common/SectionHeader'

type Status = 'idle' | 'submitting' | 'success'
const contactWebhook = import.meta.env.VITE_CONTACT_WEBHOOK

export const Contact = () => {
  const { t } = useLocale()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElement = event.currentTarget
    if (!contactWebhook) {
      setErrorMessage('Contact endpoint not configured.')
      return
    }

    const formData = new FormData(formElement)
    if (formData.get('context')) {
      // honeypot filled, likely bot
      setStatus('success')
      formElement.reset()
      return
    }
    const payload = {
      full_name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      focus: formData.get('purpose')?.toString() ?? '',
      description: formData.get('message')?.toString() ?? ''
    }

    setStatus('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch(contactWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Failed to send lead')
      }

      setStatus('success')
      formElement.reset()
    } catch (error) {
      console.error(error)
      setStatus('idle')
      setErrorMessage('Unable to send message. Please try again shortly.')
    }
  }

  const form = t.contact.form

  return (
    <section id="contact" className="w-full px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-4xl space-y-10">
        <SectionHeader
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
          align="center"
        />
        {status === 'success' ? (
          <div className="card px-6 py-12 text-center">
            <p className="label text-accent">{form.success}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card px-6 py-10 sm:px-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="caption">
                {form.name}
                <input
                  type="text"
                  name="name"
                  required
                  className="field mt-2 px-4 py-3"
                />
              </label>
              <label className="caption">
                {form.email}
                <input
                  type="email"
                  name="email"
                  required
                  className="field mt-2 px-4 py-3"
                />
              </label>
            </div>
            <label className="sr-only">
              Context
              <input type="text" name="context" tabIndex={-1} autoComplete="off" className="hidden" />
            </label>
            <label className="caption mt-6 block">
              {form.purposeLabel}
              <select
                name="purpose"
                required
                defaultValue=""
                className="field mt-2 px-4 py-3"
              >
                <option value="" disabled hidden>
                  —
                </option>
                {form.purposeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="caption mt-6 block">
              {form.message}
              <textarea
                name="message"
                rows={5}
                required
                className="field mt-2 px-4 py-3"
              />
            </label>
            {errorMessage && (
              <p className="mt-6 text-center text-sm text-[var(--accent-sand)]">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn-primary mt-8 w-full disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending...' : form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
