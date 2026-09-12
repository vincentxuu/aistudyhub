import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Dumbbell, ExternalLink, Target } from '@sketchyicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'
import { QuestionView } from '../components/exam/QuestionView.tsx'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import { QuestionSkeleton } from '../components/ui/skeleton.tsx'
import { useI18n } from '../i18n/index.ts'
import { getExamConfig } from '../lib/exam-registry.ts'
import type { Question } from '../lib/question-types.ts'
import { getDiagnosticSet } from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/diagnostic/$code')({ component: DiagnosticPage })

function DiagnosticPage() {
  const { code } = Route.useParams()
  const { t } = useI18n()
  const examConfig = getExamConfig(code)
  const examCode = code.toUpperCase()

  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setLoading(true)
    getDiagnosticSet(examCode).then((qs) => {
      setQuestions(qs)
      setLoading(false)
    })
  }, [examCode])
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [finished, setFinished] = useState(false)

  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const currentAnswered = currentQuestion ? !!answers[currentQuestion.id] : false
  const currentRevealed = currentQuestion ? revealed.has(currentQuestion.id) : false

  const selectOption = useCallback(
    (label: string) => {
      if (!currentQuestion || currentRevealed) return
      const isMulti = currentQuestion.type === 'multi'
      setAnswers((prev) => {
        const current = prev[currentQuestion.id] || []
        if (isMulti) {
          const next = current.includes(label) ? current.filter((l) => l !== label) : [...current, label]
          return { ...prev, [currentQuestion.id]: next }
        }
        return { ...prev, [currentQuestion.id]: [label] }
      })
    },
    [currentQuestion, currentRevealed],
  )

  const confirmAnswer = useCallback(() => {
    if (!currentQuestion || !currentAnswered || currentRevealed) return
    setRevealed((prev) => new Set(prev).add(currentQuestion.id))
  }, [currentQuestion, currentAnswered, currentRevealed])

  const goNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
    } else if (answeredCount === questions.length) {
      setFinished(true)
    }
  }, [currentIndex, questions.length, answeredCount])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (finished) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      const keyUpper = e.key.toUpperCase()
      if (['A', 'B', 'C', 'D', 'E', 'F'].includes(keyUpper) && currentQuestion) {
        const opt = currentQuestion.options.find((o) => o.label === keyUpper)
        if (opt) selectOption(opt.label)
      } else if (e.key >= '1' && e.key <= '9' && currentQuestion) {
        const idx = Number.parseInt(e.key, 10) - 1
        if (idx < currentQuestion.options.length) selectOption(currentQuestion.options[idx].label)
      } else if (e.key === 'Enter') {
        if (currentRevealed) goNext()
        else if (currentAnswered) confirmAnswer()
      } else if (e.key === 'ArrowRight' && currentRevealed) {
        goNext()
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex((i) => i - 1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentIndex, currentQuestion, currentAnswered, currentRevealed, finished, selectOption, confirmAnswer, goNext])

  // Auto-reveal for single-select
  useEffect(() => {
    if (!currentQuestion || currentRevealed) return
    if (currentQuestion.type !== 'multi' && currentAnswered) {
      const timer = setTimeout(() => {
        setRevealed((prev) => new Set(prev).add(currentQuestion.id))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentQuestion, currentAnswered, currentRevealed])

  if (loading) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-4 pt-16">
          <QuestionSkeleton />
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
          <p className="mb-4 text-[var(--sea-ink-soft)]">No questions found for {code}.</p>
          <Button asChild variant="secondary">
            <Link to="/">{t('practice.backToHome')}</Link>
          </Button>
        </main>
        <Footer />
      </>
    )
  }

  // === RESULTS VIEW ===
  if (finished) {
    const domainResults = new Map<string, { domain: string; domainNumber: number; correct: number; total: number }>()
    for (const q of questions) {
      const entry = domainResults.get(q.domain) || {
        domain: q.domain,
        domainNumber: q.domainNumber,
        correct: 0,
        total: 0,
      }
      entry.total++
      const selected = answers[q.id] || []
      const isCorrect =
        selected.length === q.correctAnswers.length && selected.every((a) => q.correctAnswers.includes(a))
      if (isCorrect) entry.correct++
      domainResults.set(q.domain, entry)
    }

    const sorted = [...domainResults.values()].sort((a, b) => a.domainNumber - b.domainNumber)
    const totalCorrect = sorted.reduce((sum, d) => sum + d.correct, 0)
    const totalQuestions = sorted.reduce((sum, d) => sum + d.total, 0)
    const overallPct = Math.round((totalCorrect / totalQuestions) * 100)

    const weakDomains = sorted.filter((d) => d.correct / d.total < 0.5)
    const strongDomains = sorted.filter((d) => d.correct / d.total >= 0.75)
    const weakDomainNames = weakDomains.map((d) => d.domain)

    return (
      <>
        <Header />
        <main className="mx-auto max-w-2xl px-4 pb-16 pt-8">
          <div className="rise-in">
            <div className="mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-[var(--sea-ink)]" />
              <h1 className="text-xl font-bold text-[var(--sea-ink)]">{t('diagnostic.complete')}</h1>
            </div>

            {/* Overall score */}
            <Card className="mb-6">
              <CardContent className="flex items-center justify-between py-5">
                <span className="text-sm font-medium text-[var(--sea-ink-soft)]">{t('diagnostic.overallScore')}</span>
                <span
                  className={cn(
                    'text-2xl font-bold tabular-nums',
                    overallPct >= 85
                      ? 'text-[var(--correct)]'
                      : overallPct >= 50
                        ? 'text-[var(--sea-ink)]'
                        : 'text-[var(--wrong)]',
                  )}
                >
                  {totalCorrect}/{totalQuestions} ({overallPct}%)
                </span>
              </CardContent>
            </Card>

            {/* Per-domain breakdown */}
            <Card className="mb-6">
              <CardContent className="space-y-4 py-5">
                {sorted.map((d) => {
                  const pct = Math.round((d.correct / d.total) * 100)
                  const isWeak = pct < 50
                  const isStrong = pct >= 75
                  return (
                    <div key={d.domain} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <Badge variant="secondary" className="font-mono text-xs">
                            D{d.domainNumber}
                          </Badge>
                          <span className="text-[var(--sea-ink)]">{d.domain}</span>
                        </span>
                        <span
                          className={cn(
                            'font-mono text-xs font-bold tabular-nums',
                            isWeak
                              ? 'text-[var(--wrong)]'
                              : isStrong
                                ? 'text-[var(--correct)]'
                                : 'text-[var(--sea-ink-soft)]',
                          )}
                        >
                          {d.correct}/{d.total} ({pct}%)
                        </span>
                      </div>
                      <Progress
                        value={d.correct}
                        max={d.total}
                        variant={isWeak ? 'danger' : isStrong ? 'success' : 'default'}
                      />
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Weak areas */}
            {weakDomains.length > 0 && (
              <Card className="mb-4 border-[var(--wrong-border)]">
                <CardContent className="py-5">
                  <h3 className="mb-3 text-sm font-bold text-[var(--wrong)]">{t('diagnostic.weakAreas')}</h3>
                  <ul className="space-y-1.5">
                    {weakDomains.map((d) => (
                      <li key={d.domain} className="flex items-center gap-2 text-sm text-[var(--sea-ink)]">
                        <Badge variant="destructive" className="font-mono text-xs">
                          D{d.domainNumber}
                        </Badge>
                        {d.domain}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Strong areas */}
            {strongDomains.length > 0 && (
              <Card className="mb-6 border-[var(--correct-border)]">
                <CardContent className="py-5">
                  <h3 className="mb-3 text-sm font-bold text-[var(--correct)]">{t('diagnostic.strongAreas')}</h3>
                  <ul className="space-y-1.5">
                    {strongDomains.map((d) => (
                      <li key={d.domain} className="flex items-center gap-2 text-sm text-[var(--sea-ink)]">
                        <Badge variant="success" className="font-mono text-xs">
                          D{d.domainNumber}
                        </Badge>
                        {d.domain}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Recommendation */}
            <p className="mb-6 text-center text-sm text-[var(--sea-ink-soft)]">{t('diagnostic.recommendation')}</p>

            {/* Actions */}
            <div className="flex flex-col gap-2.5 sm:flex-row">
              {weakDomains.length > 0 && (
                <Button asChild variant="primary" className="flex-1">
                  <Link to="/practice/$code" params={{ code }} search={{ domains: weakDomainNames.join(',') }}>
                    <Dumbbell className="h-4 w-4" />
                    {t('diagnostic.practiceWeak')}
                  </Link>
                </Button>
              )}
              <Button asChild variant="secondary" className="flex-1">
                <a
                  href={examConfig?.prepGuideUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  {t('diagnostic.readGuide')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                  {t('practice.backToHome')}
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // === QUESTION VIEW ===
  const selectedAnswers = answers[currentQuestion.id] || []

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-28 pt-6">
        {/* Progress header */}
        <div className="mb-2 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="h-3.5 w-3.5" />
              {t('practice.backToHome')}
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Badge variant="default" className="font-mono text-xs">
              {answeredCount}/{questions.length}
            </Badge>
            <span className="text-sm font-bold text-[var(--sea-ink)]">{t('diagnostic.title')}</span>
          </div>
        </div>
        <Progress value={currentIndex + 1} max={questions.length} className="mb-8" />

        {/* Question */}
        <QuestionView
          key={currentQuestion.id}
          question={currentQuestion}
          selectedAnswers={selectedAnswers}
          onSelectOption={selectOption}
          disabled={currentRevealed}
          showResult={currentRevealed}
          questionNumber={currentIndex + 1}
        />

        {/* Explanation after reveal */}
        {currentRevealed && currentQuestion.explanation && (
          <Card className="mt-4">
            <CardContent className="py-4">
              <h4 className="mb-2 text-xs font-bold text-[var(--sea-ink-soft)]">{t('practice.explanation')}</h4>
              <p className="text-sm leading-relaxed text-[var(--sea-ink)]">{currentQuestion.explanation}</p>
              {currentQuestion.trap && (
                <div className="mt-3 rounded-lg border border-[var(--flagged-border)] bg-[var(--flagged-bg)] px-3 py-2">
                  <p className="text-xs font-bold text-[var(--flagged)]">{t('practice.trap')}</p>
                  <p className="mt-1 text-xs text-[var(--sea-ink)]">{currentQuestion.trap}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            {t('exam.prev')}
          </Button>

          {currentAnswered && !currentRevealed && currentQuestion.type === 'multi' && (
            <Button variant="primary" onClick={confirmAnswer}>
              <Check className="h-4 w-4" />
              {t('exam.submit')}
            </Button>
          )}

          {currentRevealed && (
            <Button
              variant={
                currentIndex === questions.length - 1 && answeredCount === questions.length ? 'primary' : 'default'
              }
              onClick={goNext}
            >
              {currentIndex === questions.length - 1 && answeredCount === questions.length
                ? t('diagnostic.complete')
                : t('exam.next')}
              {currentIndex < questions.length - 1 && <ChevronRight className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
