export interface PostWithoutContent {
  slug: string
  categories: string[]
  title: string
  date: string
  excerpt: string
  keywords?: string[]
  previewImageUrl?: string
}

export interface Post extends PostWithoutContent {
  content: string
}
