import Image from 'next/image'
import Link from 'next/link'
import { Song } from '@/lib/types'
import { SiSpotify } from 'react-icons/si'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export function SpotifyComponent({ song }: { song: Song }) {
  if (!song) {
    return null
  }

  const truncateSong = 'min-w-[8rem] max-w-[12rem] truncate text-sm'

  return (
    <div className='relative flex min-w-[15rem] max-w-[20rem] flex-col items-center rounded-sm bg-accent p-1 text-foreground'>
      <div className='flex h-full w-full items-center'>
        <Image
          className='relative'
          src={song.albumImageUrl}
          alt={song.title}
          width={48}
          height={48}
        />
        <div className='mx-4'>
          <p className={cn('font-semibold', truncateSong)}>{song.title}</p>
          <p className={cn(truncateSong)}>{song.artist}</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href={song.songUrl} rel='noreferrer' target='_blank'>
                <SiSpotify
                  className={cn(
                    'relative ml-1 mr-3',
                    song.isPlaying ? 'text-[#1DB954]' : 'text-foreground'
                  )}
                  size={18}
                />
                <span className='sr-only'>Open song on Spotify</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              {song.isPlaying ? (
                <p>Currently playing</p>
              ) : (
                <p>Recently played</p>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
