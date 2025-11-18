import { useLocale } from '../../i18n/LocaleContext'

const goHome = () => {
  window.location.href = '/'
}

const goNewsletter = () => {
  window.location.href = '/#newsletter'
}

export const NotFound = () => {
  const { t } = useLocale()
  const content = t.notFound
  const imageSrc =
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-100'

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f2] text-[#0f1c2e]">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 py-12 text-center">
        <figure className="mb-10 w-full overflow-hidden rounded-3xl border border-[#dcdad4] bg-[#eef1f4] shadow-[0_20px_80px_rgba(15,28,46,0.08)]">
          <img
            src={imageSrc}
            alt="Zen stones placeholder"
            className="h-64 w-full object-cover opacity-90 grayscale"
          />
        </figure>
        <span className="text-xs uppercase tracking-[0.4em] text-[#8b8f99]">{content.label}</span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">{content.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4a4f57]">{content.description}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={goHome}
            className="rounded-full border border-[#0b1f3a] bg-[#0b1f3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#122c50]"
          >
            {content.ctaHome}
          </button>
          <button
            onClick={goNewsletter}
            className="rounded-full border border-[#cfd2d5] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0b1f3a] transition hover:border-[#0b1f3a]"
          >
            {content.ctaNewsletter}
          </button>
        </div>
      </div>
    </div>
  )
}
