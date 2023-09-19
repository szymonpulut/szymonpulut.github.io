// This is based on Pavel Polivka's implementation
// https://ppolivka.com/posts/reading-time-stat-in-nextjs-blog

// TODO
// 1) Optimize ALPHANUMERIC_CHARS - generate a map based on the array
// 2) Invoke it only once per post - has to be saved in .md or cached

const ALPHANUMERIC_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const WORDS_PER_MINUTE = 225

const isAlphanumeric = (char: string): boolean =>
  ALPHANUMERIC_CHARS.includes(char)

const isWord = (str: string): boolean =>
  Array.from(str).some((char) => isAlphanumeric(char))

const getWordCount = (input: string): number => {
  const text = input.split(/\s+/)

  return text.filter(isWord).length
}

const calculateReadingTime = (text: string) => {
  const wordCount = getWordCount(text)

  return Math.ceil(wordCount / WORDS_PER_MINUTE)
}

export default calculateReadingTime
