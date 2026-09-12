import { ArrowLeft, BookOpen, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Home } from '@sketchyicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import type { TranslationKey } from '../i18n/index.ts'
import { useI18n } from '../i18n/index.ts'
import type { Question } from '../lib/question-types.ts'
import { getDomainCounts, getDomains, getFilteredQuestions } from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/study/$code')({ component: StudyPage })

const DIFFICULTY_KEYS: Record<number, TranslationKey> = {
  1: 'difficulty.1',
  2: 'difficulty.2',
  3: 'difficulty.3',
}

function AccordionSection({
  label,
  children,
  open,
  onToggle,
  variant = 'default',
}: {
  label: string
  children: React.ReactNode
  open: boolean
  onToggle: () => void
  variant?: 'default' | 'answer' | 'trap' | 'mnemonic'
}) {
  const borderColor =
    variant === 'answer'
      ? 'border-[var(--correct-border)]'
      : variant === 'trap'
        ? 'border-[var(--flagged-border)]'
        : 'border-[var(--line)]'

  return (
    <div className={cn('overflow-hidden rounded-lg border', borderColor)}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-[var(--bg-subtle)] px-4 py-3 text-left text-sm font-semibold text-[var(--sea-ink)] transition-colors hover:opacity-80"
      >
        <span>{label}</span>
        {open ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
      </button>
      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg-base)] px-4 py-3 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
          {children}
        </div>
      )}
    </div>
  )
}

