import { useRef, useState } from 'react'

import isBrowser from '../utils/isBrowser.util'

import useEffectInWindow from './useEffectInWindow.hook'

const DEFAULT_THROTTLE_TIME_IN_MS = 0

const useIsPageScrolled = (throttleTimeInMs = DEFAULT_THROTTLE_TIME_IN_MS) => {
  const [isPageScrolled, setIsPageScrolled] = useState(false)

  const lastInvocationTimeRef = useRef(Date.now())

  console.log('use ispy')

  useEffectInWindow(() => {
    setIsPageScrolled(window.scrollY > 0)
  }, [])

  useEffectInWindow(() => {
    console.log('useeffinw')
    const handleScroll = () => {
      const now = Date.now()
      const timeSinceLastInvocation = now - lastInvocationTimeRef.current

      console.log('scrolling', window.scrollY)
      console.log(
        now,
        lastInvocationTimeRef.current,
        now - lastInvocationTimeRef.current,
      )
      console.log(timeSinceLastInvocation, throttleTimeInMs)
      if (timeSinceLastInvocation > throttleTimeInMs) {
        const currentScrollY = window.scrollY
        console.log('Asetting')
        if (currentScrollY > 0) {
          console.log('setting true')
          setIsPageScrolled(true)
        } else {
          console.log('setting false')
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
