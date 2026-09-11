import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils.ts'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lagoon)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'border border-[var(--line)] bg-[var(--bg-subtle)] text-[var(--sea-ink)] shadow-sm hover:opacity-80 hover:-translate-y-0.5',
        primary:
          'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] shadow-sm hover:bg-[var(--btn-primary-hover)] hover:-translate-y-0.5',
        secondary:
          'border border-[var(--line)] bg-transparent text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] hover:bg-[var(--bg-subtle)]',
        outline: 'border border-[var(--sea-ink)] bg-transparent text-[var(--sea-ink)] hover:bg-[var(--bg-subtle)]',
        ghost:
          'border-0 bg-transparent text-[var(--sea-ink-soft)] hover:bg-[var(--bg-subtle)] hover:text-[var(--sea-ink)]',
        destructive: 'border border-[var(--wrong-border)] bg-[var(--wrong-bg)] text-[var(--wrong)] hover:opacity-80',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-lg',
        default: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-base',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
