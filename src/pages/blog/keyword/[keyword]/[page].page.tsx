import { InferGetStaticPropsType } from 'next'

import { getAllPosts, getPostsByKeyword } from '@/lib/posts.api'
import PostListComponent from '@/src/components/BlogPage/PostList/PostList.component'

import PageLayout from '../../../layout.page'

import { MAX_PAGES, POSTS_PER_PAGE } from './[page].const'

import styles from './[page].page.module.scss'

interface KeywordPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const KeywordPage: React.FC<KeywordPageProps> = ({
  posts,
  totalPosts,
  currentPage,
  keyword,
}) => {
  const maxPage = Math.ceil(totalPosts / POSTS_PER_PAGE)

  return (
    <PageLayout prependTitle={`Keyword ${keyword}`}>
      <main className={styles.Container}>
        <h1>Keyword {keyword}</h1>

        <PostListComponent
          posts={posts}
          currentPage={currentPage}
          maxPage={maxPage}
          generateLinkToPage={(pageNumber) =>
            `/blog/keyword/${keyword}/${pageNumber}`
          }
        />
      </main>
    </PageLayout>
  )
}

interface GetStaticPropsParams {
  params: {
    keyword: string
    page: string
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const pageNumber = parseInt(params.page)

  const { posts, totalPosts } = await getPostsByKeyword({
    keyword: params.keyword,
    fields: ['categories', 'title', 'date', 'slug', 'excerpt', 'keywords'],
    pageNumber,
    postsPerPage: POSTS_PER_PAGE,
  })

  return {
    props: {
      posts,
      totalPosts,
      currentPage: pageNumber,
      keyword: params.keyword,
    },
  }
}

export const getStaticPaths = async () => {
  const { posts, totalPosts } = await getAllPosts({ fields: ['keywords'] })

  const totalPages = Math.min(Math.ceil(totalPosts / POSTS_PER_PAGE), MAX_PAGES)

  const keywords = new Set()

  posts.forEach((post) =>
    post.keywords.forEach((keyword) => keywords.add(keyword)),
  )

  const paths = Array.from(keywords).flatMap((keyword) =>
    Array.from({ length: totalPages }).map((_, i) => ({
      params: { keyword, page: (i + 1).toString() },
    })),
  )

  return { paths, fallback: false }
}

export default KeywordPage
