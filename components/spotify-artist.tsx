import Image from 'next/image'
import Link from 'next/link'
import { SpotifyArtist } from '@/lib/types'

export function Artist({ name, url, artistImageUrl, genres }: SpotifyArtist) {
  return (
    <Link
      href={url}
      target='_blank'
      rel='noreferrer'
      className='flex transform gap-2 border-x border-t px-2 py-2 duration-150 ease-in last:border-b hover:bg-accent/30'
    >
      <div>
        <Image src={artistImageUrl} width={64} height={64} alt={name} />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <div className='font-semibold'>{name}</div>
        <div>{genres}</div>
      </div>
    </Link>
  )
}
