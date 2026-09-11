import { Brain, Settings } from '@sketchyicons/react'
import { Link } from '@tanstack/react-router'
import { useI18n } from '../i18n/index.ts'
import ThemeToggle from './ThemeToggle.tsx'
import { Button } from './ui/button.tsx'

export default function Header() {
  const { locale, setLocale, t } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-3xl items-center gap-3 py-2.5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base font-extrabold tracking-tight text-[var(--sea-ink)] no-underline"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--palm)] shadow-sm">
            <Brain className="h-4 w-4 text-white" />
          </span>
          <span className="hidden sm:inline">{t('site.name')}</span>
        </Link>

        <div className="ml-auto flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(locale === 'zh-TW' ? 'en' : 'zh-TW')}
            aria-label={t('lang.toggle')}
            title={t('lang.toggle')}
          >
            <span className="text-xs font-bold">{locale === 'zh-TW' ? 'EN' : '中'}</span>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link to="/settings" aria-label={t('settings.title')} title={t('settings.title')}>
              <Settings className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
