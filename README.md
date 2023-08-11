# Personal website - szymonpulut.com

## Description

This is my personal site - simple and minimalistic. It uses TypeScript, React, Next.js and is statically generated (SSG). I performed performance analysis using tools like Lighthouse audit and [https://webpagetest.org](https://webpagetest.org) to optimise performance (focusing on good Core Web Vitals). It deploys automatically on merge to `main` - via GitHub Actions & Pages.

I followed all the best practices I learned throughout my career too! I built it in a way that should be easily extendable, while maintaining a codebase that's easy to read and to reason about :)

### Quick background

As you can check out in this repo's history, I created original version of this website around the beginning of my career, in JS, React, Gatsby. Later I converted it to use TypeScript. In the middle of 2023, I decided to rewrite it in for 3 reasons:

1. I really wanted to try out newest Next.js (13) features
2. I wanted a space for posting my thoughts - a blog ;)
3. I had a bit of spare time too!

## Quick overview

Link: [https://szymonpulut.com/](https://szymonpulut.com/)

## Technologies used & features

TypeScript, React, Next.js, HTML5, CSS3 (SCSS)

## Running

```
npm install
```

`npm run dev` starts development server

`npm run build` creates production ready package

## TODO

- a couple simple E2E tests to make sure newly deployed version works
- build syntax-highlighting feature for blog posts (Prism?)
