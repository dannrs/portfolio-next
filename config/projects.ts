import { ProjectType } from '@/types'

export const projects: ProjectType[] = [
  {
    name: 'NowPlayingLyrics',
    coverImage: '/images/projects/NowPlayingLyrics.png',
    description:
      'Automatic Romanized Lyrics Display for Currently Playing Songs',
    githubUrl: 'https://github.com/dannrs/NowPlayingLyrics',
    previewUrl: 'https://now-playing-lyrics.vercel.app/spotify',
    tools: ['Next.js', 'Tailwind CSS']
  },
  {
    name: 'Passphrase Generator',
    coverImage: '/images/projects/PassphraseGenerator.png',
    description: 'Random passphrase generator based on Diceware method',
    githubUrl: 'https://gitlab.com/dxrs/passphrase-generator',
    previewUrl: 'https://dxrs.gitlab.io/passphrase-generator/',
    tools: ['React', 'Tailwind CSS']
  },
  {
    name: 'Jaro-Winkler Component',
    coverImage: '/images/projects/JaroWinkler.png',
    description:
      'A reusable React search component based on Jaro-Winkler Algorithm',
    githubUrl: 'https://gitlab.com/dxrs/kbbi-daring',
    previewUrl: 'https://dxrs.gitlab.io/kbbi-daring',
    tools: ['React']
  }
]
