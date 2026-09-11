import { Clock } from '@sketchyicons/react'
import { cn } from '../../lib/utils.ts'

interface CircularTimerProps {
  timeRemaining: number
  totalSeconds: number
}

export function CircularTimer({ timeRemaining, totalSeconds }: CircularTimerProps) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const progress = timeRemaining / totalSeconds
  const offset = circumference * (1 - progress)
  const urgent = timeRemaining < 300
  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60
  const timerStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  return (
    <div className="relative flex items-center justify-center">
      <svg width="100" height="100" className="-rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--line)" strokeWidth="4" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={urgent ? 'var(--wrong)' : 'var(--lagoon)'}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-1000 ease-linear"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Clock className={cn('mb-0.5 h-3.5 w-3.5', urgent ? 'text-[var(--wrong)]' : 'text-[var(--sea-ink-soft)]')} />
        <span
          className={cn(
            'font-mono text-sm font-bold tabular-nums',
            urgent ? 'text-[var(--wrong)]' : 'text-[var(--sea-ink)]',
          )}
        >
          {timerStr}
        </span>
      </div>
    </div>
  )
}
