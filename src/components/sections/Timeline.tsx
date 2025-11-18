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
        <div className="space-y-10 border-l border-[#dcdad4] pl-8">
          {content.entries.map((entry) => (
            <article key={entry.period} className="relative space-y-2">
              <span className="absolute -left-10 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[#cfd2d5] bg-white text-xs font-semibold text-[#0b1f3a]">
                ●
              </span>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7a7f88]">{entry.period}</p>
              <h3 className="text-xl font-semibold text-[#0b1f3a]">
                {entry.role} · <span className="text-[#4a4f57]">{entry.org}</span>
              </h3>
              <p className="text-sm leading-relaxed text-[#4a4f57]">{entry.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
