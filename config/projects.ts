import type { ProjectType } from '@/lib/types'

export const projects: ProjectType[] = [
  {
    name: 'portfolio',
    description:
      'My personal portfolio site built with Next.js 13, TypeScript, Tailwind CSS and various other libraries.',
    githubUrl: 'https://github.com/dannrs/portfolio',
    previewUrl: 'https://danny.my.id'
  },
  {
    name: 'spotify-search',
    description:
      'A search application that implements the Jaro-Winkler distance algorithm to quickly search data from Spotify.',
    githubUrl: 'https://github.com/dannrs/spotify-search',
    previewUrl: 'https://spotify-search-seven.vercel.app/'
  },
  {
    name: 'passphrase-generator',
    description:
      'A passphrase generator app that implements the Diceware method to generate strong and memorable passwords.',
    githubUrl: 'https://github.com/dannrs/passphrase-generator',
    previewUrl: 'https://passphrase-generator-five.vercel.app/'
  }
]
