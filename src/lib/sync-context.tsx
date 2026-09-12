import { createContext, useContext, useEffect, useState } from 'react'
import type { SyncStatus } from '../components/SyncIndicator.tsx'
import { initSession } from './persistence.ts'

const SyncContext = createContext<SyncStatus>('offline')

export function useSyncStatus(): SyncStatus {
  return useContext(SyncContext)
}

export function SyncProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<SyncStatus>('offline')

  useEffect(() => {
    setStatus('syncing')
    initSession()
      .then((ok) => setStatus(ok ? 'synced' : 'offline'))
      .catch(() => setStatus('offline'))
  }, [])

  return <SyncContext.Provider value={status}>{children}</SyncContext.Provider>
}
