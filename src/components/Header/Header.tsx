import React from 'react'

import Navigation from 'components/Navigation/Navigation'
import NavigationItem from 'components/Navigation/NavigationItem/NavigationItem'
import Burger from 'components/Navigation/Burger/Burger'

import * as styles from './Header.module.scss'

interface Props {
  isPageScrolled: boolean
  isOpenSidebar: boolean
  toggleSidebar: () => void
}

const Header: React.FC<Props> = ({ isPageScrolled, isOpenSidebar, toggleSidebar }) => {
  const headerStyles = [styles.PageHeader]

  if (isPageScrolled && isOpenSidebar) {
    headerStyles.push(styles.PageHeader_AfterScroll_WithSidebar)
  } else if (isPageScrolled) {
    headerStyles.push(styles.PageHeader_AfterScroll)
  }

  return (
    <header id="headerMain" className={headerStyles.join(' ')}>
      <header className={styles.Name}>
        <ul>
          <NavigationItem location="header-name" target="about-me">
            szymon pulut
          </NavigationItem>
        </ul>
      </header>

      <nav className={styles.Navigation}>
        <Navigation location="header-navigation" />
      </nav>

      <div className={styles.Burger}>
        <Burger toggleSidebar={toggleSidebar} />
      </div>
    </header>
  )
}

export default Header
