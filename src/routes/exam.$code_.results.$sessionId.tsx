import {
  AlertTriangle,
  BookOpen,
  ChevronDown,
  CircleCheck,
  CircleX,
  Dumbbell,
  ExternalLink,
  Home,
  Lightbulb,
  RotateCcw,
} from '@sketchyicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { OptionCard } from '../components/exam/OptionCard.tsx'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import { useI18n } from '../i18n/index.ts'
import { getDomainLabel, resolveDomainNumber } from '../lib/domains.ts'
import { getExamConfig } from '../lib/exam-registry.ts'
import { getChainForDomainNumber } from '../lib/knowledge-chains.ts'
import { loadResult, saveWrongAnswersFromResult } from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/exam/$code_/results/$sessionId')({ component: ResultsPage })

function ScoreCircle({ score, passed }: { score: number; passed: boolean }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - score / 100)

  return (
    <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
      <svg width="144" height="144" className="-rotate-90">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="var(--line)" strokeWidth="6" />
        <circle
          cx="72"
          cy="72"
          r={radius}
          fill="none"
          stroke={passed ? 'var(--correct)' : 'var(--wrong)'}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={cn('text-4xl font-black tabular-nums', passed ? 'text-[var(--correct)]' : 'text-[var(--wrong)]')}
        >
          {score}%
        </span>
      </div>
    </div>
  )
}

