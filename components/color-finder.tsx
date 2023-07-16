import { ReactNode, useEffect, useState } from 'react'
import ColorThief from 'colorthief'
import { rgbToHex } from '@/lib/utils'

interface ColorFinderProps {
  imageUrl: string
  children: (dominantColor: string | null) => ReactNode
}

export function ColorFinder({
  imageUrl,
  children
}: ColorFinderProps): JSX.Element {
  const [dominantColor, setDominantColor] = useState<string | null>('#01010F')

  useEffect(() => {
    const img = new Image()
    img.src = imageUrl
    img.crossOrigin = 'Anonymous'

    img.onload = () => {
      const colorThief = new ColorThief()
      const color = colorThief.getColor(img)

      const hexColor = rgbToHex(color[0], color[1], color[2])
      setDominantColor(hexColor)
    }

    img.onerror = () => {
      return
    }
  }, [imageUrl])

  return <>{dominantColor && children(dominantColor)}</>
}
