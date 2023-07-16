import Image from 'next/image'
import Link from 'next/link'
import { Song } from '@/types'
import { SiSpotify } from 'react-icons/si'
import { Tooltip } from 'react-tooltip'
import { ColorFinder } from '@/components/color-finder'
import { cn } from '@/lib/utils'

export function SpotifyComponent({ song }: { song: Song }) {
  if (!song) {
    return null
  }

  const title =
    song.title.length > 16 ? song.title.substring(0, 16) + '...' : song.title

  const artist =
    song.artist.length > 16 ? song.artist.substring(0, 16) + '...' : song.artist

  return (
    <>
      <Link
        className="spotify-link relative z-10 ml-2 mt-4 md:mt-0"
        href={song.songUrl}
        rel="noreferrer"
        target="_blank"
      >
        <SiSpotify className={cn('relative', song.isPlaying ? 'text-[#1DB954]' : 'text-foreground')} size={18} />
      </Link>
      <ColorFinder imageUrl={song.albumImageUrl}>
        {(dominantColor: string | null) => (
          <Tooltip
            anchorSelect=".spotify-link"
            place='top-end'
            style={{
              padding: 4,
              backgroundColor: dominantColor || '#01010F'
            }}
            opacity={1}
            classNameArrow='mr-10'
          >
            <div className="relative w-52 overflow-hidden">
              <div className="flex h-full w-full items-center">
                <Image
                  className="relative"
                  src={song.albumImageUrl}
                  alt={song.title}
                  width={42}
                  height={42}
                />
                <div className="flex w-full flex-col items-center justify-center">
                  <p className="text-xs font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {title}
                  </p>
                  <p className="text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {artist}
                  </p>
                </div>
              </div>
            </div>
          </Tooltip>
        )}
      </ColorFinder>
    </>
  )
}
