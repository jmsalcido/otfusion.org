import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeader } from '../common/SectionHeader'

export const Ventures = () => {
  const { t } = useLocale()
  const content = t.ventures

  return (
    <section id="ventures" className="bg-[#ededeb] px-4 py-20 sm:px-6 lg:px-0">
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
              className="flex h-full flex-col justify-between rounded-2xl border border-[#dcdad4] bg-white p-6"
            >
              {venture.imageUrl && (
                <div className="mb-6 overflow-hidden rounded-2xl border border-[#e8e6df] bg-[#f0f1f5]">
                  <img
                    src={venture.imageUrl}
                    alt={venture.name}
                    className="h-48 w-full object-cover opacity-90 grayscale"
                  />
                </div>
              )}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-[#7a7f88]">
                  <span>{venture.role}</span>
                  {venture.link && (
                    <a
                      href={venture.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-[#4a4f57] hover:text-[#0b1f3a]"
                    >
                      {venture.link.label}
                    </a>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-[#0b1f3a]">{venture.name}</h3>
                <p className="text-sm leading-relaxed text-[#4a4f57]">{venture.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[#7a7f88]">
                {venture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#dcdad4] px-3 py-1 text-[#4a4f57]"
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
