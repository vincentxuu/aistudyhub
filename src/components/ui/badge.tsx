import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils.ts'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors',
  {
    variants: {
      variant: {
        default: 'border border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink-soft)]',
        secondary: 'border border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink-soft)]',
        outline: 'border border-[var(--line)] bg-transparent text-[var(--sea-ink-soft)]',
        success: 'border border-[var(--correct-border)] bg-[var(--correct-bg)] text-[var(--correct)]',
        destructive: 'border border-[var(--wrong-border)] bg-[var(--wrong-bg)] text-[var(--wrong)]',
        warning: 'border border-[var(--flagged-border)] bg-[var(--flagged-bg)] text-[var(--flagged)]',
        brand: 'border-0 bg-[var(--lagoon)] text-[var(--palm)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
