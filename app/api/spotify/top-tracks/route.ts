import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { getTopTracks } from '@/lib/spotify'
import { ITracksAPIResponse } from '@/types'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)
  const response = await getTopTracks()

  const song = await response.json()

  const tracks = song.items.map((track: ITracksAPIResponse) => ({
    id: track.id,
    title: track.name,
    artist: track.artists.map(artist => artist.name).join(', '),
    trackImageUrl: track.album.images[0].url,
    url: track.external_urls.spotify
  }))

  return NextResponse.json({
    revalidated: true,
    tracks
  })
}
