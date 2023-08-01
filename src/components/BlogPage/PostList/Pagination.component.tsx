import Link from 'next/link'

import styles from './Pagination.component.module.scss'

interface PaginationComponentProps {
  generateLinkToPage: (pageNumber: number) => string
  currentPage: number
  maxPage: number
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  generateLinkToPage,
  currentPage,
  maxPage,
}) => {
  return (
    <nav className={styles.Pagination}>
      {currentPage > 1 && (
        <Link href={generateLinkToPage(currentPage - 1)}>Previous</Link>
      )}

      {currentPage < maxPage && (
        <Link href={generateLinkToPage(currentPage + 1)}>Next</Link>
      )}
    </nav>
  )
}
export default PaginationComponent
