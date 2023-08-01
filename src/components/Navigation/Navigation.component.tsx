import React, { useState } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import useCurrentLocation from '@/src/hooks/useCurrentLocation.hook'
import { MenuConfig, NavigationPageId } from '@/src/types/navigation.types'

import ScrollSpyComponent from '../ScrollSpy/ScrollSpy.component'

import { MENU_CONFIG } from './Navigation.const'
import NavigationItemComponent from './NavigationItem.component'

import styles from './Navigation.component.module.scss'

interface NavigationComponentProps {
  location: 'header' | 'full-screen'
  handleFullScreenNavigationClose?: () => void
  currentLocation: NavigationPageId
  currentPath: string
}

const NavigationComponent: React.FC<NavigationComponentProps> = ({
  location,
  handleFullScreenNavigationClose,
  currentLocation,
  currentPath,
}) => {
  const [activeId, setActiveId] = useState(
    currentLocation === 'main' ? '#about-me' : '',
  )

  const currentNavigation = MENU_CONFIG[currentLocation]

  const navigationStyles = classNames(styles.Navigation, {
    [styles.Navigation_FullScreen]: location === 'full-screen',
  })

  const spyIds = MENU_CONFIG.main
    .map((navigationEntry) => navigationEntry.spyId ?? '')
    .filter((spyId) => spyId.length > 0)

  return (
    <>
      {currentLocation === 'main' && (
        <ScrollSpyComponent
          ids={spyIds}
          currentId={activeId}
          onChange={setActiveId}
        />
      )}
      <div
        className={navigationStyles}
        id={location === 'full-screen' ? 'full-screen-navigation' : ''}
      >
        <ul>
          {currentNavigation
            .filter((navigationEntry) => navigationEntry.isEnabled)
            .map((navigationEntry) => (
              <NavigationItemComponent
                key={navigationEntry.target}
                location={location}
                handleFullScreenNavigationClose={
                  handleFullScreenNavigationClose
                }
                target={navigationEntry.target}
                isActive={
                  currentLocation === 'main'
                    ? activeId === navigationEntry.target
                    : currentPath === navigationEntry.target
                }
                highlightOnlyWhenPageIsScrolled={!!navigationEntry.spyId}
              >
                {navigationEntry.label}
              </NavigationItemComponent>
            ))}
        </ul>
      </div>
    </>
  )
}

export default NavigationComponent
