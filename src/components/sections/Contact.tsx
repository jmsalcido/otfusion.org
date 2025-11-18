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
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-4xl space-y-10">
        <SectionHeader
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
          align="center"
        />
        {status === 'success' ? (
          <div className="rounded-3xl border border-[#9fd5c2] bg-[#e8f6f1] px-6 py-12 text-center text-[#0f3d2f]">
            <p className="text-sm uppercase tracking-[0.3em]">{form.success}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#e1e0db] bg-white px-6 py-10 shadow-sm sm:px-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm text-[#4a4f57]">
                {form.name}
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-[#dcdad4] px-4 py-3 text-[#0f1c2e] focus:border-[#0b1f3a] focus:outline-none"
                />
              </label>
              <label className="text-sm text-[#4a4f57]">
                {form.email}
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-[#dcdad4] px-4 py-3 text-[#0f1c2e] focus:border-[#0b1f3a] focus:outline-none"
                />
              </label>
            </div>
            <label className="sr-only">
              Context
              <input type="text" name="context" tabIndex={-1} autoComplete="off" className="hidden" />
            </label>
            <label className="mt-6 block text-sm text-[#4a4f57]">
              {form.purposeLabel}
              <select
                name="purpose"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-[#dcdad4] px-4 py-3 text-[#0f1c2e] focus:border-[#0b1f3a] focus:outline-none"
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
            <label className="mt-6 block text-sm text-[#4a4f57]">
              {form.message}
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-2xl border border-[#dcdad4] px-4 py-3 text-[#0f1c2e] focus:border-[#0b1f3a] focus:outline-none"
              />
            </label>
            {errorMessage && (
              <p className="mt-6 text-center text-sm text-red-500">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-8 w-full rounded-full border border-[#0b1f3a] bg-[#0b1f3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#122c50] disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending...' : form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
