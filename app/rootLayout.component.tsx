import { useState } from 'react'
import Head from 'next/head'

import HeaderComponent from '@/src/components/Header/Header.component'
import FullScreenNavigation from '@/src/components/Navigation/FullScreenNavigation.component'
import useBodyScrollLock from '@/src/hooks/useBodyScrollLock.hook'
import useEffectInWindow from '@/src/hooks/useEffectInWindow.hook'
import useIsPageScrolled from '@/src/hooks/useIsPageScrolled.hook'
import useSmoothChangeThemeColorOnScroll from '@/src/hooks/useSmoothChangeThemeColorOnScroll.hook'

import { ContextProviders } from './contextProviders'

import 'src/styles/globalStyles.scss'

interface RootLayoutComponentProps {
  children: React.ReactNode
  title: string
}

const RootLayoutComponent: React.FC<RootLayoutComponentProps> = ({
  children,
  title,
}) => {
  const [isOpenFullScreenNavigation, setIsOpenFullScreenNavigation] =
    useState(false)

  const themeColor = useSmoothChangeThemeColorOnScroll()

  const { lockScroll, unlockScroll } = useBodyScrollLock()

  useEffectInWindow(() => {
    if (isOpenFullScreenNavigation) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isOpenFullScreenNavigation])

  return (
    <ContextProviders>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />

        <meta name="theme-color" content={themeColor} />
        <meta charSet="UTF-8" />

        <link rel="icon" type="image/x-icon" href="/icon.svg" />
      </Head>

      <FullScreenNavigation
        handleFullScreenNavigationClose={() =>
          setIsOpenFullScreenNavigation(false)
        }
        isOpen={isOpenFullScreenNavigation}
      />

      <HeaderComponent
        isOpenFullScreenNavigation={isOpenFullScreenNavigation}
        setIsOpenFullScreenNavigation={setIsOpenFullScreenNavigation}
      />

      {children}
    </ContextProviders>
  )
}

export default RootLayoutComponent
