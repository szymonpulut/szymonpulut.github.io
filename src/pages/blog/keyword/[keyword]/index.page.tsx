import type { InferGetStaticPropsType } from 'next'

import { getAllPosts, getPostsByKeyword } from '@/lib/posts.api'

import { POSTS_PER_PAGE } from './[page].const'
import KeywordPage from './[page].page'

interface IndexKeywordPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const IndexKeywordPage: React.FC<IndexKeywordPageProps> = ({
  posts,
  totalPosts,
  currentPage,
  keyword,
}) => {
  return (
    <KeywordPage
      posts={posts}
      totalPosts={totalPosts}
      currentPage={currentPage}
      keyword={keyword}
    />
  )
}

interface GetStaticPropsParams {
  params: {
    keyword: string
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const { posts, totalPosts } = await getPostsByKeyword({
    keyword: params.keyword,
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
      keyword: params.keyword,
    },
  }
}

export const getStaticPaths = async () => {
  const { posts } = await getAllPosts({ fields: ['keywords'] })

  const keywords = new Set()

  posts.forEach(
    (post) => post.keywords?.forEach((keyword) => keywords.add(keyword)),
  )

  const paths = Array.from(keywords).map((keyword) => ({
    params: { keyword, page: '1' },
  }))

  return { paths, fallback: false }
}

export default IndexKeywordPage
