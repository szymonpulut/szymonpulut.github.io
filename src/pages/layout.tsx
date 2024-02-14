import RootLayoutComponent from '@/app/rootLayout.component'

const getTitle = (prependTitle?: string) =>
  prependTitle ? `${prependTitle} - Szymon Pulut` : 'Szymon Pulut'

interface PageLayoutProps {
  children?: React.ReactNode
  prependTitle?: string
  previewImageUrl?: string
  description?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  prependTitle = '',
  previewImageUrl,
  description,
}) => {
  return (
    <RootLayoutComponent
      title={getTitle(prependTitle)}
      previewImageUrl={previewImageUrl}
      description={description}
    >
      {children}
    </RootLayoutComponent>
  )
}

export default PageLayout
