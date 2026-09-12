import { ArrowLeft, ChevronLeft, ChevronRight, Clock, Flag, Grid3X3, Send } from '@sketchyicons/react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { nanoid } from 'nanoid'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CircularTimer } from '../components/exam/CircularTimer.tsx'
import { QuestionGrid } from '../components/exam/QuestionGrid.tsx'
import { QuestionView } from '../components/exam/QuestionView.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import { useI18n } from '../i18n/index.ts'
import type { Question } from '../lib/question-types.ts'
import { computeResult, getRealisticExamSet, saveResult } from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/exam/$code')({ component: ExamPage })

const EXAM_CONFIG: Record<string, { name: string; questionCount: number; timeLimitMin: number }> = {
  'aif-c01': { name: 'AWS AIF-C01', questionCount: 65, timeLimitMin: 90 },
}

function ExamPage() {
  const { code } = Route.useParams()
  const navigate = useNavigate()
  const { t } = useI18n()
  const config = EXAM_CONFIG[code] || { name: code.toUpperCase(), questionCount: 65, timeLimitMin: 90 }

  const [sessionId] = useState(() => nanoid(10))
  const examCode = code.toUpperCase()
  const [questions] = useState<Question[]>(() => getRealisticExamSet(examCode))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const totalSeconds = config.timeLimitMin * 60
  const [timeRemaining, setTimeRemaining] = useState(totalSeconds)
  const [submitted, setSubmitted] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const startedAt = useRef(Date.now())

  const currentQuestion = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const unansweredCount = questions.length - answeredCount
  const timerUrgent = timeRemaining < 300
  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60
  const mobileTimerStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const submitExam = useCallback(() => {
    if (submitted) return
    setSubmitted(true)
    const result = computeResult({
      id: sessionId,
      examCode,
      questions,
      answers,
      startedAt: startedAt.current,
      completedAt: Date.now(),
    })
    saveResult(result)
    navigate({ to: '/exam/$code_/results/$sessionId', params: { code_: code, sessionId } })
  }, [submitted, sessionId, code, examCode, questions, answers, navigate])

  useEffect(() => {
    if (submitted || timeRemaining <= 0) return
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          submitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [submitted, timeRemaining, submitExam])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (submitted || showConfirm) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      const keyUpper = e.key.toUpperCase()
      if (currentQuestion?.type !== 'ordering' && ['A', 'B', 'C', 'D', 'E', 'F'].includes(keyUpper)) {
        if (currentQuestion) {
          const opt = currentQuestion.options.find((o) => o.label === keyUpper)
          if (opt) selectOption(opt.label)
        }
      } else if (currentQuestion?.type !== 'ordering' && e.key >= '1' && e.key <= '9') {
        const idx = Number.parseInt(e.key, 10) - 1
        if (currentQuestion && idx < currentQuestion.options.length) selectOption(currentQuestion.options[idx].label)
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1)
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) setCurrentIndex((i) => i - 1)
      } else if (e.key === 'g' || e.key === 'G') {
        setShowGrid((v) => !v)
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFlag()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentIndex, currentQuestion, submitted, questions.length, showConfirm])

  function selectOption(label: string) {
    if (!currentQuestion || submitted) return
    const isMulti = currentQuestion.type === 'multi'
    setAnswers((prev) => {
      const current = prev[currentQuestion.id] || []
      if (isMulti) {
        const next = current.includes(label) ? current.filter((l) => l !== label) : [...current, label]
        return { ...prev, [currentQuestion.id]: next }
      }
      return { ...prev, [currentQuestion.id]: [label] }
    })
  }

  function setOrder(order: string[]) {
    if (!currentQuestion || submitted || currentQuestion.type !== 'ordering') return
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: order }))
  }

  function toggleFlag() {
    if (!currentQuestion) return
    setFlagged((prev) => {
      const next = new Set(prev)
      if (next.has(currentQuestion.id)) next.delete(currentQuestion.id)
      else next.add(currentQuestion.id)
      return next
    })
  }

  if (questions.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4">
        <p className="mb-4 text-[var(--sea-ink-soft)]">No questions found for {code}.</p>
        <Button asChild variant="secondary">
          <Link to="/" className="no-underline">
            {t('practice.backToHome')}
          </Link>
        </Button>
      </main>
    )
  }

  const selectedAnswers = answers[currentQuestion.id] || []

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-2 px-4 py-2.5">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="no-underline">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setShowGrid((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-bold text-[var(--sea-ink)] transition-colors hover:bg-[var(--bg-subtle)]"
          >
            Q {currentIndex + 1}/{questions.length}
            <Grid3X3 className="h-3.5 w-3.5 text-[var(--sea-ink-soft)]" />
          </button>
          <div className="ml-auto flex items-center gap-2">
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-lg border px-2 py-1 font-mono text-xs font-bold tabular-nums',
                timerUrgent
                  ? 'border-[var(--wrong-border)] bg-[var(--wrong-bg)] text-[var(--wrong)]'
                  : 'border-[var(--line)] text-[var(--sea-ink)]',
              )}
            >
              <Clock className="h-3 w-3" />
              {mobileTimerStr}
            </span>
            <Button size="sm" onClick={() => setShowConfirm(true)}>
              <Send className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
        <div className="px-4 pb-1">
          <Progress value={currentIndex + 1} max={questions.length} className="h-[3px]" />
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 gap-6 px-4 pb-24 pt-6 md:pb-8 md:pt-8">
        <main className="min-w-0 flex-1" key={currentQuestion.id}>
          <QuestionView
            question={currentQuestion}
            selectedAnswers={selectedAnswers}
            onSelectOption={selectOption}
            onOrderChange={setOrder}
            questionNumber={currentIndex + 1}
          />

          <div className="mt-8 hidden items-center justify-between md:flex">
            <Button
              variant="ghost"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" /> {t('exam.prev')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFlag}
              className={cn(flagged.has(currentQuestion.id) && 'text-[var(--flagged)]')}
            >
              <Flag className={cn('h-4 w-4', flagged.has(currentQuestion.id) && 'fill-current')} />
              {flagged.has(currentQuestion.id) ? t('exam.flagged') : t('exam.flag')}
            </Button>
            <Button
              variant={currentIndex === questions.length - 1 ? 'primary' : 'default'}
              onClick={() => {
                if (currentIndex === questions.length - 1) setShowConfirm(true)
                else setCurrentIndex((i) => i + 1)
              }}
            >
              {currentIndex === questions.length - 1 ? t('exam.submit') : t('exam.next')}
              {currentIndex < questions.length - 1 && <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </main>

        <aside className="hidden w-60 shrink-0 md:block">
          <div className="sticky top-6 space-y-5">
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link to="/" className="no-underline">
                <ArrowLeft className="h-4 w-4" /> {t('exam.exit')}
              </Link>
            </Button>
            <div className="flex justify-center">
              <CircularTimer timeRemaining={timeRemaining} totalSeconds={totalSeconds} />
            </div>
            <div className="flex justify-center">
              <Badge variant={answeredCount === questions.length ? 'success' : 'default'}>
                {answeredCount}/{questions.length} {t('exam.answered')}
              </Badge>
            </div>
            <Button className="w-full" onClick={() => setShowConfirm(true)}>
              <Send className="h-4 w-4" /> {t('exam.submit')}
            </Button>
            <div>
              <h4 className="mb-2 text-xs font-bold text-[var(--sea-ink-soft)]">{t('exam.questionGrid')}</h4>
              <QuestionGrid
                questions={questions}
                answers={answers}
                flagged={flagged}
                currentIndex={currentIndex}
                onSelect={setCurrentIndex}
                compact
              />
            </div>
            <div>
              <Progress value={currentIndex + 1} max={questions.length} className="h-1" />
              <p className="mt-1 text-center text-[10px] text-[var(--sea-ink-soft)]">
                {currentIndex + 1} / {questions.length}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between py-2.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" /> {t('exam.prev')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFlag}
            className={cn(flagged.has(currentQuestion.id) && 'text-[var(--flagged)]')}
          >
            <Flag className={cn('h-4 w-4', flagged.has(currentQuestion.id) && 'fill-current')} />
          </Button>
          <Button
            variant={currentIndex === questions.length - 1 ? 'primary' : 'default'}
            size="sm"
            onClick={() => {
              if (currentIndex === questions.length - 1) setShowConfirm(true)
              else setCurrentIndex((i) => i + 1)
            }}
          >
            {currentIndex === questions.length - 1 ? t('exam.submit') : t('exam.next')}
            {currentIndex < questions.length - 1 && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {showConfirm && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowConfirm(false)}
        >
          <Card className="mx-4 w-full max-w-sm p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-2 text-lg font-bold text-[var(--sea-ink)]">{t('exam.submit')}?</h3>
            <p className="mb-5 text-sm text-[var(--sea-ink-soft)]">
              {unansweredCount > 0 ? t('exam.submitConfirm', { count: unansweredCount }) : t('exam.submitAll')}
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" className="flex-1" onClick={() => setShowConfirm(false)}>
                {t('exam.exit')}
              </Button>
              <Button variant="primary" className="flex-1" onClick={submitExam}>
                {t('exam.submit')}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {showGrid && (
        <div
          className="fixed inset-0 z-[55] flex items-end justify-center md:hidden"
          onClick={() => setShowGrid(false)}
        >
          <div
            className="w-full animate-[rise-in_300ms_ease-out] rounded-t-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-5 shadow-xl backdrop-blur-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[var(--line)]" />
            <h3 className="mb-3 text-sm font-bold text-[var(--sea-ink)]">{t('exam.questionGrid')}</h3>
            <QuestionGrid
              questions={questions}
              answers={answers}
              flagged={flagged}
              currentIndex={currentIndex}
              onSelect={(i) => {
                setCurrentIndex(i)
                setShowGrid(false)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
