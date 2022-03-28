import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import useEffectInWindow from 'hooks/useEffectInWindow'
import useSmoothChangeThemeColorOnScroll from 'hooks/useSmoothChangeThemeColorOnScroll'
import useIsPageScrolled from 'hooks/useIsPageScrolled'

import * as styles from './Layout.module.scss'

const Layout: React.FC = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const isPageScrolled = useIsPageScrolled()
  const themeColor = useSmoothChangeThemeColorOnScroll()

  const toggleSidebar = (): void => {
    setIsOpenSidebar(isOpenSidebarState => !isOpenSidebarState)
  }

  useEffectInWindow(
    isOpenSidebar => {
      const targetElement = document.querySelector('#sidebar')

      if (isOpenSidebar && targetElement) {
        disableBodyScroll(targetElement, { reserveScrollBarGap: true })
      } else {
        clearAllBodyScrollLocks()
      }
    },
    [isOpenSidebar]
  )

  return (
    <>
      <Helmet>
        <title>Szymon Pulut - Frontend Software Engineer</title>
        <meta name="theme-color" content={themeColor} />
        <meta charSet="UTF-8" />
      </Helmet>

      <div className={styles.Container}>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpenSidebar} isPageScrolled={isPageScrolled} />
        <Header toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} isPageScrolled={isPageScrolled} />

        <main className={styles.Main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