function ResultsPage() {
  const { code, sessionId } = Route.useParams()
  const { locale, t } = useI18n()
  const [result, setResult] = useState<ReturnType<typeof loadResult>>(null)
  const [filter, setFilter] = useState<'all' | 'wrong'>('wrong')
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())
  const [wrongCount, setWrongCount] = useState(0)

  useEffect(() => {
    const loaded = loadResult(sessionId)
    setResult(loaded)
    if (loaded) {
      const count = saveWrongAnswersFromResult(loaded)
      setWrongCount(count)
    }
  }, [sessionId])

  if (!result) {
    return (
      <>
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-4">
          <p className="mb-4 text-[var(--sea-ink-soft)]">{t('common.error')}</p>
          <Button asChild variant="secondary">
            <Link to="/" className="no-underline">
              {t('results.backToHome')}
            </Link>
          </Button>
        </main>
      </>
    )
  }

  const passed = result.score >= 70
  const minutes = Math.floor(result.timeTakenMs / 60000)
  const seconds = Math.floor((result.timeTakenMs % 60000) / 1000)
  const filteredQuestions =
    filter === 'wrong' ? result.questionResults.filter((r) => !r.isCorrect) : result.questionResults

  function toggleExpand(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16">
        {/* Score */}
        <section className="rise-in pb-8 pt-10 text-center">
          <ScoreCircle score={result.score} passed={passed} />
          <Badge variant={passed ? 'success' : 'destructive'} className="mt-4 px-4 py-1 text-sm">
            {passed ? t('results.pass') : t('results.fail')}
          </Badge>
          <p className="mt-2 text-sm text-[var(--sea-ink-soft)]">
            {result.correctCount}/{result.totalQuestions} · {minutes}m {seconds}s
          </p>
          <p className="mt-1 text-xs text-[var(--sea-ink-soft)]">{t('results.passingScore', { score: 70 })}</p>
          <p className="mt-3 text-xs font-semibold text-[var(--sea-ink-soft)]">{t('results.threshold')}</p>
        </section>

        {/* Domain breakdown */}
        <Card className="rise-in" style={{ animationDelay: '80ms' }}>
          <CardContent className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink-soft)]">
              {t('results.domainBreakdown')}
            </h3>
            {result.domainBreakdown.map((d) => {
              const domainNumber = d.domainNumber ?? resolveDomainNumber(result.examCode, d.domain)
              const domainLabel = getDomainLabel(result.examCode, domainNumber, locale, d.domain)
              const isImportant = result.examCode === 'AIF-C01' && (domainNumber === 2 || domainNumber === 3)
              const chain = getChainForDomainNumber(result.examCode, domainNumber)
              return (
                <div key={`${domainNumber}-${d.domain}`} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="min-w-0 flex-1 truncate text-sm text-[var(--sea-ink)]">
                      {domainLabel}
                      {isImportant && (
                        <Badge variant="warning" className="ml-2 text-[10px]">
                          {t('results.importantDomains')}
                        </Badge>
                      )}
                    </span>
                    <span
                      className={cn(
                        'shrink-0 font-mono text-xs font-bold tabular-nums',
                        d.percentage >= 70 ? 'text-[var(--correct)]' : 'text-[var(--wrong)]',
                      )}
                    >
                      {d.correct}/{d.total} ({d.percentage}%)
                    </span>
                  </div>
                  <Progress value={d.percentage} variant={d.percentage >= 70 ? 'default' : 'danger'} />
                  {chain && (
                    <details className="mt-1">
                      <summary className="cursor-pointer text-[10px] font-semibold text-[var(--sea-ink-soft)]">
                        {t('knowledgeChain.title')}
                      </summary>
                      <p className="mt-1 text-[10px] leading-relaxed text-[var(--sea-ink-soft)]">{chain.chain}</p>
                    </details>
                  )}
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="rise-in mt-6 flex flex-col gap-2.5 sm:flex-row" style={{ animationDelay: '160ms' }}>
          <Button asChild variant="primary" className="flex-1">
            <Link to="/practice/$code" params={{ code }} className="no-underline">
              <Dumbbell className="h-4 w-4" /> {t('results.practiceWeak')}
            </Link>
          </Button>
          <Button asChild variant="secondary" className="flex-1">
            <Link to="/exam/$code" params={{ code }} className="no-underline">
              <RotateCcw className="h-4 w-4" /> {t('results.tryAgain')}
            </Link>
          </Button>
          <Button asChild variant="ghost" className="flex-1">
            <Link to="/" className="no-underline">
              <Home className="h-4 w-4" /> {t('results.backToHome')}
            </Link>
          </Button>
        </div>

        {/* Prep guide link */}
        <div className="rise-in mt-3" style={{ animationDelay: '180ms' }}>
          <a
            href={getExamConfig(code)?.prepGuideUrl ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg-subtle)] px-4 py-2.5 text-sm font-semibold text-[var(--sea-ink)] transition-all hover:bg-[var(--surface)]"
          >
            <ExternalLink className="h-4 w-4" /> {t('results.readGuide')}
          </a>
        </div>

        {/* Wrong answer journal link */}
        {wrongCount > 0 && (
          <div className="rise-in mt-4" style={{ animationDelay: '200ms' }}>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/wrong-answers/$code" params={{ code }} className="no-underline">
                <BookOpen className="h-4 w-4" />
                {t('wrongAnswers.viewJournal')} ({t('wrongAnswers.addedToJournal', { count: wrongCount })})
              </Link>
            </Button>
          </div>
        )}

        {/* Question review */}
        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink-soft)]">
              {t('results.questionReview')}
            </h3>
            <div className="flex gap-1">
              <Button variant={filter === 'wrong' ? 'default' : 'ghost'} size="sm" onClick={() => setFilter('wrong')}>
                {t('results.showWrong')} ({result.questionResults.filter((r) => !r.isCorrect).length})
              </Button>
              <Button variant={filter === 'all' ? 'default' : 'ghost'} size="sm" onClick={() => setFilter('all')}>
                {t('results.showAll')}
              </Button>
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredQuestions.map((r) => {
              const expanded = expandedIds.has(r.questionId)
              const globalIdx = result.questionResults.indexOf(r)
              return (
                <Card key={r.questionId} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleExpand(r.questionId)}
                    className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-[var(--bg-subtle)]"
                  >
                    {r.isCorrect ? (
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--correct)]" />
                    ) : (
                      <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[var(--wrong)]" />
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-xs font-bold text-[var(--sea-ink-soft)]">Q{globalIdx + 1}</span>
                      <p className="mt-1 line-clamp-2 text-sm text-[var(--sea-ink)]">{r.stem}</p>
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
                      <div className="space-y-1.5">
                        {r.options.map((opt) => {
                          const isCorrectOpt = r.correctAnswers.includes(opt.label)
                          const wasSelected = r.selectedAnswers.includes(opt.label)

                          let result_: 'correct' | 'wrong' | null = null
                          if (wasSelected && !isCorrectOpt) result_ = 'wrong'
                          if (wasSelected && isCorrectOpt) result_ = 'correct'

                          return (
                            <OptionCard
                              key={opt.label}
                              label={opt.label}
                              text={opt.text}
                              feedback={opt.feedback}
                              selected={wasSelected}
                              disabled
                              result={result_}
                              isCorrectAnswer={isCorrectOpt}
                              onSelect={() => {}}
                            />
                          )
                        })}
                      </div>

                      {r.explanation && (
                        <div
                          className={cn(
                            'mt-3 rounded-xl border-[1.5px] px-4 py-3 text-sm',
                            r.isCorrect
                              ? 'border-[var(--correct-border)] bg-[var(--correct-bg)]'
                              : 'border-[var(--wrong-border)] bg-[var(--wrong-bg)]',
                          )}
                        >
                          <p className="m-0 leading-relaxed text-[var(--sea-ink)]">{r.explanation}</p>
                        </div>
                      )}

                      {!r.isCorrect && r.trap && (
                        <div className="mt-2 flex items-start gap-1.5 text-xs text-[var(--flagged)]">
                          <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" /> {r.trap}
                        </div>
                      )}
                      {r.mnemonic && (
                        <div className="mt-1.5 flex items-start gap-1.5 text-xs text-[var(--sea-ink-soft)]">
                          <Lightbulb className="mt-0.5 h-3 w-3 shrink-0" /> {r.mnemonic}
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
