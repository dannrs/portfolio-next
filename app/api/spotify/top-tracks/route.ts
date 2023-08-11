import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { Artist } from '@spotify/web-api-ts-sdk'
import { getSpotifyApi } from '@/lib/spotify'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)

  const spotify = await getSpotifyApi()

  const song = await spotify.currentUser.topItems('tracks', 'short_term', 10)
  const {items } = song
  const tracks = items.map((track) => ({
    id: track.id,
    title: track.name,
    artist: track.artists.map((artist: Artist) => artist.name).join(', '),
    trackImageUrl: track.album.images[0].url,
    url: track.external_urls.spotify
  }))

  return NextResponse.json(tracks)
}
