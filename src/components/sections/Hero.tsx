import { useLocale } from '../../i18n/LocaleContext'
import { scrollToSection } from '../../lib/scrollToSection'

const heroImage =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&sat=-100'

export const Hero = () => {
  const { t } = useLocale()

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-[#f9f9f8] via-white to-[#e8ebf1] px-4 pb-20 pt-32 sm:px-6 lg:px-0"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#6b6f78]">{t.hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#0b1f3a] md:text-5xl">
              {t.hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-[#4a4f57] md:text-xl">{t.hero.subtitle}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-[#6b6f78]">{t.hero.highlight}</p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full border border-[#0b1f3a] bg-[#0b1f3a] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#122c50]"
            >
              {t.hero.primaryCta}
            </button>
            <button
              onClick={() => scrollToSection('newsletter')}
              className="rounded-full border border-[#cfd2d5] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0b1f3a] transition hover:border-[#0b1f3a]"
            >
              {t.hero.secondaryCta}
            </button>
          </div>

          <div className="mt-12 grid gap-6 border-t border-[#d8d7d2] pt-8 sm:grid-cols-3">
            {t.hero.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-4xl font-semibold text-[#0b1f3a]">{metric.value}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-[#6b6f78]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="relative overflow-hidden rounded-3xl border border-[#dad9d3] bg-[#edf0f4] shadow-[0_20px_60px_rgba(15,28,46,0.08)]">
          <img
            src={heroImage}
            alt="Calm workspace placeholder"
            className="h-full w-full object-cover object-center opacity-95 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/50 via-transparent" />
        </figure>
      </div>
    </section>
  )
}
