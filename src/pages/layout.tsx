import RootLayoutComponent from '@/app/rootLayout.component'

const getTitle = (prependTitle?: string) =>
  prependTitle ? `${prependTitle} - Szymon Pulut` : 'Szymon Pulut'

interface PageLayoutProps {
  children?: React.ReactNode
  prependTitle?: string
  previewImageUrl?: string
  description?: string
  articlePublishedDate?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  prependTitle = '',
  previewImageUrl,
  description,
  articlePublishedDate,
}) => {
  return (
    <RootLayoutComponent
      title={getTitle(prependTitle)}
      previewImageUrl={previewImageUrl}
      description={description}
      articlePublishedDate={articlePublishedDate}
    >
      {children}
    </RootLayoutComponent>
  )
}

export default PageLayout
