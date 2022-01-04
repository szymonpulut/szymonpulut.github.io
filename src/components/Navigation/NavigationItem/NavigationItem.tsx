import React from 'react'
import { Link } from 'react-scroll'

import useIsPageScrolled from 'hooks/useIsPageScrolled'

import * as globalStyleVariables from 'styles/globalVariables.module.scss'
import * as styles from './NavigationItem.module.scss'

const DELAY_ON_SIDEBAR_LINK_CLICK_IN_MS = 250
const SCROLL_DURATION_IN_MS = 600

interface Props {
  location: string
  target: string
  sidebarCloseHandler?: () => void
  shouldChangeOnActive?: boolean
}

const NavigationItem: React.FC<Props> = ({
  location,
  target,
  children,
  sidebarCloseHandler,
  shouldChangeOnActive = false,
}) => {
  const isPageScrolled = useIsPageScrolled()

  const buttonStyleClasses: Array<string> = []
  const activeButtonStyleClasses: Array<string> = []

  if (location === 'sidebar') {
    buttonStyleClasses.push(styles.Button, styles.Button_Sidebar)
    activeButtonStyleClasses.push(styles.Active)
  } else if (location === 'header-navigation') {
    buttonStyleClasses.push(styles.Button)
    activeButtonStyleClasses.push(styles.Active)
  } else if (location === 'header-name') {
    buttonStyleClasses.push(styles.Button_NoStyle)
  }

  const headerHeight = parseInt(globalStyleVariables.headerHeightDesktop, 10)
  const offset = target === 'about-me' ? -headerHeight : 0

  const activeButtonStyleClassesString =
    shouldChangeOnActive && isPageScrolled ? activeButtonStyleClasses.join(' ') : ''

  return (
    <li className={styles.NavigationItem}>
      <Link
        className={buttonStyleClasses.join(' ')}
        onClick={sidebarCloseHandler}
        activeClass={activeButtonStyleClassesString}
        to={target}
        spy
        smooth="easeInOutCubic"
        offset={offset}
        duration={SCROLL_DURATION_IN_MS}
        delay={location === 'sidebar' ? DELAY_ON_SIDEBAR_LINK_CLICK_IN_MS : 0}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavigationItem
