import { ChevronDown, ChevronUp } from '@sketchyicons/react'
import type { QuestionOption } from '../../lib/question-types.ts'
import { cn } from '../../lib/utils.ts'

interface OrderingQuestionProps {
  options: QuestionOption[]
  order: string[]
  onChange: (order: string[]) => void
  disabled?: boolean
  correctOrder?: string[]
}

export function OrderingQuestion({ options, order, onChange, disabled = false, correctOrder }: OrderingQuestionProps) {
  const labels = order.length === options.length ? order : options.map((option) => option.label)
  const optionByLabel = new Map(options.map((option) => [option.label, option]))

  function move(index: number, delta: -1 | 1) {
    const nextIndex = index + delta
    if (disabled || nextIndex < 0 || nextIndex >= labels.length) return
    const next = [...labels]
    ;[next[index], next[nextIndex]] = [next[nextIndex], next[index]]
    onChange(next)
  }

  return (
    <div className="space-y-2.5">
      {!disabled && <p className="text-xs font-semibold text-[var(--sea-ink-soft)]">使用上下按鈕調整順序</p>}
      {labels.map((label, index) => {
        const option = optionByLabel.get(label)
        if (!option) return null
        const correctAtPosition = correctOrder ? correctOrder[index] === label : undefined
        return (
          <div
            key={label}
            className={cn(
              'flex items-center gap-3 rounded-lg border-[1.5px] px-3 py-3',
              correctAtPosition === true && 'border-[var(--correct-border)] bg-[var(--correct-bg)]',
              correctAtPosition === false && 'border-[var(--wrong-border)] bg-[var(--wrong-bg)]',
              correctAtPosition == null && 'border-[var(--line)] bg-[var(--bg-base)]',
            )}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-xs font-bold text-[var(--sea-ink)]">
              {index + 1}
            </span>
            <span className="min-w-0 flex-1 text-sm leading-relaxed text-[var(--sea-ink)]">{option.text}</span>
            {!disabled && (
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  aria-label={`Move ${option.text} up`}
                  disabled={index === 0}
                  onClick={() => move(index, -1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] disabled:opacity-30"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label={`Move ${option.text} down`}
                  disabled={index === labels.length - 1}
                  onClick={() => move(index, 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] disabled:opacity-30"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
