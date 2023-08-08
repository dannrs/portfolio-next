import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { getTopArtists } from '@/lib/spotify'
import { Artist } from '@spotify/web-api-ts-sdk'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)
  const response = await getTopArtists()

  const song = await response.json()

  const artists = song.items.map((artist: Artist) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    artistImageUrl: artist.images ? artist.images[0].url : null,
    genres: artist.genres?.map(genre => genre).join(', ')
  }))

  return NextResponse.json({
    revalidated: true,
    artists
  })
}
