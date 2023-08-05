import Image from 'next/image'
import Link from 'next/link'
import { SpotifyArtist } from '@/types'

export function Artist({ name, url, artistImageUrl, genres }: SpotifyArtist) {
  return (
    <Link
      href={url}
      target='_blank'
      rel='noreferrer'
      className='flex gap-2 border-t border-x px-2 py-2 last:border-b hover:bg-accent/30 transform ease-in duration-150'
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
