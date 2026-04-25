import { useLocale } from '../../i18n/LocaleContext'

export const Footer = () => {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[rgba(6,60,107,0.72)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} José M. Salcido</p>
        <p>{t.footer.message}</p>
      </div>
    </footer>
  )
}
