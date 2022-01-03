import React from 'react'
import PropTypes from 'prop-types'

import NavigationItem from 'components/Navigation/NavigationItem/NavigationItem'
import Navigation from '../Navigation/Navigation'
import Burger from '../Navigation/Burger/Burger'

import * as styles from './Header.module.scss'

const Header = ({ pageScrolled, isOpenSidebar, burgerClickedHandler, burgerStyleClassNames }) => {
  const headerStyleClassNames = [styles.PageHeader]
  if (pageScrolled && isOpenSidebar) {
    headerStyleClassNames.push(styles.PageHeader_AfterScroll_WithSidebar)
  } else if (pageScrolled) {
    headerStyleClassNames.push(styles.PageHeader_AfterScroll)
  }

  return (
    <header id="headerMain" className={headerStyleClassNames.join(' ')}>
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
        <Burger clicked={burgerClickedHandler} isOpenSidebar={isOpenSidebar} styleClassNames={burgerStyleClassNames} />
      </div>
    </header>
  )
}

Header.propTypes = {
  pageScrolled: PropTypes.bool.isRequired,
  isOpenSidebar: PropTypes.bool.isRequired,
  burgerClickedHandler: PropTypes.func.isRequired,
  burgerStyleClassNames: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Header
