import { cn } from '../../lib/utils.ts'

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-md bg-[var(--bg-subtle)]', className)} />
}

const FIVE = ['a', 'b', 'c', 'd', 'e']
const FOUR = ['a', 'b', 'c', 'd']

export function ExamCardSkeleton() {
  return (
    <div className="space-y-5 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
      <div className="flex items-start gap-3">
        <Skeleton className="h-11 w-11 shrink-0 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="space-y-3">
        {FIVE.map((k) => (
          <div key={k} className="space-y-1.5">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-3/5" />
              <Skeleton className="h-4 w-8" />
            </div>
            <Skeleton className="h-1.5 w-full" />
          </div>
        ))}
      </div>
      <div className="flex gap-2.5">
        <Skeleton className="h-10 flex-1 rounded-lg" />
        <Skeleton className="h-10 flex-1 rounded-lg" />
      </div>
    </div>
  )
}

export function QuestionSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Skeleton className="h-5 w-10 rounded-full" />
        <Skeleton className="h-5 w-40" />
      </div>
      <Skeleton className="h-16 w-full" />
      <div className="space-y-2">
        {FOUR.map((k) => (
          <Skeleton key={k} className="h-14 w-full rounded-xl" />
        ))}
      </div>
    </div>
  )
}

export function DomainListSkeleton() {
  return (
    <div className="space-y-2">
      {FIVE.map((k) => (
        <Skeleton key={k} className="h-12 w-full rounded-lg" />
      ))}
    </div>
  )
}

export function WrongAnswersSkeleton() {
  return (
    <div className="space-y-3">
      {FOUR.map((k) => (
        <div key={k} className="space-y-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-10 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-12 rounded-full" />
            <Skeleton className="h-6 w-12 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
