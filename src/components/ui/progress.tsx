import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../lib/utils.ts'

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: 'default' | 'success' | 'danger'
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, variant = 'default', ...props }, ref) => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100))
    const bg =
      variant === 'danger'
        ? 'bg-[var(--wrong)]'
        : variant === 'success'
          ? 'bg-[var(--correct)]'
          : 'bg-[var(--lagoon-deep)]'

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn('h-1.5 w-full overflow-hidden rounded-full bg-[var(--line)]', className)}
        {...props}
      >
        <div
          className={cn('h-full rounded-full transition-all duration-500 ease-out', bg)}
          style={{ width: `${pct}%` }}
        />
      </div>
    )
  },
)
Progress.displayName = 'Progress'

export { Progress }
