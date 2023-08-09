import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import Burger from '@/src/components/Navigation/Burger.component'
import Navigation from '@/src/components/Navigation/Navigation.component'
import NavigationItem from '@/src/components/Navigation/NavigationItem.component'
import useCurrentLocation from '@/src/hooks/useCurrentLocation.hook'
import useIsPageScrolled from '@/src/hooks/useIsPageScrolled.hook'

import styles from './Header.component.module.scss'

interface HeaderComponentProps {
  isOpenFullScreenNavigation: boolean
  setIsOpenFullScreenNavigation: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isOpenFullScreenNavigation,
  setIsOpenFullScreenNavigation,
}) => {
  const { location: currentLocation, path: currentPath } = useCurrentLocation()
  const isPageScrolled = useIsPageScrolled()

  const headerStyles = classNames({
    [styles.PageHeader]: true,
    [styles.PageHeader_AfterScroll_FullScreenNavigation]:
      isPageScrolled && isOpenFullScreenNavigation,
    [styles.PageHeader_AfterScroll]:
      isPageScrolled && !isOpenFullScreenNavigation,
  })

  return (
    <header id="headerMain" className={headerStyles}>
      <header className={styles.Name}>
        <ul>
          <NavigationItem location="header-name" target="/">
            szymon
            <Image
              className={styles.Avatar}
              alt="my photo - avatar"
              width={0}
              height={0}
              src="/images/me.jpg"
              sizes="100%"
            />
            pulut
          </NavigationItem>
        </ul>
      </header>

      <nav className={styles.Navigation}>
        <Navigation
          location="header"
          currentLocation={currentLocation}
          currentPath={currentPath}
        />
      </nav>

      <div className={styles.Burger}>
        <Burger
          isOpen={isOpenFullScreenNavigation}
          setIsOpen={setIsOpenFullScreenNavigation}
        />
      </div>
    </header>
  )
}

export default HeaderComponent
