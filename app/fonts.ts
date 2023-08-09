import { Lato, Roboto, Roboto_Mono } from 'next/font/google'

export const latoFont = Lato({
  weight: ['400', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const robotoFont = Roboto({
  weight: ['100'],
  subsets: ['latin'],
  display: 'swap',
})

export const robotoMonoFont = Roboto_Mono({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})
