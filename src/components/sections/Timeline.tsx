import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeader } from '../common/SectionHeader'

export const Timeline = () => {
  const { t } = useLocale()
  const content = t.timeline

  return (
    <section id="timeline" className="px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
          align="center"
        />
        <div className="space-y-10 border-l border-[var(--border-subtle)] pl-8">
          {content.entries.map((entry) => (
            <article key={entry.period} className="relative space-y-2">
              <span className="absolute -left-10 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs font-semibold text-[var(--accent-sand)]">
                ●
              </span>
              <p className="label">{entry.period}</p>
              <h3 className="text-2xl">
                {entry.role} · <span className="text-[var(--accent-sand)]">{entry.org}</span>
              </h3>
              <p className="caption max-w-3xl leading-relaxed">{entry.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
