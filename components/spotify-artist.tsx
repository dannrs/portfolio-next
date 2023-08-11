import Image from 'next/image'
import Link from 'next/link'
import { SpotifyArtist } from '@/lib/types'
import { formatNumber } from '@/lib/utils'

export function Artist({ name, url, artistImageUrl, followers}: SpotifyArtist) {
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
        <div className='text-sm text-foreground-80'>Followers: {formatNumber(followers)}</div>
      </div>
    </Link>
  )
}
