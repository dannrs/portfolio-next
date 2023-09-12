'use client'

import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { SpotifyArtist, SpotifyTrack } from '@/lib/types'
import { Track } from '@/components/spotify-track'
import { Loader2 } from 'lucide-react'
import { Artist } from '@/components/spotify-artist'

export function SpotifyCard() {
  const { data: topTracks } = useSWR('/api/spotify/top-tracks', fetcher, {
    refreshInterval: 86400000
  })
  const { data: topArtists } = useSWR('/api/spotify/top-artists', fetcher, {
    refreshInterval: 86400000
  })

  return (
    <>
      <div>
        <h1 className='pb-2 text-2xl font-bold md:text-3xl'>Top Tracks</h1>
        <p className='mb-4 text-foreground/80'>
          My favorite tracks of the last 4 weeks
        </p>
        {topTracks ? (
          topTracks?.map((track: SpotifyTrack, index: number) => (
            <Track
              key={index}
              url={track.url}
              title={track.title}
              trackImageUrl={track.trackImageUrl}
              artist={track.artist}
            />
          ))
        ) : (
          <div className='flex h-screen items-center justify-center'>
            <Loader2 className='z-50 h-10 w-10 animate-spin' />
          </div>
        )}
      </div>
      <div>
        <h1 className='pb-2 text-2xl font-bold md:text-3xl'>Top Artists</h1>
        <p className='mb-4 text-foreground/80'>
          My favorite artists of the last 4 weeks
        </p>
        {topArtists ? (
          topArtists?.map((artist: SpotifyArtist, index: number) => (
            <Artist
              key={index}
              url={artist.url}
              name={artist.name}
              artistImageUrl={artist.artistImageUrl}
              followers={artist.followers}
            />
          ))
        ) : (
          <div className='flex h-screen items-center justify-center'>
            <Loader2 className='z-40 h-10 w-10 animate-spin' />
          </div>
        )}
      </div>
    </>
  )
}
