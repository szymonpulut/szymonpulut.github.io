import { Post, PostWithoutContent } from '@/src/types/post.types'

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
  return (
    <>
      <article>
        <h1 className={styles.Title}>{title}</h1>

        <div className={styles.Header}>
          <span className={styles.Category}>{post.categories?.[0]}</span>

          <DateFormatterComponent dateString={post.date} />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ textAlign: 'justify' }}
        />

        {post.categories && (
          <CategoriesListComponent categories={post.categories} />
        )}
        {post.keywords && <KeywordsListComponent keywords={post.keywords} />}
      </article>

      <hr className={styles.HorizontalRule} />

      <MorePostsComponent posts={morePosts} />
    </>
  )
}

export default SinglePostComponent
