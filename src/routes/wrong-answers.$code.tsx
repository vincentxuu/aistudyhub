import { ArrowLeft, BookOpen, Check, ChevronDown, CircleCheck, CircleX, Dumbbell, Trash2 } from '@sketchyicons/react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useCallback, useState } from 'react'
import { OptionCard } from '../components/exam/OptionCard.tsx'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { useI18n } from '../i18n/index.ts'
import type { Question } from '../lib/question-types.ts'
import {
  clearWrongAnswers,
  getQuestionsByIds,
  getWrongAnswers,
  markReviewed,
  updateReflection,
  type WrongAnswer,
} from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/wrong-answers/$code')({ component: WrongAnswersPage })

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

  const questionIds = wrongAnswers.map((wa) => wa.questionId)
  const questions = getQuestionsByIds(questionIds)
  const questionMap = new Map<string, Question>(questions.map((q) => [q.id, q]))

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
        <div className="space-y-2.5">
          {filtered.map((wa) => {
            const question = questionMap.get(wa.questionId)
            if (!question) return null
            const expanded = expandedIds.has(wa.questionId)
            const reflection = reflections[wa.questionId] || ''

            return (
              <Card key={wa.questionId} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleExpand(wa.questionId)}
                  className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-[var(--bg-subtle)]"
                >
                  <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[var(--wrong)]" />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">
                        {question.domain}
                      </Badge>
                      {wa.reviewedAt && (
                        <Badge variant="success" className="text-[10px]">
                          <Check className="h-2.5 w-2.5" /> {t('wrongAnswers.reviewed_label')}
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
