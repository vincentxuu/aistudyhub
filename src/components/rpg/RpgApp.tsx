import { BookOpen, Flame, Map as MapIcon, Shield, Sparkles } from '@sketchyicons/react'
import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { type TranslationKey, useI18n } from '../../i18n/index.ts'
import { getAvailableRpgQuests, RPG_QUESTS } from '../../lib/rpg/content.ts'
import {
  advanceRun,
  getConceptStatus,
  getDueQuestions,
  type RpgQuestion,
  reconcileQuestions,
  setDraft,
  startRun,
  submitAnswer,
  useHint,
} from '../../lib/rpg/engine.ts'
import { useRpgSave } from '../../lib/rpg/useRpgSave.ts'
import type { RpgView } from '../../routes/rpg.$code.tsx'
import { fetchRpgQuestions } from '../../server/api/rpg.ts'
import { QuestionView } from '../exam/QuestionView.tsx'
import { Badge } from '../ui/badge.tsx'
import { Button } from '../ui/button.tsx'
import { Card } from '../ui/card.tsx'
import { Progress } from '../ui/progress.tsx'
import { PixelScene } from './PixelScene.tsx'
import { WorldMap } from './WorldMap.tsx'

type Quest = (typeof RPG_QUESTS)[number]
const regionKeys: TranslationKey[] = ['rpg.region1', 'rpg.region2', 'rpg.region3', 'rpg.region4', 'rpg.region5']
const navigation = [
  { id: 'map', key: 'rpg.map', Icon: MapIcon },
  { id: 'quests', key: 'rpg.quests', Icon: BookOpen },
  { id: 'camp', key: 'rpg.camp', Icon: Flame },
  { id: 'skills', key: 'rpg.skills', Icon: Sparkles },
] as const
const panel = 'rounded-none border-[var(--line)] shadow-none'

