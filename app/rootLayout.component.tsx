import { useState } from 'react'
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'

import HeaderComponent from '@/src/components/Header/Header.component'
import FullScreenNavigation from '@/src/components/Navigation/FullScreenNavigation.component'
import useBodyScrollLock from '@/src/hooks/useBodyScrollLock.hook'
import useEffectInWindow from '@/src/hooks/useEffectInWindow.hook'
import useSmoothChangeThemeColorOnScroll from '@/src/hooks/useSmoothChangeThemeColorOnScroll.hook'
import isBrowser from '@/src/utils/isBrowser.util'

import { ContextProviders } from './contextProviders'
import { latoFont } from './fonts'

import '@/src/styles/globalStyles.scss'

interface RootLayoutComponentProps {
  children: React.ReactNode
  title: string
  previewImageUrl?: string
  description?: string
}

const RootLayoutComponent: React.FC<RootLayoutComponentProps> = ({
  children,
  title,
  previewImageUrl,
  description,
}) => {
  const [isOpenFullScreenNavigation, setIsOpenFullScreenNavigation] =
    useState(false)

  const themeColor = useSmoothChangeThemeColorOnScroll()

  const { lockScroll, unlockScroll } = useBodyScrollLock()

  // Technically lockScroll & unlockScroll could've been outside useEffect
  // But since this is a side-effect, I left it inside
  useEffectInWindow(() => {
    if (isOpenFullScreenNavigation) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isOpenFullScreenNavigation])

  const currentUrl = isBrowser() ? new URL(window.location.href) : null
  const currentUrlStringified = currentUrl?.toString()

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta property="og:title" content={title} key="title" name="title" />
        {description && (
          <meta
            property="og:description"
            content={description}
            key="description"
            name="description"
          />
        )}
        {currentUrlStringified && (
          <meta
            property="og:url"
            content={currentUrlStringified}
            key="url"
            name="url"
          />
        )}
        {previewImageUrl && (
          <meta
            property="og:image"
            content={previewImageUrl}
            key="image"
            name="image"
          />
        )}

        <meta name="author" content="Szymon Pulut" />

        <meta name="theme-color" content={themeColor} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap"
          rel="stylesheet"
        />

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
