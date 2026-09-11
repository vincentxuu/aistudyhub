import { BarChart3, BookOpen, Clock, Dumbbell, Play, Target } from '@sketchyicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import { useI18n } from '../i18n/index.ts'
import { getDomainCounts, getExamQuestions } from '../lib/questions.ts'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const { t } = useI18n()
  const examQuestions = getExamQuestions('AIF-C01')
  const domainCounts = getDomainCounts('AIF-C01')
  const totalQuestions = examQuestions.length
  const sortedDomains = Object.entries(domainCounts).sort(([a], [b]) => a.localeCompare(b))
  const maxCount = Math.max(...Object.values(domainCounts))

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16">
        {/* Hero */}
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

        {/* AIF-C01 Exam Card */}
        <Card className="rise-in mx-auto max-w-xl" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--bg-subtle)] text-sm font-black text-[var(--sea-ink)]">
                AWS
              </span>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-base sm:text-lg">AWS Certified AI Practitioner</CardTitle>
                <p className="mt-0.5 text-sm text-[var(--sea-ink-soft)]">AIF-C01</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-[var(--sea-ink-soft)]">
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                {t('landing.questions', { count: totalQuestions })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 className="h-3.5 w-3.5" />5 {t('landing.domains')}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                90 min
              </span>
            </div>

            {/* Domain list */}
            <div className="space-y-2.5">
              {sortedDomains.map(([domain, count], i) => (
                <div key={domain} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--sea-ink)]">
                      <span className="mr-1.5 font-mono text-xs text-[var(--sea-ink-soft)]">D{i + 1}</span>
                      {domain}
                    </span>
                    <span className="font-mono text-xs font-bold text-[var(--sea-ink-soft)]">{count}</span>
                  </div>
                  <Progress value={count} max={maxCount} />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2.5 pt-1 sm:flex-row">
              <Button asChild variant="primary" className="flex-1">
                <Link to="/exam/$code" params={{ code: 'aif-c01' }}>
                  <Play className="h-4 w-4" />
                  {t('landing.mockExam', { count: 65 })}
                </Link>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <Link to="/practice/$code" params={{ code: 'aif-c01' }}>
                  <Dumbbell className="h-4 w-4" />
                  {t('landing.practice')}
                </Link>
              </Button>
            </div>

            {/* Study Mode */}
            <Button asChild variant="secondary" className="w-full">
              <Link to="/study/$code" params={{ code: 'aif-c01' }}>
                <BookOpen className="h-4 w-4" />
                {t('study.title')} — {t('study.subtitle')}
              </Link>
            </Button>

            {/* Diagnostic */}
            <div className="border-t border-[var(--line)] pt-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/diagnostic/$code" params={{ code: 'aif-c01' }}>
                  <Target className="h-4 w-4" />
                  {t('diagnostic.title')} — {t('diagnostic.subtitle')}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