export function RpgApp({
  code,
  view,
  questId,
  onNavigate,
}: {
  code: string
  view: RpgView
  questId?: string
  onNavigate: (view: RpgView, quest?: string) => void
}) {
  const { t, locale, setLocale } = useI18n()
  const store = useRpgSave(code.toUpperCase())
  const { save, ready, readOnly, storageError, update } = store
  const [questions, setQuestions] = useState<RpgQuestion[]>([])
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [retry, setRetry] = useState(0)
  const [region, setRegion] = useState(1)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(0)
  const [notice, setNotice] = useState('')
  const [clock, setClock] = useState(Date.now())
  const fileInput = useRef<HTMLInputElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const supported = code.toLowerCase() === 'aif-c01'

  useEffect(() => {
    if (!supported) return
    let cancelled = false
    setLoadState('loading')
    fetchRpgQuestions({ data: { lang: locale } })
      .then((result) => {
        if (cancelled) return
        if (!result.ok) {
          setLoadState('error')
          return
        }
        setQuestions(result.questions)
        setLoadState('ready')
      })
      .catch(() => {
        if (!cancelled) setLoadState('error')
      })
    return () => {
      cancelled = true
    }
  }, [locale, retry, supported])

  useEffect(() => {
    if (ready && loadState === 'ready' && !readOnly)
      update((current) => reconcileQuestions(current, questions, Date.now()))
  }, [ready, loadState, readOnly, questions, update])

  useEffect(() => {
    const timer = window.setInterval(() => setClock(Date.now()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    heading.current?.focus()
  }, [view])

  const run = save.activeRun
  const busy = run?.status === 'active'
  const due = getDueQuestions(save, questions, clock)
  const questQuestions = (quest: Quest) => questions.filter((q) => quest.familyIds.includes(q.familyId))
  const availableQuests = getAvailableRpgQuests(questions)
  const chosenQuest = RPG_QUESTS.find((quest) => quest.id === (view === 'battle' && run ? run.questId : questId))
  const regions = regionKeys.map((key, index) => ({
    id: index + 1,
    name: t(key),
    available: availableQuests.some((q) => q.domainNumber === index + 1),
  }))

  function begin(quest: Quest) {
    if (readOnly || busy) return
    const pool = questQuestions(quest)
    if (pool.length === 0) return
    update((current) => startRun(current, quest.id, pool.slice(0, 5), Date.now()))
    onNavigate('battle', quest.id)
  }

  function endRun() {
    if (window.confirm(t('rpg.abandonConfirm'))) {
      update((current) => ({ ...current, activeRun: null }))
      onNavigate('map')
    }
  }

  function exportFile() {
    const blob = new Blob([store.exportSave()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `knowledge-expedition-${code}.json`
    anchor.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  function questCard(quest: Quest) {
    const pool = questQuestions(quest)
    return (
      <Card key={quest.id} className={`${panel} p-5`}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-[var(--sea-ink-soft)]">{t(regionKeys[quest.domainNumber - 1])}</span>
          <Badge variant={save.completedQuests.includes(quest.id) ? 'success' : 'secondary'}>
            {t(save.completedQuests.includes(quest.id) ? 'rpg.completed' : 'rpg.new')}
          </Badge>
        </div>
        <h3 className="mb-2 text-lg font-bold text-[var(--sea-ink)]">{quest.title[locale]}</h3>
        <p className="mb-4 text-sm leading-relaxed">{quest.description[locale]}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs">{t('rpg.questions', { count: Math.min(pool.length, 5) })}</span>
          <Button
            variant="primary"
            className="rounded-none"
            disabled={readOnly || busy || pool.length === 0}
            onClick={() => begin(quest)}
          >
            {t('rpg.start')}
          </Button>
        </div>
      </Card>
    )
  }

  const title =
    view === 'map'
      ? t('rpg.subtitle')
      : view === 'camp'
        ? t('rpg.campTitle')
        : view === 'skills'
          ? t('rpg.skillsTitle')
          : view === 'battle'
            ? (chosenQuest?.title[locale] ?? t('rpg.camp'))
            : t('rpg.quests')

  return (
    <div className="rpg-theme min-h-screen bg-[var(--bg-base)] text-[var(--sea-ink-soft)] selection:bg-[var(--selected-bg)] motion-reduce:[&_*]:animate-none motion-reduce:[&_*]:transition-none">
      <div className="mx-auto min-h-screen max-w-[1600px] lg:grid lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="border-b border-[var(--line)] p-4 lg:border-b-0 lg:border-r lg:p-6">
          <Link to="/" className="flex items-center gap-3 text-[var(--sea-ink)]">
            <Shield className="h-9 w-9" />
            <span className="font-[Fraunces,Georgia,serif] text-xl font-bold">{t('rpg.title')}</span>
          </Link>
          <Card className={`${panel} my-7 hidden p-4 lg:block`}>
            <p className="mb-2 font-bold text-[var(--sea-ink)]">{t('rpg.adventurer')}</p>
            <p className="mb-3 text-sm">{t('rpg.level', { level: Math.floor(save.xp / 100) + 1 })}</p>
            <Progress value={save.xp % 100} max={100} />
            <p className="mt-2 text-xs text-[var(--sea-ink)]">{t('rpg.xp', { xp: save.xp })}</p>
          </Card>
          <nav
            aria-label={t('rpg.title')}
            className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-0 lg:grid-cols-1 lg:gap-3"
          >
            {navigation.map(({ id, key, Icon }) => (
              <Button
                key={id}
                variant={view === id ? 'outline' : 'ghost'}
                aria-current={view === id ? 'page' : undefined}
                className={`h-11 justify-start rounded-none ${view === id ? 'border-[var(--selected-border)] text-[var(--sea-ink)]' : ''}`}
                onClick={() => onNavigate(id)}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {t(key)}
                {id === 'camp' && due.length > 0 ? <span className="ml-auto">{due.length}</span> : null}
              </Button>
            ))}
          </nav>
          <Button asChild variant="ghost" className="mt-5 justify-start px-0">
            <Link to="/">{t('rpg.back')}</Link>
          </Button>
        </aside>
        <div className="min-w-0">
          <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-5 py-3 lg:px-8">
            <span className="text-xs">{t('rpg.title')} / AIF-C01</span>
            <div className="flex items-center gap-5">
              <span className="text-sm text-[var(--sea-ink)]">{t('rpg.xp', { xp: save.xp })}</span>
              <Button variant="ghost" size="sm" onClick={() => setLocale(locale === 'en' ? 'zh-TW' : 'en')}>
                {t('rpg.language')}
              </Button>
            </div>
          </header>
          <main className="p-5 lg:p-8">
            <h1
              ref={heading}
              tabIndex={-1}
              className="mb-3 font-[Fraunces,Georgia,serif] text-2xl leading-relaxed text-[var(--sea-ink)] outline-none sm:text-3xl"
            >
              {title}
            </h1>
            <p className="mb-7 text-sm">
              {view === 'camp'
                ? t('rpg.campDescription')
                : view === 'skills'
                  ? t('rpg.skillsDescription')
                  : t('rpg.regionDescription')}
            </p>
            {readOnly ? (
              <p role="status" className="mb-5 border border-[var(--flagged-border)] p-3 text-sm">
                {t('rpg.readOnly')}
              </p>
            ) : null}
            {storageError ? (
              <div role="alert" className="mb-5 border border-[var(--wrong-border)] p-3 text-sm">
                <p>{t('rpg.storageError')}</p>
                <Button onClick={exportFile} className="mt-2">
                  {t('rpg.export')}
                </Button>
              </div>
            ) : null}
            {notice ? (
              <p role="status" className="mb-4">
                {notice}
              </p>
            ) : null}
            {!supported ? (
              <p>{t('rpg.unsupported')}</p>
            ) : !ready || (loadState === 'loading' && view !== 'camp') ? (
              <p role="status">{t('rpg.loading')}</p>
            ) : loadState === 'error' && view !== 'camp' ? (
              <div role="alert">
                <p>{t('rpg.loadError')}</p>
                <Button className="mt-4" onClick={() => setRetry((n) => n + 1)}>
                  {t('rpg.retry')}
                </Button>
              </div>
            ) : questions.length === 0 && view !== 'camp' ? (
              <p>{t('rpg.empty')}</p>
            ) : (
              <>
                {busy && view !== 'battle' ? (
                  <Card
                    className={`${panel} mb-5 flex flex-wrap items-center justify-between gap-3 border-[var(--selected-border)] p-4`}
                  >
                    <p className="text-sm">{t('rpg.activeNotice')}</p>
                    <div className="flex gap-2">
                      <Button variant="primary" onClick={() => onNavigate('battle', run.questId)}>
                        {t('rpg.resume')}
                      </Button>
                      <Button disabled={readOnly} onClick={endRun}>
                        {t('rpg.abandon')}
                      </Button>
                    </div>
                  </Card>
                ) : null}
                {view === 'map' ? (
                  <div className="grid gap-5 xl:grid-cols-[minmax(0,1.8fr)_minmax(250px,1fr)]">
                    <Card className={`${panel} overflow-hidden`}>
                      <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3 text-sm">
                        <span>{t('rpg.map')}</span>
                        <span className="text-[var(--sea-ink)]">{t(regionKeys[region - 1])}</span>
                      </div>
                      <WorldMap regions={regions} selected={region} onSelect={setRegion} />
                      <div className="border-t border-[var(--line)] p-4 text-sm">{t('rpg.resultNote')}</div>
                    </Card>
                    <section aria-label={t(regionKeys[region - 1])} className="space-y-4">
                      <h2 className="text-xl font-bold text-[var(--sea-ink)]">{t(regionKeys[region - 1])}</h2>
                      {availableQuests.filter((q) => q.domainNumber === region).map(questCard)}
                      {!availableQuests.some((q) => q.domainNumber === region) ? (
                        <Card className={`${panel} p-5`}>
                          <Badge>{t('rpg.preparing')}</Badge>
                          <p className="mt-4 text-sm leading-relaxed">{t('rpg.regionEmpty')}</p>
                        </Card>
                      ) : null}
                    </section>
                  </div>
                ) : null}
                {view === 'quests' ? (
                  <section>
                    <label htmlFor="rpg-search" className="sr-only">
                      {t('rpg.search')}
                    </label>
                    <input
                      id="rpg-search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder={t('rpg.search')}
                      className="mb-4 w-full border border-[var(--line)] bg-[var(--bg-subtle)] p-3 text-[var(--sea-ink)] focus-visible:outline-2 focus-visible:outline-[var(--sea-ink)]"
                    />
                    <div className="mb-5 flex flex-wrap gap-2">
                      <Button
                        aria-pressed={filter === 0}
                        variant={filter === 0 ? 'primary' : 'secondary'}
                        onClick={() => setFilter(0)}
                      >
                        {t('rpg.all')}
                      </Button>
                      {regions.map((r) => (
                        <Button
                          key={r.id}
                          aria-pressed={filter === r.id}
                          variant={filter === r.id ? 'primary' : 'secondary'}
                          onClick={() => setFilter(r.id)}
                        >
                          {r.name}
                        </Button>
                      ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {availableQuests
                        .filter(
                          (q) =>
                            (!filter || q.domainNumber === filter) &&
                            `${q.title[locale]} ${q.description[locale]}`.toLowerCase().includes(search.toLowerCase()),
                        )
                        .map(questCard)}
                    </div>
                    {!availableQuests.some(
                      (q) =>
                        (!filter || q.domainNumber === filter) &&
                        `${q.title[locale]} ${q.description[locale]}`.toLowerCase().includes(search.toLowerCase()),
                    ) ? (
                      <p>{t('rpg.noResults')}</p>
                    ) : null}
                  </section>
                ) : null}
                {view === 'battle' ? (
                  <Battle
                    save={save}
                    questions={questions}
                    readOnly={readOnly}
                    update={update}
                    quest={chosenQuest}
                    onEnd={endRun}
                    onMap={() => onNavigate('map')}
                  />
                ) : null}
                {view === 'camp' ? (
                  <div className="grid gap-5 xl:grid-cols-2">
                    <Card className={`${panel} overflow-hidden`}>
                      <PixelScene variant="camp" />
                      <div className="space-y-4 p-5">
                        <h2 className="text-xl font-bold text-[var(--sea-ink)]">
                          {t('rpg.due', { count: due.length })}
                        </h2>
                        {due.length > 0 ? (
                          <Button
                            variant="primary"
                            disabled={readOnly || busy}
                            onClick={() => {
                              update((current) => startRun(current, 'camp', due.slice(0, 5), Date.now(), true))
                              onNavigate('battle', 'camp')
                            }}
                          >
                            {t('rpg.review')}
                          </Button>
                        ) : (
                          <p className="text-sm leading-relaxed">
                            {t(
                              loadState === 'error'
                                ? 'rpg.loadError'
                                : loadState === 'loading'
                                  ? 'rpg.loading'
                                  : 'rpg.noDue',
                            )}
                          </p>
                        )}
                      </div>
                    </Card>
                    <Card className={`${panel} space-y-4 p-5`}>
                      <h2 className="text-xl font-bold text-[var(--sea-ink)]">{t('rpg.backup')}</h2>
                      <p className="text-sm">{t('rpg.localOnly')}</p>
                      {Object.values(save.reviews).some((item) => item.dueAt > clock) ? (
                        <p className="text-sm text-[var(--sea-ink)]">
                          {t('rpg.nextDue', {
                            date: new Date(
                              Math.min(
                                ...Object.values(save.reviews)
                                  .filter((item) => item.dueAt > clock)
                                  .map((item) => item.dueAt),
                              ),
                            ).toLocaleString(locale),
                          })}
                        </p>
                      ) : null}
                      <div className="flex flex-wrap gap-3">
                        <Button onClick={exportFile}>{t('rpg.export')}</Button>
                        <Button disabled={readOnly} onClick={() => fileInput.current?.click()}>
                          {t('rpg.import')}
                        </Button>
                      </div>
                      <input
                        ref={fileInput}
                        type="file"
                        accept="application/json,.json"
                        aria-label={t('rpg.import')}
                        className="hidden"
                        onChange={async (event) => {
                          const file = event.target.files?.[0]
                          event.target.value = ''
                          if (!file) return
                          if (file.size > 5_000_000) {
                            setNotice(t('rpg.importError'))
                            return
                          }
                          if (!window.confirm(t('rpg.importConfirm'))) return
                          try {
                            const ok = store.importSave(await file.text())
                            setNotice(t(ok ? 'rpg.imported' : 'rpg.importError'))
                          } catch {
                            setNotice(t('rpg.importError'))
                          }
                        }}
                      />
                      <div className="border-t border-[var(--line)] pt-5">
                        <Button
                          variant="destructive"
                          disabled={readOnly}
                          onClick={() => {
                            if (window.confirm(t('rpg.resetConfirm'))) {
                              store.reset()
                              setNotice('')
                            }
                          }}
                        >
                          {t('rpg.reset')}
                        </Button>
                      </div>
                    </Card>
                  </div>
                ) : null}
                {view === 'skills' ? (
                  <section>
                    <div className="grid gap-4 md:grid-cols-2">
                      {availableQuests.map((quest) => {
                        const state = getConceptStatus(save, quest.conceptId, questions)
                        const statusKeys: Record<string, TranslationKey> = {
                          unexplored: 'rpg.new',
                          learning: 'rpg.learning',
                          recall: 'rpg.pending',
                          mastered: 'rpg.mastered',
                          reinforce: 'rpg.needsReview',
                          insufficient: 'rpg.insufficient',
                        }
                        return (
                          <Card key={quest.id} className={`${panel} space-y-4 p-5`}>
                            <Badge>{t(statusKeys[state] ?? 'rpg.pending')}</Badge>
                            <h2 className="text-lg font-bold text-[var(--sea-ink)]">{quest.title[locale]}</h2>
                            <p className="text-sm">{quest.description[locale]}</p>
                            <Button disabled={busy || readOnly} onClick={() => begin(quest)}>
                              {t('rpg.practiceSkill')}
                            </Button>
                          </Card>
                        )
                      })}
                    </div>
                    <p className="my-5 text-sm">{t('rpg.resultNote')}</p>
                    <Button asChild>
                      <Link to="/exam/$code" params={{ code }}>
                        {t('rpg.toExam')}
                      </Link>
                    </Button>
                  </section>
                ) : null}
              </>
            )}
            {ready && !storageError && !readOnly ? <p className="mt-8 text-xs">{t('rpg.saved')}</p> : null}
          </main>
        </div>
      </div>
    </div>
  )
}

function Battle({
  save,
  questions,
  readOnly,
  update,
  quest,
  onEnd,
  onMap,
}: {
  save: ReturnType<typeof useRpgSave>['save']
  questions: RpgQuestion[]
  readOnly: boolean
  update: ReturnType<typeof useRpgSave>['update']
  quest?: Quest
  onEnd: () => void
  onMap: () => void
}) {
  const { t, locale } = useI18n()
  const [sceneOpen, setSceneOpen] = useState(false)
  const run = save.activeRun
  if (!run)
    return (
      <div>
        <p>{t('rpg.invalidQuest')}</p>
        <Button className="mt-4" onClick={onMap}>
          {t('rpg.returnMap')}
        </Button>
      </div>
    )
  const correctCount = run.attempts.filter((attempt) => attempt.correct).length
  if (run.status === 'completed')
    return (
      <Card className={`${panel} mx-auto max-w-2xl overflow-hidden`}>
        <PixelScene variant="camp" />
        <div className="space-y-5 p-6">
          <h2 className="text-2xl text-[var(--sea-ink)]">{t(run.victory ? 'rpg.victory' : 'rpg.tryAgain')}</h2>
          <p>{t('rpg.result', { correct: correctCount, total: run.questions.length })}</p>
          <p className="text-sm">{t('rpg.resultNote')}</p>
          <Button variant="primary" onClick={onMap}>
            {t('rpg.returnMap')}
          </Button>
        </div>
      </Card>
    )
  const original = run.questions[run.index]
  const question =
    questions.find(
      (q) =>
        q.familyId === original.familyId &&
        q.contentVersion === original.contentVersion &&
        q.type === original.type &&
        JSON.stringify(q.correctAnswers) === JSON.stringify(original.correctAnswers) &&
        JSON.stringify(q.options.map((option) => option.label)) ===
          JSON.stringify(original.options.map((option) => option.label)),
    ) ?? original
  const changed = !questions.some(
    (q) => q.familyId === original.familyId && q.contentVersion === original.contentVersion,
  )
  const attempt = run.attempts.find((a) => a.questionId === original.id)
  const draft = run.drafts[original.id] ?? []
  const hinted = run.hints.includes(original.id)
  const hp = Math.max(0, Math.round(100 - (correctCount / run.questions.length) * 100))
  function select(label: string) {
    update((current) =>
      setDraft(
        current,
        question.type === 'multi'
          ? draft.includes(label)
            ? draft.filter((x) => x !== label)
            : [...draft, label]
          : [label],
      ),
    )
  }
  return (
    <div className="grid items-start gap-5 xl:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.4fr)]">
      <Card className={`${panel} overflow-hidden`}>
        <Button
          className="m-3 lg:hidden"
          aria-expanded={sceneOpen}
          aria-controls="rpg-battle-scene"
          onClick={() => setSceneOpen((open) => !open)}
        >
          {t(sceneOpen ? 'rpg.hideScene' : 'rpg.showScene')}
        </Button>
        <div id="rpg-battle-scene" className={sceneOpen ? 'block' : 'hidden lg:block'}>
          <PixelScene variant="battle" enemyHp={hp} />
        </div>
        <div className="space-y-4 p-5">
          <div className="flex justify-between gap-3 text-xs">
            <span>{t('rpg.hp', { hp })}</span>
            <span>{t('rpg.shield', { count: Math.max(0, 5 - (run.attempts.length - correctCount)) })}</span>
          </div>
          <h2 className="font-bold text-[var(--sea-ink)]">{quest?.title[locale] ?? t('rpg.camp')}</h2>
          <p className="text-sm leading-relaxed">
            {quest ? `${quest.npc[locale]}：${quest.description[locale]}` : t('rpg.campDescription')}
          </p>
          <p className="text-xs">{t('rpg.question', { current: run.index + 1, total: run.questions.length })}</p>
          <Button disabled={readOnly} variant="secondary" onClick={onEnd}>
            {t('rpg.abandon')}
          </Button>
        </div>
      </Card>
      <Card className={`${panel} p-5 sm:p-6`}>
        {changed ? (
          <div role="alert">
            <p>{t('rpg.contentChanged')}</p>
            <Button disabled={readOnly} onClick={onEnd}>
              {t('rpg.abandon')}
            </Button>
          </div>
        ) : (
          <>
            <QuestionView
              key={original.id}
              question={question}
              selectedAnswers={draft}
              onSelectOption={select}
              onOrderChange={(order) => update((current) => setDraft(current, order))}
              disabled={readOnly || Boolean(attempt)}
              showResult={Boolean(attempt)}
              questionNumber={run.index + 1}
            />
            {hinted ? (
              <div className="my-5 border-l-2 border-[var(--selected-border)] pl-4 text-sm">
                <p>{question.hint ?? t('rpg.noHint')}</p>
                <p className="mt-2 text-xs">{t('rpg.hintUsed')}</p>
              </div>
            ) : null}
            {attempt ? (
              <div aria-live="polite" className="mt-5 space-y-4 border-t border-[var(--line)] pt-5">
                <h3 className={`font-bold ${attempt.correct ? 'text-[var(--correct)]' : 'text-[var(--wrong)]'}`}>
                  {t(attempt.correct ? 'rpg.correct' : 'rpg.incorrect')}
                </h3>
                <h4 className="font-semibold text-[var(--sea-ink)]">{t('rpg.explanation')}</h4>
                <p className="whitespace-pre-line text-sm leading-7">
                  {question.plainExplanation ?? question.explanation}
                </p>
                {question.trap ? (
                  <p className="text-sm leading-relaxed">
                    {t('rpg.trap')}：{question.trap}
                  </p>
                ) : null}
                <Button variant="primary" disabled={readOnly} onClick={() => update(advanceRun)}>
                  {t(run.index === run.questions.length - 1 ? 'rpg.finish' : 'rpg.next')}
                </Button>
              </div>
            ) : (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--line)] pt-5">
                <Button
                  variant="primary"
                  disabled={readOnly || draft.length === 0 || draft.some((value) => !value)}
                  onClick={() => update((current) => submitAnswer(current, Date.now()))}
                >
                  {t('rpg.submit')}
                </Button>
                <Button disabled={readOnly || hinted || !question.hint} onClick={() => update(useHint)}>
                  {t('rpg.hint')}
                </Button>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  )
}
