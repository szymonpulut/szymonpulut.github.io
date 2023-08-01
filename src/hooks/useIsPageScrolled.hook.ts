import { useRef, useState } from 'react'

import isBrowser from '../utils/isBrowser.util'

import useEffectInWindow from './useEffectInWindow.hook'

const DEFAULT_THROTTLE_TIME_IN_MS = 0

const useIsPageScrolled = (throttleTimeInMs = DEFAULT_THROTTLE_TIME_IN_MS) => {
  const onLoadScrollY = isBrowser() ? window.scrollY : 0
  const [isPageScrolled, setIsPageScrolled] = useState(onLoadScrollY > 0)

  const lastInvocationTimeRef = useRef(Date.now())

  console.log('use ispy')

  useEffectInWindow(() => {
    console.log('useeffinw')
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

    console.log('add event')
    window.addEventListener('scroll', handleScroll)

    return () => {
      console.log('remove event')
      setIsPageScrolled(false)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isPageScrolled
}

export default useIsPageScrolled
