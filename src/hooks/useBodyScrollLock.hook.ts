import { useCallback } from 'react'

const useBodyScrollLock = () => {
  const lockScroll = useCallback(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'

    document.body.style.paddingRight = `${scrollbarWidth}px`
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = '0px'
  }, [])

  return { lockScroll, unlockScroll }
}

export default useBodyScrollLock
