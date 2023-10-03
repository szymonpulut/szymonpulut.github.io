import React from 'react'
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
          <React.Fragment key={post.slug}>
            <h2 className={styles.Title}>{post.title}</h2>

            <p className={styles.Excerpt}>{post.excerpt}</p>

            <Link
              as={`/blog/${post.slug}`}
              href="/blog/[slug]"
              className={styles.ReadMore}
            >
              » Read more
            </Link>
          </React.Fragment>
        ))}
      </ul>
    </section>
  )
}

export default MorePostsComponent
