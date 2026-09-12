import { CloudCheck, CloudOff, LoaderCircle } from '@sketchyicons/react'
import { useI18n } from '../i18n/index.ts'

export type SyncStatus = 'synced' | 'syncing' | 'offline' | 'error'

export function SyncIndicator({ status }: { status: SyncStatus }) {
  const { t } = useI18n()

  const config = {
    synced: {
      icon: CloudCheck,
      label: t('sync.synced'),
      className: 'text-[var(--correct)]',
    },
    syncing: {
      icon: LoaderCircle,
      label: t('sync.syncing'),
      className: 'text-[var(--sea-ink-soft)] animate-spin',
    },
    offline: {
      icon: CloudOff,
      label: t('sync.offline'),
      className: 'text-[var(--sea-ink-soft)]',
    },
    error: {
      icon: CloudOff,
      label: t('sync.error'),
      className: 'text-[var(--wrong)]',
    },
  } as const

  const { icon: Icon, label, className } = config[status]

  return (
    <span className="inline-flex items-center gap-1 text-xs" title={label}>
      <Icon className={`h-3.5 w-3.5 ${className}`} />
      <span className="text-[var(--sea-ink-soft)] hidden sm:inline">{label}</span>
    </span>
  )
}
