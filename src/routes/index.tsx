import { BarChart3, BookOpen, Clock, Dumbbell, Play, Target } from '@sketchyicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import { ExamCardSkeleton } from '../components/ui/skeleton.tsx'
import { useI18n } from '../i18n/index.ts'
import type { DomainInfo } from '../lib/domains.ts'
import { getAllExamCodes, getExamConfig } from '../lib/exam-registry.ts'
import { getDomainInfo, getExamQuestions } from '../lib/questions.ts'
import { getUserStats } from '../lib/user-data.ts'

export const Route = createFileRoute('/')({ component: HomePage })

function ExamCard({ examKey, delay }: { examKey: string; delay: number }) {
  const { locale, t } = useI18n()
  const config = getExamConfig(examKey)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [sortedDomains, setSortedDomains] = useState<DomainInfo[]>([])
  const [maxCount, setMaxCount] = useState(1)

  useEffect(() => {
    if (!config) return
    let cancelled = false
    Promise.all([getExamQuestions(config.code, locale), getDomainInfo(config.code, locale)]).then(
      ([questions, domains]) => {
        if (cancelled) return
        setTotalQuestions(questions.length)
        setSortedDomains(domains)
        setMaxCount(Math.max(...domains.map((domain) => domain.count), 1))
      },
    )
    return () => {
      cancelled = true
    }
  }, [config, locale])

  if (!config) return null
  if (sortedDomains.length === 0) return <ExamCardSkeleton />

  return (
    <Card className="rise-in" style={{ animationDelay: `${delay}ms` }}>
      <CardHeader>
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--bg-subtle)] text-xs font-black text-[var(--sea-ink)]">
            {config.shortName}
          </span>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-base sm:text-lg">{config.name}</CardTitle>
            <p className="mt-0.5 text-sm text-[var(--sea-ink-soft)]">{config.code}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--sea-ink-soft)]">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            {t('landing.questions', { count: totalQuestions })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BarChart3 className="h-3.5 w-3.5" />
            {sortedDomains.length} {t('landing.domains')}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {config.timeLimitMin} min
          </span>
        </div>

        <div className="space-y-2.5">
          {sortedDomains.map((domain) => (
            <div key={domain.domainNumber} className="space-y-1">
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="min-w-0 text-[var(--sea-ink)]">
                  <span className="mr-1.5 font-mono text-xs text-[var(--sea-ink-soft)]">D{domain.domainNumber}</span>
                  {domain.label}
                </span>
                <span className="shrink-0 font-mono text-xs font-bold text-[var(--sea-ink-soft)]">{domain.count}</span>
              </div>
              <Progress value={domain.count} max={maxCount} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 pt-1 sm:flex-row">
          <Button asChild variant="primary" className="flex-1">
            <Link to="/exam/$code" params={{ code: examKey }}>
              <Play className="h-4 w-4" />
              {t('landing.mockExam', { count: config.questionCount })}
            </Link>
          </Button>
          <Button asChild variant="secondary" className="flex-1">
            <Link to="/practice/$code" params={{ code: examKey }}>
              <Dumbbell className="h-4 w-4" />
              {t('landing.practice')}
            </Link>
          </Button>
        </div>

        <Button asChild variant="secondary" className="w-full">
          <Link to="/study/$code" params={{ code: examKey }}>
            <BookOpen className="h-4 w-4" />
            {t('study.title')} — {t('study.subtitle')}
          </Link>
        </Button>

        <div className="border-t border-[var(--line)] pt-4">
          <Button asChild variant="outline" className="w-full">
            <Link to="/diagnostic/$code" params={{ code: examKey }}>
              <Target className="h-4 w-4" />
              {t('diagnostic.title')} — {t('diagnostic.subtitle')}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function HomePage() {
  const { t } = useI18n()
  const examKeys = getAllExamCodes()
  const [stats] = useState(() => {
    try {
      return getUserStats()
    } catch {
      return { examCount: 0, wrongCount: 0, bestScore: null }
    }
  })

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16">
        <section className="rise-in pb-10 pt-12 text-center sm:pt-16">
          <Badge variant="brand" className="mb-4 px-3 py-1 text-xs">
            {t('site.tagline')}
          </Badge>
          <h1 className="mb-3 font-[Fraunces,Georgia,serif] text-[clamp(1.75rem,5vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--sea-ink)]">
            {t('landing.title')}
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-[var(--sea-ink-soft)]">
            {t('landing.subtitle')}
          </p>
        </section>

        {stats.examCount > 0 && (
          <p className="rise-in mb-6 text-center text-sm text-[var(--sea-ink-soft)]" style={{ animationDelay: '50ms' }}>
            {t('settings.stats', { exams: stats.examCount, wrong: stats.wrongCount })}
            {stats.bestScore !== null && ` · ${t('settings.bestScore', { score: stats.bestScore })}`}
          </p>
        )}

        <div className="mx-auto max-w-xl space-y-6">
          {examKeys.map((key, i) => (
            <ExamCard key={key} examKey={key} delay={100 + i * 50} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
