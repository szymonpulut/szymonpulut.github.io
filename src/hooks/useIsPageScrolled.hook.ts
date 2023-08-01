import { useRef, useState } from 'react'

import useEffectInWindow from './useEffectInWindow.hook'

const DEFAULT_THROTTLE_TIME_IN_MS = 0

const useIsPageScrolled = (throttleTimeInMs = DEFAULT_THROTTLE_TIME_IN_MS) => {
  const [isPageScrolled, setIsPageScrolled] = useState(false)

  const lastInvocationTimeRef = useRef(Date.now())

  useEffectInWindow(() => {
    setIsPageScrolled(window.scrollY > 0)
  }, [])

  useEffectInWindow(() => {
    const handleScroll = () => {
      const now = Date.now()
      const timeSinceLastInvocation = now - lastInvocationTimeRef.current

      if (timeSinceLastInvocation > throttleTimeInMs) {
        const currentScrollY = window.scrollY

        if (currentScrollY > 0) {
          setIsPageScrolled(true)
        } else {
          setIsPageScrolled(false)
        }

        lastInvocationTimeRef.current = now
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      setIsPageScrolled(false)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isPageScrolled
}

export default useIsPageScrolled
