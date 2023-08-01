import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import markdownToHtml from '@/src/utils/markdownToHtml.util'

const CONTENT_DIRECTORY = join(process.cwd(), '_content')

export const getAboutMeData = async () => {
  const fullPath = join(CONTENT_DIRECTORY, 'about-me.md')
  const fileContents = await fs.promises.readFile(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const remarkedContent = await markdownToHtml(content)

  return {
    headerMotto: data.headerMotto,
    description: remarkedContent,
    technologies: data.technologies,
  }
}

export const getContactData = async () => {
  const fullPath = join(CONTENT_DIRECTORY, 'contact.md')
  const fileContents = await fs.promises.readFile(fullPath, 'utf8')

  const { data } = matter(fileContents)

  return {
    githubUrl: data.githubUrl,
    email: data.email,
    resumeUrl: data.resumeUrl,
    linkedinUrl: data.linkedinUrl,
  }
}
