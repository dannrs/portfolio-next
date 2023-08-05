'use client'

import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { SpotifyComponent } from '@/components/spotify-component'
import Link from 'next/link'
import { Skeleton } from './ui/skeleton'
import { navigationRoutes } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  const { data: currentSong } = useSWR('/api/spotify/currently-playing', fetcher, {
    refreshInterval: 60000
  })
  const { data: recentlyPlayed } = useSWR(
    '/api/spotify/recently-played',
    fetcher,
    { refreshInterval: 600000 }
  )

  return (
    <footer className='flex items-center justify-center'>
      <div className='container relative bottom-0 mt-12 md:mt-16 md:max-w-5xl'>
        <div className='flex flex-col items-center justify-center space-y-4 border-t py-4'>
          <div className='flex w-full flex-col gap-12 md:flex-row'>
            <div className='grid w-full grid-cols-2'>
              <div className='flex flex-col items-start gap-4'>
                {navigationRoutes.navItem.map((item, index) => (
                  <Link key={index} href={item.href}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className='flex flex-col gap-4'>
                {siteConfig.links.map((item, index) => (
                  <Link key={index} href={item.href}>
                    {item.name}
                  </Link>
                ))}
                <Link href='/spotify'>Spotify</Link>
              </div>
            </div>
            <div className='flex w-full items-start justify-center md:justify-end'>
              {currentSong && recentlyPlayed ? (
                currentSong?.isPlaying ? (
                  <SpotifyComponent song={currentSong} />
                ) : (
                  <SpotifyComponent song={recentlyPlayed} />
                )
              ) : (
                <Skeleton className='h-14 w-[15.5rem] rounded-sm' />
              )}
            </div>
          </div>
          <p className='pt-8 text-center'>
            Created by{' '}
            <Link
              href='https://github.com/dannrs'
              className='font-semibold underline-offset-4 hover:underline'
            >
              danniramdhani
            </Link>
            . Powered by{' '}
            <Link
              href='https://nextjs.org'
              className='font-semibold underline-offset-4 hover:underline'
            >
              Next.js
            </Link>{' '}
            and{' '}
            <Link
              href='https://vercel.com/'
              className='font-semibold underline-offset-4 hover:underline'
            >
              Vercel
            </Link>
            . Hero illustration by{' '}
            <Link
              href='https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=code%20typing&position=0&from_view=keyword&track=ais'
              className='font-semibold underline-offset-4 hover:underline'
            >
              storyset
            </Link>{' '}
            on Freepik.
          </p>
        </div>
      </div>
    </footer>
  )
}
