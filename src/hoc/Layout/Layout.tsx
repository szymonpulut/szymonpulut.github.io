import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import useInWindow from 'hooks/useInWindow'
import useSmoothChangeThemeColorOnScroll from 'hooks/useSmoothChangeThemeColorOnScroll'
import useIsPageScrolled from 'hooks/useIsPageScrolled'

import * as styles from './Layout.module.scss'

const Layout: React.FC = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const isPageScrolled = useIsPageScrolled()
  const themeColor = useSmoothChangeThemeColorOnScroll()

  const toggleSidebar = (): void => {
    const nextStateIsOpenSidebar = !isOpenSidebar
    setIsOpenSidebar(nextStateIsOpenSidebar)

    useInWindow(() => {
      if (nextStateIsOpenSidebar) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    })
  }

  return (
    <>
      <Helmet>
        <title>Szymon Pulut - Web Developer</title>
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
