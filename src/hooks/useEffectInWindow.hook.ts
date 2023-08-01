import { DependencyList, EffectCallback, useEffect } from 'react'

import isBrowser from '../utils/isBrowser.util'

const useEffectInWindow = (effect: EffectCallback, deps?: DependencyList) => {
  useEffect(() => {
    if (isBrowser()) {
      effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useEffectInWindow
