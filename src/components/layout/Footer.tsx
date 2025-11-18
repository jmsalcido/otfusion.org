import { useLocale } from '../../i18n/LocaleContext'

export const Footer = () => {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#d8d7d2] bg-[#f8f8f5]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-[#6b7280] sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} José M. Salcido</p>
        <p>{t.footer.message}</p>
      </div>
    </footer>
  )
}
