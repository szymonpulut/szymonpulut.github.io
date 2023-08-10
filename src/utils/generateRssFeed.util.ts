import { Feed } from 'feed'
import fs from 'fs'

import { getAllPosts } from '@/lib/posts.api'

import markdownToHtml from './markdownToHtml.util'

const SITE_URL = 'https://szymonpulut.com'
const AUTHOR_NAME = 'Szymon Pulut'

const generateRssFeed = async () => {
  const author = {
    name: AUTHOR_NAME,
    link: SITE_URL,
  }

  const feed = new Feed({
    title: `${AUTHOR_NAME}'s blog feed`,
    description: `${AUTHOR_NAME}'s personal blog feed featuring latest news on technology, careers, fun stories about cars & motorcycles, as well as random trivia`,
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    generator: 'Next.js using Feed',
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
    },
    author,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${AUTHOR_NAME}`,
  })

  const { posts } = await getAllPosts({
    fields: ['title', 'excerpt', 'content', 'slug', 'date', 'categories'],
  })

  const postPromises = posts.map(async (post) => {
    const content = await markdownToHtml(post.content)

    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/blog/${post.slug}`,
      link: `${SITE_URL}/blog/${post.slug}`,
      category: post.categories.map((category) => ({ name: category })),
      description: post.excerpt,
      content: content,
      date: new Date(post.date),
      author: [author],
    })
  })

  await Promise.all(postPromises)

  try {
    await fs.promises.writeFile(`./public/feed.xml`, feed.rss2(), 'utf8')
  } catch (error) {
    console.error(error)
  }
}

export default generateRssFeed
