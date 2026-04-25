import { useNavigate } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { rememberScrollSection } from '../../lib/scrollToSection'

export const NotFound = () => {
  const { t } = useLocale()
  const navigate = useNavigate()
  const content = t.notFound
  const imageSrc =
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-100'

  const goHome = () => {
    navigate('/')
  }

  const goNewsletter = () => {
    rememberScrollSection('newsletter')
    navigate('/')
  }

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 py-12 text-center">
        <figure className="grain-overlay mb-10 w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[var(--shadow-deep)]">
          <img
            src={imageSrc}
            alt="Zen stones placeholder"
            className="image-treatment h-64 w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,60,107,0.72),rgba(17,77,138,0.12))]" />
        </figure>
        <span className="rule-accent" aria-hidden="true" />
        <span className="label">{content.label}</span>
        <h1 className="mt-6">{content.title}</h1>
        <p className="lead mt-4 max-w-2xl">{content.description}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={goHome}
            className="btn btn-primary"
          >
            {content.ctaHome}
          </button>
          <button
            onClick={goNewsletter}
            className="btn btn-secondary"
          >
            {content.ctaNewsletter}
          </button>
        </div>
      </div>
    </div>
  )
}
