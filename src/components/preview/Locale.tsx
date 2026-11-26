import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { portuguese } from './portuguese'
export type Locale = 'en' | 'pt'
type Context = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: string, fallback: string) => string }
const LocaleContext = createContext<Context | null>(null)
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  const translations: Record<string, string> = portuguese
  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t: (key, fallback) => (locale === 'pt' ? translations[key] || fallback : fallback) }}
    >
      {children}
    </LocaleContext.Provider>
  )
}
export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('Missing LocaleProvider')
  return context
}
