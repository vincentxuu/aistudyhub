import { CircleCheck, CircleX } from '@sketchyicons/react'
import { cn } from '../../lib/utils.ts'

export interface OptionCardProps {
  label: string
  text: string
  selected: boolean
  disabled: boolean
  result?: 'correct' | 'wrong' | null
  isCorrectAnswer?: boolean
  isMulti?: boolean
  onSelect: () => void
}

function RadioIndicator({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
        checked ? 'border-[var(--lagoon)] bg-[var(--lagoon)]' : 'border-[var(--line)] bg-transparent',
      )}
    >
      {checked && <span className="h-2 w-2 rounded-full bg-white" />}
    </span>
  )
}

function CheckboxIndicator({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        'flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors',
        checked ? 'border-[var(--lagoon)] bg-[var(--lagoon)]' : 'border-[var(--line)] bg-transparent',
      )}
    >
      {checked && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[var(--palm)]">
          <path
            d="M2.5 6L5 8.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  )
}

export function OptionCard({
  label,
  text,
  selected,
  disabled,
  result,
  isCorrectAnswer,
  isMulti,
  onSelect,
}: OptionCardProps) {
  const showResult = result != null || isCorrectAnswer

  let containerClass: string
  let labelClass: string
  let indicator: React.ReactNode

  if (isCorrectAnswer && showResult) {
    containerClass = 'border-[var(--correct-border)] bg-[var(--correct-bg)]'
    labelClass = 'bg-[var(--correct)] text-white'
    indicator = <CircleCheck className="h-5 w-5 text-[var(--correct)]" />
  } else if (result === 'wrong') {
    containerClass = 'border-[var(--wrong-border)] bg-[var(--wrong-bg)]'
    labelClass = 'bg-[var(--wrong)] text-white'
    indicator = <CircleX className="h-5 w-5 text-[var(--wrong)]" />
  } else if (showResult && !isCorrectAnswer) {
    containerClass = 'border-[var(--line)] bg-transparent opacity-60'
    indicator = isMulti ? <CheckboxIndicator checked={false} /> : <RadioIndicator checked={false} />
  } else if (selected) {
    containerClass = 'border-[var(--selected-border)] bg-[var(--selected-bg)] shadow-sm'
    labelClass = 'bg-[var(--lagoon)] text-[var(--palm)]'
    indicator = isMulti ? <CheckboxIndicator checked /> : <RadioIndicator checked />
  } else {
    containerClass = 'border-[var(--line)] bg-transparent hover:border-[var(--hover-border)] hover:bg-[var(--hover-bg)]'
    indicator = isMulti ? <CheckboxIndicator checked={false} /> : <RadioIndicator checked={false} />
  }

  labelClass ??= 'border border-[var(--line)] text-[var(--sea-ink)]'

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        'group flex w-full items-center gap-3 rounded-xl border-[1.5px] px-4 py-3.5 text-left transition-all duration-200',
        containerClass,
        disabled && 'cursor-default',
      )}
    >
      <span className="shrink-0">{indicator}</span>

      <span
        className={cn(
          'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors duration-200',
          labelClass,
        )}
      >
        {label}
      </span>

      <span
        className={cn(
          'text-sm leading-relaxed transition-colors duration-200 text-[var(--sea-ink)]',
          selected && !showResult && 'font-semibold',
        )}
      >
        {text}
      </span>
    </button>
  )
}
