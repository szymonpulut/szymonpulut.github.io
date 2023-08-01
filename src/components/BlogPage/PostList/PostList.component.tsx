import type { PostWithoutContent } from '../../../types/post.types'

import EmptyPostListComponent from './EmptyPostList.component'
import PaginationComponent from './Pagination.component'
import SinglePostPreviewComponent from './SinglePostPreview.component'

import styles from './PostList.component.module.scss'

interface PostListComponentProps {
  posts: PostWithoutContent[]
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
            {posts.map((post) => (
              <div key={`${post.slug}-div`}>
                <SinglePostPreviewComponent
                  key={post.slug}
                  categories={post.categories}
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />

                <hr className={styles.HorizontalRule} />
              </div>
            ))}
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
