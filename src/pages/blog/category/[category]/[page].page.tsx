import type { InferGetStaticPropsType } from 'next'

import { getAllPosts, getPostsByCategory } from '@/lib/posts.api'
import PostListComponent from '@/src/components/BlogPage/PostList/PostList.component'

import PageLayout from '../../../layout'

import { MAX_PAGES, POSTS_PER_PAGE } from './[page].const'

import styles from './[page].page.module.scss'

interface CategoryPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const CategoryPage: React.FC<CategoryPageProps> = ({
  posts,
  totalPosts,
  currentPage,
  category,
}) => {
  const maxPage = Math.ceil(totalPosts / POSTS_PER_PAGE)

  return (
    <PageLayout prependTitle={`Category ${category}`}>
      <main className={styles.Container}>
        <h1>Category {category}</h1>

        <PostListComponent
          posts={posts}
          currentPage={currentPage}
          maxPage={maxPage}
          generateLinkToPage={(pageNumber) =>
            `/blog/category/${category}/${pageNumber}`
          }
        />
      </main>
    </PageLayout>
  )
}

interface GetStaticPropsParams {
  params: {
    category: string
    page: string
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const pageNumber = parseInt(params.page)

  const { posts, totalPosts } = await getPostsByCategory({
    category: params.category,
    fields: ['categories', 'title', 'date', 'slug', 'excerpt', 'keywords'],
    pageNumber,
    postsPerPage: POSTS_PER_PAGE,
  })

  return {
    props: {
      posts,
      totalPosts,
      currentPage: pageNumber,
      category: params.category,
    },
  }
}

export const getStaticPaths = async () => {
  const { posts, totalPosts } = await getAllPosts({ fields: ['categories'] })
  const totalPages = Math.min(Math.ceil(totalPosts / POSTS_PER_PAGE), MAX_PAGES)

  const categories = new Set()

  posts.forEach((post) =>
    post.categories.forEach((category) => categories.add(category)),
  )

  const paths = Array.from(categories).flatMap((category) =>
    Array.from({ length: totalPages }).map((_, i) => ({
      params: { category, page: (i + 1).toString() },
    })),
  )

  return { paths, fallback: false }
}

export default CategoryPage
