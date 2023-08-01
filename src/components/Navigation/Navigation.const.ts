import type { MenuConfig, SingleMenuConfig } from '@/src/types/navigation.types'

const MAIN_PAGE_MENU: SingleMenuConfig = [
  {
    label: 'about me',
    target: '#about-me',
    spyId: 'about-me',
    isEnabled: true,
  },
  {
    label: 'contact & resume',
    target: '#contact',
    spyId: 'contact',
    isEnabled: true,
  },
  { label: 'blog', target: '/blog', isEnabled: true },
  { label: 'hire me', target: '/hire-me', isEnabled: false },
]

const OTHER_PAGES_MENU: SingleMenuConfig = [
  { label: 'about me', target: '/', isEnabled: true },
  {
    label: 'contact & resume',
    target: '/#contact',
    isEnabled: true,
  },
  { label: 'blog', target: '/blog', isEnabled: true },
  { label: 'hire me', target: '/hire me', isEnabled: false },
]

export const MENU_CONFIG: MenuConfig = {
  main: MAIN_PAGE_MENU,
  blog: OTHER_PAGES_MENU,
  offers: OTHER_PAGES_MENU,
}
