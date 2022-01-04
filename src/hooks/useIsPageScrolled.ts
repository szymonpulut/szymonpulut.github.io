import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const useIsPageScrolled = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false)

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -1) {
      setIsPageScrolled(true)
    } else if (currPos.y === 0) {
      setIsPageScrolled(false)
    }
  })

  return isPageScrolled
}

export default useIsPageScrolled
