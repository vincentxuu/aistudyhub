import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CircleX,
  Clock,
  Dumbbell,
  Eye,
  Home,
  Lightbulb,
  Play,
  RotateCcw,
} from '@sketchyicons/react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { QuestionView } from '../components/exam/QuestionView.tsx'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import type { TranslationKey } from '../i18n/index.ts'
import { useI18n } from '../i18n/index.ts'
import { getKnowledgeChains } from '../lib/knowledge-chains.ts'
import type { Question } from '../lib/question-types.ts'
import {
  getDomainCounts,
  getDomains,
  getFilteredQuestions,
  getWrongAnswers,
  isAnswerCorrect,
  saveWrongAnswer,
} from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/practice/$code')({ component: PracticePage })

const DIFFICULTY_KEYS: Record<number, TranslationKey> = {
  1: 'difficulty.1',
  2: 'difficulty.2',
  3: 'difficulty.3',
}

function PracticePage() {
  const { code } = Route.useParams()
  const navigate = useNavigate()
  const { t } = useI18n()
  const examCode = code.toUpperCase()
  const domains = getDomains(examCode)
  const domainCounts = getDomainCounts(examCode)

  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<number[]>([])
  const [questionCount, setQuestionCount] = useState<number | 'all'>(10)
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [showHint, setShowHint] = useState<Set<string>>(new Set())
  const [finished, setFinished] = useState(false)

  const correctCount = questions.filter(
    (q) => revealed.has(q.id) && answers[q.id] && isAnswerCorrect(q, answers[q.id]),
  ).length
  const answeredCount = questions.filter((q) => revealed.has(q.id)).length

  function startPractice() {
    const qs = getFilteredQuestions(examCode, {
      domains: selectedDomains.length > 0 ? selectedDomains : undefined,
      difficulties: selectedDifficulties.length > 0 ? selectedDifficulties : undefined,
      count: questionCount === 'all' ? undefined : questionCount,
    })
    setQuestions(qs)
    setStarted(true)
    setCurrentIndex(0)
    setAnswers({})
    setRevealed(new Set())
    setShowHint(new Set())
    setFinished(false)
  }

  const currentQuestion = questions[currentIndex]
  const isRevealed = currentQuestion ? revealed.has(currentQuestion.id) : false
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] || [] : []
  const isMulti = currentQuestion?.type === 'multi'
  const isOrdering = currentQuestion?.type === 'ordering'

  function selectOption(label: string) {
    if (!currentQuestion || isRevealed || isOrdering) return
    setAnswers((prev) => {
      const current = prev[currentQuestion.id] || []
      if (isMulti) {
        const next = current.includes(label) ? current.filter((l) => l !== label) : [...current, label]
        return { ...prev, [currentQuestion.id]: next }
      }
      return { ...prev, [currentQuestion.id]: [label] }
    })
    if (!isMulti) {
      setTimeout(() => {
        setRevealed((prev) => new Set(prev).add(currentQuestion.id))
      }, 300)
    }
  }

  function setOrder(order: string[]) {
    if (!currentQuestion || isRevealed || currentQuestion.type !== 'ordering') return
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: order }))
  }

  function revealAnswer() {
    if (!currentQuestion) return
    setRevealed((prev) => new Set(prev).add(currentQuestion.id))
  }

  useEffect(() => {
    for (const q of questions) {
      if (!revealed.has(q.id)) continue
      const ans = answers[q.id] || []
      if (!isAnswerCorrect(q, ans) && ans.length > 0) {
        saveWrongAnswer({
          questionId: q.id,
          examCode,
          selectedAnswers: ans,
          correctAnswers: q.correctAnswers,
          reflection: null,
          attemptedAt: new Date().toISOString(),
          reviewedAt: null,
        })
      }
    }
  }, [revealed, answers, questions, examCode])

  function nextQuestion() {
    if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1)
    else setFinished(true)
  }

  useEffect(() => {
    if (!started || !currentQuestion) return
    function handleKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
      const keyUpper = e.key.toUpperCase()
      if (!isRevealed && !isOrdering && ['A', 'B', 'C', 'D', 'E', 'F'].includes(keyUpper)) {
        const opt = currentQuestion.options.find((o) => o.label === keyUpper)
        if (opt) selectOption(opt.label)
      } else if (!isRevealed && !isOrdering && e.key >= '1' && e.key <= '9') {
        const idx = Number.parseInt(e.key, 10) - 1
        if (idx < currentQuestion.options.length) selectOption(currentQuestion.options[idx].label)
      } else if (e.key === 'Enter') {
        if (!isRevealed && currentAnswer.length > 0) revealAnswer()
        else if (isRevealed) nextQuestion()
      } else if (e.key === 'ArrowRight' && isRevealed) nextQuestion()
      else if (e.key === 'ArrowLeft' && currentIndex > 0) setCurrentIndex((i) => i - 1)
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
              <Link to="/" className="no-underline">
                <ArrowLeft className="h-4 w-4" /> {t('practice.backToHome')}
              </Link>
            </Button>
            <h1 className="mb-6 mt-4 flex items-center gap-2 text-2xl font-bold text-[var(--sea-ink)]">
              <Dumbbell className="h-6 w-6" /> {t('practice.title')}
            </h1>
          </div>

          <Card className="rise-in" style={{ animationDelay: '80ms' }}>
            <CardContent>
              <button
                type="button"
                onClick={() => navigate({ to: '/exam/$code', params: { code } })}
                className="flex w-full items-center gap-4 rounded-xl border-[1.5px] border-[var(--selected-border)] bg-[var(--selected-bg)] px-5 py-4 text-left transition-all duration-200 hover:bg-[var(--hover-bg)] hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--lagoon)] shadow-sm">
                  <Play className="h-5 w-5 text-[var(--palm)]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold text-[var(--sea-ink)]">{t('practice.simulateExam')}</p>
                  <p className="mt-0.5 flex items-center gap-2 text-xs text-[var(--sea-ink-soft)]">
                    <Clock className="h-3 w-3" /> {t('practice.simulateExamDesc')}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-[var(--sea-ink-soft)]" />
              </button>
            </CardContent>
          </Card>

          <div className="rise-in flex items-center gap-3 px-2 py-2" style={{ animationDelay: '120ms' }}>
            <div className="h-px flex-1 bg-[var(--line)]" />
            <span className="text-xs font-semibold text-[var(--sea-ink-soft)]">{t('practice.or')}</span>
            <div className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <h2 className="rise-in mb-2 text-sm font-bold text-[var(--sea-ink-soft)]" style={{ animationDelay: '140ms' }}>
            {t('practice.customPractice')}
          </h2>

          <Card className="rise-in" style={{ animationDelay: '160ms' }}>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('practice.selectDomains')}</h3>
                <div className="space-y-1">
                  {domains.map((d) => {
                    const checked = selectedDomains.includes(d)
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() =>
                          setSelectedDomains((prev) => (checked ? prev.filter((x) => x !== d) : [...prev, d]))
                        }
                        className={cn(
                          'flex w-full items-center gap-3 rounded-xl border-[1.5px] px-4 py-3 text-left transition-all duration-200',
                          checked
                            ? 'border-[var(--selected-border)] bg-[var(--selected-bg)]'
                            : 'border-[var(--line)] bg-transparent hover:border-[var(--hover-border)]',
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors',
                            checked
                              ? 'border-[var(--lagoon)] bg-[var(--lagoon)]'
                              : 'border-[var(--line)] bg-transparent',
                          )}
                        >
                          {checked && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[var(--palm)]">
                              <path
                                d="M2.5 6L5 8.5L9.5 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="flex-1 text-sm text-[var(--sea-ink)]">{d}</span>
                        <Badge>{domainCounts[d]}</Badge>
                      </button>
                    )
                  })}
                </div>
                {selectedDomains.length === 0 && (
                  <p className="mt-2 text-xs text-[var(--sea-ink-soft)]">{t('practice.all')}</p>
                )}
              </div>

              <div>
                <h3 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('practice.selectDifficulty')}</h3>
                <div className="flex gap-2">
                  {([1, 2, 3] as const).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() =>
                        setSelectedDifficulties((prev) =>
                          prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
                        )
                      }
                      className={cn(
                        'rounded-xl border-[1.5px] px-4 py-2.5 text-sm font-semibold transition-all duration-200',
                        selectedDifficulties.includes(d)
                          ? 'border-[var(--selected-border)] bg-[var(--selected-bg)] text-[var(--sea-ink)]'
                          : 'border-[var(--line)] text-[var(--sea-ink-soft)] hover:border-[var(--hover-border)]',
                      )}
                    >
                      {'★'.repeat(d)} {t(DIFFICULTY_KEYS[d])}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('practice.questionCount')}</h3>
                <div className="flex gap-2">
                  {[10, 25, 'all' as const].map((c) => (
                    <button
                      key={String(c)}
                      type="button"
                      onClick={() => setQuestionCount(c)}
                      className={cn(
                        'rounded-xl border-[1.5px] px-4 py-2.5 text-sm font-semibold transition-all duration-200',
                        questionCount === c
                          ? 'border-[var(--selected-border)] bg-[var(--selected-bg)] text-[var(--sea-ink)]'
                          : 'border-[var(--line)] text-[var(--sea-ink-soft)] hover:border-[var(--hover-border)]',
                      )}
                    >
                      {c === 'all' ? t('practice.all') : c}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="primary" size="lg" className="w-full" onClick={startPractice}>
                <Dumbbell className="h-4 w-4" /> {t('practice.start')}
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </>
    )
  }

  if (finished) {
    const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0
    const wrongInSession = questions.filter((q) => !isAnswerCorrect(q, answers[q.id] || [])).length
    const totalWrongInJournal = getWrongAnswers(examCode).length

    return (
      <>
        <Header />
        <main className="mx-auto max-w-2xl px-4 pb-16">
          <section className="rise-in pt-10 text-center">
            <Badge variant="brand" className="mb-4">
              {t('practice.finish')}
            </Badge>
            <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full border-4 border-[var(--lagoon)]">
              <span className="text-3xl font-black tabular-nums text-[var(--sea-ink)]">{pct}%</span>
            </div>
            <p className="text-sm text-[var(--sea-ink-soft)]">
              {t('practice.score', { correct: correctCount, total: answeredCount })}
            </p>
            {wrongInSession > 0 && (
              <p className="mt-2 text-xs text-[var(--sea-ink-soft)]">
                {t('wrongAnswers.addedToJournal', { count: wrongInSession })}
              </p>
            )}
          </section>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Button onClick={() => setStarted(false)}>
              <RotateCcw className="h-4 w-4" /> {t('practice.tryAgain')}
            </Button>
            {totalWrongInJournal > 0 && (
              <Button asChild variant="secondary">
                <Link to="/wrong-answers/$code" params={{ code }} className="no-underline">
                  <BookOpen className="h-4 w-4" /> {t('wrongAnswers.viewJournal')} ({totalWrongInJournal})
                </Link>
              </Button>
            )}
            <Button asChild variant="ghost">
              <Link to="/" className="no-underline">
                <Home className="h-4 w-4" /> {t('practice.backToHome')}
              </Link>
            </Button>
          </div>

          {(() => {
            const practicedDomains = [...new Set(questions.map((q) => q.domain))]
            const chains = getKnowledgeChains(examCode).filter((c) => practicedDomains.includes(c.domain))
            if (chains.length === 0) return null
            return (
              <Card className="mt-8">
                <CardContent className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink-soft)]">
                    {t('knowledgeChain.title')}
                  </h3>
                  <p className="text-xs text-[var(--sea-ink-soft)]">{t('knowledgeChain.description')}</p>
                  {chains.map((c) => (
                    <div key={c.domainNumber} className="rounded-lg border border-[var(--line)] px-3 py-2">
                      <span className="mr-2 font-mono text-xs font-bold text-[var(--sea-ink-soft)]">
                        D{c.domainNumber}
                      </span>
                      <span className="text-xs leading-relaxed text-[var(--sea-ink)]">{c.chain}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })()}

          <div className="mt-4 space-y-2">
            {questions.map((q) => {
              const correct = isAnswerCorrect(q, answers[q.id] || [])
              return (
                <Card key={q.id} className="p-3">
                  <div className="flex items-start gap-2">
                    {correct ? (
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--correct)]" />
                    ) : (
                      <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[var(--wrong)]" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm text-[var(--sea-ink)]">{q.stem}</p>
                      {!correct && q.explanation && (
                        <p className="mt-1 line-clamp-2 text-xs text-[var(--sea-ink-soft)]">{q.explanation}</p>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const isCorrect = currentAnswer.length > 0 && isAnswerCorrect(currentQuestion, currentAnswer)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-2.5">
          <Button variant="ghost" size="sm" onClick={() => setStarted(false)}>
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t('exam.exit')}</span>
          </Button>
          <span className="text-sm font-bold text-[var(--sea-ink)]">
            Q {currentIndex + 1}/{questions.length}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm font-bold tabular-nums">
              <span className="text-[var(--correct)]">{correctCount}</span>
              <span className="text-[var(--sea-ink-soft)]">/{answeredCount}</span>
            </span>
            <Badge variant={answeredCount > 0 && correctCount / answeredCount >= 0.7 ? 'success' : 'default'}>
              {answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0}%
            </Badge>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 pb-1">
          <Progress value={currentIndex + 1} max={questions.length} className="h-[3px]" />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-6">
        <div key={currentQuestion.id}>
          {!isRevealed && currentQuestion.hint && (
            <div className="mb-4">
              {showHint.has(currentQuestion.id) ? (
                <div className="rounded-xl border border-[var(--flagged-border)] bg-[var(--flagged-bg)] px-4 py-3">
                  <p className="m-0 text-sm text-[var(--sea-ink)]">
                    <Lightbulb className="mr-1.5 inline h-3.5 w-3.5 text-[var(--flagged)]" />
                    {currentQuestion.hint}
                  </p>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHint((prev) => new Set(prev).add(currentQuestion.id))}
                >
                  <Eye className="h-4 w-4" /> {t('practice.showHint')}
                </Button>
              )}
            </div>
          )}

          <QuestionView
            question={currentQuestion}
            selectedAnswers={currentAnswer}
            onSelectOption={selectOption}
            onOrderChange={setOrder}
            disabled={isRevealed}
            showResult={isRevealed}
            showTips
            questionNumber={currentIndex + 1}
          />

          {!isRevealed && (isMulti || isOrdering) && currentAnswer.length > 0 && (
            <Button variant="primary" className="mt-5 w-full" onClick={revealAnswer}>
              <Check className="h-4 w-4" /> Check Answer
            </Button>
          )}

          {isRevealed && (
            <div
              className={cn(
                'mt-5 rounded-xl border-[1.5px] px-5 py-4',
                isCorrect
                  ? 'border-[var(--correct-border)] bg-[var(--correct-bg)]'
                  : 'border-[var(--wrong-border)] bg-[var(--wrong-bg)]',
              )}
            >
              <p className={cn('mb-2 text-sm font-bold', isCorrect ? 'text-[var(--correct)]' : 'text-[var(--wrong)]')}>
                {isCorrect ? (
                  <>
                    <CircleCheck className="mr-1.5 inline h-4 w-4" />
                    {t('practice.correct')}
                  </>
                ) : (
                  <>
                    <CircleX className="mr-1.5 inline h-4 w-4" />
                    {t('practice.wrong')} — {t('results.correctAnswer')}:{' '}
                    {currentQuestion.type === 'ordering'
                      ? currentQuestion.correctAnswers.join(' → ')
                      : currentQuestion.correctAnswers.join(', ')}
                  </>
                )}
              </p>
              {currentQuestion.explanation && (
                <p className="mb-0 text-sm leading-relaxed text-[var(--sea-ink)]">{currentQuestion.explanation}</p>
              )}
              {!isCorrect && currentQuestion.whyOthersWrong && (
                <p className="mb-0 mt-2 text-sm text-[var(--sea-ink-soft)]">{currentQuestion.whyOthersWrong}</p>
              )}
              {!isCorrect && currentQuestion.trap && (
                <div className="mt-3 flex items-start gap-1.5 text-xs text-[var(--flagged)]">
                  <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" />
                  {t('practice.trap')}: {currentQuestion.trap}
                </div>
              )}
              {currentQuestion.mnemonic && (
                <div className="mt-2 flex items-start gap-1.5 text-xs text-[var(--sea-ink-soft)]">
                  <Lightbulb className="mt-0.5 h-3 w-3 shrink-0" />
                  {t('practice.mnemonic')}: {currentQuestion.mnemonic}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {isRevealed && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-3xl items-center justify-between py-2.5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" /> {t('exam.prev')}
            </Button>
            <Button
              variant={currentIndex === questions.length - 1 ? 'primary' : 'default'}
              size="sm"
              onClick={nextQuestion}
            >
              {currentIndex === questions.length - 1 ? t('practice.finish') : t('exam.next')}
              {currentIndex < questions.length - 1 && <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
