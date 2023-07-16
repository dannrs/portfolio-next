'use client'

import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { SpotifyComponent } from '@/components/spotify-component'
import Link from 'next/link'

export function Footer() {
  const { data: currentSong } = useSWR('/api/spotify/now-playing', fetcher, {
    refreshInterval: 1000
  })
  const { data: recentlyPlayed } = useSWR(
    '/api/spotify/recently-played',
    fetcher,
    { refreshInterval: 600000 }
  )

  return (
    <footer className="container border-t border-t-gray-2 bg-background">
      <div className="flex flex-col items-center justify-center py-4 md:py-6 md:flex-row md:justify-between">
        <p className="text-center md:pr-4 md:text-left">
          Created by{' '}
          <Link
            href="https://github.com/dannrs"
            className="hover:underline underline-offset-4"
          >
            danniramdhani
          </Link>
          . Powered by{' '}
          <Link
            href="https://nextjs.org"
            className="hover:underline underline-offset-4"
          >
            Next.js
          </Link>{' '}
          and{' '}
          <Link
            href="https://vercel.com/"
            className="hover:underline underline-offset-4"
          >
            Vercel
          </Link>
          . <br className="md:hidden" />
          Hero illustration by{' '}
          <Link
            href="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=code%20typing&position=0&from_view=keyword&track=ais"
            className="hover:underline underline-offset-4"
          >
            storyset
          </Link>{' '}
          on Freepik.
        </p>
        {currentSong?.isPlaying ? (
          <SpotifyComponent song={currentSong} />
        ) : (
          <SpotifyComponent song={recentlyPlayed} />
        )}
      </div>
    </footer>
  )
}
