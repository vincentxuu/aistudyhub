import { createContext, useContext } from 'react'
import en from './en.ts'
import zhTW from './zh-TW.ts'

export type Locale = 'zh-TW' | 'en'
export type TranslationKey = keyof typeof zhTW

const translations: Record<Locale, Record<TranslationKey, string>> = {
  'zh-TW': zhTW,
  en,
}

export const I18nContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string
}>({
  locale: 'zh-TW',
  setLocale: () => {},
  t: (key) => key,
})

export function getTranslator(locale: Locale) {
  return function t(key: TranslationKey, vars?: Record<string, string | number>): string {
    let str = translations[locale]?.[key] || translations['zh-TW'][key] || key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{${k}}`, String(v))
      }
    }
    return str
  }
}

export function useI18n() {
  return useContext(I18nContext)
}

export function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'zh-TW'
  return (localStorage.getItem('locale') as Locale) || 'zh-TW'
}

export function storeLocale(locale: Locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale)
  }
}