function StudyPage() {
  const { code } = Route.useParams()
  const { t } = useI18n()
  const examCode = code.toUpperCase()
  const domains = getDomains(examCode)
  const domainCounts = getDomainCounts(examCode)

  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [richOnly, setRichOnly] = useState(true)
  const [questionCount, setQuestionCount] = useState<number | 'all'>(25)
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  function startStudy() {
    let qs = getFilteredQuestions(examCode, {
      domains: selectedDomains.length > 0 ? selectedDomains : undefined,
      count: questionCount === 'all' ? undefined : questionCount,
    })
    if (richOnly) {
      qs = qs.filter((q) => q.hint || q.explanation)
    }
    setQuestions(qs)
    setStarted(true)
    setCurrentIndex(0)
    setOpenSections(new Set())
  }

  const currentQuestion = questions[currentIndex]

  function toggleSection(key: string) {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  function goNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setOpenSections(new Set())
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1)
      setOpenSections(new Set())
    }
  }

  useEffect(() => {
    if (!started || !currentQuestion) return
    function handleKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === '1') toggleSection('hint')
      else if (e.key === '2') toggleSection('answer')
      else if (e.key === '3') toggleSection('explanation')
      else if (e.key === '4') toggleSection('trap')
      else if (e.key === '5') toggleSection('mnemonic')
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  if (!started) {
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
              <BookOpen className="h-6 w-6" /> {t('study.title')}
            </h1>
          </div>

          <Card className="rise-in" style={{ animationDelay: '80ms' }}>
            <CardContent className="space-y-6 pt-6">
              <p className="text-sm text-[var(--sea-ink-soft)]">{t('study.subtitle')}</p>

              <div>
                <h3 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('practice.selectDomains')}</h3>
                <div className="space-y-2">
                  {domains.map((domain) => (
                    <button
                      key={domain}
                      type="button"
                      onClick={() => {
                        setSelectedDomains((prev) =>
                          prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain],
                        )
                      }}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-lg border-[1.5px] px-4 py-3 text-left text-sm transition-all duration-200',
                        selectedDomains.includes(domain)
                          ? 'border-[var(--selected-border)] bg-[var(--selected-bg)]'
                          : 'border-[var(--line)] bg-transparent hover:border-[var(--hover-border)]',
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-colors',
                          selectedDomains.includes(domain)
                            ? 'border-[var(--lagoon)] bg-[var(--lagoon)] text-[var(--palm)]'
                            : 'border-[var(--line)]',
                        )}
                      >
                        {selectedDomains.includes(domain) && '✓'}
                      </span>
                      <span className="flex-1 text-[var(--sea-ink)]">{domain}</span>
                      <Badge variant="default" className="font-mono text-xs">
                        {domainCounts[domain] || 0}
                      </Badge>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDomains([])}
                  className="mt-2 text-xs text-[var(--sea-ink-soft)] hover:underline"
                >
                  {t('practice.all')}
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setRichOnly((v) => !v)}
                  className="flex items-center gap-3 text-sm text-[var(--sea-ink)]"
                >
                  <span
                    className={cn(
                      'flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-colors',
                      richOnly
                        ? 'border-[var(--lagoon)] bg-[var(--lagoon)] text-[var(--palm)]'
                        : 'border-[var(--line)]',
                    )}
                  >
                    {richOnly && '✓'}
                  </span>
                  {t('study.richOnly')}
                </button>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('practice.questionCount')}</h3>
                <div className="flex gap-2">
                  {([10, 25, 'all'] as const).map((count) => (
                    <button
                      key={String(count)}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={cn(
                        'rounded-lg border-[1.5px] px-4 py-2 text-sm font-semibold transition-all duration-200',
                        questionCount === count
                          ? 'border-[var(--selected-border)] bg-[var(--selected-bg)] text-[var(--sea-ink)]'
                          : 'border-[var(--line)] text-[var(--sea-ink-soft)] hover:border-[var(--hover-border)]',
                      )}
                    >
                      {count === 'all' ? t('practice.all') : count}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="primary" className="w-full" onClick={startStudy}>
                <BookOpen className="h-4 w-4" /> {t('study.start')}
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </>
    )
  }

  if (questions.length === 0) {
    return (
      <>
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-4">
          <p className="mb-4 text-[var(--sea-ink-soft)]">{t('common.error')}</p>
          <Button variant="secondary" asChild>
            <Link to="/">
              <Home className="h-4 w-4" /> {t('practice.backToHome')}
            </Link>
          </Button>
        </main>
        <Footer />
      </>
    )
  }

  const optionByLabel = new Map(currentQuestion.options.map((option) => [option.label, option]))

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-2.5">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> {t('practice.backToHome')}
            </Link>
          </Button>
          <span className="ml-auto text-sm font-bold text-[var(--sea-ink)]">
            Q {currentIndex + 1}/{questions.length}
          </span>
        </div>
        <div className="mx-auto max-w-3xl px-4 pb-1">
          <Progress value={currentIndex + 1} max={questions.length} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-6">
        <div key={currentQuestion.id} className="rise-in space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default" className="font-mono text-xs">
              D{currentQuestion.domainNumber}
            </Badge>
            <span className="text-xs text-[var(--sea-ink-soft)]">{currentQuestion.domain}</span>
            <Badge variant="warning" className="ml-auto">
              {'★'.repeat(currentQuestion.difficulty)} {t(DIFFICULTY_KEYS[currentQuestion.difficulty])}
            </Badge>
          </div>

          {currentQuestion.keyTerms.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-[var(--sea-ink-soft)]">{t('study.keyTerms')}</span>
              {currentQuestion.keyTerms.map((term) => (
                <Badge key={term} variant="outline" className="text-xs">
                  {term}
                </Badge>
              ))}
            </div>
          )}

          <p className="text-[clamp(0.95rem,2.2vw,1.15rem)] font-medium leading-[1.7] text-[var(--sea-ink)]">
            {currentQuestion.stem}
          </p>

          <div className="space-y-2">
            {currentQuestion.options.map((opt) => (
              <div key={opt.label} className="flex items-start gap-3 rounded-lg border border-[var(--line)] px-4 py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-bold text-[var(--sea-ink-soft)] border border-[var(--line)]">
                  {opt.label}
                </span>
                <span className="text-sm leading-relaxed text-[var(--sea-ink)]">{opt.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            {currentQuestion.hint && (
              <AccordionSection
                label={t('study.showHint')}
                open={openSections.has('hint')}
                onToggle={() => toggleSection('hint')}
              >
                {currentQuestion.hint}
              </AccordionSection>
            )}

            <AccordionSection
              label={t('study.showAnswer')}
              open={openSections.has('answer')}
              onToggle={() => toggleSection('answer')}
              variant="answer"
            >
              {currentQuestion.type === 'ordering' ? (
                <>
                  <p className="font-bold text-[var(--correct)]">
                    {t('study.answer')}：{currentQuestion.correctAnswers.join(' → ')}
                  </p>
                  <div className="mt-2 space-y-2">
                    {currentQuestion.correctAnswers.map((label, index) => {
                      const option = optionByLabel.get(label)
                      if (!option) return null
                      return (
                        <div key={label} className="flex items-start gap-2 text-[var(--sea-ink)]">
                          <span className="font-bold text-[var(--correct)]">{index + 1}.</span>
                          <span>{option.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </>
              ) : (
                <>
                  <p className="font-bold text-[var(--correct)]">
                    {t('study.answer')}：{currentQuestion.correctAnswers.join(', ')}
                  </p>
                  {currentQuestion.options
                    .filter((o) => currentQuestion.correctAnswers.includes(o.label))
                    .map((o) => (
                      <p key={o.label} className="mt-1 text-[var(--sea-ink)]">
                        {o.label}. {o.text}
                      </p>
                    ))}
                </>
              )}
            </AccordionSection>

            {currentQuestion.explanation && (
              <AccordionSection
                label={t('study.showExplanation')}
                open={openSections.has('explanation')}
                onToggle={() => toggleSection('explanation')}
              >
                <p>{currentQuestion.explanation}</p>
                {currentQuestion.whyOthersWrong && (
                  <div className="mt-3 border-t border-[var(--line)] pt-3">
                    <p className="mb-1 text-xs font-bold text-[var(--sea-ink)]">{t('study.showWhyWrong')}</p>
                    <p>{currentQuestion.whyOthersWrong}</p>
                  </div>
                )}
              </AccordionSection>
            )}

            {currentQuestion.trap && (
              <AccordionSection
                label={t('study.showTrap')}
                open={openSections.has('trap')}
                onToggle={() => toggleSection('trap')}
                variant="trap"
              >
                {currentQuestion.trap}
              </AccordionSection>
            )}

            {currentQuestion.mnemonic && (
              <AccordionSection
                label={t('study.showMnemonic')}
                open={openSections.has('mnemonic')}
                onToggle={() => toggleSection('mnemonic')}
                variant="mnemonic"
              >
                {currentQuestion.mnemonic}
              </AccordionSection>
            )}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between py-3">
          <Button variant="ghost" onClick={goPrev} disabled={currentIndex === 0}>
            <ChevronLeft className="h-4 w-4" />
            {t('study.prev')}
          </Button>

          <span className="text-xs text-[var(--sea-ink-soft)]">
            {currentIndex + 1} / {questions.length}
          </span>

          <Button
            variant={currentIndex === questions.length - 1 ? 'primary' : 'default'}
            onClick={currentIndex === questions.length - 1 ? () => setStarted(false) : goNext}
          >
            {currentIndex === questions.length - 1 ? t('practice.backToHome') : t('study.next')}
            {currentIndex < questions.length - 1 && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
