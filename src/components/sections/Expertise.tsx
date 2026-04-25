import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeader } from '../common/SectionHeader'

export const Expertise = () => {
  const { t } = useLocale()
  const content = t.expertise

  return (
    <section id="expertise" className="px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeader label={content.label} title={content.title} description={content.description} />
        <div className="grid gap-6 md:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="card flex h-full flex-col justify-between p-6 transition-[border-color,box-shadow] duration-200 hover:border-[var(--border-default)] hover:shadow-[var(--shadow-deep)]"
            >
              <div className="space-y-3">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="caption leading-relaxed">{item.body}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="h-0.5 w-8 bg-[var(--accent-orange)]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
