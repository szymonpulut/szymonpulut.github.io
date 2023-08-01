export type NavigationPageId = 'main' | 'blog' | 'offers'

export type NavigationLocation = 'header' | 'full-screen'
export type NavigationItemLocation = NavigationLocation | 'header-name'

export interface MenuConfigEntry {
  isEnabled: boolean
  label: string
  target: string
  spyId?: string
}
export type SingleMenuConfig = MenuConfigEntry[]

export type MenuConfig = {
  [pageId in NavigationPageId]: SingleMenuConfig
}
