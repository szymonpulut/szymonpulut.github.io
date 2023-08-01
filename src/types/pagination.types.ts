import Post from './post.types'

interface PaginationParameters {
  pageNumber: number
  postsPerPage: number
}

export type ParametersWithPagination<T> = T & PaginationParameters

export interface PaginatedPostList<T = Post> {
  posts: T[]
  totalPosts: number
}
