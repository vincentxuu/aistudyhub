import { ArrowLeft, BarChart3, Clock, Target, TrendingUp } from '@sketchyicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { Badge } from '../components/ui/badge.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.tsx'
import { Progress } from '../components/ui/progress.tsx'
import { useI18n } from '../i18n/index.ts'
import type { ExamResult } from '../lib/questions.ts'
import { cn } from '../lib/utils.ts'

export const Route = createFileRoute('/stats')({ component: StatsPage })

function loadExamResults(): ExamResult[] {
  try {
    return JSON.parse(localStorage.getItem('exam-results') || '[]')
  } catch {
    return []
  }
}

function formatDuration(ms: number): string {
  const totalSec = Math.floor(ms / 1000)
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function ScoreTrendChart({ results }: { results: ExamResult[] }) {
  if (results.length < 2) return null

  const sorted = [...results].sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())
  const recent = sorted.slice(-20)

  const padding = { top: 20, right: 16, bottom: 32, left: 36 }
  const width = 500
  const height = 200
  const plotW = width - padding.left - padding.right
  const plotH = height - padding.top - padding.bottom

  const minScore = Math.max(0, Math.min(...recent.map((r) => r.score)) - 10)
  const maxScore = Math.min(100, Math.max(...recent.map((r) => r.score)) + 10)
  const range = maxScore - minScore || 1

  const points = recent.map((r, i) => ({
    x: padding.left + (i / (recent.length - 1)) * plotW,
    y: padding.top + plotH - ((r.score - minScore) / range) * plotH,
    score: r.score,
    date: formatDate(r.completedAt),
    passed: r.score >= 70,
  }))

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const passY = padding.top + plotH - ((70 - minScore) / range) * plotH

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      {[minScore, Math.round((minScore + maxScore) / 2), maxScore].map((val) => {
        const y = padding.top + plotH - ((val - minScore) / range) * plotH
        return (
          <g key={val}>
            <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="var(--line)" strokeWidth="1" />
            <text x={padding.left - 4} y={y + 4} textAnchor="end" fill="var(--sea-ink-soft)" fontSize="10">
              {val}%
            </text>
          </g>
        )
      })}

      {/* Pass line at 70% */}
      {passY >= padding.top && passY <= padding.top + plotH && (
        <line
          x1={padding.left}
          y1={passY}
          x2={width - padding.right}
          y2={passY}
          stroke="var(--correct)"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.5"
        />
      )}

      {/* Line */}
      <path
        d={pathD}
        fill="none"
        stroke="var(--lagoon)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      {points.map((p) => (
        <circle
          key={`${p.x}-${p.y}`}
          cx={p.x}
          cy={p.y}
          r="4"
          fill={p.passed ? 'var(--correct)' : 'var(--wrong)'}
          stroke="var(--surface)"
          strokeWidth="2"
        />
      ))}

      {/* Date labels */}
      {points
        .filter(
          (_, i) => i === 0 || i === points.length - 1 || (points.length > 5 && i === Math.floor(points.length / 2)),
        )
        .map((p) => (
          <text
            key={`label-${p.x}`}
            x={p.x}
            y={height - 8}
            textAnchor="middle"
            fill="var(--sea-ink-soft)"
            fontSize="10"
          >
            {p.date}
          </text>
        ))}
    </svg>
  )
}

