import { useEffect } from 'react'

const useEffectInWindow = (functionToExecute: (...args: any) => void, args: Array<unknown>) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      functionToExecute(...args)
    }
  }, [args])
}

export default useEffectInWindow
