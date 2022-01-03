import React from 'react'
import PropTypes from 'prop-types'

import Navigation from 'components/Navigation/Navigation'

import * as styles from './Sidebar.module.scss'

const Sidebar = ({ isOpen, pageScrolled, closeHandler }) => {
  const sidebarStyleClasses = [styles.Sidebar, styles.Close]
  if (isOpen) {
    sidebarStyleClasses.splice(1, 1, styles.Open)
  }
  if (pageScrolled) {
    sidebarStyleClasses.push(styles.Scrolled)
  }

  return (
    <div className={sidebarStyleClasses.join(' ')}>
      <Navigation location="sidebar" sidebarCloseHandler={closeHandler} />
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  pageScrolled: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
}

export default Sidebar
