import { ArrowLeft, Download, Settings, Trash2, Upload } from '@sketchyicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { useI18n } from '../i18n/index.ts'
import { clearAllUserData, downloadUserData, getUserStats, importUserData } from '../lib/user-data.ts'

export const Route = createFileRoute('/settings')({ component: SettingsPage })

function SettingsPage() {
  const { t, locale, setLocale } = useI18n()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [importMsg, setImportMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [stats, setStats] = useState(() => getUserStats())

  function handleExport() {
    downloadUserData()
  }

  function handleImportClick() {
    fileInputRef.current?.click()
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      try {
        const result = importUserData(reader.result as string)
        setImportMsg({ type: 'success', text: t('settings.importSuccess', { count: result.imported }) })
        setStats(getUserStats())
      } catch {
        setImportMsg({ type: 'error', text: t('settings.importError') })
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  function handleClear() {
    clearAllUserData()
    setShowClearConfirm(false)
    setStats(getUserStats())
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-4 pb-16">
        <div className="rise-in pt-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> {t('practice.backToHome')}
            </Link>
          </Button>
          <h1 className="mb-6 mt-4 flex items-center gap-2 text-2xl font-bold text-[var(--sea-ink)]">
            <Settings className="h-6 w-6" /> {t('settings.title')}
          </h1>
        </div>

        {/* Language */}
        <Card className="rise-in mb-4" style={{ animationDelay: '80ms' }}>
          <CardContent>
            <h2 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('settings.language')}</h2>
            <div className="flex gap-2">
              <Button
                variant={locale === 'zh-TW' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setLocale('zh-TW')}
              >
                繁體中文
              </Button>
              <Button variant={locale === 'en' ? 'primary' : 'secondary'} size="sm" onClick={() => setLocale('en')}>
                English
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="rise-in mb-4" style={{ animationDelay: '160ms' }}>
          <CardContent>
            <h2 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('settings.data')}</h2>

            {/* Stats */}
            <p className="mb-4 text-sm text-[var(--sea-ink-soft)]">
              {stats.examCount > 0 || stats.wrongCount > 0
                ? t('settings.stats', { exams: stats.examCount, wrong: stats.wrongCount })
                : t('settings.noData')}
              {stats.bestScore !== null && ` · ${t('settings.bestScore', { score: stats.bestScore })}`}
            </p>

            {/* Export / Import */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button variant="secondary" className="flex-1" onClick={handleExport}>
                <Download className="h-4 w-4" />
                {t('settings.export')}
              </Button>
              <Button variant="secondary" className="flex-1" onClick={handleImportClick}>
                <Upload className="h-4 w-4" />
                {t('settings.import')}
              </Button>
              <input ref={fileInputRef} type="file" accept=".json" className="hidden" onChange={handleFileChange} />
            </div>

            {/* Import message */}
            {importMsg && (
              <p
                className={`mt-3 text-sm ${importMsg.type === 'success' ? 'text-[var(--correct)]' : 'text-[var(--wrong)]'}`}
              >
                {importMsg.text}
              </p>
            )}

            {/* Clear all */}
            <div className="mt-4 border-t border-[var(--line)] pt-4">
              {showClearConfirm ? (
                <div className="flex items-center gap-2">
                  <p className="flex-1 text-sm text-[var(--wrong)]">{t('settings.clearConfirm')}</p>
                  <Button variant="destructive" size="sm" onClick={handleClear}>
                    {t('settings.clearAll')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setShowClearConfirm(false)}>
                    {t('exam.exit')}
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" className="text-[var(--wrong)]" onClick={() => setShowClearConfirm(true)}>
                  <Trash2 className="h-4 w-4" />
                  {t('settings.clearAll')}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
