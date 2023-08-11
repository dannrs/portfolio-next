import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { Artist } from '@spotify/web-api-ts-sdk'
import { getSpotifyApi } from '@/lib/spotify'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)

  const spotify = await getSpotifyApi()

  const song = await spotify.player.getCurrentlyPlayingTrack()

  if (song === null) {
    return NextResponse.json({ isPlaying: false })
  }
  
  const isPlaying = song.is_playing
  const { item: track } = song
  const title = track.name
  const artist = track.artists.map((artist: Artist) => artist.name).join(', ')
  const albumImageUrl = track.album.images[0].url
  const songUrl = track.external_urls.spotify

  if (isPlaying === false) {
    return NextResponse.json({isPlaying})
  }

  return NextResponse.json({
    isPlaying,
    title,
    artist,
    albumImageUrl,
    songUrl
  })
}
