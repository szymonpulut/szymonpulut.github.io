import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import useIsPageScrolled from '@/src/hooks/useIsPageScrolled.hook'
import { NavigationItemLocation } from '@/src/types/navigation.types'

import styles from './NavigationItem.component.module.scss'

interface Props {
  children?: React.ReactNode
  location: NavigationItemLocation
  target: string
  handleFullScreenNavigationClose?: () => void
  isActive?: boolean
  highlightOnlyWhenPageIsScrolled?: boolean
}

const NavigationItemComponent: React.FC<Props> = ({
  location,
  target,
  children,
  handleFullScreenNavigationClose,
  isActive = false,
  highlightOnlyWhenPageIsScrolled = false,
}) => {
  const isPageScrolled = useIsPageScrolled()

  const isHighlightable =
    (location === 'full-screen' || location === 'header') &&
    isActive &&
    (!highlightOnlyWhenPageIsScrolled ||
      (highlightOnlyWhenPageIsScrolled && isPageScrolled))

  const buttonStyles = classNames({
    [styles.Button]: location !== 'header-name',
    [styles.Button_NoStyle]: location === 'header-name',
    [styles.Button_FullScreen]: location === 'full-screen',
    [styles.Active]: isHighlightable,
  })

  return (
    <li className={styles.NavigationItem}>
      <Link
        className={buttonStyles}
        onClick={handleFullScreenNavigationClose}
        href={target}
        scroll={false}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavigationItemComponent
