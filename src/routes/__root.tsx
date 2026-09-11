import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { useCallback, useState } from 'react'
import { getStoredLocale, getTranslator, I18nContext, type Locale, storeLocale } from '../i18n/index.ts'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'AI Exam Prep' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[var(--selected-bg)]">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  const [locale, setLocaleState] = useState<Locale>(() => getStoredLocale())
  const t = getTranslator(locale)

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    storeLocale(l)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'zh-TW' ? 'zh-TW' : 'en'
    }
  }, [])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <Outlet />
    </I18nContext.Provider>
  )
}
