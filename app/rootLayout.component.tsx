import { useState } from 'react'
import { Lato } from 'next/font/google'
import Head from 'next/head'

import HeaderComponent from '@/src/components/Header/Header.component'
import FullScreenNavigation from '@/src/components/Navigation/FullScreenNavigation.component'
import useBodyScrollLock from '@/src/hooks/useBodyScrollLock.hook'
import useEffectInWindow from '@/src/hooks/useEffectInWindow.hook'
import useIsPageScrolled from '@/src/hooks/useIsPageScrolled.hook'
import useSmoothChangeThemeColorOnScroll from '@/src/hooks/useSmoothChangeThemeColorOnScroll.hook'
import globalStyleVariables from '@/src/styles/globalVariables.module.scss'

import { ContextProviders } from './contextProviders'

import 'src/styles/globalStyles.scss'

const latoFont = Lato({ weight: '400', subsets: ['latin'], display: 'swap' })

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

  const dynamicThemeColor = useSmoothChangeThemeColorOnScroll()
  const [themeColor, setThemeColor] = useState(
    globalStyleVariables.backgroundColor,
  )

  useEffectInWindow(() => {
    if (dynamicThemeColor) {
      setThemeColor(dynamicThemeColor)
    }
  }, [dynamicThemeColor])

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

        <style jsx global>{`
          html {
            font-family: ${latoFont.style.fontFamily};
          }
        `}</style>
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
