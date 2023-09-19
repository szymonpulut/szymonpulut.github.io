import calculateReadingTime from '@/src/utils/calculateReadingTime.util'

import type { Post } from '../../../types/post.types'

import EmptyPostListComponent from './EmptyPostList.component'
import PaginationComponent from './Pagination.component'
import SinglePostPreviewComponent from './SinglePostPreview.component'

import styles from './PostList.component.module.scss'

interface PostListComponentProps {
  posts: Post[]
  currentPage: number
  maxPage: number
  generateLinkToPage: (pageNumber: number) => string
}

const PostListComponent: React.FC<PostListComponentProps> = ({
  posts,
  currentPage,
  maxPage,
  generateLinkToPage,
}) => {
  return (
    <section className={styles.List}>
      {posts.length > 0 ? (
        <>
          <ul>
            {posts.map((post) => {
              const readingTime = calculateReadingTime(post.content)

              return (
                <div key={`${post.slug}-div`}>
                  <SinglePostPreviewComponent
                    key={post.slug}
                    categories={post.categories}
                    title={post.title}
                    date={post.date}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    readingTime={readingTime}
                  />

                  <hr className={styles.HorizontalRule} />
                </div>
              )
            })}
          </ul>

          <PaginationComponent
            currentPage={currentPage}
            maxPage={maxPage}
            generateLinkToPage={generateLinkToPage}
          />
        </>
      ) : (
        <EmptyPostListComponent />
      )}
    </section>
  )
}

export default PostListComponent
