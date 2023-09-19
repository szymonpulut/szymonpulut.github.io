import type { InferGetStaticPropsType } from 'next'

import { getAllPosts, getPostsByCategory } from '@/lib/posts.api'

import { POSTS_PER_PAGE } from './[page].const'
import CategoryPage from './[page].page'

interface IndexCategoryPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const IndexCategoryPage: React.FC<IndexCategoryPageProps> = ({
  posts,
  totalPosts,
  currentPage,
  category,
}) => {
  return (
    <CategoryPage
      posts={posts}
      totalPosts={totalPosts}
      currentPage={currentPage}
      category={category}
    />
  )
}

interface GetStaticPropsParams {
  params: {
    category: string
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const { posts, totalPosts } = await getPostsByCategory({
    category: params.category,
    fields: [
      'categories',
      'title',
      'date',
      'slug',
      'excerpt',
      'keywords',
      'content',
    ],
    pageNumber: 1,
    postsPerPage: POSTS_PER_PAGE,
  })

  return {
    props: {
      posts,
      totalPosts,
      currentPage: 1,
      category: params.category,
    },
  }
}

export const getStaticPaths = async () => {
  const { posts } = await getAllPosts({ fields: ['categories'] })

  const categories = new Set()

  posts.forEach((post) =>
    post.categories.forEach((category) => categories.add(category)),
  )

  const paths = Array.from(categories).map((category) => ({
    params: { category, page: '1' },
  }))

  return { paths, fallback: false }
}

export default IndexCategoryPage
