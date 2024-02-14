import RootLayoutComponent from '@/app/rootLayout.component'

const getTitle = (prependTitle?: string) =>
  prependTitle ? `${prependTitle} - Szymon Pulut` : 'Szymon Pulut'

interface PageLayoutProps {
  children?: React.ReactNode
  prependTitle?: string
  previewImageUrl?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  prependTitle = '',
  previewImageUrl,
}) => {
  return (
    <RootLayoutComponent
      title={getTitle(prependTitle)}
      previewImageUrl={previewImageUrl}
    >
      {children}
    </RootLayoutComponent>
  )
}

export default PageLayout
