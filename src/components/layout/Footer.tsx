import { useLocale } from '../../i18n/LocaleContext'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[rgba(6,60,107,0.72)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} José M. Salcido</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <p>{t.footer.message}</p>
          <Link to="/privacy-policy" className="transition-colors hover:text-[var(--text-primary)]">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
