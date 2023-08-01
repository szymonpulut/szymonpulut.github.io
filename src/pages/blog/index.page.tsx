import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { getAllPostsPaginated } from '@/lib/posts.api'

import { POSTS_PER_PAGE } from './page/[page].const'
import BlogPage from './page/[page].page'

interface IndexPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const IndexPage: React.FC<IndexPageProps> = ({
  posts,
  totalPosts,
  currentPage,
}) => {
  return (
    <BlogPage posts={posts} totalPosts={totalPosts} currentPage={currentPage} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts, totalPosts } = await getAllPostsPaginated({
    fields: ['categories', 'title', 'date', 'slug', 'excerpt', 'keywords'],
    pageNumber: 1,
    postsPerPage: POSTS_PER_PAGE,
  })

  return {
    props: {
      posts,
      totalPosts,
      currentPage: 1,
    },
  }
}

export default IndexPage
