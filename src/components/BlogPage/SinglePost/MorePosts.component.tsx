import Link from 'next/link'

import type { PostWithoutContent } from '../../../types/post.types'

import styles from './MorePosts.component.module.scss'

interface MorePostsComponentProps {
  posts: PostWithoutContent[]
}

const MorePostsComponent: React.FC<MorePostsComponentProps> = ({ posts }) => {
  return (
    <section>
      <h1>More Posts</h1>

      <ul className={styles.List}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.Article}>
            <h2 className={styles.Title}>{post.title}</h2>

            <p className={styles.Excerpt}>{post.excerpt}</p>

            <Link
              as={`/blog/${post.slug}`}
              href="/blog/[slug]"
              className={styles.ReadMore}
            >
              » Read more
            </Link>
          </article>
        ))}
      </ul>
    </section>
  )
}

export default MorePostsComponent
