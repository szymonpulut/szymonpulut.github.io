import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { ParametersWithPagination } from '@/src/types/pagination.types'
import type { Post } from '@/src/types/post.types'
import markdownToHtml from '@/src/utils/markdownToHtml.util'

const POSTS_DIRECTORY = join(process.cwd(), '_posts')

export const getPostSlugs = async () => {
  return await fs.promises.readdir(POSTS_DIRECTORY)
}

export const getPostBySlug = async <K extends keyof Post>({
  slug,
  fields = [],
}: {
  slug: string
  fields: K[]
}): Promise<Pick<Post, K>> => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(POSTS_DIRECTORY, `${realSlug}.md`)

  const fileContents = await fs.promises.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post: Partial<Post> = {}

  // Ensure only the minimal data is exposed
  fields.forEach(async (field) => {
    if (field === 'slug') {
      const postSlug: Post['slug'] = realSlug
      post.slug = postSlug
    }
    if (field === 'content') {
      const postContent: Post['content'] = await markdownToHtml(content)
      post.content = postContent
    }

    if (typeof data[String(field)] !== 'undefined') {
      post[field as K] = data[String(field)]
    }
  })

  return post as Pick<Post, K>
}

export const getAllPosts = async <K extends keyof Post>({
  fields = [],
}: {
  fields?: K[]
}) => {
  const slugs = await getPostSlugs()

  const postsPromises = slugs.map((slug) => getPostBySlug({ slug, fields }))
  const posts = await Promise.all(postsPromises)

  return { posts, totalPosts: posts.length }
}

export const getAllPostsPaginated = async <K extends keyof Post>({
  fields = [],
  pageNumber,
  postsPerPage,
}: ParametersWithPagination<{
  fields?: K[]
}>) => {
  if (!(fields as unknown as string[]).includes('date')) {
    throw new Error("Didn't request date")
  }

  type RequiredPostFields = K | 'date'

  const { posts, totalPosts } = await getAllPosts({
    fields: fields as RequiredPostFields[],
  })

  const sortedPosts = posts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1,
  )

  const startIndex = (pageNumber - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  const slicedPosts = sortedPosts.slice(startIndex, endIndex)

  return { posts: slicedPosts, totalPosts }
}

export const getPostsByCategory = async <K extends keyof Post>({
  category,
  fields,
  pageNumber,
  postsPerPage,
}: ParametersWithPagination<{
  category: string
  fields: K[]
}>) => {
  if (!(fields as unknown as string[]).includes('categories')) {
    throw new Error("Didn't request categories")
  }

  type RequiredPostFields = K | 'categories'

  const { posts } = await getAllPosts({
    fields: fields as RequiredPostFields[],
  })

  const allPostsInCategory = posts.filter(
    (post) => post.categories?.includes(category),
  )

  const totalPosts = allPostsInCategory.length

  const startIndex = (pageNumber - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  const slicedPosts = allPostsInCategory.slice(startIndex, endIndex)

  return { posts: slicedPosts, totalPosts }
}

export const getPostsByKeyword = async <K extends keyof Post>({
  keyword,
  fields,
  pageNumber,
  postsPerPage,
}: ParametersWithPagination<{
  keyword: string
  fields: K[]
}>) => {
  if (!(fields as unknown as string[]).includes('keywords')) {
    throw new Error("Didn't request keywords")
  }

  type RequiredPostFields = K | 'keywords'

  const { posts } = await getAllPosts({
    fields: fields as RequiredPostFields[],
  })

  const allPostsWithKeyword = posts.filter(
    (post) => post.keywords?.includes(keyword),
  )

  const totalPosts = allPostsWithKeyword.length

  const startIndex = (pageNumber - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  const slicedPosts = allPostsWithKeyword.slice(startIndex, endIndex)

  return { posts: slicedPosts, totalPosts }
}
