import Image from 'next/image'
import Link from 'next/link'
import { SpotifyTrack } from '@/lib/types'
import { cn } from '@/lib/utils'

export function Track({ title, artist, url, trackImageUrl }: SpotifyTrack) {
  return (
    <Link
      href={url}
      target='_blank'
      rel='noreferrer'
      className='flex transform gap-2 border-x border-t px-2 py-2 duration-150 ease-in last:border-b hover:bg-accent/30'
    >
      <div>
        <Image src={trackImageUrl} width={64} height={64} alt={title} />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <div
          className={cn(
            'whitespace-nowrap font-semibold',
            title.length > 35
              ? 'text-xs'
              : title.length > 25
              ? 'text-sm'
              : 'text-base'
          )}
        >
          {title}
        </div>
        <div
          className={cn(
            'text-foreground-80',
            artist.length > 35 ? 'text-xs' : 'text-sm'
          )}
        >
          {artist}
        </div>
      </div>
    </Link>
  )
}
