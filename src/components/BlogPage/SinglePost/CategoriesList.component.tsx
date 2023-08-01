import React from 'react'
import Link from 'next/link'

import { PostWithoutContent } from '@/src/types/post.types'

import styles from './CategoriesList.component.module.scss'

interface CategoriesListComponentProps {
  categories: PostWithoutContent['categories']
}

const CategoriesListComponent: React.FC<CategoriesListComponentProps> = ({
  categories,
}) => {
  return (
    <p>
      Categories:{' '}
      {categories.map((category, index, array) => (
        <React.Fragment key={category}>
          <Link
            className={styles.Category}
            as={`/blog/category/${category}`}
            href="/blog/category/[category]"
          >
            {category}
          </Link>
          {index < array.length - 1 && ', '}
        </React.Fragment>
      ))}
    </p>
  )
}

export default CategoriesListComponent
