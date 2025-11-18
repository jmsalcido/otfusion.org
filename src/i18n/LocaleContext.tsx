/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { translations, type Locale, type Translation } from './translations'

interface LocaleContextValue {
  locale: Locale
  setLocale: (value: Locale) => void
  t: Translation
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en')

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      setLocale,
      t: translations[locale]
    }
  }, [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
