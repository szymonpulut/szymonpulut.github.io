import classNames from 'classnames'

import Navigation from '@/src/components/Navigation/Navigation.component'
import useCurrentLocation from '@/src/hooks/useCurrentLocation.hook'
import useIsPageScrolled from '@/src/hooks/useIsPageScrolled.hook'

import styles from './FullScreenNavigation.component.module.scss'

interface FullScreenNavigationProps {
  isOpen: boolean
  handleFullScreenNavigationClose: () => void
}

const FullScreenNavigation: React.FC<FullScreenNavigationProps> = ({
  isOpen,
  handleFullScreenNavigationClose,
}) => {
  const { location: currentLocation, path: currentPath } = useCurrentLocation()
  const isPageScrolled = useIsPageScrolled()

  const fullScreenNavigationStyles = classNames({
    [styles.FullScreenNavigation]: true,
    [styles.Open]: isOpen,
    [styles.Close]: !isOpen,
    [styles.Scrolled]: isPageScrolled,
  })

  return (
    <div className={fullScreenNavigationStyles}>
      <Navigation
        location="full-screen"
        handleFullScreenNavigationClose={handleFullScreenNavigationClose}
        currentLocation={currentLocation}
        currentPath={currentPath}
      />
    </div>
  )
}

export default FullScreenNavigation
