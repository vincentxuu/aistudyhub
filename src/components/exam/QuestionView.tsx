import type { Question } from '../../lib/question-types.ts'
import { cn } from '../../lib/utils.ts'
import { Badge } from '../ui/badge.tsx'
import { OptionCard } from './OptionCard.tsx'

export interface QuestionViewProps {
  question: Question
  selectedAnswers: string[]
  onSelectOption: (label: string) => void
  disabled?: boolean
  showResult?: boolean
  questionNumber?: number
  className?: string
}

export function QuestionView({
  question,
  selectedAnswers,
  onSelectOption,
  disabled = false,
  showResult = false,
  questionNumber,
  className,
}: QuestionViewProps) {
  const isMulti = question.type === 'multi'

  return (
    <div className={cn('rise-in', className)}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {questionNumber != null && (
          <Badge variant="default" className="font-mono text-xs">
            Q{questionNumber}
          </Badge>
        )}
        <Badge variant="secondary">D{question.domainNumber}</Badge>
        <span className="text-xs text-[var(--sea-ink-soft)]">{question.domain}</span>
        {question.difficulty > 1 && (
          <Badge variant="warning" className="ml-auto">
            {'★'.repeat(question.difficulty)}
          </Badge>
        )}
      </div>

      <p className="mb-6 text-[clamp(0.95rem,2.2vw,1.15rem)] font-medium leading-[1.7] text-[var(--sea-ink)]">
        {question.stem}
      </p>

      {isMulti && !showResult && (
        <p className="mb-3 text-xs font-semibold text-[var(--sea-ink-soft)]">Select all that apply</p>
      )}

      <div className="space-y-2.5">
        {question.options.map((opt) => {
          const selected = selectedAnswers.includes(opt.label)
          const isCorrectOpt = question.correctAnswers.includes(opt.label)

          let result: 'correct' | 'wrong' | null = null
          if (showResult && selected && !isCorrectOpt) result = 'wrong'
          if (showResult && selected && isCorrectOpt) result = 'correct'

          return (
            <OptionCard
              key={opt.label}
              label={opt.label}
              text={opt.text}
              selected={selected}
              disabled={disabled || showResult}
              result={result}
              isCorrectAnswer={showResult ? isCorrectOpt : undefined}
              isMulti={isMulti}
              onSelect={() => onSelectOption(opt.label)}
            />
          )
        })}
      </div>
    </div>
  )
}
