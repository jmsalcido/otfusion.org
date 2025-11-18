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
              className="flex h-full flex-col justify-between rounded-2xl border border-[#e1e0db] bg-white/90 p-6 shadow-[inset_0_0_0_1px_rgba(15,28,46,0.05)]"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[#0b1f3a]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#4a4f57]">{item.body}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-[#4a4f57]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="h-1 w-8 bg-[#0b1f3a]/40" aria-hidden="true" />
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
