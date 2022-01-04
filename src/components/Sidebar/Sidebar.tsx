import React from 'react'

import Navigation from 'components/Navigation/Navigation'

import * as styles from './Sidebar.module.scss'

interface Props {
  isOpen: boolean
  isPageScrolled: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<Props> = ({ isOpen, isPageScrolled, toggleSidebar }) => {
  const sidebarStyles = [styles.Sidebar]

  if (isOpen) {
    sidebarStyles.push(styles.Open)
  } else {
    sidebarStyles.push(styles.Close)
  }

  if (isPageScrolled) {
    sidebarStyles.push(styles.Scrolled)
  }

  return (
    <div className={sidebarStyles.join(' ')}>
      <Navigation location="sidebar" sidebarCloseHandler={toggleSidebar} />
    </div>
  )
}

export default Sidebar
