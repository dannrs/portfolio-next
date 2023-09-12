import { SpotifyCard } from '@/components/spotify-card'

export const metadata = {
  title: 'Spotify'
}

export default function SpotifyPage() {
  return (
    <div className='container flex flex-col justify-start space-y-8 py-16 md:max-w-5xl'>
      <SpotifyCard />
    </div>
  )
}
