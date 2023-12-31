'use client'

import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { SpotifyComponent } from '@/components/spotify-component'
import { Skeleton } from '@/components/ui/skeleton'
import { navigationRoutes } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import UnderlinedLink from '@/components/underlined-link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const { data: currentSong } = useSWR(
    '/api/spotify/currently-playing',
    fetcher,
    {
      refreshInterval: 60000
    }
  )
  const { data: recentlyPlayed } = useSWR(
    '/api/spotify/recently-played',
    fetcher,
    { refreshInterval: 600000 }
  )

  return (
    <section className='container relative bottom-0 pt-8 md:max-w-5xl'>
      <div className='flex flex-col items-center justify-center space-y-4 py-4'>
        <Separator />
        <div className='flex w-full flex-col gap-12 md:flex-row'>
          <div className='grid w-full grid-cols-2'>
            <div className='flex flex-col items-start gap-4'>
              {navigationRoutes.navItem.map((item, index) => (
                <UnderlinedLink key={index} href={item.href}>
                  {item.title}
                </UnderlinedLink>
              ))}
            </div>
            <div className='flex flex-col gap-4'>
              {siteConfig.links.map((item, index) => (
                <UnderlinedLink key={index} href={item.href}>
                  {item.name}
                </UnderlinedLink>
              ))}
              <UnderlinedLink href='/spotify'>Spotify</UnderlinedLink>
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
          Created by&nbsp;
          <UnderlinedLink
            href='https://github.com/dannrs'
            className='font-semibold'
            aria-label="Danni Ramdhani's Github page"
          >
            dannrs
          </UnderlinedLink>
          . Powered by&nbsp;
          <UnderlinedLink href='https://nextjs.org' className='font-semibold'>
            Next.js&nbsp;
          </UnderlinedLink>
          and&nbsp;
          <UnderlinedLink href='https://vercel.com/' className='font-semibold'>
            Vercel
          </UnderlinedLink>
          . Illustration by&nbsp;
          <UnderlinedLink
            href='https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=code%20typing&position=0&from_view=keyword&track=ais'
            className='font-semibold'
          >
            storyset&nbsp;
          </UnderlinedLink>
          on Freepik.
        </p>
      </div>
    </section>
  )
}
