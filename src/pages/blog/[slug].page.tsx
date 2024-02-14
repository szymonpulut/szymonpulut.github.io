import type { InferGetStaticPropsType } from 'next'

import {
  getAllPosts,
  getAllPostsPaginated,
  getPostBySlug,
} from '@/lib/posts.api'
import SinglePostComponent from '@/src/components/BlogPage/SinglePost/SinglePost.component'

import PageLayout from '../layout'

import { MORE_POSTS_SIZE } from './[slug].const'

import styles from './[slug].page.module.scss'

interface PostPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const PostPage: React.FC<PostPageProps> = ({ post, morePosts }) => {
  return (
    <PageLayout
      prependTitle={post.title}
      previewImageUrl={post.previewImageUrl}
    >
      <main className={styles.Container}>
        <SinglePostComponent
          title={post.title}
          post={post}
          morePosts={morePosts}
        />
      </main>
    </PageLayout>
  )
}

interface GetStaticPropsParams {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const post = await getPostBySlug({
    slug: params.slug,
    fields: [
      'categories',
      'title',
      'excerpt',
      'date',
      'slug',
      'content',
      'keywords',
      'previewImageUrl',
    ],
  })

  const { posts: morePosts } = await getAllPostsPaginated({
    fields: ['categories', 'title', 'excerpt', 'date', 'slug'],
    pageNumber: 1,
    postsPerPage: MORE_POSTS_SIZE + 1,
  })

  const slicedPosts = morePosts
    .filter((post) => post.slug !== params.slug)
    .slice(0, MORE_POSTS_SIZE)

  return {
    props: {
      post: {
        ...post,
      },
      morePosts: slicedPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const { posts } = await getAllPosts({ fields: ['slug'] })

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default PostPage
