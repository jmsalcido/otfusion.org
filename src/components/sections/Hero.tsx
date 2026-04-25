import { useLocale } from '../../i18n/LocaleContext'
import { scrollToSection } from '../../lib/scrollToSection'

const heroImage =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&sat=-100'

export const Hero = () => {
  const { t } = useLocale()

  return (
    <section
      id="home"
      className="px-4 pb-20 pt-32 sm:px-6 lg:px-0"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="space-y-6">
            <span className="rule-accent" aria-hidden="true" />
            <p className="label">{t.hero.eyebrow}</p>
            <h1>
              {t.hero.title}
            </h1>
            <p className="lead max-w-3xl">{t.hero.subtitle}</p>
            <p className="label text-accent">{t.hero.highlight}</p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
            >
              {t.hero.primaryCta}
            </button>
            <button
              onClick={() => scrollToSection('newsletter')}
              className="btn btn-secondary"
            >
              {t.hero.secondaryCta}
            </button>
          </div>

          <div className="mt-12 grid gap-6 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-3">
            {t.hero.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="font-display text-4xl font-semibold leading-none text-[var(--accent-sand)]">{metric.value}</p>
                <p className="caption uppercase tracking-[0.14em]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="grain-overlay relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[var(--shadow-deep)]">
          <img
            src={heroImage}
            alt="Calm workspace placeholder"
            className="image-treatment h-[420px] w-full object-cover object-center opacity-80 lg:h-[550px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,60,107,0.78),rgba(17,77,138,0.16),rgba(116,61,76,0.2))]" />
        </figure>
      </div>
    </section>
  )
}
