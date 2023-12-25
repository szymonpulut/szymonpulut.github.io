import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

import { latoFont, robotoMonoFont } from '@/app/fonts'
import useIsPageScrolled from '@/src/hooks/useIsPageScrolled.hook'
import type { NavigationItemLocation } from '@/src/types/navigation.types'

import styles from './NavigationItem.component.module.scss'

interface NavigationItemComponentProps {
  children?: React.ReactNode
  location: NavigationItemLocation
  target: string
  handleFullScreenNavigationClose?: () => void
  isActive?: boolean
  highlightOnlyWhenPageIsScrolled?: boolean
}

const NavigationItemComponent: React.FC<NavigationItemComponentProps> = ({
  location,
  target,
  children,
  handleFullScreenNavigationClose,
  isActive = false,
  highlightOnlyWhenPageIsScrolled = false,
}) => {
  const plausible = usePlausible()

  const isPageScrolled = useIsPageScrolled()

  const isHighlightable =
    (location === 'full-screen' || location === 'header') &&
    isActive &&
    (!highlightOnlyWhenPageIsScrolled ||
      (highlightOnlyWhenPageIsScrolled && isPageScrolled))

  const buttonStyles = classNames({
    [styles.Button]: location !== 'header-name',
    [latoFont.className]: location !== 'header-name',
    [styles.Button_NoStyle]: location === 'header-name',
    [robotoMonoFont.className]: location === 'header-name',
    [styles.Button_FullScreen]: location === 'full-screen',
    [styles.Active]: isHighlightable,
  })

  return (
    <li className={styles.NavigationItem}>
      <Link
        className={buttonStyles}
        onClick={() => {
          plausible('navigationItemClick', { props: { location, target } })
          handleFullScreenNavigationClose?.()
        }}
        href={target}
        scroll={false}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavigationItemComponent
