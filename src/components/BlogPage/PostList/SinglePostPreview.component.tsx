import Link from 'next/link'

import type { PostWithoutContent } from '@/src/types/post.types'

import DateFormatterComponent from '../DateFormatter.component'

import styles from './SinglePostPreview.component.module.scss'

interface SinglePostPreviewComponentProps extends PostWithoutContent {}

const SinglePostPreviewComponent: React.FC<SinglePostPreviewComponentProps> = ({
  categories,
  title,
  date,
  excerpt,
  slug,
}) => {
  const mainCategory = categories?.[0]

  return (
    <article>
      <h1 className={styles.Title}>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          {title}
        </Link>
      </h1>

      <div className={styles.Header}>
        <Link
          className={styles.Category}
          as={`/blog/category/${mainCategory}`}
          href="/blog/category/[mainCategory]"
        >
          {mainCategory}
        </Link>

        <DateFormatterComponent dateString={date} />
      </div>

      <p className={styles.Excerpt}>{excerpt}</p>

      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        » Read more
      </Link>
    </article>
  )
}

export default SinglePostPreviewComponent
