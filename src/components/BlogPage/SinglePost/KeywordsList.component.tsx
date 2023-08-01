import React from 'react'
import Link from 'next/link'

import styles from './KeywordsList.component.module.scss'

interface KeywordsListComponentProps {
  keywords: string[]
}

const KeywordsListComponent: React.FC<KeywordsListComponentProps> = ({
  keywords,
}) => {
  return (
    <p>
      Keywords:{' '}
      {keywords.map((keyword, index, array) => (
        <React.Fragment key={keyword}>
          <Link
            className={styles.Keyword}
            as={`/blog/keyword/${keyword}`}
            href="/blog/keyword/[keyword]"
          >
            {keyword}
          </Link>
          {index < array.length - 1 && ', '}
        </React.Fragment>
      ))}
    </p>
  )
}

export default KeywordsListComponent
