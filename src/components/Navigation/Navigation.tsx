import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'

import * as styles from './Navigation.module.scss'

interface Props {
  location: string
  sidebarCloseHandler?: () => void
}

const Navigation: React.FC<Props> = ({ location, sidebarCloseHandler }) => {
  const navigationStyles = [styles.Navigation]

  if (location === 'sidebar') {
    navigationStyles.push(styles.Navigation_Sidebar)
  }

  return (
    <div className={navigationStyles.join(' ')} id={location === 'sidebar' ? 'sidebar' : ''}>
      <ul>
        <NavigationItem
          location={location}
          sidebarCloseHandler={sidebarCloseHandler}
          target="about-me"
          shouldChangeOnActive
        >
          about me
        </NavigationItem>

        <NavigationItem
          location={location}
          sidebarCloseHandler={sidebarCloseHandler}
          target="projects"
          shouldChangeOnActive
        >
          projects
        </NavigationItem>

        <NavigationItem
          location={location}
          sidebarCloseHandler={sidebarCloseHandler}
          target="contact"
          shouldChangeOnActive
        >
          contact & resume
        </NavigationItem>
      </ul>
    </div>
  )
}

export default Navigation
