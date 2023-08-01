import { useRef, useState } from 'react'

import useEffectInWindow from './useEffectInWindow.hook'

const DEFAULT_THROTTLE_TIME_IN_MS = 100

const useIsPageScrolled = (throttleTimeInMs = DEFAULT_THROTTLE_TIME_IN_MS) => {
  const [isPageScrolled, setIsPageScrolled] = useState(false)

  const lastInvocationTimeRef = useRef(Date.now())

  useEffectInWindow(() => {
    setIsPageScrolled(window.scrollY > 0)
  }, [])

  // Trailing throttle - function is called at the end of the throttling period
  // Guarantees that the last update will be posted
  useEffectInWindow(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null

    const handleScroll = () => {
      const now = Date.now()
      const timeSinceLastInvocation = now - lastInvocationTimeRef.current

      if (timeSinceLastInvocation > throttleTimeInMs) {
        lastInvocationTimeRef.current = now
        setIsPageScrolled(window.scrollY > 0)
      } else {
        timerId && clearTimeout(timerId)

        // Schedule a new invocation - trailing
        timerId = setTimeout(() => {
          lastInvocationTimeRef.current = now
          setIsPageScrolled(window.scrollY > 0)
        }, throttleTimeInMs - timeSinceLastInvocation)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      setIsPageScrolled(false)
      window.removeEventListener('scroll', handleScroll)
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [])

  return isPageScrolled
}

export default useIsPageScrolled
