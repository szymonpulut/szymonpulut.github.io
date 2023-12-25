import { useState } from 'react'
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'

import HeaderComponent from '@/src/components/Header/Header.component'
import FullScreenNavigation from '@/src/components/Navigation/FullScreenNavigation.component'
import useBodyScrollLock from '@/src/hooks/useBodyScrollLock.hook'
import useEffectInWindow from '@/src/hooks/useEffectInWindow.hook'
import useSmoothChangeThemeColorOnScroll from '@/src/hooks/useSmoothChangeThemeColorOnScroll.hook'
import globalStyleVariables from '@/src/styles/globalVariables.module.scss'

import { ContextProviders } from './contextProviders'
import { latoFont } from './fonts'

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
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />

        <meta name="theme-color" content={themeColor} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/x-icon" href="/icon.svg" />

        <link
          rel="alternate"
          type="application/rss+xml"
          title="Szymon Pulut's blog feed"
          href="/feed.xml"
        />
      </Head>
      <ContextProviders>
        <PlausibleProvider domain="szymonpulut.com">
          <div className={latoFont.className} id="root-layout">
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
          </div>
        </PlausibleProvider>
      </ContextProviders>
    </>
  )
}

export default RootLayoutComponent
