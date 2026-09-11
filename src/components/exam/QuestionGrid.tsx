import { useI18n } from '../../i18n/index.ts'
import type { Question } from '../../lib/question-types.ts'
import { cn } from '../../lib/utils.ts'

interface QuestionGridProps {
  questions: Question[]
  answers: Record<string, string[]>
  flagged: Set<string>
  currentIndex: number
  onSelect: (index: number) => void
  compact?: boolean
}

export function QuestionGrid({
  questions,
  answers,
  flagged,
  currentIndex,
  onSelect,
  compact = false,
}: QuestionGridProps) {
  const { t } = useI18n()
  const size = compact ? 'h-7 w-7 text-[10px]' : 'h-8 w-8 text-xs'

  return (
    <div>
      <div className={cn('flex flex-wrap', compact ? 'gap-1' : 'gap-1.5')}>
        {questions.map((q, i) => {
          const answered = !!answers[q.id]
          const isFlagged = flagged.has(q.id)
          const isCurrent = i === currentIndex
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelect(i)}
              className={cn(
                'flex items-center justify-center rounded font-bold transition-all duration-150',
                size,
                isCurrent && 'ring-2 ring-[var(--lagoon)] ring-offset-1',
                answered
                  ? 'bg-[var(--lagoon)] text-[var(--palm)]'
                  : 'border border-[var(--line)] text-[var(--sea-ink-soft)]',
                isFlagged && !isCurrent && 'ring-2 ring-[var(--flagged)]',
              )}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
      <div
        className={cn(
          'mt-2 flex items-center gap-3',
          compact ? 'text-[10px]' : 'text-xs',
          'text-[var(--sea-ink-soft)]',
        )}
      >
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-sm bg-[var(--lagoon)]" /> {t('exam.answered')}
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-sm border border-[var(--line)]" /> {t('exam.unanswered')}
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-sm ring-1 ring-[var(--flagged)]" /> {t('exam.review')}
        </span>
      </div>
    </div>
  )
}
