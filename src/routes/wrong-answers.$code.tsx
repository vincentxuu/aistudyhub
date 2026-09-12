import { ArrowLeft, BookOpen, Check, ChevronDown, CircleX, Dumbbell, RotateCcw, Trash2 } from '@sketchyicons/react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'
import { OptionCard } from '../components/exam/OptionCard.tsx'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { WrongAnswersSkeleton } from '../components/ui/skeleton.tsx'
import { useI18n } from '../i18n/index.ts'
import type { Question } from '../lib/question-types.ts'
import {
  clearWrongAnswers,
  getDueForReview,
  getQuestionsByIds,
  getWrongAnswers,
  markReviewed,
  updateReflection,
  updateSR,
  type WrongAnswer,
} from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/wrong-answers/$code')({ component: WrongAnswersPage })

function ReviewSession({
  dueItems,
  questionMap,
  onComplete,
  t,
}: {
  dueItems: WrongAnswer[]
  questionMap: Map<string, Question>
  examCode: string
  onComplete: () => void
  t: (key: string, vars?: Record<string, string | number>) => string
}) {
  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const current = dueItems[index]
  const question = current ? questionMap.get(current.questionId) : null

  if (!current || !question) {
    return (
      <Card className="rise-in border-[var(--correct-border)]">
        <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
          <Check className="h-10 w-10 text-[var(--correct)]" />
          <p className="text-lg font-bold text-[var(--sea-ink)]">{t('wrongAnswers.reviewComplete')}</p>
          <Button variant="primary" onClick={onComplete}>
            <ArrowLeft className="h-4 w-4" /> {t('practice.backToHome')}
          </Button>
        </CardContent>
      </Card>
    )
  }

  function handleSelect(label: string) {
    if (submitted) return
    setSelectedAnswer([label])
  }

  function handleSubmit() {
    if (selectedAnswer.length === 0) return
    setSubmitted(true)
  }

  function handleRate(quality: 0 | 1 | 2 | 3 | 4 | 5) {
    updateSR(current.questionId, quality)
    setSelectedAnswer([])
    setSubmitted(false)
    if (index < dueItems.length - 1) {
      setIndex((i) => i + 1)
    } else {
      onComplete()
    }
  }

  const isCorrect =
    submitted &&
    selectedAnswer.length === question.correctAnswers.length &&
    selectedAnswer.every((a) => question.correctAnswers.includes(a))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="default" className="font-mono text-xs">
          {index + 1} / {dueItems.length}
        </Badge>
        <Badge variant="outline" className="text-xs">
          {question.domain}
        </Badge>
      </div>

      <p className="text-[clamp(0.95rem,2.2vw,1.15rem)] font-medium leading-[1.7] text-[var(--sea-ink)]">
        {question.stem}
      </p>

      <div className="space-y-2">
        {question.options.map((opt) => {
          const isSelected = selectedAnswer.includes(opt.label)
          const isCorrectOpt = question.correctAnswers.includes(opt.label)
          let result: 'correct' | 'wrong' | null = null
          if (submitted) {
            if (isSelected && isCorrectOpt) result = 'correct'
            else if (isSelected && !isCorrectOpt) result = 'wrong'
          }
          return (
            <OptionCard
              key={opt.label}
              label={opt.label}
              text={opt.text}
              selected={isSelected}
              disabled={submitted}
              result={result}
              isCorrectAnswer={submitted ? isCorrectOpt : false}
              onSelect={() => handleSelect(opt.label)}
            />
          )
        })}
      </div>

      {!submitted && (
        <Button variant="primary" className="w-full" disabled={selectedAnswer.length === 0} onClick={handleSubmit}>
          {t('study.checkAnswer')}
        </Button>
      )}

      {submitted && (
        <div className="space-y-3">
          <div
            className={cn(
              'rounded-xl border-[1.5px] px-4 py-3 text-sm font-semibold',
              isCorrect
                ? 'border-[var(--correct-border)] bg-[var(--correct-bg)] text-[var(--correct)]'
                : 'border-[var(--wrong-border)] bg-[var(--wrong-bg)] text-[var(--wrong)]',
            )}
          >
            {isCorrect
              ? `✓ ${t('study.correct')}`
              : `✗ ${t('study.wrong')} — ${t('study.answer')}：${question.correctAnswers.join(', ')}`}
          </div>

          {question.explanation && (
            <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-subtle)] px-4 py-3 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
              {question.explanation}
            </div>
          )}

          <p className="text-center text-xs font-semibold text-[var(--sea-ink-soft)]">{t('wrongAnswers.reflection')}</p>
          <div className="flex justify-center gap-2">
            <Button variant="destructive" size="sm" onClick={() => handleRate(1)}>
              <RotateCcw className="h-3.5 w-3.5" /> {t('wrongAnswers.again')}
            </Button>
            <Button variant="secondary" size="sm" onClick={() => handleRate(3)}>
              {t('wrongAnswers.hard')}
            </Button>
            <Button variant="default" size="sm" onClick={() => handleRate(4)}>
              {t('wrongAnswers.good')}
            </Button>
            <Button variant="primary" size="sm" onClick={() => handleRate(5)}>
              {t('wrongAnswers.easy')}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function formatNextReview(dateStr: string | null, t: (key: string) => string): string {
  if (!dateStr) return ''
  const next = new Date(dateStr)
  const now = new Date()
  const diffDays = Math.ceil((next.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  if (diffDays <= 0) return t('wrongAnswers.dueNow')
  return `${diffDays}d`
}

function WrongAnswersPage() {
  const { code } = Route.useParams()
  const navigate = useNavigate()
  const { t } = useI18n()
  const examCode = code.toUpperCase()

  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>(() => getWrongAnswers(examCode))
  const [filter, setFilter] = useState<'all' | 'not-reviewed' | 'reviewed'>('not-reviewed')
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())
  const [reflections, setReflections] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {}
    for (const wa of wrongAnswers) {
      if (wa.reflection) map[wa.questionId] = wa.reflection
    }
    return map
  })
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [reviewing, setReviewing] = useState(false)

  const [questionMap, setQuestionMap] = useState<Map<string, Question>>(new Map())

  useEffect(() => {
    const ids = wrongAnswers.map((wa) => wa.questionId)
    if (ids.length === 0) return
    getQuestionsByIds(ids).then((questions) => {
      setQuestionMap(new Map(questions.map((q) => [q.id, q])))
    })
  }, [wrongAnswers])

  const dueItems = getDueForReview(examCode)
  const reviewedCount = wrongAnswers.filter((wa) => wa.reviewedAt).length

  const filtered = wrongAnswers.filter((wa) => {
    if (filter === 'not-reviewed') return !wa.reviewedAt
    if (filter === 'reviewed') return !!wa.reviewedAt
    return true
  })

  function toggleExpand(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleReflectionSave = useCallback((questionId: string, text: string) => {
    updateReflection(questionId, text)
    setReflections((prev) => ({ ...prev, [questionId]: text }))
  }, [])

  function handleMarkReviewed(questionId: string) {
    markReviewed(questionId)
    setWrongAnswers(getWrongAnswers(examCode))
  }

  function handleClearAll() {
    clearWrongAnswers()
    setWrongAnswers([])
    setShowClearConfirm(false)
  }

  function handlePracticeWrong() {
    navigate({ to: '/practice/$code', params: { code }, search: { wrongOnly: true } as never })
  }

  function handleReviewComplete() {
    setReviewing(false)
    setWrongAnswers(getWrongAnswers(examCode))
  }

  if (wrongAnswers.length === 0) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-2xl px-4 pb-16">
          <div className="pt-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="no-underline">
                <ArrowLeft className="h-4 w-4" /> {t('practice.backToHome')}
              </Link>
            </Button>
          </div>
          <section className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <BookOpen className="mb-4 h-12 w-12 text-[var(--sea-ink-soft)]" />
            <p className="text-lg font-bold text-[var(--sea-ink)]">{t('wrongAnswers.empty')}</p>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  if (reviewing) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-8">
          <Button variant="ghost" size="sm" className="mb-4" onClick={() => setReviewing(false)}>
            <ArrowLeft className="h-4 w-4" /> {t('wrongAnswers.title')}
          </Button>
          <ReviewSession
            dueItems={dueItems}
            questionMap={questionMap}
            examCode={examCode}
            onComplete={handleReviewComplete}
            t={t}
          />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16">
        <div className="rise-in pt-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="no-underline">
              <ArrowLeft className="h-4 w-4" /> {t('practice.backToHome')}
            </Link>
          </Button>
          <h1 className="mb-2 mt-4 flex items-center gap-2 text-2xl font-bold text-[var(--sea-ink)]">
            <BookOpen className="h-6 w-6" /> {t('wrongAnswers.title')}
          </h1>
          <div className="mb-6 flex items-center gap-3 text-sm text-[var(--sea-ink-soft)]">
            <span>{t('wrongAnswers.count', { count: wrongAnswers.length })}</span>
            <span>·</span>
            <span>{t('wrongAnswers.reviewed', { count: reviewedCount })}</span>
          </div>
        </div>

        {/* Due for review banner */}
        {dueItems.length > 0 && (
          <Card className="rise-in mb-6 border-[var(--flagged-border)] bg-[var(--flagged-bg)]">
            <CardContent className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[var(--sea-ink)]">
                  {t('wrongAnswers.dueToday', { count: dueItems.length })}
                </p>
              </div>
              <Button variant="primary" size="sm" onClick={() => setReviewing(true)}>
                {t('wrongAnswers.startReview')}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="rise-in mb-6 flex flex-wrap gap-2" style={{ animationDelay: '80ms' }}>
          <Button variant="primary" onClick={handlePracticeWrong}>
            <Dumbbell className="h-4 w-4" /> {t('wrongAnswers.practiceWrong')}
          </Button>
          <Button variant="destructive" size="sm" onClick={() => setShowClearConfirm(true)}>
            <Trash2 className="h-3.5 w-3.5" /> {t('wrongAnswers.clearAll')}
          </Button>
        </div>

        {/* Clear confirmation */}
        {showClearConfirm && (
          <Card className="rise-in mb-6 border-[var(--wrong-border)]">
            <CardContent className="flex items-center justify-between gap-4">
              <p className="text-sm text-[var(--sea-ink)]">{t('wrongAnswers.clearConfirm')}</p>
              <div className="flex shrink-0 gap-2">
                <Button variant="ghost" size="sm" onClick={() => setShowClearConfirm(false)}>
                  {t('exam.exit')}
                </Button>
                <Button variant="destructive" size="sm" onClick={handleClearAll}>
                  {t('wrongAnswers.clearAll')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filter */}
        <div className="rise-in mb-4 flex gap-1" style={{ animationDelay: '120ms' }}>
          {(['not-reviewed', 'all', 'reviewed'] as const).map((f) => {
            const label =
              f === 'all'
                ? t('wrongAnswers.all')
                : f === 'not-reviewed'
                  ? t('wrongAnswers.notReviewed')
                  : t('wrongAnswers.reviewed_label')
            const count =
              f === 'all'
                ? wrongAnswers.length
                : f === 'not-reviewed'
                  ? wrongAnswers.length - reviewedCount
                  : reviewedCount
            return (
              <Button key={f} variant={filter === f ? 'default' : 'ghost'} size="sm" onClick={() => setFilter(f)}>
                {label} ({count})
              </Button>
            )
          })}
        </div>

        {/* Wrong answer cards */}
        {wrongAnswers.length > 0 && questionMap.size === 0 && <WrongAnswersSkeleton />}
        <div className="space-y-2.5">
          {filtered.map((wa) => {
            const question = questionMap.get(wa.questionId)
            if (!question) return null
            const expanded = expandedIds.has(wa.questionId)
            const reflection = reflections[wa.questionId] || ''
            const nextReviewLabel = formatNextReview(wa.nextReviewAt, t)

            return (
              <Card key={wa.questionId} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleExpand(wa.questionId)}
                  className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-[var(--bg-subtle)]"
                >
                  <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[var(--wrong)]" />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">
                        {question.domain}
                      </Badge>
                      {wa.reviewedAt && (
                        <Badge variant="success" className="text-[10px]">
                          <Check className="h-2.5 w-2.5" /> {t('wrongAnswers.reviewed_label')}
                        </Badge>
                      )}
                      {nextReviewLabel && (
                        <Badge
                          variant={nextReviewLabel === t('wrongAnswers.dueNow') ? 'warning' : 'default'}
                          className="text-[10px]"
                        >
                          {t('wrongAnswers.nextReview', { date: nextReviewLabel })}
                        </Badge>
                      )}
                    </div>
                    <p className="line-clamp-2 text-sm text-[var(--sea-ink)]">{question.stem}</p>
                    <p className="mt-1 text-[10px] text-[var(--sea-ink-soft)]">
                      {new Date(wa.attemptedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      'mt-1 h-4 w-4 shrink-0 text-[var(--sea-ink-soft)] transition-transform duration-200',
                      expanded && 'rotate-180',
                    )}
                  />
                </button>

                {expanded && (
                  <div className="border-t border-[var(--line)] px-4 pb-4 pt-3">
                    {/* Options */}
                    <div className="space-y-1.5">
                      {question.options.map((opt) => {
                        const isCorrectOpt = question.correctAnswers.includes(opt.label)
                        const wasSelected = wa.selectedAnswers.includes(opt.label)
                        let result: 'correct' | 'wrong' | null = null
                        if (wasSelected && !isCorrectOpt) result = 'wrong'
                        if (wasSelected && isCorrectOpt) result = 'correct'
                        return (
                          <OptionCard
                            key={opt.label}
                            label={opt.label}
                            text={opt.text}
                            selected={wasSelected}
                            disabled
                            result={result}
                            isCorrectAnswer={isCorrectOpt}
                            onSelect={() => {}}
                          />
                        )
                      })}
                    </div>

                    {/* Explanation */}
                    {question.explanation && (
                      <div className="mt-3 rounded-xl border-[1.5px] border-[var(--wrong-border)] bg-[var(--wrong-bg)] px-4 py-3 text-sm">
                        <p className="m-0 leading-relaxed text-[var(--sea-ink)]">{question.explanation}</p>
                      </div>
                    )}

                    {/* Reflection */}
                    <div className="mt-4">
                      <label
                        htmlFor={`reflection-${wa.questionId}`}
                        className="mb-2 block text-sm font-bold text-[var(--sea-ink)]"
                      >
                        {t('wrongAnswers.reflection')}
                      </label>
                      <textarea
                        id={`reflection-${wa.questionId}`}
                        className="w-full rounded-xl border border-[var(--line)] bg-[var(--bg-subtle)] px-4 py-3 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] outline-none transition-colors focus:border-[var(--selected-border)]"
                        rows={2}
                        placeholder={t('wrongAnswers.reflectionPlaceholder')}
                        value={reflection}
                        onChange={(e) => setReflections((prev) => ({ ...prev, [wa.questionId]: e.target.value }))}
                        onBlur={(e) => handleReflectionSave(wa.questionId, e.target.value)}
                      />
                    </div>

                    {/* Mark reviewed */}
                    {!wa.reviewedAt && (
                      <div className="mt-3">
                        <Button variant="secondary" size="sm" onClick={() => handleMarkReviewed(wa.questionId)}>
                          <Check className="h-3.5 w-3.5" /> {t('wrongAnswers.markReviewed')}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
