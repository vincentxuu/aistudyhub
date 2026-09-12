import { Lightbulb } from '@sketchyicons/react'
import { useI18n } from '../../i18n/index.ts'
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
  showTips?: boolean
  questionNumber?: number
  className?: string
}

export function QuestionView({
  question,
  selectedAnswers,
  onSelectOption,
  disabled = false,
  showResult = false,
  showTips = false,
  questionNumber,
  className,
}: QuestionViewProps) {
  const { t } = useI18n()
  const isMulti = question.type === 'multi'
  const isLongStem = question.stem.length > 100

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

      {showTips && isLongStem && (
        <div className="mb-3 flex items-start gap-2 rounded-lg border border-[var(--flagged-border)] bg-[var(--flagged-bg)] px-3 py-2 text-xs text-[var(--sea-ink-soft)]">
          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--flagged)]" />
          <span>{t('tips.longStem')}</span>
        </div>
      )}

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
              feedback={opt.feedback}
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
