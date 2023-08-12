import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { SimplifiedArtist } from '@spotify/web-api-ts-sdk'
import { getSpotifyApi } from '@/lib/spotify'
import { Track } from '@spotify/web-api-ts-sdk'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)

  const spotify = await getSpotifyApi()

  const song = await spotify.currentUser.topItems('tracks', 'short_term', 10)
  const { items } = song
  const tracks = items.map(track => {
    const trackData = track as unknown as Track
    return {
      id: trackData.id,
      title: trackData.name,
      artist: trackData.artists
        .map((artist: SimplifiedArtist) => artist.name)
        .join(', '),
      trackImageUrl: trackData.album.images[0].url,
      url: track.external_urls.spotify
    }
  })

  return NextResponse.json(tracks)
}
