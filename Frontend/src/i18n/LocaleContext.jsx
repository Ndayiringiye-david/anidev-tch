import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [language, setLanguage] = useState(() => (
    window.localStorage.getItem('anidev-language') === 'fr' ? 'fr' : 'en'
  ))

  useEffect(() => {
    window.localStorage.setItem('anidev-language', language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (text) => language === 'fr' ? translations.fr[text] ?? text : text,
  }), [language])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const locale = useContext(LocaleContext)
  if (!locale) throw new Error('useLocale must be used within LocaleProvider')
  return locale
}
