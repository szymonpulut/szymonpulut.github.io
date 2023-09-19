import type { Post, PostWithoutContent } from '@/src/types/post.types'
import calculateReadingTime from '@/src/utils/calculateReadingTime.util'

import DateFormatterComponent from '../DateFormatter.component'

import CategoriesListComponent from './CategoriesList.component'
import KeywordsListComponent from './KeywordsList.component'
import MorePostsComponent from './MorePosts.component'

import styles from './SinglePost.component.module.scss'

interface SinglePostComponentProps {
  title: string
  post: Post
  morePosts: PostWithoutContent[]
}

const SinglePostComponent: React.FC<SinglePostComponentProps> = ({
  title,
  post,
  morePosts,
}) => {
  const readingTime = calculateReadingTime(post.content)

  return (
    <>
      <article>
        <h1 className={styles.Title}>{title}</h1>

        <div className={styles.Header}>
          <div className={styles.CategoryAndDate}>
            <span className={styles.Category}>{post.categories?.[0]}</span>

            <DateFormatterComponent dateString={post.date} />
          </div>

          <div className={styles.ReadingTime}>{readingTime} min read</div>
        </div>

        <div className={styles.Excerpt}>{post.excerpt}</div>

        <hr className={styles.HorizontalRule} />

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ textAlign: 'justify' }}
        />

        <section className={styles.CategoriesKeywords}>
          {post.categories && (
            <CategoriesListComponent categories={post.categories} />
          )}
          {post.keywords && <KeywordsListComponent keywords={post.keywords} />}
        </section>
      </article>

      <hr className={styles.HorizontalRule} />

      {morePosts.length > 0 && <MorePostsComponent posts={morePosts} />}
    </>
  )
}

export default SinglePostComponent
