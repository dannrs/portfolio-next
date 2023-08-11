import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { getSpotifyApi } from '@/lib/spotify'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)
  
  const spotify = await getSpotifyApi()

  const song = await spotify.currentUser.topItems('artists', 'short_term', 10)

  const { items } = song
  const artists = items.map(async (artist) => {
  const artistsData = await spotify.artists.get(artist.id)
  return {
    id: artist.id,
    name: artist.name,
    url: artist.external_urls.spotify,
    artistImageUrl: artist.images[0].url,
    followers: artistsData.followers.total
  }
  })

  const artistWithFollowers = await Promise.all(artists)

  return NextResponse.json(artistWithFollowers)
}
