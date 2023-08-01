import { InferGetStaticPropsType } from 'next'

import { getAllPostsPaginated, getPostSlugs } from '@/lib/posts.api'
import PostListComponent from '@/src/components/BlogPage/PostList/PostList.component'

import PageLayout from '../../layout'

import { MAX_PAGES, POSTS_PER_PAGE } from './[page].const'

import styles from './[page].page.module.scss'

const getTitle = (pageNumber: number) =>
  pageNumber === 1 ? 'Blog' : `Blog - Page ${pageNumber}`

interface BlogPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const BlogPage: React.FC<BlogPageProps> = ({
  posts,
  totalPosts,
  currentPage,
}) => {
  const maxPage = Math.ceil(totalPosts / POSTS_PER_PAGE)

  return (
    <PageLayout prependTitle={getTitle(currentPage)}>
      <main className={styles.Container}>
        <PostListComponent
          posts={posts}
          currentPage={currentPage}
          maxPage={maxPage}
          generateLinkToPage={(pageNumber) => `/blog/page/${pageNumber}`}
        />
      </main>
    </PageLayout>
  )
}

export default BlogPage

interface GetStaticPropsParams {
  params: {
    keyword: string
    page: string
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const pageNumber = parseInt(params.page)

  const { posts, totalPosts } = await getAllPostsPaginated({
    fields: ['categories', 'title', 'date', 'slug', 'excerpt', 'keywords'],
    pageNumber,
    postsPerPage: POSTS_PER_PAGE,
  })

  return {
    props: {
      posts: posts,
      totalPosts: totalPosts,
      currentPage: pageNumber,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = await getPostSlugs()

  const totalPosts = posts.length
  const totalPages = Math.min(Math.ceil(totalPosts / POSTS_PER_PAGE), MAX_PAGES)

  const paths = Array.from({ length: totalPages }).map((_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return { paths, fallback: false }
}
