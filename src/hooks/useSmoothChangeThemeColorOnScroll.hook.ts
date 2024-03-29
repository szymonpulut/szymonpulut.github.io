import { useState } from 'react'

import globalStyleVariables from '@/src/styles/globalVariables.module.scss'

import useEffectInWindow from './useEffectInWindow.hook'
import useIsPageScrolled from './useIsPageScrolled.hook'
import useSmoothStateChange from './useSmoothStateChange.hook'

const FADE_DELAY_PER_STEP_IN_MS = 100

const useSmoothChangeThemeColorOnScroll = () => {
  const isPageScrolled = useIsPageScrolled()

  const [themeColor, setThemeColor] = useState(
    globalStyleVariables.backgroundColor,
  )
  const { performSmoothStateChange } = useSmoothStateChange({
    setStateFunction: setThemeColor,
  })

  useEffectInWindow(() => {
    if (isPageScrolled) {
      const colors: Array<string> = [
        globalStyleVariables.midpointColor1,
        globalStyleVariables.midpointColor2,
        globalStyleVariables.scrolledHeaderBackgroundColor,
      ]

      performSmoothStateChange({
        stateValues: colors,
        stepDelayInMs: FADE_DELAY_PER_STEP_IN_MS,
      })
    } else {
      const colors: Array<string> = [
        globalStyleVariables.midpointColor2,
        globalStyleVariables.midpointColor1,
        globalStyleVariables.backgroundColor,
      ]

      performSmoothStateChange({
        stateValues: colors,
        stepDelayInMs: FADE_DELAY_PER_STEP_IN_MS,
      })
    }
  }, [isPageScrolled, performSmoothStateChange])

  return themeColor
}

export default useSmoothChangeThemeColorOnScroll
