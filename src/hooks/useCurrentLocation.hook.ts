import { usePathname } from 'next/navigation'

import type { NavigationPageId } from '../types/navigation.types'

const useCurrentLocation = (): { location: NavigationPageId; path: string } => {
  const pathname = usePathname()
  const subPaths = pathname?.split('/')

  switch (subPaths?.[1] ?? '') {
    case 'blog':
      return { location: 'blog', path: '/blog' }
    case 'offers':
      return { location: 'offers', path: '/offers' }
    case '':
    default:
      return { location: 'main', path: '/' }
  }
}

export default useCurrentLocation
