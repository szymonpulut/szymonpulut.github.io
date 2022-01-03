import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import useInWindow from 'hooks/useInWindow'
import useScrollFadeIn from 'hooks/useScrollFadeIn'

import * as styles from './Layout.module.scss'

const Layout: React.FC = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const [burgerStyleClassNames, setBurgerStyleClassNames] = useState(['Burger'])

  const { pageScrolled, themeColor } = useScrollFadeIn()

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

  const burgerStyleTransformation = (): void => {
    if (!burgerStyleClassNames.includes('Change')) {
      setBurgerStyleClassNames([...burgerStyleClassNames, 'Change'])
    } else {
      setBurgerStyleClassNames(burgerStyleClassNames.slice(0, 1))
    }
  }

  const burgerClickedHandler = (): void => {
    burgerStyleTransformation()
    toggleSidebar()
  }

  return (
    <div className={styles.Container}>
      <Helmet>
        <title>Szymon Pulut - Web Developer</title>
        <meta name="theme-color" content={themeColor} />
        <meta charSet="UTF-8" />
      </Helmet>
      <Sidebar isOpen={isOpenSidebar} pageScrolled={pageScrolled} closeHandler={burgerClickedHandler} />
      <Header
        isOpenSidebar={isOpenSidebar}
        pageScrolled={pageScrolled}
        burgerClickedHandler={burgerClickedHandler}
        burgerStyleClassNames={burgerStyleClassNames}
      />
      <main className={styles.Main}>{children}</main>
    </div>
  )
}

export default Layout
