import { useCallback, useEffect, useRef, useState } from 'react'
import { createSave, parseSave, type RpgSave } from './engine'

export function useRpgSave(examCode: string) {
  const [save, setSave] = useState<RpgSave>(() => createSave(examCode))
  const current = useRef(save)
  const [ready, setReady] = useState(false)
  const [readOnly, setReadOnly] = useState(true)
  const writable = useRef(false)
  const [storageError, setStorageError] = useState<string | null>(null)
  const key = `aistudyhub:rpg:v1:${examCode}`
  useEffect(() => {
    let disposed = false
    const controller = new AbortController()
    let release: (() => void) | undefined
    writable.current = false
    setReady(false)
    setReadOnly(true)
    const hydrate = () => {
      try {
        const raw = localStorage.getItem(key)
        const next = raw ? parseSave(raw, examCode) : createSave(examCode)
        current.current = next
        setSave(next)
        setStorageError(null)
      } catch {
        current.current = createSave(examCode)
        setSave(current.current)
        setStorageError('invalid-or-unavailable')
      }
      setReady(true)
    }
    hydrate()
    if (navigator.locks) {
      void navigator.locks
        .request(key, { signal: controller.signal }, async (lock) => {
          if (disposed || !lock) return
          // Read again after acquiring the writer lock to avoid a stale pre-lock snapshot.
          hydrate()
          writable.current = true
          setReadOnly(false)
          await new Promise<void>((resolve) => {
            release = resolve
          })
        })
        .catch(() => {
          if (!disposed) setStorageError('lock-unavailable')
        })
    } else setStorageError('lock-unavailable')
    const onStorage = (event: StorageEvent) => {
      if (event.key === key && !writable.current) hydrate()
    }
    window.addEventListener('storage', onStorage)
    return () => {
      disposed = true
      controller.abort()
      writable.current = false
      release?.()
      window.removeEventListener('storage', onStorage)
    }
  }, [key, examCode])
  const update = useCallback(
    (reducer: (save: RpgSave) => RpgSave) => {
      if (!writable.current) return
      const next = reducer(current.current)
      if (next === current.current) return
      current.current = next
      setSave(next)
      try {
        localStorage.setItem(key, JSON.stringify(next))
        setStorageError(null)
      } catch {
        setStorageError('save-failed')
      }
    },
    [key],
  )
  const exportSave = useCallback(() => JSON.stringify(current.current, null, 2), [])
  const importSave = useCallback(
    (json: string) => {
      if (!writable.current) return false
      try {
        const next = parseSave(json, examCode)
        update(() => next)
        return true
      } catch {
        return false
      }
    },
    [examCode, update],
  )
  const reset = useCallback(() => update(() => createSave(examCode)), [examCode, update])
  return { save, ready, readOnly, storageError, update, exportSave, importSave, reset }
}
