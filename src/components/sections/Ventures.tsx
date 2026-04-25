import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeader } from '../common/SectionHeader'

export const Ventures = () => {
  const { t } = useLocale()
  const content = t.ventures

  return (
    <section id="ventures" className="border-y border-[var(--border-subtle)] bg-[rgba(17,77,138,0.32)] px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {content.items.map((venture) => (
            <article
              key={venture.name}
              className="card flex h-full flex-col justify-between p-6 transition-[border-color,box-shadow] duration-200 hover:border-[var(--border-default)] hover:shadow-[var(--shadow-deep)]"
            >
              {venture.imageUrl && (
                <div className="grain-overlay mb-6 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-deep)]">
                  <img
                    src={venture.imageUrl}
                    alt={venture.name}
                    className="image-treatment h-48 w-full object-cover opacity-[0.76]"
                  />
                </div>
              )}
              <div className="space-y-3">
                <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
                  <span>{venture.role}</span>
                  {venture.link && (
                    <a
                      href={venture.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold"
                    >
                      {venture.link.label}
                    </a>
                  )}
                </div>
                <h3 className="text-2xl">{venture.name}</h3>
                <p className="caption leading-relaxed">{venture.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {venture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border-subtle)] bg-[rgba(6,60,107,0.2)] px-3 py-1 text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
