import RootLayoutComponent from '@/app/rootLayout.component'

const getTitle = (prependTitle?: string) =>
  prependTitle ? `${prependTitle} - Szymon Pulut` : 'Szymon Pulut'

interface PageLayoutProps {
  children?: React.ReactNode
  prependTitle?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  prependTitle = '',
}) => {
  return (
    <RootLayoutComponent title={getTitle(prependTitle)}>
      {children}
    </RootLayoutComponent>
  )
}

export default PageLayout
