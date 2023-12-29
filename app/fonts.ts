import { Roboto, Roboto_Mono } from 'next/font/google'

// Lato font breaks rendering on large screens, when imported via Next fonts
// So instead, we're importing it from Google Fonts CDN in CSS directly
export const latoFont = { className: 'latoFont' }

// export const latoFont = Lato({
//   weight: ['400', '900'],
//   subsets: ['latin'],
//   display: 'swap',
// })

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
