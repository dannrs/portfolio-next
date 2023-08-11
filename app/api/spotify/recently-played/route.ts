import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { SimplifiedArtist, SpotifyApi } from '@spotify/web-api-ts-sdk'
import { getSpotifyApi } from '@/lib/spotify'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)

  const spotify = await getSpotifyApi()

  const song = await spotify.player.getRecentlyPlayedTracks(1)
  const { track } = song.items[0]
  const title = track.name
  const artist = track.artists
    .map((artist: SimplifiedArtist) => artist.name)
    .join(', ')
  const albumImageUrl = track.album.images[0].url
  const songUrl = track.external_urls.spotify

  return NextResponse.json({
    revalidated: true,
    title,
    artist,
    albumImageUrl,
    songUrl
  })
}