function StatsPage() {
  const { t } = useI18n()
  const [results] = useState(loadExamResults)

  const totalExams = results.length
  const totalQuestions = results.reduce((sum, r) => sum + r.totalQuestions, 0)
  const totalCorrect = results.reduce((sum, r) => sum + r.correctCount, 0)
  const avgScore = totalExams > 0 ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / totalExams) : 0
  const totalTimeMs = results.reduce((sum, r) => sum + r.timeTakenMs, 0)

  const domainStats = new Map<string, { correct: number; total: number }>()
  for (const r of results) {
    for (const d of r.domainBreakdown) {
      const existing = domainStats.get(d.domain) || { correct: 0, total: 0 }
      existing.correct += d.correct
      existing.total += d.total
      domainStats.set(d.domain, existing)
    }
  }
  const domainEntries = [...domainStats.entries()]
    .map(([domain, { correct, total }]) => ({
      domain,
      correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    }))
    .sort((a, b) => a.percentage - b.percentage)

  const weakDomains = domainEntries.filter((d) => d.percentage < 70)
  const recentResults = [...results]
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 10)

  if (totalExams === 0) {
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
              <BarChart3 className="h-6 w-6" /> {t('stats.title')}
            </h1>
          </div>
          <Card className="rise-in" style={{ animationDelay: '80ms' }}>
            <CardContent className="py-12 text-center">
              <Target className="mx-auto mb-4 h-12 w-12 text-[var(--sea-ink-soft)]" />
              <p className="text-[var(--sea-ink-soft)]">{t('stats.empty')}</p>
              <Button asChild variant="primary" className="mt-6">
                <Link to="/">{t('stats.startExam')}</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </>
    )
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
            <BarChart3 className="h-6 w-6" /> {t('stats.title')}
          </h1>
        </div>

        {/* Summary cards */}
        <div className="rise-in grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: '80ms' }}>
          <Card>
            <CardContent className="px-4 py-4 text-center">
              <p className="text-2xl font-black tabular-nums text-[var(--sea-ink)]">{totalExams}</p>
              <p className="mt-1 text-xs text-[var(--sea-ink-soft)]">{t('stats.exams')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-4 py-4 text-center">
              <p
                className={cn(
                  'text-2xl font-black tabular-nums',
                  avgScore >= 70 ? 'text-[var(--correct)]' : 'text-[var(--wrong)]',
                )}
              >
                {avgScore}%
              </p>
              <p className="mt-1 text-xs text-[var(--sea-ink-soft)]">{t('stats.avgScore')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-4 py-4 text-center">
              <p className="text-2xl font-black tabular-nums text-[var(--sea-ink)]">{totalQuestions}</p>
              <p className="mt-1 text-xs text-[var(--sea-ink-soft)]">{t('stats.questions')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-4 py-4 text-center">
              <p className="text-2xl font-black tabular-nums text-[var(--sea-ink)]">{formatDuration(totalTimeMs)}</p>
              <p className="mt-1 text-xs text-[var(--sea-ink-soft)]">{t('stats.studyTime')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Accuracy */}
        <Card className="rise-in mt-4" style={{ animationDelay: '120ms' }}>
          <CardContent className="px-4 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--sea-ink-soft)]">{t('stats.accuracy')}</span>
              <span className="font-bold tabular-nums text-[var(--sea-ink)]">
                {totalCorrect}/{totalQuestions} (
                {totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0}%)
              </span>
            </div>
            <Progress value={totalCorrect} max={totalQuestions || 1} className="mt-2" />
          </CardContent>
        </Card>

        {/* Score trend */}
        {results.length >= 2 && (
          <Card className="rise-in mt-4" style={{ animationDelay: '160ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4" /> {t('stats.scoreTrend')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScoreTrendChart results={results} />
            </CardContent>
          </Card>
        )}

        {/* Weak domains */}
        {weakDomains.length > 0 && (
          <Card className="rise-in mt-4" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4 text-[var(--wrong)]" /> {t('stats.weakDomains')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {weakDomains.map((d) => (
                <div key={d.domain} className="space-y-1">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="min-w-0 truncate text-[var(--sea-ink)]">{d.domain}</span>
                    <span className="shrink-0 font-mono text-xs font-bold text-[var(--wrong)]">
                      {d.correct}/{d.total} ({d.percentage}%)
                    </span>
                  </div>
                  <Progress value={d.percentage} variant="danger" />
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Domain strength */}
        <Card className="rise-in mt-4" style={{ animationDelay: '240ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <BarChart3 className="h-4 w-4" /> {t('stats.domainStrength')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {domainEntries.map((d) => (
              <div key={d.domain} className="space-y-1">
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="min-w-0 truncate text-[var(--sea-ink)]">{d.domain}</span>
                  <span
                    className={cn(
                      'shrink-0 font-mono text-xs font-bold tabular-nums',
                      d.percentage >= 70 ? 'text-[var(--correct)]' : 'text-[var(--wrong)]',
                    )}
                  >
                    {d.percentage}%
                  </span>
                </div>
                <Progress value={d.percentage} variant={d.percentage >= 70 ? 'default' : 'danger'} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card className="rise-in mt-4" style={{ animationDelay: '280ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" /> {t('stats.recentActivity')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentResults.map((r) => (
                <div key={r.id} className="flex items-center gap-3 rounded-lg border border-[var(--line)] px-3 py-2.5">
                  <Badge variant={r.score >= 70 ? 'success' : 'destructive'} className="shrink-0 font-mono text-xs">
                    {r.score}%
                  </Badge>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[var(--sea-ink)]">{r.examCode}</p>
                    <p className="text-xs text-[var(--sea-ink-soft)]">
                      {r.correctCount}/{r.totalQuestions} · {formatDuration(r.timeTakenMs)}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-[var(--sea-ink-soft)]">
                    {new Date(r.completedAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
