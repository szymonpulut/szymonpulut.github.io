import { useEffect, useState } from 'react'

import useSmoothStateChange from './useSmoothStateChange'

import * as globalStyleVariables from 'styles/globalVariables.module.scss'
import useIsPageScrolled from './useIsPageScrolled'

const FADE_IN_DELAY_PER_STEP_IN_MS: number = 100

const useSmoothChangeThemeColorOnScroll = () => {
  const isPageScrolled = useIsPageScrolled()

  const [themeColor, setThemeColor] = useState(globalStyleVariables.backgroundColor)

  // TODO: Debounce this effect to avoid performance hit on changing theme color on mobile
  useEffect(() => {
    if (isPageScrolled) {
      const colors: Array<string> = [
        globalStyleVariables.midpointColor1,
        globalStyleVariables.midpointColor2,
        globalStyleVariables.scrolledHeaderBackgroundColor,
      ]

      useSmoothStateChange({
        setStateFunction: setThemeColor,
        stateValues: colors,
        stepDelayInMs: FADE_IN_DELAY_PER_STEP_IN_MS,
      })
    } else {
      const colors: Array<string> = [
        globalStyleVariables.midpointColor2,
        globalStyleVariables.midpointColor1,
        globalStyleVariables.backgroundColor,
      ]

      useSmoothStateChange({
        setStateFunction: setThemeColor,
        stateValues: colors,
        stepDelayInMs: FADE_IN_DELAY_PER_STEP_IN_MS,
      })
    }
  }, [isPageScrolled])

  return themeColor
}

export default useSmoothChangeThemeColorOnScroll
